// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Antd from 'ant-design-vue';

// 依赖库
import ElementUI from 'element-ui';
import VCharts from 'v-charts';
import dataV from '@jiaminghi/data-view'
import echarts from "echarts";
import G2 from '@antv/g2'

import baseURL from "./conf/baseURL";              // api接口
import axios from "./conf/httpInterceptor";     // 拦截器

// 依赖css
import 'element-ui/lib/theme-chalk/index.css'; // element-ui的css
import 'normalize.css/normalize.css';          // 标准化css
import '@/styles/index.scss';                  // 全局 css
import 'font-awesome/css/font-awesome.css'     // font-awesome 图标
// import 'ant-design-vue/dist/antd.css';
Vue.config.productionTip = false;

import particles from 'particles.js'
Vue.use(particles);

//  use
Vue.use(Vuex);
Vue.use(VCharts);
Vue.use(dataV);
Vue.use(G2);
Vue.use(Antd);

Vue.use(ElementUI);
import { Message }  from 'element-ui';
Vue.component( Message.name, Message );
Vue.prototype.$message = Message;

//Vue原型对象绑定如下：
Vue.prototype.$echarts = echarts;   // 注册全局Echarts，直接this.$echarts调用
Vue.prototype.$apiurl = baseURL;     // api接口配置

Vue.prototype.$axios = axios;

/**
 * Vuex Store配置
 * @type {Store<{Token: string, userid: string}>}
 */
const store = new Vuex.Store({
  state: {
    Token: '',  // 全局使用： this.$store.state.Token
    userinfo: {}
  },
  // 和vue计算属性computed一样，来实时监听state值的变化(最新状态)
  getters : {
    getToken(){  //方法名随意,主要是用来承载变化的Token的值
      return state.Token
    }
  },
  // 可以放改变state的初始值的方法，具体的用法就是给里面的方法传入参数state或额外的参数,然后利用vue的双向数据驱动进行值的改变
  mutations: {
    getToken( token ){
      if( token ){
        state.Token = token;
      }
    }
  },
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
});
