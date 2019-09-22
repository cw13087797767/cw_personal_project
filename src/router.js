import Vue from 'vue'
import Router from 'vue-router'
const QsmyMain = r => {require.ensure([],() => {r(require('./views/qsmy'))},'QsmyMain')};
const QsmyDm = r =>{ require.ensure([], () =>{r(require('./views/qsmy/dm'))},'QsmyDm')};
const QsmyBz = r =>{ require.ensure([], () =>{r(require('./views/qsmy/bz'))},'QsmyBz')};
const QsmyGq = r =>{ require.ensure([], () =>{r(require('./views/qsmy/gq'))},'QsmyGq')};
const Qsmytb = r =>{ require.ensure([], () =>{r(require('./views/qsmy/tb'))},'QsmyTb')};

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/QsmyMain',
      name:'QsmyMain',
      component:QsmyMain,
      children:[
        {
          path:'/QsmyMain/dm',
          name:'QsmyDm',
          component:QsmyDm
        },
        {
          path:'/QsmyMain/bz',
          name:'QsmyBz',
          component:QsmyBz
        },
        {
          path:'/QsmyMain/gq',
          name:'QsmyGq',
          component:QsmyGq
        },
        {
          path:'/QsmyMain/tb',
          name:'Qsmytb',
          component:Qsmytb
        },
      ]
    },
  ]
})
