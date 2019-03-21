import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/space',
      name: 'space',
      component: () => import(/* webpackChunkName: "space" */ './views/Space.vue'),
    },
    {
      path: '/provider',
      name: 'provider',
      component: () => import(/* webpackChunkName: "provider" */ './views/Provider.vue'),
    },
  ],
});
