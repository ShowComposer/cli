#!/usr/bin/env node

const pj = require("../package.json");
import * as cli from "commander";

// Version output
cli.version(pj.version, "-v, --version");

// Connection information
cli.option("-H, --host", "Host where sc-broker is running, defaults to localhost");

// Tail
cli.command("tail [key]").description("streams all state changes and ticks").usage("[key], key is root if undefined").action((key, cmd) => {
    console.log("Observing " + key);
  });

cli.parse(process.argv);
