import fs from 'fs'

export default ({ path, text2save }) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, text2save, (err) => {
      if (err) reject(err)
      resolve(path)
    })
  })
}
