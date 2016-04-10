'use strict';

const fs = require('fs');

module.exports = (path, file, callback) => {

  fs.writeFile(path, file, (err) => {

    if (err) callback(new Error('Error while save: ' + err));

    callback(null);

  });
}
