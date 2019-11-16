<template>
    <!-- 治安业务信息系资源图，子组件公用  通过后台接口渲染不同数据 -->
    <div style="padding-top: 15px">
      <ve-bar
        :data="zaywData"
        :settings="zaywSettings"
        :extend="zaywExtend"
      ></ve-bar>
    </div>
</template>

<script>
    export default {
      name: "zyk4workDetail",
      props:{
        queryParam:{
          type:Object,
        },

      },
      data(){
        this.zaywSettings = {
          dimension: ['名称'],
          metrics: ['资源数']
        };
        this.zaywExtend = {
          // 画布内边距设置
          grid: {
            left: '10',
            right: '6%',
            bottom: '10',
            top:'18',
          },
          tooltip: {
            trigger: 'axis',   // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
            axisPointer: {    // 坐标轴指示器，坐标轴触发有效
              type: 'cross',
              crossStyle: {
                color: '#8b8b8b'
              }
            }
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
            axisPointer: {  // 坐标轴指示器，坐标轴触发有效
              type: 'line'  // 默认为line，line直线，cross十字准星，shadow阴影
            },
            // x轴分割颜色
            splitLine: {                 //坐标轴在 grid 区域中的分隔线。
              show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
              lineStyle: {
                color: '#444444'
              }
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff'   // x轴数值颜色
              }
            },
          },
          legend: {
            right: 'right',
            textStyle: {
              fontWeight: 'normal',              //标题颜色
              color: '#ffffff'
            },
          },
          series: {
            label: { show: true, position: "right",  color: '#ffffff' },
            barWidth : '15',//柱图宽度
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
      methods: {

      },
      mounted() {
        console.log(this.queryParam);
        this.zaywData = {
          columns: ['名称', '资源数' ],
          rows: [
            { '名称': '户籍管理',     '资源数': 1393, },
            { '名称': '身份证管理',   '资源数': 3530, },
            { '名称': '流动人口管理', '资源数': 2923, },
            { '名称': '居住证管理',   '资源数': 1723, },
            { '名称': '重点人管理',   '资源数': 3792, },
            { '名称': '实有人口管理', '资源数': 4593, },
            { '名称': '行业场所管理', '资源数': 3792, },
          ]
        }

      },
      watch:{

      }


    }
</script>

<style scoped>

</style>
