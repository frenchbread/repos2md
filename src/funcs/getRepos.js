import l from 'chalk-log'

import github from '../api/github'

export default async ({ username, type, token, spinner }) => {
  if (type === 'user') {
    let repos = []
    let stop = false
    let page = 1

    while (!stop) {
      const reposPerPage = await github.getUserRepos({ username, token, page })
        .then(r => r)
        .catch(err => l.error(err))

      if (reposPerPage.length === 0) stop = true
      else {
        repos = repos.concat(reposPerPage)

        spinner.text = `Got ${repos.length} ${type} repos so far..`
      }

      page++
    }

    return repos
  } else if (type === 'starred') {
    let repos = []
    let stop = false
    let page = 1

    while (!stop) {
      const reposPerPage = await github.getStarredRepos({ username, token, page })
        .then(r => r)
        .catch(err => l.error(err))

      if (reposPerPage.length === 0) stop = true
      else {
        repos = repos.concat(reposPerPage)

        spinner.text = `Got ${repos.length} ${type} repos so far..`
      }

      page++
    }

    return repos
  }
}
