# repos2md [![npm version](https://badge.fury.io/js/repos2md.svg)](https://badge.fury.io/js/repos2md)

Export GutHub repos list to markdown file.

### Install

```
$ npm i repos2md -g
```

### Usage

```
$ repos2md --help

  Usage
    $ repos2md --username=<username>
    $ repos2md --username=<username> --path=<path>

  Options
    --username  GitHub username (required)
    --path      Absolute path for .md document to be saved to

  Examples
    $ repos2md --username=frenchbread
    $ repos2md --username=frenchbread --path=/Users/frenchbread/Desktop
```

### API

```javascript
const repos2md = require('repos2md');

let username = 'some_username';
let path = __dirname + '/some_path'

repos2md(username, path);
```

### TODO
- Change input username/path approach

### License

[MIT](https://github.com/frenchbread/repos2md/blob/master/LICENSE)
