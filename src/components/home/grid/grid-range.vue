<template>
    <div class="range-container">
        <p class="title">
            <span>综合得分</span>
            <span>明细</span>
        </p>
        <div class="grid-range-body">
            <div class="range-detail">
                <p>12</p>
                <p>月份总数</p>
            </div>
            <div>
                <van-circle
                v-model="currentRate"
                :rate="rate"
                :color="gradientColor"
                :text="this.homeModule.rangeRate+''"
                :speed="50"
                :stroke-width="60"
                />
            </div>
            <div class="range-detail">
                <p>综合评定</p>
                <p>考核方式</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {State,Mutation} from 'vuex-class'
@Component
export default class GridRangeComponent extends Vue {
    @State('homeModule') homeModule:any
    private gradientColor:any = {
        '0%': '#3fecff',
        '100%': '#6149f6'
    }
    private currentRate:any = 0
    private rate:any = 0

    activated() {
        this.rate = this.homeModule.rangeRate * 0.66
    }

    deactivated() {
        this.rate = 0
    }
}
</script>

<style lang="less" scoped>
.range-container{
    background-color: #fff;
    font-size: 14px;
    border: solid 1px #eaeaea;
    margin-bottom: 8px;
    .title{
        padding: 0 10px;
        line-height: 30px;
        display: flex;
        justify-content: space-between;
        &>span:nth-child(2){
            color: cornflowerblue;
        }
    }
}
.grid-range-body{
    display: flex;
    justify-content: space-around;
    height: 100px;
    text-align: center;
    .range-detail{
        flex: 2;
        padding-top: 20px;
        &>p:nth-child(1){
            color: coral;
            font-size: 17px;
        }
    }
    &>div:nth-child(2){
        flex: 3;
    }
}
/deep/.van-circle svg{
    transform: rotate(-120deg);
}
</style>

