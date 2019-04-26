
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Child from './components/Child.vue'
Vue.config.productionTip = false
Vue.component('childComponent', Child);//Component created Gloabally
 

new Vue({
  render: h => h(App),
}).$mount('#app')
