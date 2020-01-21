<template>
    <div>
        网格
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';

@Component
export default class GridComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    created() {
        this.set_headerText('网格')
    }
}
</script>
