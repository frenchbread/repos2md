import { homedir } from 'node:os'
import test from 'ava'
import { pathExists, remove } from 'fs-extra'

import repos2md from '../index.js'
import path from '../lib/tools/path.js'

test('should write data to file', async t => {
  const final_path = path.get_final_path(homedir())

  const saved_to = await repos2md('frenchbread', { save_to: final_path })

  const exists = await pathExists(saved_to)

  if (exists) await remove(final_path)

  t.true(exists)
})
