import Vue from 'vue'
import Router from 'vue-router'
import AppIndex from '../components/home/AppIndex'
import JotterIndex from '../components/jotter/JotterIndex'
import Editor from '../components/jotter/Editor'
import LibraryIndex from '../components/library/LibraryIndex'
import Login from '../components/Login'
import Home from '../components/Home'
import AdminIndex from '../components/admin/AdminIndex'
import Register from '../components/Register'

import Release from '@/views/releaseRecipe/Release'
import MyHome from '@/views/home/Home'
import Detail from '@/views/recipeDetail/recipeDetail'
import Main from '@/views/main/Main'
import Tandp from '@/views/tipsAndPlan/Tandp'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: '/index',
      component: AppIndex,
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
          component: AppIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/jotter',
          name: 'Jotter',
          component: JotterIndex,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/editor',
          name: 'Editor',
          component: Editor,
          meta: {
            requireAuth: true
          }
        },
        {
          path: '/library',
          name: 'Library',
          component: LibraryIndex,
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Release
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/tandp',
      name: 'Tandp',
      component: Tandp
    },
    {
      path: '/register',
      name: 'Register',
      component: MyHome
    },
    {
      path: '/admin',
      name: 'Admin',
      component: AdminIndex,
      meta: {
        requireAuth: true
      }
    }
  ]
})
