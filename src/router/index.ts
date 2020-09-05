import Vue from 'vue';
import VueRouter from 'vue-router';
import vappRoutes from './vapp'
import homeRoutes from './home'
import userRoutes from './user'
Vue.use(VueRouter);

const routes = [
  ...vappRoutes,
  ...homeRoutes,
  ...userRoutes,
  {
    path:'/',
    name:'main',
    redirect:'/user/login'
  }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
