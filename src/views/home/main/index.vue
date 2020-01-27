<template>
    <div>
        <HomeMainTopComponent></HomeMainTopComponent>
        <HomeMainMiddleComponent></HomeMainMiddleComponent>
        <HomeMainBottomComponent></HomeMainBottomComponent>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';
import HomeMainTopComponent from '@/components/home/main/main-top.vue';
import HomeMainMiddleComponent from '@/components/home/main/main-middle.vue';
import HomeMainBottomComponent from '@/components/home/main/main-bottom.vue';
@Component({
    components:{
        HomeMainTopComponent,
        HomeMainMiddleComponent,
        HomeMainBottomComponent
    }
})
export default class MainComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('首页')
    }
}
</script>