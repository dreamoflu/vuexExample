
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
Vue.config.productionTip = false;
Vue.use(ElementUI);
/* eslint-disable no-new */
// console.log(store)
var instance = axios.create();
Vue.prototype.postHttp = function (url, param) {
  instance.defaults.headers.common['token'] = localStorage.getItem("token");
  instance.interceptors.request.use(function (config) {


    return config;
  }, function (error) {
    return Promise.reject(error);
  });
  instance.interceptors.response.use(function (response) {

    return response;
  }, function (error) {
    return Promise.reject(error);
  });
  return instance.post(url, param);
};
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
