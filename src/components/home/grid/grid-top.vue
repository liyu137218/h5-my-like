<template>
    <div class="grid-top">
        <p>
            <span @click="selectTime('start')">
                <van-icon name="clock-o" />{{ homeModule.startTime }}
            </span>
            <span>至</span>
            <span @click="selectTime('end')">
                <van-icon name="clock-o" />{{ homeModule.endTime }}
            </span>
        </p>
        <div class="alert-body" v-if="showAlert">
            <div>
                <van-datetime-picker
                    v-model="currentDate"
                    type="year-month"
                    :min-date="minDate"
                    :max-date="maxDate"
                    @cancel="showAlert=false"
                    @confirm="confirmTime"
                />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator'
import {State,Mutation} from 'vuex-class'
@Component
export default class GridTopComponent extends Vue {
    @State('homeModule') homeModule:any
    @Mutation('set_startTime') set_startTime:any
    @Mutation('set_endTime') set_endTime:any
    private showAlert:boolean = false
    private showType:any = ''
    private currentDate:any = ''
    private minDate:any = new Date(2019,0,1)
    private maxDate:any = new Date()

    selectTime(type:any){
        this.showType = type
        if (type == 'start') {
            this.currentDate = new Date(this.homeModule.startTime)
        }else{
            this.currentDate = new Date(this.homeModule.endTime) 
        }
        this.showAlert = true
    }
    confirmTime(){
        if (this.showType == 'start') {
            if (this.currentDate > new Date(this.homeModule.endTime)) {
                this.$toast('开始时间不能大于结束时间')
                return
            }else{
                this.set_startTime(this.formatTime(this.currentDate))
            }
        }else{
            if (this.currentDate < new Date(this.homeModule.startTime)) {
                this.$toast('结束时间不能小于开始时间')
                return
            }
            this.set_endTime(this.formatTime(this.currentDate))
        }
        this.showAlert = false
    }
    formatTime(time:any){
        let year:any = new Date(time).getUTCFullYear()
        let mon:any = new Date(time).getMonth() + 1 
        if (mon < 10) {
            mon = '0' + mon
        }
        return year + '-' + mon
    }
}
</script>

<style lang="less" scoped>
.grid-top{
    line-height: 35px;
    height: 35px;
    width: 100%;
    background-color: #fff;
    border-bottom: solid 1px #eaeaea;
    margin-bottom: 8px;
    p{
        display: flex;
        justify-content: space-around;
        span{
            i{
                margin-right: 5px;
            }
        }
    }
}
.alert-body{
    height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
}
</style>

