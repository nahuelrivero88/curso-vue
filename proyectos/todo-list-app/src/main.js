import Vue from 'vue'
import App from './App.vue'
import './sass/index.sass'
// import 'bulma/css/bulma.css'
// import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
