#!/usr/bin/env node
const pj = require('./package.json')
import * as cli from 'commander';

cli.version(pj.version);

cli.parse(process.argv);
