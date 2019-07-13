import Vue from 'vue'
import App from './App.vue'
// 导入UI包和样式
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入router
// 在使用vue-cli的时候 @符号在路径中作为前缀使用,代表src目录
import router from '@/router'
// 导入axios
// import axios from 'aixos'
// Vue.prototype.$http = axios
import axios from 'axios'
Vue.prototype.$http = axios
Vue.config.productionTip = false
// 注册到vue实例
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
