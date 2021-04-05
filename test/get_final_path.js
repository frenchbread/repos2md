const test = require('ava')
const path = require('path')

const _path = require('../lib/tools/path')

test('should return filepath with .md extension', t => {
  const file_path = '/some/path/to/file'

  t.is(_path.get_final_path(file_path), path.join(file_path, 'repos.md'))
})

test('should return same filepath as passed', t => {
  const file_path = '/some/path/to/file.md'

  t.is(_path.get_final_path(file_path), file_path)
})

test('should return correct file extension', t => {
  const file_path = '/some/path/to/file.txt'

  t.is(_path.get_final_path(file_path), path.join(file_path, 'repos.md'))
})

test('should work fine with default value', t => {
  const file_path = __dirname

  t.is(_path.get_final_path(file_path), path.join(file_path, 'repos.md'))
})

test('should work fine', t => {
  const file_path = path.join(__dirname, '.md')

  t.is(_path.get_final_path(file_path), path.join(file_path, 'repos.md'))
})
