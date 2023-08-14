import chalk from 'chalk'

export default {
  ok: msg => console.log(chalk.green(`- [ok] ${msg}`)),
  err: msg => console.log(chalk.red(`- [err] ${msg}`)),
  info: msg => console.log(chalk.blue(`- [info] ${msg}`)),
  debug: msg => console.log(chalk.debug(`- [info] ${msg}`))
}
