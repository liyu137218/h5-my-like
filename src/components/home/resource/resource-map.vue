<template>
  <div id="resourceMap" tabindex="0" class="resourceMap">

  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {Map,View} from 'ol'
import OSM from 'ol/source/OSM'
import VectorSource from 'ol/source/Vector'
import VectorLayer from 'ol/layer/Vector'
import Tilelayer from 'ol/layer/Tile'
import GeoJSON from 'ol/format/GeoJSON'
import Style from 'ol/style/Style'
import Fill from 'ol/style/Fill'
import Stroke from 'ol/style/Stroke'
import 'ol/ol.css'
// const {Map, View, interaction} = require('ol')
// const {OSM,Vector} = require('ol/source')
// const {Tile,Vector} = require('ol/layer')

@Component
export default class ResourceMap extends Vue {
    private map:any = null

    mounted() {
        // this.getLocation()
        this.createMap()
    }
    createMap(){
        let viewOption:any = {
            center:[113.4,23.08],
            zoom:6,

            projection:'EPSG:4326'
        }
        this.map = new Map({
            target:'resourceMap',
            view:new View(viewOption),
            layers:[
                new Tilelayer({
                    source:new OSM()
                }),
            ]
        })
        this.addGDVectorLayer()
    }
    initMapView(){

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
    addGDVectorLayer(){
        let VectorSourceOptions:any = {
                url:'https://geo.datav.aliyun.com/areas/bound/440000_full.json',
                format: new GeoJSON()
            }
        let vectorLayer:any = new VectorLayer({
                    source:new VectorSource({
                        url:'https://geo.datav.aliyun.com/areas/bound/440000_full.json',
                        format: new GeoJSON()
                    }),
                    style:new Style({
                        fill:new Fill({
                            color:'rgba(255,159,16,0.5)'
                        }),
                        stroke:new Stroke({
                            color:'#4981ec'
                        })
                    })
                })
        this.map.addLayer(vectorLayer)
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
</style>