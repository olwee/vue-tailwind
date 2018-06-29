
// index.js

import 'babel-polyfill';
import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';
// Components
import App from './App.vue';
import { Dashboard } from './dashboard/';


Vue.use(VueRouter);

const router = new VueRouter({
  // Routes go here.
  mode: 'history',
  base: '/',
  routes: [
    { path: '/', component: Dashboard },
  ],
});
// Navigation guards
router.beforeEach((to, from, next) => {
  //
  next();
});
const vueInstance = new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
