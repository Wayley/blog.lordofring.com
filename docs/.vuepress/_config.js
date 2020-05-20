module.exports = {
  nav_en: [
    { text: 'Home', link: '/' },
    {
      text: 'Notes',
      ariaLabel: 'About Notes',
      link: '/note/',
      items: [
        { text: 'Front-End', link: '/note/front-end/' },
        { text: 'PHP', link: '/note/php/' },
      ],
    },
    { text: 'Life', link: '/life/' },
    { text: 'About', link: '/about/' },
  ],
  nav_zh: [
    { text: '首页', link: '/_zh/' },
    {
      text: '笔记',
      ariaLabel: '关于笔记',
      items: [
        { text: '前端', link: '/_zh/note/front-end/' },
        { text: 'PHP', link: '/_zh/note/php/' },
      ],
    },
    { text: '生活', link: '/_zh/life/' },
    { text: '关于', link: '/_zh/about/' },
  ],
  frontEndSidebarChildren: ['css/', 'html/', 'vue/', ['javascript/', 'JS']], // ['<link>', '<text>']
};
