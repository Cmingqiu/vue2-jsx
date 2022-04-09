import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles'

Vue.use(ElementUI)
// import '@/utils/dialog'

new Vue({
  // el: '#app',
  render: h => h(App)
}).$mount('#app')
