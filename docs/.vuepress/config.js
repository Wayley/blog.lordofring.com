const nav = [
  { text: '首页', link: '/' },
  { text: '笔记', link: '/note/' },
  {
    text: '关于',
    ariaLabel: '关于信息',
    items: [
      { text: '关于作者', link: '/about/author' },
      { text: '联系', link: '/about/contact' },
    ],
  },
  {
    text: 'Github',
    link: 'https://github.com/Wayley',
    target: '_blank',
    rel: '',
  },
];
const sidebar = {
  '/note/': ['front', 'php', 'vuepress'],
  '/about/': ['author', 'contact'],
  // '/': [''],
};
module.exports = {
  title: 'LORD OF RING',
  description: 'Inspired by Lord of the Rings',
  port: 9966,
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    logo: '',
    sidebarDepth: 2,
    smoothScroll: true, // 启用页面滚动效果
    nav,
    sidebar,
  },
};
