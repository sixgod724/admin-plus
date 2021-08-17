import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import Layout from '@/layout/default'
import componentsRouter from './modules/comoponents'

const routes = [{
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },
  {
    path: '/manage',
    component: Layout,
    redirect: 'noRedirect',
    meta: {
      title: '项目管理'
    },
    children: [{
      path: 'user',
      meta: {
        title: '关于作者'
      },
      component: () => import('@/views/manage/index')
    }, {
      path: 'details/:id',
      meta: {
        title: '详情'
      },
      component: () => import('@/views/manage/details')
    }, {
      path: 'meeting',
      meta: {
        title: '会议系统'
      },
      component: () => import('@/views/meeting')
    }]
  },
  componentsRouter,
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/404',
    component: () => import('../views/error/404.vue')
  },
  {
    path: '*',
    redirect: "/404"
  },
]

const router = new VueRouter({
  routes
})

export default router
