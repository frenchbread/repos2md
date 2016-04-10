'use strict';

const GitHubApi = require('github');

const github = new GitHubApi({
  version: '3.0.0'
});

module.exports = (username, callback) => {

  github.repos.getFromUser({
    user: username,
    sort: 'created',
    type: 'all',
    per_page: 100
  }, (err, repos) => {

    if (err) callback(new Error('GitHub Error: ' + err));

    callback(null, repos);

  });
}
