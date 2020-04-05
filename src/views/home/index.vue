<template>
    <div class="home-container">
        <van-nav-bar :title="headerModule.headerText" >
            <van-icon name="arrow-left" slot="left" />
        </van-nav-bar>
        <div class="home-body">
            <transition name="slide-right">
                <keep-alive>
                    <router-view class="child-view"></router-view>
                </keep-alive>
            </transition>
        </div>
        <FooterComponent></FooterComponent>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import FooterComponent from '@/components/commom/footer/index.vue';
import { State,Mutation } from 'vuex-class';

@Component({
    components:{
        FooterComponent
    }
})
export default class HomeComponent extends Vue {
    @State('headerModule') headerModule:any
    @Mutation('set_headerText') set_headerText:any;

    created() {
        this.set_headerText('主页');
    }
}
</script>

<style lang="less" scoped>
.home-container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    .home-body{
        height: calc( 100% - 90px);
        width: 100%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    /deep/.van-nav-bar{
        height: 40px;
        background-image:  linear-gradient(to right ,#4981ec, #10b7ff);
        color:#fff;
        line-height: 40px;
    }
    /deep/.van-nav-bar .van-icon {
        color: #fff;
        vertical-align: middle;
    }
    /deep/.van-nav-bar__title{
        color: #fff;
    }
}
.child-view {
  transition: all 0s ;
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

