module.exports = (repos) => {
  let reposInMd = `Listing \`${repos.length}\` repos: \n\n`

  repos.forEach(repo => {
    const name = repo.name
    const url = repo.html_url
    const desc = (repo.description) ? repo.description : ''

    reposInMd += ` - [${name}](${url}) - ${desc} \n\n`
  })

  return reposInMd
}
