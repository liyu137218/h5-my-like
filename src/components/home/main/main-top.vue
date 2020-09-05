<template>
    <div class="main-top-container">
        <div class="main-top-body">
            <van-swipe :autoplay="3000" :height="200">
                <van-swipe-item 
                v-for="(image, index) in images" 
                :key="index"
                height="100%"
                width="100%"
                @click="showPreview(index)">
                    <img class="swipe-img" v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <van-image-preview 
            v-model="show" 
            :images="images" 
            @change="onChange"
            :startPosition="startPosition"
        >
            <template v-slot:index>第{{ index }}页</template>
        </van-image-preview>
    </div>
</template>

<script lang="ts">
import { Vue,Component } from "vue-property-decorator";
@Component
export default class HomeMainTopComponent extends Vue {
    private images:Array<any> = [
        'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3425139017,3743694518&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1140437663,1206775404&fm=26&gp=0.jpg',
        'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3453823700,2343304101&fm=26&gp=0.jpg',
        'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1525885316,1967980742&fm=26&gp=0.jpg'
    ]
    private show:boolean = false
    private index:number = 0
    private startPosition:number = 0

    showPreview(index:any){
        this.index = index + 1
        this.startPosition = index
        this.show = true
    }
    onChange(index:any) {
      this.index = index+1;
    }
}
</script>

<style lang="less" scoped>
.main-top-container{
    padding: 7px;
    .main-top-body{
        border: solid 0.5px #999999;
        box-shadow: 3px 3px 6px #999;
    }
}
</style>

