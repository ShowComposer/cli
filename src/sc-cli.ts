#!/usr/bin/env node

const pj = require('../package.json')
import * as cli from 'commander';

cli.version(pj.version, '-v, --version');

cli.parse(process.argv);
