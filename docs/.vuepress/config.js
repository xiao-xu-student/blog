const moment = require('moment')
    moment.locale('zh-cn')
module.exports = {
  base:'/blog/',
  title: '树上吹只气泡熊',
  head: [
    ['meta', { name: 'author', content: '树上吹只气泡熊' }],
    ['meta', { name: 'keywords', content: '小徐的blog，我们一起学习吧！' }],
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]
  ],
  theme: 'reco',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '关于我', link: '/about/about' },
      { text: '时间线', link: '/timeline/', icon: 'reco-date' },
      {
        text: '技能',
        items: [
          { text: 'Java', items: [{ text: 'java基础', link: '/' }, { text: 'Spring基础', link: '/' }] },
          { text: 'Android', items: [{ text: 'Android基础', link: '/' }, { text: 'Avdroid高级', link: '/' }] },
          {text:'Git',items:[{text:'Git基本操作',link:'/views/Git/GitSimple'}]}
        ]
      },
      { text: 'GitHub', link: 'https://github.com/xiao-xu-student/blog',icon:'reco-github' },
    ],
    sidebar: 'auto',
    //最后更新时间
    lastUpdated: '更新时间',
  },
  

  plugins:
    [
      [
        "dynamic-title",
        {
          showIcon: "/assets/img/favicon.ico",
          showText: "(/≧▽≦/)咦！又好了！",
          hideIcon: "/assets/img/favicon_hide.ico",
          hideText: "(●—●)喔哟，崩溃啦！",
          recoverTime: 2000
        }
      ],
      // 音乐插件
      ['meting', {
        //metingApi: "https://meting.sigure.xyz/api/music",
        meting: {
          // 网易
          server: "netease",
          // 读取歌单
          type: "playlist",
          mid: "2182232969",
        },
        // 不配置该项的话不会出现全局播放器
        aplayer: {
          // 吸底模式
          fixed: true,
          mini: true,
          // 自动播放
          autoplay: true,
          // 歌曲栏折叠
          listFolded: true,
          // 颜色
          theme: '#f9bcdd',
          // 播放顺序为随机
          order: 'random',
          // 初始音量
          volume: 0.1,
          // 关闭歌词显示
          lrcType: 0
        },
        mobile: {
          // 手机端去掉cover图
          cover: false,
        }
      }],
      ['@vuepress-reco/vuepress-plugin-back-to-top'],
      [
        '@vuepress/last-updated',
        {
          transformer: (timestamp) => {
        
            return moment(timestamp).format('LLLL')
          }
        }
      ]

    ],
    markdown: {
      lineNumbers: true
    },
}
