import l from 'chalk-log'

import axe from './axe'

export default {
  getUserRepos ({ username, token, page }) {
    let params = {}
    let url = ''

    if (token) {
      url = `/user/repos`
      url += '?per_page=100'
      url += `&page=${page}`
      url += '&sort=updated'
      url += '&affiliation=owner'

      params = { auth: { username, password: token } }
    } else {
      url = `/users/${username}/repos`
      url += '?per_page=100'
      url += `&page=${page}`
      url += '&sort=updated'
    }

    return axe.get(url, params)
      .then(res => {
        return res.data
      })
      .catch(err => l.error(err))
  },
  getStarredRepos ({ username, page }) {
    let url = `/users/${username}/starred`
    url += '?per_page=100'
    url += `&page=${page}`
    return axe.get(url)
      .then(res => res.data)
      .catch(err => l.error(err))
  }
}
