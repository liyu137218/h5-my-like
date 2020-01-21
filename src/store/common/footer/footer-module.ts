import { footerType } from './footer-type';

const state: footerType = {
    activeIndex: 0
}

const mutations = {
    set_activeIndex(state: any, payload: any) {
        state.activeIndex = payload
    }
}

export default {
    state,
    mutations
}