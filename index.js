'use strict';

const getRepos = require('./lib/getRepos');
const parseReposToMd = require('./lib/parseReposToMd');
const saveToFile = require('./lib/saveToFile');

module.exports = (username, path) => {

  getRepos(username, (err, repos) => {

    let heading = `# Repos by @${username}\nAuto-generated list of repositories using [repos2md](https://github.com/frenchbread/repos2md).\n\n`;

    let body = parseReposToMd(repos);

    let footer = `> <> with <3`;

    saveToFile(path, heading+body+footer, (err, path) => {

      if (err) console.log(err);

      console.log(`File saved to ${path}`);
    });
  });
};
