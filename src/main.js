import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import {getRequest,postRequest,upload} from './network/reuqest.js'
import {statisVisit} from './network/commonRequest.js'


Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.uploadRequest = upload;
Vue.prototype.statisVisit= statisVisit;


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(mavonEditor)
var vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default vue