<template>
    <div class="user-contaniner">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import {Vue,Component} from 'vue-property-decorator';
@Component
export default class UserComponent extends Vue{
    
}
</script>

<style lang="less">
.user-contaniner{
    height: 100%;
    width: 100%;
    overflow: hidden;
}
</style>

