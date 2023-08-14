import { join } from 'node:path'
import { URL } from 'node:url'
import test from 'ava'

import path from '../lib/tools/path.js'

const __dirname = new URL('.', import.meta.url).pathname

test('should return filepath with .md extension', t => {
  const file_path = '/some/path/to/file'

  t.is(path.get_final_path(file_path), join(file_path, 'repos.md'))
})

test('should return same filepath as passed', t => {
  const file_path = '/some/path/to/file.md'

  t.is(path.get_final_path(file_path), file_path)
})

test('should return correct file extension', t => {
  const file_path = '/some/path/to/file.txt'

  t.is(path.get_final_path(file_path), join(file_path, 'repos.md'))
})

test('should work fine with default value', t => {
  const file_path = __dirname

  t.is(path.get_final_path(file_path), join(file_path, 'repos.md'))
})

test('should work fine', t => {
  const file_path = path.join(__dirname, '.md')

  t.is(path.get_final_path(file_path), join(file_path, 'repos.md'))
})
