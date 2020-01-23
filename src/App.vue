<template>
  <div id="app">
    <transition name="slide-right">
      <router-view class="child-view"></router-view>
    </transition>
    <LoadingComponent v-if="globalModule.globalLoading"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State } from 'vuex-class';
import LoadingComponent from "./components/commom/loading/index.vue";
@Component({
  components: {
    LoadingComponent
  },
})
export default class App extends Vue {
    @State( state  => state ) globalModule:any

}
</script>

<style lang="less">
#app {
  height: 100%;
  width:100%;
  overflow: hidden;
}

.child-view {
  transition: all .3s ;
}

.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}

</style>
