<template>
    <van-tabbar v-model="footerModule.activeIndex">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o">资源</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o">网格</van-tabbar-item>
      <van-tabbar-item icon="user-circle-o">我的</van-tabbar-item>
    </van-tabbar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component
export default class FooterComponent extends Vue {
  @State("footerModule") footerModule: any;
  private icon: any = {
    active: "https://img.yzcdn.cn/vant/user-active.png",
    inactive: "https://img.yzcdn.cn/vant/user-inactive.png"
  };
}
</script>

<style lang="less" scoped>
.footer-container {
  height: 40px;
}
</style>
