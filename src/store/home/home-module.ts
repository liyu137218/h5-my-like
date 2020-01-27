import {homeType} from './home-type'

const state:homeType = {
    startTime:'2019-01',
    endTime:'2019-12',
    rangeRate:100
}

const mutations = {
    set_startTime(state:any,payload:any){
        state.startTime = payload
    },
    set_endTime(state:any,payload:any){
        state.endTime = payload
    },
    set_rangeRate(state:any,payload:any){
        state.rangeRate = payload
    },
}

export default {
    state,
    mutations
}