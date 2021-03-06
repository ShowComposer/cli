# @ShowComposer/cli
[![Travis](https://img.shields.io/travis/com/ShowComposer/cli.svg)](https://travis-ci.com/ShowComposer/cli)
[![GitHub release](https://img.shields.io/github/release/ShowComposer/cli.svg)](https://github.com/ShowComposer/cli)
[![npm](https://img.shields.io/npm/v/@showcomposer/cli.svg)](https://www.npmjs.com/package/@showcomposer/cli)
[![GitHub issues](https://img.shields.io/github/issues/ShowComposer/cli.svg)](https://github.com/ShowComposer/cli/issues)
[![GitHub stars](https://img.shields.io/github/stars/ShowComposer/cli.svg)](https://github.com/ShowComposer/cli/stargazers)
[![GitHub license](https://img.shields.io/github/license/ShowComposer/cli.svg)](https://github.com/ShowComposer/cli/blob/master/LICENSE)
[![Github All Releases](https://img.shields.io/github/downloads/ShowComposer/cli/total.svg)](https://github.com/ShowComposer/cli)
[![npm](https://img.shields.io/npm/dt/@showcomposer/cli.svg)](https://github.com/ShowComposer/cli)

## Installation

```javascript
npm install -g @showcomposer/cli
```

## Requirements

Requires running Broker, e.g. via <https://github.com/ShowComposer/manager>

## Usage

```bash
Usage: sc [options] [command]

Options:
  -v, --version             output the version number
  -h, --help                output usage information

Commands:
  tail [key]                streams all state changes and ticks
  set [key] [value] [type]  sets key to value
  dump [key]                displays all values under the key
```

