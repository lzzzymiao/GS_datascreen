<template>
  <div style="padding-top: 15px">
    <ve-bar
      id="sychart"
      :data="pmData"
      :settings="pmSettings"
      :extend="pmExtend"
      :height="datalen"
    ></ve-bar>
  </div>
</template>

<script>
    export default {
      name: "zky4synsjdypm",
      data(){
        this.pmSettings = {
          dimension: ['name'],
          metrics: ['dytotal']
        };
        this.pmExtend = {
          // 画布内边距设置
          grid: {
            left: '10',
            right: '6%',
            bottom: '10',
            top:'18',
          },
          tooltip: {
            show:false,
          },
          yAxis : {
            position:"top",
            nameTextStyle: {    // 坐标轴名称的文字样式
              color: '#fff'
            },
            // y轴数值颜色
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',
                fontSize:15
              }
            },
          },
          xAxis: {
            // x轴分割颜色
            splitLine: {                 //坐标轴在 grid 区域中的分隔线。
              show: false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
            },
            axisLabel: {
              show: false,
            },
          },
          legend: {
            show:false,
          },
          series: {
            label: {
              show: true,
              position: "right",
              color: '#ffffff',
            },
            barWidth : '10',  //柱图宽度
            silent:true ,     // 鼠标移过去不显示小手
          },
          itemStyle: {
            // 设置柱子颜色渐变
            barBorderRadius:  [10,10,10, 10] ,//（顺时针左上，右上，右下，左下）,
            color: new this.$echarts.graphic.LinearGradient( 0, 0, 1, 0 , [
              {offset: 0, color: '#00ffd4'}, { offset: 1, color: '#00c180'}
            ]),

            // legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
          },
        };

        return {
          pmData: {},
          datalen : '400px',
        }
      },
      methods: {

      },
      mounted() {
        this.pmData = {
          columns: ['name', 'dytotal' ],
          rows: [
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '居住证管理',   'dytotal': 1723, },
            { 'name': '重点人管理',   'dytotal': 3792, },
            { 'name': '实有人口管理', 'dytotal': 4593, },
            { 'name': '行业场所管理', 'dytotal': 3792, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '居住证管理',   'dytotal': 1723, },
            { 'name': '重点人管理',   'dytotal': 3792, },
            { 'name': '实有人口管理', 'dytotal': 4593, },
            { 'name': '行业场所管理', 'dytotal': 3792, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '居住证管理',   'dytotal': 1723, },
            { 'name': '重点人管理',   'dytotal': 3792, },
            { 'name': '实有人口管理', 'dytotal': 4593, },
            { 'name': '行业场所管理', 'dytotal': 3792, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '居住证管理',   'dytotal': 1723, },
            { 'name': '重点人管理',   'dytotal': 3792, },
            { 'name': '实有人口管理', 'dytotal': 4593, },
            { 'name': '行业场所管理', 'dytotal': 3792, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
            { 'name': '居住证管理',   'dytotal': 1723, },
            { 'name': '重点人管理',   'dytotal': 3792, },
            { 'name': '实有人口管理', 'dytotal': 4593, },
            { 'name': '行业场所管理', 'dytotal': 3792, },
            { 'name': '户籍管理',     'dytotal': 1393, },
            { 'name': '身份证管理',   'dytotal': 3530, },
            { 'name': '流动人口管理', 'dytotal': 2923, },
          ]
        };

        // 一条数据需要30px长度，这里根据传来的数据量动态计算canvas需要的height值 来避免拥挤
        console.log( this.pmData.rows.length );
        this.datalen = this.pmData.rows.length * 40 +'px';

      },
      watch:{

      }


    }
</script>

<style scoped>



</style>
