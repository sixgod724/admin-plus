import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import locale from 'element-ui/lib/locale/lang/en'
import Layout from './layout/default'
import animated from 'animate.css'
import i18n from './i18n/i18n'
import './scss/reset.scss'
import '../mock'

Vue.use(ElementUI);
Vue.use(animated)
Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
