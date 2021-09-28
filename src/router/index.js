import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/Login.vue';
import Home from '../components/Home.vue';
import Register from '../components/Register.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  {
    path: '/home',
    component: Home,
    redirect: '/homedata',
    children: [
      {
        path: '/homedata',
        name: 'homedata',
        component: () => import('@/components/HomeData.vue')
      },
      {
        path: '/history',
        name: 'history',
        component: () => import('@/components/History.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/components/User.vue')
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
