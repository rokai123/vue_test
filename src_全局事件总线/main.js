import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/* const Demo = Vue.extend({});
const d = new Demo();
Vue.prototype.x = d; */

new Vue({
  render: h => h(App),
  beforeCreate(){
    // Vue.prototype.x = this;
    Vue.prototype.$bus = this;
  }
}).$mount('#app')



