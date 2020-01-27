<template>
    <div>
        我的主页
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';

@Component
export default class MyComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('我的')
    }
}
</script>