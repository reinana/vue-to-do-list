import Vue from 'vue'
import App from './App'
import store from './store'
import './assets/css/style.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


// bootstrap-vueからBootstrapVue,IconPluginをインポートする
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue' // add
// Bootstrap と BootstrapVueのCSSファイルをインポート（順序はBootstrap⇒BootstrapVue）
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue) // add

// BootstrapVueアイコンコンポーネントプラグインの使用
Vue.use(IconsPlugin) // add

/* add icons to the library */
library.add(fas, fab, far)


Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
