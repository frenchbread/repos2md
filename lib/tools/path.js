import { homedir } from 'node:os'
import { join, extname, resolve } from 'node:path'
import expand_homedir from 'expand-home-dir'

export default {
  get_final_path (save_to) {
    const _path = this.path_resolve(save_to)
    const ext = extname(_path)

    if (ext === '.md') return _path
    else return join(_path, 'repos.md')
  },
  get_default_path () {
    const home_dir = homedir()

    return join(home_dir, 'Desktop')
  },
  path_resolve: _path => _path.includes('~') ? expand_homedir(_path) : resolve(_path),
}
