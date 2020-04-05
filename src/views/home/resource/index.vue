<template>
    <div>
        <resourceMap></resourceMap>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
import { State,Mutation } from 'vuex-class';
import resourceMap from '@/components/home/resource/resource-map.vue'

@Component({
 components:{
    resourceMap
 }
})
export default class ResourceComponent extends Vue {
    @Mutation('set_headerText') set_headerText:any;

    activated() {
        this.set_headerText('资源')
    }
}
</script>