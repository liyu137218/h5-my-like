<template>
    <div class="region-selecter">
        <p>
            <span>取消</span>
            <span>区域选择</span>
            <span @click="changeRegion(activeCity)">确认</span>
        </p>
        <div>
            <ul>
                <li v-for="(item, index) in cityList" :key="index" @click="selectRegion(item)">
                    <div :class="item.code == activeCity.code ? 'active-item':''">
                        {{ item.name }}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import {Vue,Component,Prop,Emit} from 'vue-property-decorator'
import cityOption from './data-config'
@Component
export default class RegionSelect extends Vue{
    private cityList:Array<any> = []
    private activeCity:any = null

    @Prop()
    cityOpt:any

    created() {
        this.cityList = cityOption
        this.activeCity = this.cityOpt
    }
    mounted() {
    }
    selectRegion(item:any){
        this.activeCity = item
    }
    @Emit('changeRegion')
    changeRegion(region:any){
        console.log(region)
    }
}
</script>

<style lang="less" scoped>
.region-selecter{
    height: 60vh;
    p{
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 0 10px;
        span{
            text-align: center;
            font-size: 16px;
            line-height: 30px;
            color: #4981ec;
        }
    }
    div{
        overflow: auto;
        margin-top: 20px;
        height: calc(~"60vh - 60px");
        ul{
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            li{
                min-width: 25%;
                max-width: 25%;
                padding: 5px 0;
                div{
                    margin: 0 5px;
                    padding: 0 5px;
                    height: 35px;
                    line-height: 35px;
                    font-size: 14px;
                    
                    border-radius: 5px;
                    background-color: #fff;
                    color: #4981ec;
                    text-align: center;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    border: solid 0.5px #4981ec;
                }
                .active-item{
                    background-image: linear-gradient(to right,#4981ec, #10b7ff);
                    color: #fff;
                }
            }
        }
    }
}
</style>

