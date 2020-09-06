<template>
    <div class="grid-container">
        <van-nav-bar 
            :title="headerModule.headerText" 
            class="nav-title"
        />
        <div class="grid-body">
            <gridTop></gridTop>
            <gridRange></gridRange>
            <gridChart></gridChart>
            <gridList></gridList>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';
import gridTop from "@/components/home/grid/grid-top.vue"
import gridChart from "@/components/home/grid/grid-chart.vue"
import gridRange from "@/components/home/grid/grid-range.vue"
import gridList from "@/components/home/grid/grid-list.vue"
@Component({
    components:{
        gridTop,
        gridChart,
        gridRange,
        gridList
    }
})
export default class GridComponent extends Vue {
    @State('headerModule') headerModule:any
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('网格')
    }
}
</script>

<style lang="less">
.grid-container{
    background-color: #f7f7f7;
}
.grid-body{
    height: calc(~"100% - 90px");
    overflow: auto;
}
</style>
