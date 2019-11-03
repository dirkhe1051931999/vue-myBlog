import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0cf30df0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _497a7c36 = () => interopDefault(import('..\\pages\\archive.vue' /* webpackChunkName: "pages_archive" */))
const _70f18160 = () => interopDefault(import('..\\pages\\laboratory.vue' /* webpackChunkName: "pages_laboratory" */))
const _135ae868 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _3317ca92 = () => interopDefault(import('..\\pages\\search\\category\\_id.vue' /* webpackChunkName: "pages_search_category__id" */))
const _1acc848e = () => interopDefault(import('..\\pages\\search\\keyword\\_keyword.vue' /* webpackChunkName: "pages_search_keyword__keyword" */))
const _22dffd16 = () => interopDefault(import('..\\pages\\search\\tag\\_id.vue' /* webpackChunkName: "pages_search_tag__id" */))
const _687d0006 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages_post__id" */))
const _2caae8b5 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0cf30df0,
    name: "about"
  }, {
    path: "/archive",
    component: _497a7c36,
    name: "archive"
  }, {
    path: "/laboratory",
    component: _70f18160,
    name: "laboratory"
  }, {
    path: "/login",
    component: _135ae868,
    name: "login"
  }, {
    path: "/search/category/:id?",
    component: _3317ca92,
    name: "search-category-id"
  }, {
    path: "/search/keyword/:keyword?",
    component: _1acc848e,
    name: "search-keyword-keyword"
  }, {
    path: "/search/tag/:id?",
    component: _22dffd16,
    name: "search-tag-id"
  }, {
    path: "/post/:id?",
    component: _687d0006,
    name: "post-id"
  }, {
    path: "/",
    component: _2caae8b5,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
