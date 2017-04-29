# repos2md [![npm version](https://badge.fury.io/js/repos2md.svg)](https://badge.fury.io/js/repos2md)

> Export GutHub repos list to a markdown file.

### Install

```bash
$ npm i repos2md -g
# or
$ yarn global add repos2md
```

### Usage

```
$ repos2md --help

  Usage
    $ repos2md --username <username>
    $ repos2md --username <username> --path <path>

  Options
    --username  (required)  GitHub username
    --path      (required)  Absolute path for .md document to be saved to
    --type      (optional)  Get 'user' repos or 'starred' repos
    --token     (optional)  Your GitHub token (if you want to include private repos)

  Examples
    $ repos2md --username frenchbread
    $ repos2md --username frenchbread --path /Users/frenchbread/Desktop
    $ repos2md --username frenchbread --type starred
```

### API

```javascript
import repos2md from 'repos2md'


repos2md({
  username: '<your_github_username>',   // required
  path:     '<path_to_save_to>',        // optional
  type:     '<type>',                   // optional - 'user' or 'starred' ('user' is default)
  token:    '<your_git_token>'          // optional (used to fetch private repos)
})
```

### TODO
- [x] Change input username/path approach
- [ ] Write & add tests

> Contributions are welcome!

### Author

- Damir Mustafin [@frenchbread](https://github.com/frenchbread)

### License

[MIT](https://github.com/frenchbread/repos2md/blob/master/LICENSE)
