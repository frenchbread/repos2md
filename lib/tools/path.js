const os = require('os')
const path = require('path')

const expand_homedir = require('expand-home-dir')

module.exports = {
  get_final_path (save_to) {
    const _path = this.path_resolve(save_to)
    const ext = path.extname(_path)

    if (ext === '.md') return _path
    else return path.join(_path, 'repos.md')
  },
  get_default_path () {
    const home_dir = os.homedir()

    return path.join(home_dir, 'Desktop')
  },
  path_resolve: _path => _path.includes('~') ? expand_homedir(_path) : path.resolve(_path),
}
