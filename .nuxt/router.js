import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ee2343c = () => interopDefault(import('../pages/auth-redirect.vue' /* webpackChunkName: "pages/auth-redirect" */))
const _7faa0fea = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _105dfcc4 = () => interopDefault(import('../pages/login-with-magic-link.vue' /* webpackChunkName: "pages/login-with-magic-link" */))
const _389293ea = () => interopDefault(import('../pages/profile.vue' /* webpackChunkName: "pages/profile" */))
const _2da308b2 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _93fb265a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/auth-redirect",
    component: _7ee2343c,
    name: "auth-redirect"
  }, {
    path: "/login",
    component: _7faa0fea,
    name: "login"
  }, {
    path: "/login-with-magic-link",
    component: _105dfcc4,
    name: "login-with-magic-link"
  }, {
    path: "/profile",
    component: _389293ea,
    name: "profile"
  }, {
    path: "/register",
    component: _2da308b2,
    name: "register"
  }, {
    path: "/",
    component: _93fb265a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
