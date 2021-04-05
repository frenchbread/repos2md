const test = require('ava')

const gh = require('../lib/gh')

test('should contain at least one repo with readable owner', async t => {
  const repos = await gh.get_repos('true')

  t.is(repos[0].owner.login, 'true')
})

test('should return error if username is not provided', async t => {
  const error = await t.throwsAsync(async () => {
    await gh.get_repos()
  }, { instanceOf: Error })

  t.is(error.message, 'username can\'t be empty')
})
