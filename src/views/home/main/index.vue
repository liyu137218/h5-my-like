<template>
    <div class="main">
        <van-nav-bar 
            class="nav-title"
            :title="headerModule.headerText"
        />
        <div class="main-body">
            <HomeMainTopComponent></HomeMainTopComponent>
            <HomeMainMiddleComponent></HomeMainMiddleComponent>
            <HomeMainBottomComponent></HomeMainBottomComponent>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';
import HomeMainTopComponent from '@/components/home/main/main-top.vue';
import HomeMainMiddleComponent from '@/components/home/main/main-middle.vue';
import HomeMainBottomComponent from '@/components/home/main/main-bottom.vue';
@Component({
    components:{
        HomeMainTopComponent,
        HomeMainMiddleComponent,
        HomeMainBottomComponent
    }
})
export default class MainComponent extends Vue {
    @State('headerModule') headerModule:any
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('首页')
    }
}
</script>

<style lang="less" scoped>
.main{
    height: 100%;
    
}
.main-body{
    height: calc(~"100% - 90px");
    overflow: auto;
}
</style>
