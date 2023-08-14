#!/usr/bin/env node
'use strict'

import meow from 'meow'
import { createRequire } from 'module'

const pckg = createRequire(import.meta.url)('./package.json')
import repos2md from './index.js'

const cli = meow(`

  ${pckg.name} v${pckg.version}

  Usage
    $ repos2md <username>
    $ repos2md <username> --save-to <path> --exclude-repos-count
    $ repos2md --token <token>

  Options
    --starred                 optional (default is user repos)        If provided, user's starred repos will be fetched
    --save-to                 optional (defaults to project root)     Absolute path to the target file (.md document) to write to
    --token                   optional (includes private repos)       Your GitHub token (Will return only authenticated user's public & private repos)
    --exclude-repos-count     optional                                Exclude repos count from heading in target file

  Examples
    $ repos2md octocat
    $ repos2md octocat --starred --save-to /Users/frenchbread/Desktop --exclude-repos-count
    $ repos2md --token <your_gh_token>
`)

if (cli.input.length || cli.flags.token) {
  const username = cli.input[0]
  const { starred, saveTo, token, excludeReposCount } = cli.flags

  repos2md(username, { starred, save_to: saveTo, token, exclude_repos_count: excludeReposCount, show_spinner: true })
} else {
  console.log(cli.help)

  process.exit(1)
}
