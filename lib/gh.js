import axios from 'axios'
import log from './tools/log.js'

const axe = axios.create({ baseURL: 'https://api.github.com', headers: { accept: 'application/vnd.github+json' } })
const get_auth_params = (username, password) => ({ auth: { username, password } })

export default {
  get_user_repos ({ username, token, page, spinner }) {
    let params = {}
    let url = ''

    if (token) {
      url = '/user/repos?'

      params = get_auth_params(username, token)
    } else {
      url = `/users/${username}/repos?`
    }

    url += 'type=all&'
    url += 'per_page=100&'
    url += 'sort=updated&'
    url += `page=${page}`

    return axe.get(url, params)
      .then(({ data }) => data)
      .catch(err => spinner ? spinner.fail(err.message) : log.err(err.message))
  },
  get_starred_repos ({ username, token, page, spinner }) {
    let params = {}
    let url = ''

    if (token) {
      url = 'user/starred?'

      params = get_auth_params(username, token)
    } else {
      url = `/users/${username}/starred?`
    }

    url += 'per_page=100&'
    url += `page=${page}`

    return axe.get(url, params)
      .then(({ data }) => data)
      .catch(err => spinner ? spinner.fail(err.message) : log.err(err.message))
  },
  async get_repos (username, { starred, token, spinner } = {}) {
    if (!username && !token) throw new Error('username or token is required')

    let get_repos = async () => {}
    let repos = []
    let stop = false
    let page = 1

    if (starred) get_repos = this.get_starred_repos
    else get_repos = this.get_user_repos

    while (!stop) {
      const repos_per_page = await get_repos({ username, token, page, spinner })

      if (!repos_per_page) break

      if (repos_per_page.length === 0) stop = true
      else {
        repos = repos.concat(repos_per_page)

        const tired_string = repos.length >= 500
          ? repos.length >= 1000
            ? repos.length >= 2000
              ? '(ok, I\'m done...) '
              : '(you gotta be kidding me) '
            : '(really? that much?...) '
          : ''

        if (spinner) spinner.text = `Got ${repos.length} ${tired_string}of ${starred ? 'starred': 'user'} repos...`
      }

      page ++
    }

    return repos
  }
}
