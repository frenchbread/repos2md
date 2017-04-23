'use strict';

const _ = require('underscore');
const moment = require('moment');

module.exports = (repos) => {

  const total = repos.length
  const privCount = _.filter(repos, r => r.private).length
  const forks = _.filter(repos, r => r.fork).length

  let reposInMd = `Total \`${total}\` Private \`${privCount}\` Forks \`${forks}\`\n\n`;
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
    console.log(repo);
    const name = repo.name
    const url = repo.html_url
    const desc = (repo.description) ? repo.description : ''
    const fork = (repo.fork) ? '\`fork\`' : ''
    const priv = (repo.private) ? '\`private\`' : ''
    const stars = (repo.stargazers_count > 0) ? `\`${repo.stargazers_count} stars\`` : ''

    reposInMd += `- [\`${name}\`](${url}) ${priv} ${fork} ${stars} ${desc} \n\n`;
  });

  return reposInMd;
};
