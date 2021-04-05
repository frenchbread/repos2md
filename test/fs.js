const test = require('ava')
const fse = require('fs-extra')

const repos2md = require('../')
const path = require('../lib/tools/path')

test('should write data to file', async t => {
  const final_path = path.get_final_path(require('os').homedir())

  const saved_to = await repos2md('frenchbread', { save_to: final_path })

  const exists = await fse.pathExists(saved_to)

  if (exists) await fse.remove(final_path)

  t.true(exists)
})
