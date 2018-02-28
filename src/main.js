import Vue from 'vue'
import App from './App.vue'
import  Vueresource  from 'vue-resource';
import {store} from '../store'


Vue.use(Vueresource)

new Vue({
  el: '#app',
  store,
  render: (s)=>s(App)
})
