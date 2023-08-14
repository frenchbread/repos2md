export default ({ username, starred, repos, exclude_repos_count }) => {
  const str_arr = []
  const repos_count = exclude_repos_count ? '' : `\`${repos.length}\` `
  const username_str = `[@${username}](https://github.com/${username})'s `

  if (starred) str_arr.push(`# ${username_str}${repos_count} ⭐ repos\n\n`)
  else str_arr.push(`# ${username_str}${repos_count}repos\n\n`)

  repos.forEach(repo => {
    const fork = repo.fork ? ' `fork` ' : ' '
    const priv = repo.private ? '🔒 ' : ' '
    const stargazers = repo.stargazers_count > 0 ? ` ⭐ ${repo.stargazers_count} ` : ''
    const repo_name = !starred ? repo.name : repo.full_name

    str_arr.push(`### ${priv}[${repo_name}](${repo.html_url})${stargazers}${fork}\n\n${repo.description ? `> ${repo.description}` : ''}\n\n`)
  })

  return str_arr.join('')
}
