#!/usr/bin/env node
'use strict'

const l = require('chalk-log')
const meow = require('meow')

const pckg = require('./package.json')
const repos2md = require('./')

const cli = meow(`

  ${pckg.name} v${pckg.version}

  Usage
    $ repos2md --username <username>
    $ repos2md --username <username> --path <path>

  Options
    --username  GitHub username (required)
    --path      Absolute path for .md document to be saved to
    --type      Get 'user' repos or 'starred' repos
    --token     Your GitHub token (if you want to inclide private repos)

  Examples
    $ repos2md --username frenchbread
    $ repos2md --username frenchbread --path /Users/frenchbread/Desktop
    $ repos2md --username frenchbread --type starred
`)

if (cli.flags.username) {
  const username = cli.flags.username
  let path = (cli.flags.path) ? cli.flags.path : __dirname
  const type = (cli.flags.type) ? cli.flags.type : 'user'
  const token = (cli.flags.token) ? cli.flags.token : ''

  path += `/${type}_repos_by_${username}.md`

  repos2md({ username, path, type, token })
} else {
  l.error('Username was not provided!\nUse --help for reference.')
  process.exit(1)
}
