import Vue from 'vue';
// @ts-ignore
import App from './App.vue';
// @ts-ignore
import VueVoca from "@/vue-voca";

Vue.config.productionTip = false
Vue.use(VueVoca);


new Vue({
  render: h => h(App),
}).$mount('#app')
