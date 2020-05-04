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
import homeApi from '@/api/homeApi'
@Component
export default class GridChartComponent extends Vue {
    private chart:any = null

    mounted() {
        this.getChartData()
    }
    activated() {
        this.getChartData()
    }
    initChart(data:any){
        this.chart = Echarts.init(this.$refs.echart)
        let option = setOption(data);
        this.chart.setOption(option)
    }

    getChartData(){
        homeApi.getGridChartData('2020').then((res:any) =>{
            if (res.data.code == 1) {
                this.initChart(res.data.data)
            }
        })
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

