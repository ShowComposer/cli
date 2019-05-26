#!/usr/bin/env node
import { Datalib } from "@showcomposer/datalib";

const data = new Datalib();
import get = require("get-value");

import chalk from "chalk";
import * as cli from "commander";
// tslint:disable-next-line
const pj = require("../package.json");

// Version output
cli.version(pj.version, "-v, --version");

// Connection information
// cli.option("-H, --host", "Host where sc-broker is running, defaults to localhost");

// Tail
cli.command("tail [key]").description("streams all state changes and ticks")
  .usage("[key], key is system if undefined").action((key, cmd) => {
    if (!key) {
      key = "system";
    }
    const dEvent = data.subscribe(key);
    // Subscribe to changes
    dEvent.on("data", (k) => {
      console.log(chalk.green(k) + chalk.grey("=") + chalk.bold(get(data.data, k)));
    });
  });

// Set
cli.command("set [key] [value] [type]").description("sets key to value")
  .usage("[key]=[value], optional [type] (defaults to LIVE)").action((key, value = true, type = "LIVE", cmd) => {
    if (!key) {
      console.log(chalk.red("Invalid KEY!"));
      return;
    }
    data.set(key, value, type, (m) => {
      if (m[2] === "0") {
        console.log("SET " + chalk.green(key) + chalk.grey("=") + chalk.bold(get(data.data, key)));
        data.end();
      } else {
        console.log("Unspecified error");
        process.exit(1);
      }

    });
  });
// DUMP
cli.command("dump [key]").description("displays all values under the key")
  .usage("[key]").action((key, cmd) => {
    if (!key) {
      console.log(chalk.red("Invalid KEY!"));
      return;
    }
    data.dump(key, (m) => {
      console.log(m);
      data.end();
    });
  });
cli.parse(process.argv);

// Display help on empty command
const NO_COMMAND_SPECIFIED = cli.args.length === 0;

if (NO_COMMAND_SPECIFIED) {
  cli.help();
}
