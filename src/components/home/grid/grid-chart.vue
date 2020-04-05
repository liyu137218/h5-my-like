<template>
    <div class="chart-body">
        <p>月份对比详情</p>
        <div ref="echart" class="chart"></div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
const Echarts = require('echarts')
import setOption from './echarts-option'
@Component
export default class GridChartComponent extends Vue {
    private chart:any = null

    mounted() {
        this.initChart()
    }
    activated() {
        this.initChart()
    }
    initChart(){
        this.chart = Echarts.init(this.$refs.echart)
        let option = setOption('123');
        this.chart.setOption(option)
    }
}
</script>

<style lang="less" scoped>
.chart-body{
    padding: 10px;
    background-color: #fff;
    border: solid 1px #eaeaea;
}
.chart{
    height: 200px;
    width: 100%;
}
</style>

