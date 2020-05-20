const { getSideBar, getFrontEndSidebar } = require('./utils.js');
const { nav_en, nav_zh, frontEndSidebarChildren } = require('./_config.js');

module.exports = {
  title: 'LORD OF RING',
  description: 'Inspired by Lord of the Rings',
  port: 9966,
  markdown: {
    lineNumbers: true,
  },
  locales: {
    '/': {
      lang: 'en-US',
    },
    '/_zh/': {
      lang: 'zh-CN',
    },
  },
  themeConfig: {
    logo: '',
    repo: 'Wayley',
    sidebarDepth: 2,
    smoothScroll: true, // 启用页面滚动效果
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        lastUpdated: 'Last Updated',
        nav: nav_en,
        sidebar: {
          '/note/front-end/': getFrontEndSidebar(
            'FE',
            'Introduction',
            frontEndSidebarChildren
          ),
        },
      },
      '/_zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        lastUpdated: '上次更新',
        nav: nav_zh,
        sidebar: {
          '/_zh/note/front-end/': getFrontEndSidebar(
            '前端',
            '介绍',
            frontEndSidebarChildren
          ),
        },
      },
    },
  },
};
