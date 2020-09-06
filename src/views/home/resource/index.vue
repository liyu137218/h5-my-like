<template>
    <div class="main">
        <van-nav-bar 
            :title="headerModule.headerText" 
            class="nav-title"
        />
        <div class="main-body">
            <resourceMap></resourceMap> 
        </div>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';
import resourceMap from '@/components/home/resource/resource-map.vue'

@Component({
 components:{
    resourceMap
 }
})
export default class ResourceComponent extends Vue {
    @State('headerModule') headerModule:any
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('资源')
    }
}
</script>

<style lang="less" scoped>
.main{
    height: 100%;
    .main-body{
        height: calc(~"100% - 90px");
        overflow: auto;
    }
}
</style>
