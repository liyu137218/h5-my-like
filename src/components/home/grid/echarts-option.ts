export default function setOption(data:any){
    let option = {
        grid: {
            left: '3%',
            right: '4%',
            bottom: '20',
            top:'40',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis'
        },
        legend:{
            type:'scroll',
            data: ['平均值', '总量']
        },
        dataZoom: [
            {
                show: true,
                type:'slider',
                backgroundColor:'#fff',              
                dataBackground:{
                    lineStyle:{
                        opacity:0
                    },
                    areaStyle:{
                        opacity:0
                    }
                },
                start:0,
                end:40,
                showDetail:false,
                borderColor :'#fff',
                handleSize:'30%',
                handleStyle:{
                    color:'rgba(46,128,246,1)',
                    opacity:0
                },
                bottom:-15
            }
        ],
        xAxis: {
            type: 'category',
            data: ['2019-1','2019-2','2019-3','2019-4','2019-5','2019-6','2019-7','2019-8','2019-9','2019-10','2019-11','2019-12'],
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            },
            axisLabel: {
                interval:0 
            }
        },
        yAxis: {
            type: 'value',
            axisLine:{
                show:false
            },
            axisTick:{
                show:false
            }
        },
        series: [{
            type: 'line',
            name:'平均值',
            smooth:true,
            data: [820, 932, 901, 934, 1290, 1330, 1320,1722,1833,1244,799,2999],
            lineStyle:{
                color:'#ff7f50'
            },
        },{
            type: 'bar',
            name:'总量',
            data: [780, 892, 1901, 2934, 690, 830, 5120,1782,1633,1844,719,3999],
            itemStyle:{
                color:'#4981ec',
                barBorderRadius:5,
            },
            label:{
                show:true,
                position:'top',
                color:'#333'
            },
            barWidth:10
        }]
    }
    return option
}
