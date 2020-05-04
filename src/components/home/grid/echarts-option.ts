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
                    },
                },
                fillerColor:'#4981ec',
                start:0,
                end:40,
                showDetail:false,
                borderColor :'#fff',
                handleSize:'80%',
                handleIcon:`
                    M 100, 100
                    m -75,0
                    a 75,75 0 1,0 150,0
                    a 75,75 0 1,0 -150,0`,
                handleStyle:{
                    color:'rgba(46,128,246,1)',
                },
                height:15,
                bottom:0,
            }
        ],
        xAxis: {
            type: 'category',
            data: data.time,
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
            data: data.average,
            lineStyle:{
                color:'#ff7f50'
            },
        },{
            type: 'bar',
            name:'总量',
            data: data.total,
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
