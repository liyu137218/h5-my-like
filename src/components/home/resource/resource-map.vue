<template>
    <div class="map-body">
        <div id="resourceMap" tabindex="0" class="resourceMap"></div>
        <div class="city-label"  @click="showPoup">
            <van-icon name="location-o" color="#fff" size="15px"/>{{cityOpt.name}}
        </div>
        <div class="show-base-map-btn" @click="CtrlBaseMap()">底图</div>
        <van-popup
            v-model="showRegion"
            position="bottom"
            :round="true"
            :close="onClose">
            <RegionSelecter :cityOpt="cityOpt" @changeRegion="changeRegion"/>
        </van-popup>
        <!-- <div class="region-body" v-if="showRegion">
        </div> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {Map,View,layer,style,source,format,proj} from 'openlayers'
import cityOption from './data-config'
import RegionSelecter from './region-select.vue'
@Component({
    components:{
        RegionSelecter
    }
})
export default class ResourceMap extends Vue {
    private map:any = null
    private showBaseMap:boolean = false
    private baseMapLayer:any = null
    private mapView:any = null
    private vectorLayer:any = null
    private cityOpt:any = {}
    private showRegion:boolean = false
    mounted() {
        this.initMapData()
    }
    createMap(){
        this.map = new Map({
            target:'resourceMap',
            layers:[]
        })
        this.CtrlBaseMap()
        this.initMapView()
        this.addVectorLayer()
        this.addMapEvent()
    }
    initMapView(){
        let viewOption:any = {
            center:this.cityOpt.center,
            zoom:6,
            minZoom:4,
            maxZoom:12,
            projection:'EPSG:4326'
        }
        this.mapView = new View(viewOption)
        this.map.setView(this.mapView)
    }
    getLocation(){
        debugger
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((res:any)=>{
                console.log(res)
            })
        }else{
            return {}
        }
    }
    addVectorLayer(){
        this.vectorLayer = new layer.Vector({
                source:new source.Vector({
                    url:this.cityOpt.url,
                    format: new format.GeoJSON()
                }),
                style:new style.Style({
                    fill:new style.Fill({
                        color:'rgba(255,159,16,0.5)'
                    }),
                    stroke:new style.Stroke({
                        color:'#4981ec'
                    })
                }),
                zIndex:1
            })
        this.map.addLayer(this.vectorLayer)
    }
    addMapEvent(){
        this.map.on('singleclick',(e:any)=>{
            console.log(JSON.stringify(e.coordinate))
        })
    }
    CtrlBaseMap(){
        if (this.showBaseMap) {
            this.map.removeLayer(this.baseMapLayer)
            this.baseMapLayer = null
            this.showBaseMap = false
        }else{
            this.showBaseMap = true
            this.baseMapLayer = new layer.Tile({
                    source:new source.OSM(),
                    zIndex:0
                })
            this.map.addLayer(this.baseMapLayer)
        }
    }
    initMapData(){
        // 假装这里有接口氢气,默认给cityOpt赋值第一个值
        setTimeout(() => {
            this.cityOpt = cityOption[0]
            this.createMap()
        }, 200);
    }
    onClose(){
        this.showRegion = false
    }
    showPoup(){
        this.showRegion = true
    }
    changeRegion(region:any){
        this.onClose()
        this.cityOpt = region
        this.map.removeLayer(this.vectorLayer)
        this.initMapView()
        this.addVectorLayer()
    }
}
</script>

<style lang="less" scoped>
.resourceMap{
    width: 100%;
    height: calc(~"100vh - 90px");
}
/deep/.ol-overlaycontainer-stopevent,.ol-overlaycontainer{
    height: 0 !important;
    display: none !important;
}
.show-base-map-btn{
    height: 50px;
    width: 50px;
    font-size: 14px;
    line-height: 50px;
    text-align: center;
    position: fixed;
    bottom: 70px;
    right: 20px;
    border-radius: 50%;
    color: #fff;
    background-image: linear-gradient(to right,#4981ec, #10b7ff);
}
.city-label{
    height: 25px;
    line-height: 25px;
    color: #fff;
    background-image: linear-gradient(to right,#4981ec, #10b7ff);
    padding: 0 25px 0 10px;
    position: fixed;
    left: 0;
    top: 60px;
    border-radius: 0 30px 30px 0;
    i{
        top: 3px;
        margin-right: 5px;
    }
}
</style>