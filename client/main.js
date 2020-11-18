import Vue from 'vue'
import VueRouter from 'vue-router';
import Quasar from 'quasar';

import '../imports/ui/plugins'
import {routes} from './routes';

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes // short for `routes: routes`
});

import AppLayout from '../imports/ui/AppLayout.vue'

Meteor.startup(() => {
  Vue.use(Quasar, {});
  new Vue({
    router: router,
    render: h => h(AppLayout),
  }).$mount('#app')
})
