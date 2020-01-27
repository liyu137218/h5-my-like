<template>
    <div>
        资源
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';

@Component
export default class ResourceComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('资源')
    }
}
</script>