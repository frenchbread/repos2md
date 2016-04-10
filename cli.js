#!/usr/bin/env node
'use strict';

const meow = require('meow');
const repos2md = require('./index');

const cli = meow(`
  Usage
    $ repos2md <username>
    $ repos2md <username> --path=<path>

  Options
    --path    Absolute path for .md document to be saved to

  Examples
    $ repos2md frenchbread
    $ repos2md frenchbread --path=/Users/frenchbread/Desktop
`);

const input = cli.input;

if (input.length === 0 && process.stdin.isTTY) {
	console.error('Input required');
	process.exit(1);
}

if (input.length) {
  let username = input[0];
  let path = (cli.flags.path) ? cli.flags.path : __dirname;
  path += `/repos-${username}.md`;
  repos2md(username, path);
}
