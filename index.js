'use strict';

const getRepos = require('./lib/getRepos');
const parseReposToMd = require('./lib/parseReposToMd');
const saveToFile = require('./lib/saveToFile');

let username = 'frenchbread';
let path = __dirname + '/repos.md';

getRepos(username, (err, repos) => {

  let heading = `# Repos by @${username}\nAuto-generated list of repositories using [repos2md](https://github.com/frenchbread/repos2md).\n\n`;

  let body = parseReposToMd(repos);

  let footer = `> <> with <3`;

  saveToFile(path, heading+body+footer, (err) => {

    if (err) console.log(err);

    console.log('File saved!');
  });
});
