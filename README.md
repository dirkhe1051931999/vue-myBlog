# 基于 nuxt 的个人博客系统 `客户端`

---

## 技术栈

vue+nuxt+less+es6+webpack

## 版本

`v1.0.2`

## 更新记录

1. 2019-03-16
   - github 授权认证
2. 2019-03-24
   - 评论功能

## 完成的功能

1. 文章列表，文章详情
2. 分类列表，分类详情
3. 标签列表，标签详情
4. 项目列表，项目详情
5. 搜索列表，搜索详情
6. 留言板

### 待完成的功能

1. ~~评论管理~~
2. ~~github 授权认证~~
3. 获取用户位置
4. ...

## 注意事项

1. axios 需要写入 nuxt.config.js 中

```js
plugins: [{ src: '~/plugins/axios' }];
```

## 如何使用

1. npm install
2. npm run dev
3. 访问 127.0.0.1:3000

## 关键技术点

1. [nuxt.js 的介绍与使用](https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vueBlog/lessons/01.md)

## 实现效果

![首页](https://github.com/dirkhe1051931999/vue-myBlog/blob/master/screenshot/1.png) ![档案](https://github.com/dirkhe1051931999/vue-myBlog/blob/master/screenshot/2.png) ![项目](https://github.com/dirkhe1051931999/vue-myBlog/blob/master/screenshot/3.png) ![详情](https://github.com/dirkhe1051931999/vue-myBlog/blob/master/screenshot/4.png) ![留言板](https://github.com/dirkhe1051931999/vue-myBlog/blob/master/screenshot/5.jpg)

## MIT
