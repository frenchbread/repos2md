import ora from 'ora'

import getRepos from './funcs/getRepos'
import parse2md from './funcs/parse2md'
import save2file from './funcs/save2file'

const spinner = ora({
  text: 'Fetching data for you..',
  color: 'magenta'
})

export default ({ username, path, type, token }) => {
  spinner.start()
  // Ret repos
  getRepos({ username, type, token, spinner })
    .then(repos => {
      const text2save = [
        // Heading
        `# Repos ${type} by @${username}\n\n`,
        // Details
        `> Auto-generated list of repositories using [repos2md](https://github.com/frenchbread/repos2md).\n\n`,
        // Body
        parse2md(repos),
        // Footer
        `> <> with <3`
      ].join('')

      // Save to file
      save2file({ path, text2save })
        .then(res => spinner.succeed(`File saved to ${path}`))
        .catch(err => spinner.fail(err.message))
    })
}
