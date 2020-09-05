<template>
    <div class="uploadImg">
        <van-nav-bar
            title="图片上传"
            left-arrow
            @click-left="onClickLeft"
            class="nav-title"
        />
        <div class="main">
            <div class="body">
                <div class="imgCtn" v-for="(item, index) in imgList" :key="index">
                    <img :src="item" alt="" srcset="" @click="showImgPreview(index)">
                </div>
                <div class="imgCtn" v-show="isLoading">
                    <div class="loading">
                        <van-loading type="spinner" color="#1989fa" size="50"/>
                    </div>
                </div>
                <div class="imgCtn">
                    <img src="../../../assets/icon/addImg.png" alt="" @click="showAlert = true">
                </div>
            </div>
        </div>
        <van-popup v-model="showAlert"  position="bottom">
            <div class="select">
                <p>
                    拍照
                    <input type="file" accept="image/*" capture="camera" multiple @change="selectFile">
                </p>
                <p @click="showAlert = false">
                    取消
                </p>
            </div>
        </van-popup>
        <van-image-preview 
            v-model="imgPreview" 
            :images="imgList" 
            @change="onChange"
            :startPosition="startPosition"
        >
            <template v-slot:imgPrevIndex>第{{ imgPrevIndex }}页</template>
        </van-image-preview>
    </div>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'
import { Compress } from '@/util/util'
@Component
export default class uploadImg extends Vue {
    private imgList:Array<any> = []
    private isLoading:boolean = false
    private showAlert:boolean = false
    private startPosition:number = 0
    private imgPreview:boolean = false
    private imgPrevIndex:number = 0


    onClickLeft(){
        this.$router.go(-1)
    }

    showImgPreview(index:any){
        this.imgPrevIndex = index + 1
        this.startPosition = index
        this.imgPreview = true
    }

    selectFile(event:any){
        this.showAlert = false
        if (event.target.files && event.target.files.length > 0) {
            this.isLoading = true
            let file:any = event.target.files[0]
            let fr:any = new FileReader()
            fr.readAsDataURL(file)
            fr.onload = (imgObj:any) => {
                let img:any = new Image()
                img.src = imgObj.target.result
                img.onload = (e:any) => {
                    Compress(img,e.path[0].height,e.path[0].width,(newImg:any) => {
                        this.imgList.push(newImg)
                    })
                }
                this.isLoading = false
            }
        }
    }
    onChange(index:any) {
      this.imgPrevIndex = index+1;
    }
}
</script>
<style lang="less" scoped>
.uploadImg{
    height: 100%;
    width: 100%;
    .main{
        height: calc(100% - 40px);
        width: 100%;
        overflow: hidden;
        .body{
            padding: 16px;
            display: flex;
            flex-wrap: wrap;
        }
        .imgCtn{
            width: 33.33%;
            height: 0;
            padding-top: 33.33%;
            position: relative;
            img{
                padding: 10px;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
                box-sizing: border-box;
            }
            .loading{
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100%;
                width: 100%;
                position: absolute;
                top: 0;
                left: 0;
            }
        }
    }
}
.select{
    width: 100%;
    bottom: 0;
    left: 0;
    p{
        line-height: 44px;
        font-size: 16px;
        text-align: center;
        border-bottom: solid 1px #eaeaea;
        position: relative;
        input{
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            opacity: 0;
            z-index: 1;
        }
    }
}
</style>