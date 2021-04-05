const ora = require('ora')
const fse = require('fs-extra')

const gh = require('./gh')
const repos2md = require('./repos2md')
const path = require('./tools/path')

module.exports = async (username, { starred = false, save_to = path.get_default_path(), token = null, exclude_repos_count = false, show_spinner = false } = {}) => {
  let spinner = null
  if (show_spinner) spinner = ora({ text: 'fetching data, hold on...', color: 'yellow' }).start()

  return gh.get_repos(username, { starred, token, spinner })
    .then(async repos => {
      const md_str = repos2md({ username, starred, repos, exclude_repos_count })
      const final_path = path.get_final_path(save_to)

      await fse.outputFile(final_path, md_str)

      if (show_spinner) spinner.succeed(`Into about ${repos.length} repos ${repos.length >= 500 ? '(finally) ' : ''}saved to ${final_path}`)

      return final_path
    })
    .catch(err => err)
}
