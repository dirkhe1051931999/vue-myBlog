# 基于 nuxt 的个人博客系统 `客户端`

## 使用步骤

1. 先要开启[后端服务](https://github.com/dirkhe1051931999/vue-management)
2. 再开启前端服务
3. nuxt 版的博客已不再维护，新的版本是自己搭的[服务端渲染博客](https://github.com/dirkhe1051931999/vue-ssr-blog)

## 如何使用

```bash
npm install
# 访问 http://127.0.0.1:3000，不是localhost！
npm run dev
```

## 技术栈

vue+nuxt+less+es6+webpack

## 版本

`v1.0.3`

## 更新记录

1. 2019-03-16
   - github 授权认证
2. 2019-03-24
   - 评论功能
3. 2019-03-31
   - 评论功能防御了 xss 攻击，url 地址栏增加了字段的类型检测
   - 同时服务端表的查询使用了参数化查询，防止 sql 注入

## 完成的功能

1. 文章列表，文章详情
2. 分类列表，分类详情
3. 标签列表，标签详情
4. 项目列表，项目详情
5. 搜索列表，搜索详情
6. 留言板

## 待完成的功能

1. ~~评论管理~~
2. ~~github 授权认证~~
3. 获取用户位置
4. ...

## 注意事项

1. axios 需要写入 nuxt.config.js 中

```js
plugins: [{ src: "~/plugins/axios" }];
```

## 关键技术点

1. [nuxt.js 的介绍与使用](https://github.com/dirkhe1051931999/hjBlog/blob/master/blog-vueBlog/lessons/01.md)

## 实现效果

![](https://s2.ax1x.com/2019/11/03/KOz5lQ.jpg)
![](https://s2.ax1x.com/2019/11/03/KOz4Sg.png)
![](https://s2.ax1x.com/2019/11/03/KOzWY8.png)
![](https://s2.ax1x.com/2019/11/03/KOzffS.png)
![](https://s2.ax1x.com/2019/11/03/KOzIyj.png)
![](https://s2.ax1x.com/2019/11/03/KOzoOs.png)
