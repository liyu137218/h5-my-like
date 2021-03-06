import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Lazyload,Swipe,ImagePreview,Icon,Field,Button,NavBar,Popup,Tabbar,TabbarItem,SwipeItem,Circle,Loading,DatetimePicker} from 'vant';
import 'vant/lib/index.css';
import './common/base.css';
Vue.use(Swipe);
Vue.use(ImagePreview);
Vue.use(Icon);
Vue.use(Field);
Vue.use(Button);
Vue.use(NavBar);
Vue.use(Popup);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(SwipeItem);
Vue.use(Circle);
Vue.use(Loading);
Vue.use(DatetimePicker);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false;

import "./mock/home-mock"
import Vconsole from 'vconsole';
if (window.location.href.indexOf('localhost') == -1) {
  let vConsole: any = new Vconsole();
  Vue.use(vConsole);
}

new Vue({
  router,
  store,
  render: (h:any) => h(App),
}).$mount('#app');
