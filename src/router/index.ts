import Vue from 'vue';
import VueRouter from 'vue-router';
import homeComponent from '@/views/home/index.vue';
import userComponent from '@/views/user/index.vue';
import loginComponent from '@/components/user/login.vue';
import registerComponent from '@/components/user/register.vue';
import resetComponent from '@/components/user/reset.vue';
import mainComponent from '@/views/home/main/index.vue';
import resourceComponent from '@/views/home/resource/index.vue';
import myComponent from '@/views/home/my/index.vue';
import gridComponent from '@/views/home/grid/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'login',
    component:loginComponent
  },
  {
    path: '/home',
    name: 'home',
    component: homeComponent,
    children:[{
      path:'/home/main',
      name:'main',
      component:mainComponent
    },{
      path:'/home/resource',
      name:'resource',
      component:resourceComponent
    },{
      path:'/home/my',
      name:'my',
      component:myComponent
    },{
      path:'/home/grid',
      name:'grid',
      component:gridComponent
    },]
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
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
