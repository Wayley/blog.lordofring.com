const fs = require('fs');
const path = require('path');

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
const methods = {
  /**
   * [getSideBar] 获取某目录下md文件名称(不含文件类型,排除README.md文件)
   * @param  {[String]} dir     [dir name] [../note/front-end/]
   * @return {[Array]}          [] ['css', 'html', 'vue']
   */
  getSideBar(dir) {
    let sideBar = [];
    const files = fs.readdirSync(resolve(dir), { withFileTypes: true });
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.isFile() && path.extname(file.name) == '.md') {
        const basename = path.basename(file.name, '.md');
        if (basename !== 'README') {
          sideBar.push(basename);
        }
      }
    }
    return sideBar;
  },
  /**
   * [getFrontEndSidebar] 获取FE的Sidebar
   * @param  {[String]} groupTitle      [groupTitle]
   * @param  {[String]} introduction    [introduction]
   * @param  {[Array]} children         [children]
   * @return {[Array]}                  []
   */
  getFrontEndSidebar(groupTitle, introduction, children = []) {
    return [
      {
        title: groupTitle,
        collapsable: false,
        sidebarDepth: 2,
        children: [['', introduction]].concat(children),
      },
    ];
  },
};
module.exports = methods;
