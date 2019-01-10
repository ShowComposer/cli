#!/usr/bin/env node

import * as cli from "commander";
// tslint:disable-next-line
const pj = require("../package.json");

// Version output
cli.version(pj.version, "-v, --version");

// Connection information
cli.option("-H, --host", "Host where sc-broker is running, defaults to localhost");

// Tail
cli.command("tail [key]").description("streams all state changes and ticks")
.usage("[key], key is root if undefined").action((key, cmd) => {
    // ToDo: Better output
    // tslint:disable-next-line no-console
    console.log("Observing " + key);
  });

cli.parse(process.argv);
