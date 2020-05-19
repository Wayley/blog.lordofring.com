const fs = require('fs');
const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const methods = {
  getSideBar(dir) {
    let sideBar = [];
    const files = fs.readdirSync(resolve(dir), { withFileTypes: true });
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.isFile() && path.extname(file.name) == '.md') {
        const basename = path.basename(file.name, '.md');
        if (basename !== 'README') sideBar.push(basename);
      }
    }
    return sideBar;
  },
};
module.exports = methods;
