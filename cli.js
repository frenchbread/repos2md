#!/usr/bin/env node
'use strict';

const meow = require('meow');
const repos2md = require('./index');

const cli = meow(`
  Usage
    $ repos2md --username=<username>
    $ repos2md --username=<username> --path=<path>

  Options
    --username  GitHub username (required)
    --path      Absolute path for .md document to be saved to

  Examples
    $ repos2md --username=frenchbread
    $ repos2md --username=frenchbread --path=/Users/frenchbread/Desktop
`);

if (cli.flags.username) {
  let username = cli.flags.username;
  let path = (cli.flags.path) ? cli.flags.path : __dirname;
  path += `/repos-${username}.md`;
  repos2md(username, path);
} else {
  console.log('Username was not provided!\nUse --help for reference.');
  process.exit(1);
}
