'use strice';
import * as echarts from 'echarts'

export function bar(id, title, xaixs, series, color, callback) {
    let instance = echarts.init(document.getElementById(id));
    let colorList = color || ['#fdab5d', '#4CDA99', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
    instance.setOption({
        title: {
            text: title
        },
        color: colorList,
        tooltip: {
            show: false,
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid:{
          left:"0",
          width: '100%'
        },
        legend: {
            show: false
        },
        xAxis: {
            show: false,
            type: "category",
            data: xaixs,
            axisLabel: {
                interval: 0
            }
        },
        yAxis: {
            show: false
        },
        barWidth: 5,
        series: series
    }, true)
    instance.on('click', (params) => {
        callback();
    })
    window.onresize = () => {
        instance.resize();
    }
};
export function line(id, title, xaixs, series, color, callback) {
    let instance = echarts.init(document.getElementById(id));
    let colorList = color || ['#fdab5d', '#4CDA99', '#F0CA00', '#FF7362', '#A689EC', '#12BCE4'];
    instance.setOption({
        title: {
            text: title
        },
        color: colorList,
        tooltip: {
            show: true,
            trigger: 'axis',
            axisPointer: {
                type: 'line'
            }
        },
        legend: {
            show: false
        },
        grid:{
          left:"0",
          width: '100%'
        },
        xAxis: {
            show: false,
            type: "category",
            data: xaixs,
            axisLabel: {
                interval: 0
            }
        },
        yAxis: {
            show: true,
            type: 'time',
        },
        series,
    })
    instance.on('click', (params) => {
        callback();
    })
    window.onresize = () => {
        instance.resize();
    }
}
