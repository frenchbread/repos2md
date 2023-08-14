import test from 'ava'

import gh from '../lib/gh.js'

test('should contain at least one repo with readable owner', async t => {
  const repos = await gh.get_repos('octocat')

  t.is(repos[0].owner.login, 'octocat')
})

test('should return error if username is not provided', async t => {
  const error = await t.throwsAsync(async () => {
    await gh.get_repos()
  }, { instanceOf: Error })

  t.is(error.message, 'username or token is required')
})
