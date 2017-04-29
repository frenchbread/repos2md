import l from 'chalk-log'

import axe from './axe'

export default {
  getUserRepos ({ username, token, page }) {
    let params = {}
    let url = ''

    if (token) {
      url = `/user/repos?`
      url += 'affiliation=owner&'

      params = getAuthParams(username, token)
    } else {
      url = `/users/${username}/repos?`
    }

    url += 'per_page=100&'
    url += 'sort=updated&'
    url += `page=${page}`

    return axe.get(url, params)
      .then(res => {
        return res.data
      })
      .catch(err => l.error(err))
  },
  getStarredRepos ({ username, token, page }) {
    let params = {}
    let url = ''

    if (token) {
      url = `/user/starred?`

      params = getAuthParams(username, token)
    } else {
      url = `/users/${username}/starred?`
    }

    url += 'per_page=100&'
    url += `page=${page}`

    return axe.get(url, params)
      .then(res => res.data)
      .catch(err => l.error(err))
  }
}

const getAuthParams = (username, password) => {
  return { auth: { username, password } }
}
