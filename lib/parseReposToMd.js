'use strict';

const _ = require('underscore');
const moment = require('moment');

module.exports = (repos) => {

  let reposInMd = ``;
  let years = [];

  _.each(repos, (repo) => {

    let year = moment(repo.created_at).year();

    if (!_.contains(years, year)) {
      reposInMd += `### ${year}\n`;
      years.push(year);
    }

    reposInMd += `- [\`${repo.name}\`](repo.url) ${repo.description}\n\n`;
  });

  return reposInMd;
};
