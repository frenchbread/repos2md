repos2md [![npm version](https://badge.fury.io/js/repos2md.svg)](https://badge.fury.io/js/repos2md)
--

> Export GutHub user repos list to a markdown file.

[![NPM](https://nodei.co/npm/repos2md.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/repos2md/)

[![NPM](https://nodei.co/npm-dl/repos2md.png)](https://nodei.co/npm/repos2md/)

## install

```bash
# globally

❯ npm i repos2md --global

# or in project

❯ npm i repos2md --save
```

## usage

### `cli`

```bash
❯ repos2md --help

  Export repos list to a markdown file.

  repos2md v2.0.1

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
    $ repos2md --token <your_gh_token> --starred
```

### `nodejs`

```js
const repos2md from 'repos2md'


repos2md('github')
  .then(saved_to => console.log(`Repos saved to "${saved_to}"`))
```

## api

### repos2md(github_username, options?)

Returns `<path>` to where file has been saved.

#### options

type: `object`

- **starred**

  type: `boolean`

  Fetch user's starred repos.

- **save_to**

  type: `string`

  Custom path to where write file to. Can be both relative & absolute.

- **token**

  type: `string`

  GitHub [token](https://github.com/settings/tokens), used to include private repos and extend rate-limits.

- **exclude_repos_count**

  type: `boolean`

  Exclude repos count from target doc.

### **note!**

> For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.
>
> [Source](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting)


### todos
- [x] Change input username/path approach
- [x] Write & add tests
- [x] Handle paths containing `~`

> Contributions are welcome!

### author

- Damir Mustafin [@frenchbread](https://github.com/frenchbread)

### license

[MIT](https://github.com/frenchbread/repos2md/blob/master/LICENSE)
