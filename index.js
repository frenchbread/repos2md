'use strict';

const fs = require('fs');

const GitHubApi = require('github');

const _ = require('lodash');
const moment = require('moment');

const github = new GitHubApi({
  version: '3.0.0'
});

github.repos.getFromUser({
  user: 'frenchbread',
  sort: 'created',
  type: 'all',
  per_page: 100
}, (err, data) => {

  if (err) console.log(err);

  let file = '';
  let repos = '';

  _.each(data, (item) => {
    let timestamp = moment(item.created_at).format('DD MMM YYYY');
    repos += `### ${item.name} - **${timestamp}** \n${item.description} \n\n`;
  });

  file = `# Repos\n\n${repos}\n---\n<> by DM`;

  fs.writeFile(`${__dirname}/repos.md`, file, (err) => {

    if (err) console.log(err);

    console.log('file saved!');

  });

});
