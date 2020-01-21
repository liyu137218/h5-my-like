import Vue from 'vue';
import VueRouter from 'vue-router';
import homeComponent from '@/views/home/index.vue';
import userComponent from '@/views/user/index.vue';
import loginComponent from '@/components/user/login.vue';
import registerComponent from '@/components/user/register.vue';
import resetComponent from '@/components/user/reset.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: homeComponent,
  },
  {
    path: '/user',
    name: 'user',
    component:userComponent,
    children:[{
      path:'/user/register',
      name:'register',
      component:registerComponent
    },{
      path:'/user/login',
      name:'login',
      component:loginComponent
    },{
      path:'/user/reset',
      name:'reset',
      component:resetComponent
    },
    ]
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
