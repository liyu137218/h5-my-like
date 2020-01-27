<template>
    <div class="grid-container">
        <gridTop></gridTop>
        <gridRange></gridRange>
        <gridChart></gridChart>
        <gridList></gridList>
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
</style>
