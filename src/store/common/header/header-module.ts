import {headerType } from './header-type';

const state:headerType = {
    headerText:''
}

const mutations = {
    set_headerText(state:any,payload:any){
        state.headerText = payload
    }
}

export default {
    state,
    mutations
}