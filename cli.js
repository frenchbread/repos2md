#!/usr/bin/env node
'use strict'

const meow = require('meow')

const pckg = require('./package.json')
const repos2md = require('./')

const cli = meow(`

  ${pckg.name} v${pckg.version}

  Usage
    $ repos2md <username>
    $ repos2md <username> --save-to <path> --token <token> --exclude-repos-count

  Options
    --starred                 optional (default is user repos)        If provided, user's starred repos will be fetched
    --save-to                 optional (defaults to project root)     Absolute path to the target file (.md document) to write to
    --token                   optional (includes private repos)       Your GitHub token (if you want to inclide private repos)
    --exclude-repos-count     optional                                Exclude repos count from heading in target file

  Examples
    $ repos2md frenchbread
    $ repos2md frenchbread --starred --save-to /Users/frenchbread/Desktop --exclude-repos-count
`)

if (cli.input.length > 0 && cli.input[0] !== '') {
  const username = cli.input[0]
  const { starred, saveTo, token, excludeReposCount } = cli.flags

  repos2md(username, { starred, save_to: saveTo, token, exclude_repos_count: excludeReposCount, show_spinner: true })
} else {
  console.log(cli.help)

  process.exit(1)
}
