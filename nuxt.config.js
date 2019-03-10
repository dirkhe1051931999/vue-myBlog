module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "何健的博客 ",
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'author',
        content: '1051931999@qq.com'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Vue, Nuxt, Node, 前端开发, JavaScript'
      },
      {
        hid: 'description',
        name: 'description',
        content: '基于Vue.js和Node.js开发的前端博客'
      }
    ],
    script: [{
      innerHTML: 'console.log("hello")',
      type: 'text/javascript',
      charset: 'utf-8'
    }],
    // 不对<script>标签中内容做转义处理
    __dangerouslyDisableSanitizers: ['script'],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: [{
      src: 'http://at.alicdn.com/t/font_461741_hvf5e66iab6.js'
    }]
  },
  // css
  css: [{
      src: "~/assets/less/index.less",
      lang: "less"
    },
    {
      src: 'highlight.js/styles/atelier-cave-light.css'
    }
  ],
  // 加载进度条
  loading: {
    color: '#3B8070',
    failedColor: "#e93030",
  },
  // 自定义 webpack 的构建配置
  build: {

    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.entry['polyfill'] = ['babel-polyfill']
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
        // 添加 alias 配置
        Object.assign(config.resolve.alias, {
          'assets': path.resolve(__dirname, 'assets'),
          'components': path.resolve(__dirname, 'components')
        })
      }
    }
  },
  babel: {
    presets: ['es2015', 'stage-2'],
    plugins: ['transform-async-to-generator', 'transform-runtime'],
    comments: true
  },
  plugins: [  
    { src: '~/plugins/axios' } 
  ]
}