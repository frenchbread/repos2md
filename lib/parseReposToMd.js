'use strict';

const _ = require('underscore');
const moment = require('moment');

module.exports = (repos) => {

  let reposInMd = ``;
  let years = [];
  let months = []

  _.each(repos, (repo) => {

    let year = moment(repo.created_at).year();
    let month = moment(repo.created_at).month();
    let monthText = moment(repo.created_at).format('MMM');

    if (!_.contains(years, year)) {
      reposInMd += `### ${year}\n`;
      years.push(year);
      months = [];
    }

    if (!_.contains(months, month)) {
      reposInMd += `##### ${monthText}\n`;
      months.push(month);
    }

    reposInMd += `- [\`${repo.name}\`](${repo.html_url}) ${repo.description}\n\n`;
  });

  return reposInMd;
};
