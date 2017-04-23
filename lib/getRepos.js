'use strict';

const GitHubApi = require('github');
const config = require('../config')

const github = new GitHubApi({
  version: '3.0.0'
});

if (config.token) {
  github.authenticate({
      type: 'oauth',
      token: config.token
  });
}

module.exports = (username, callback) => {

  // github.repos.getAll({
  //   user: username,
  //   per_page: 100,
  //   type: 'owner',
  //   sort: 'created'
  // }, (err, repos) => {
  //   if (err) callback(new Error('GitHub Error: ' + err));
  //   callback(null, repos);
  // })

  github.repos.getFromUser({
    user: username,
    sort: 'created',
    type: 'all',
    per_page: 100
  }, (err, repos) => {

    if (err) callback(new Error('GitHub Error: ' + err));

    callback(null, repos);

  });


  // github.activity.getStarredRepos({
  //   per_page: 600
  // }, (err, repos) => {
  //   if (err) callback(new Error('GitHub Error: ' + err)
  //
  //   callback(null, repos)
  // });

}
