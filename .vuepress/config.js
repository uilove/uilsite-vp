module.exports = {
  lang: 'zh-CN',
  title: "UI Love",
  description:
    "UI♥ (UI Love) 旨在传播现代的互联网产品设计理念与方法。互联网产品的生态日新月异，新技术层出不穷，要求设计师拥抱变化，快速更新自己的知识体系。",
  head: [
    ['link', { rel: 'icon', href: '/img/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no' }],
    ['meta', { name: 'theme-color', content: '#d5001a' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'white' }],
    ['link', { rel: 'apple-touch-icon', href: `/img/icon.png` }]
  ],
  ga: 'UA-140776934-1',
  themeConfig: {
    logo: '/img/logo.svg',
    nav: [
      { text: "首页", link: "/" },
      { text: "设计体系", link: "/design-systems/" },
      { text: "设计工具", link: "/design-tools/" }
    ],
    sidebar: {
      '/design-systems/': [
        '',
        'design-principles',
        'color'
      ]
    },
    displayAllHeaders: false
  }
};
