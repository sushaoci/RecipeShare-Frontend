import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Home from '../components/Home'
import Register from '../components/Register'

import Release from '@/views/releaseRecipe/Release'
import MyHome from '@/views/home/Home'
import Detail from '@/views/recipeDetail/recipeDetail'
import Main from '@/views/main/Main'
import Tandp from '@/views/tipsAndPlan/Tandp'
import otherMain from '@/views/main/otherMain'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: MyHome,
      meta: {
        requireAuth: true
      }
    },
    {
      // home页面并不需要被访问，只是作为其它组件的父组件
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'AppIndex',
          component: MyHome,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/detail',
          name: 'Detail',
          component: Detail
        },
        {
          path: '/release',
          name: 'Release',
          component: Release
        }, 
        {
          path: '/tandp',
          name: 'Tandp',
          component: Tandp
        },
      ]
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/othermain',
      name: 'OtherMain',
      component: otherMain
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
