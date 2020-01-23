import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant,{Lazyload} from 'vant';
import 'vant/lib/index.css';
import './common/base.css';
Vue.use(Vant);
Vue.use(Lazyload, {
  lazyComponent: true
});
Vue.config.productionTip = false;

import Vconsole from 'vconsole';

if (window.location.href.indexOf('localhost') == -1) {
  let vConsole: any = new Vconsole();
  Vue.use(vConsole);
}

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
