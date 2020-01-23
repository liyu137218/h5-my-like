<template>
    <div class="main-bottom-container">
        <div class="main-bottom-body">
            <p>全部应用</p>
            <ul>
                <li 
                    v-for="(item, index) in workList" 
                    :key="index"
                    @click="toWork(item.id)">
                    <img :src="item.img" alt="">
                    <br>
                    <span>{{ item.label }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue,Component } from "vue-property-decorator"
const icon1 = require('@/assets/icon/icon1.png')
const icon2 = require('@/assets/icon/icon2.png')
const icon3 = require('@/assets/icon/icon3.png')
const icon4 = require('@/assets/icon/icon4.png')
const icon5 = require('@/assets/icon/icon5.png')
const icon6 = require('@/assets/icon/icon6.png')
const icon7 = require('@/assets/icon/icon7.png')
const icon8 = require('@/assets/icon/icon8.png')
const icon9 = require('@/assets/icon/icon9.png')
const icon10 = require('@/assets/icon/icon10.png')
const icon11 = require('@/assets/icon/icon11.png')
const icon12 = require('@/assets/icon/icon12.png')
const icon13 = require('@/assets/icon/icon13.png')
const icon14 = require('@/assets/icon/icon14.png')
const icon15 = require('@/assets/icon/icon15.png')
const icon16 = require('@/assets/icon/icon16.png')
const icon17 = require('@/assets/icon/icon17.png')
const icon18 = require('@/assets/icon/icon18.png')
const icon19 = require('@/assets/icon/icon19.png')
const icon20 = require('@/assets/icon/icon20.png')
@Component
export default class HomeMainBottomComponent extends Vue{
    private workList:Array<any> = []

    created() {
        this.workList = [{
            img:icon1,
            id:1,
            label:"应用1"
        },{
            img:icon2,
            id:2,
            label:"应用2"
        },{
            img:icon3,
            id:3,
            label:"应用3"
        },{
            img:icon4,
            id:4,
            label:"应用4"
        },{
            img:icon5,
            id:5,
            label:"应用5"
        },{
            img:icon6,
            id:6,
            label:"应用6"
        },{
            img:icon7,
            id:7,
            label:"应用7"
        },{
            img:icon8,
            id:8,
            label:"应用8"
        },{
            img:icon9,
            id:9,
            label:"应用9"
        },{
            img:icon10,
            id:10,
            label:"应用10"
        },{
            img:icon11,
            id:11,
            label:"应用11"
        },{
            img:icon12,
            id:12,
            label:"应用12"
        },{
            img:icon13,
            id:13,
            label:"应用13"
        },{
            img:icon14,
            id:14,
            label:"应用14"
        },{
            img:icon15,
            id:15,
            label:"应用15"
        },{
            img:icon16,
            id:16,
            label:"应用16"
        },{
            img:icon17,
            id:17,
            label:"应用17"
        },{
            img:icon18,
            id:18,
            label:"应用18"
        },{
            img:icon19,
            id:19,
            label:"应用19"
        },{
            img:icon20,
            id:20,
            label:"应用20"
        }]
    }
    toWork(){}
}
</script>

<style lang="less" scoped>
.main-bottom-container{
    padding: 7px;
    .main-bottom-body{
        p{
            font-size: 14px;
            padding: 7px 10px;
            color: #666;
        }
        border: solid 0.5px #eaeaea;
        box-shadow: 2px 2px 3px #eaeaea;
        border-radius: 10px;
    }
}
    ul{
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        li{
            width: 33%;
            text-align: center;
            padding: 0 0 5px 0;
            img{
                height: 40px;
                width: 40px;
            }
            span{
                color: #999;
                font-size: 12px;
            }
        }
    }
</style>
