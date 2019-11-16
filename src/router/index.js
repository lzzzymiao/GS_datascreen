import Vue from 'vue'
import Router from 'vue-router'

import demo from '@/views/demo/demo'  // Demo
import Ems from '@/views/demo/Ems';   // emsDemo

import Home from '@/views/Home';

import One from '@/views/One';   // 人口大屏

// 资源库展示
import zyk from '@/views/zyk/zyk'
import overall from '@/components/zyk/overall';
import zyk4org from '@/components/zyk/zyk4org';
import zyk4orgDetail from '@/components/zyk/zyk4orgDetail';
import zyk4work from '@/components/zyk/zyk4work';
import zyk4synergy from '@/components/zyk/zyk4synergy';
import zyk4other from '@/components/zyk/zyk4other';

Vue.use(Router);

const componentsPage = name => () => import('@/components/' + name);

// 防止编程式导航时psuh相同路由控制台报错：
const originalPush = Router.prototype.push;
Router.prototype.push = function push( location ) {
  return originalPush.call( this, location ).catch(err => err )
};

export default new Router( {
  linkActiveClass : 'activeRT',
  routes: [
    // 人口大屏
    {
      path: '',
      name: 'Home',
      component: Home ,
    } ,

    // 人口大屏
    {
      path: '/one',
      name: 'One',
      component: One,
      children:[
        { path: '/one/ems', component: Ems },
        { path: '/one/demo', name: 'demo', component: demo },
      ]
    },

    // 资源库
    { path: '/showzyk', name: 'zyk' , component: zyk ,
      children:[
        { path: '', redirect:'/showzyk/overall' },
        { path: '/showzyk/overall'    , name: 'overall'   ,  component: overall},
        { path: '/showzyk/org'    , name: 'zyk4org'   ,  component: zyk4org},
        { path: '/showzyk/org/detail/:orgname', name: 'zyk4orgDetail'   ,  component: zyk4orgDetail },
        { path: '/showzyk/work'   , name: 'zyk4work'  ,  component: zyk4work },
        { path: '/showzyk/synergy', name: 'zyk4synergy', component: zyk4synergy },
        { path: '/showzyk/other'  , name: 'zyk4other' ,  component: zyk4other },
      ]
    } ,


    // {path: '*', redirect: {name: '404'}}

  ]
})
