import Vue from 'vue'
import App from './App.vue'
import QGui from '@/components/index.js'
Vue.use(QGui)
Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
