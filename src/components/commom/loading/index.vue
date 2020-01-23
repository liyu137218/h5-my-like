<template>
    <div class="loading" >
        <van-loading type="spinner" color="#1989fa" />
    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
@Component
export default class LoadingComponent extends Vue {
}
</script>
<style lang="less" scoped>
.loading{
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

