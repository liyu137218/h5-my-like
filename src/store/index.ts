import Vue from 'vue';
import Vuex from 'vuex';
import footerModule from './common/footer/footer-module';
import headerModule from './common/header/header-module';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    footerModule,
    headerModule
  },
});
