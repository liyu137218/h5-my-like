<template>
    <div>
        主页面
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';

@Component
export default class MainComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    created() {
        this.set_headerText('首页')
    }
}
</script>