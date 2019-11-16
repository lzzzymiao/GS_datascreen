<template>
  <!--  年龄段分析滚动table -->
  <div >
    <ve-bar
      :data="zaywData"
      :settings="zaywSettings"
      :extend="zaywExtend"
      height="200px"
    ></ve-bar>
  </div>

</template>

<script>
    export default {
      name: "nldfx",
      data(){
        this.zaywSettings = {
          dimension: ['type'],
          metrics: ['num']
        };
        this.zaywExtend = {
          // 画布内边距设置
          grid: {
            right: '10%',
            top:'25',
            height:'80%',
            bottom:'10'
          },
          tooltip: {
            trigger: 'axis',   // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
            axisPointer: {    // 坐标轴指示器，坐标轴触发有效
              type: 'cross',
              crossStyle: {
                color: '#8b8b8b'
              }
            },

          },
          yAxis : {
            nameTextStyle: {    // 坐标轴名称的文字样式
              color: '#fff'
            },
            // y轴数值颜色
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'
              }
            },
          },
          xAxis: {
            show:false ,
          },
          legend: {
            show: false,
          },
          series: {
            label: { show: true, position: "right",  color: '#ffffff' },
            barWidth : '15',//柱图宽度
            silent:true ,     // 鼠标移过去不显示小手
          },
          itemStyle: {
            // 设置柱子颜色渐变
            barBorderRadius:  [0, 10,10, 0] ,//（顺时针左上，右上，右下，左下）,
            color: new this.$echarts.graphic.LinearGradient( 2, 0, 0, 0 , [
              {offset: 0, color: '#00fbff'}, { offset: 1, color: '#409EFF'}
            ]),
            // legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
          },
        };

        return {
          zaywData: {}
        }

      },

      mounted() {
        this.zaywData = {
          columns: ['type', 'num' ],
          rows: [
            { 'type': '0-17岁',  'num':  1393, },
            { 'type': '18-34岁', 'num':  3530, },
            { 'type': '35-59岁', 'num':  2923, },
            { 'type': '60岁以上', 'num': 2923, },
          ]
        }

      },


    }
</script>

<!--suppress CssInvalidFunction -->
<style scoped>



</style>
