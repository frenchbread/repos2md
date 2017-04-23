import l from 'chalk-log'

import axe from './axe'

export default {
  getUserRepos ({ username, token, page }) {
    const params = (token) ? { auth: { username, password: token } } : {}

    if (token) {
      let url = `/user/repos`
      url += '?per_page=100'
      url += '&sort=updated'
      url += '&affiliation=owner'
      return axe.get(url, params)
        .then(res => res.data)
        .catch(err => l.error(err))
    } else {
      let url = `/users/${username}/repos`
      url += '?per_page=100'
      url += '&sort=updated'
      return axe.get(url)
        .then(res => res.data)
        .catch(err => l.error(err))
    }
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
