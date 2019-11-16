<template>
    <div>
      <!-- 重点少数民族人口及占比 -->
      <div id="zdssmzrk" style="height: 200px" ></div>
    </div>
</template>

<script>
    export default {
      name: "zdssmzrk",
      data(){

        return{
          // 重点少数民族人口及占比柱状图参数
          zdssmzrkOption: {
            // 提示框组件
            tooltip: {
              trigger: 'axis',   // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
              axisPointer: {    // 坐标轴指示器，坐标轴触发有效
                type: 'cross',
                crossStyle: {
                  color: '#cfcfcf'
                }
              }
            },
            // 画布内边距设置
            grid: {
              left: '5',
              right: '15',
              bottom: '10',
              height:'80%',
              containLabel: true   //g0rid 区域是否包含坐标轴的刻度标签，
            },
            xAxis: {
              type: 'category',
              data: [ '民族','民族','民族','民族','民族','民族','民族','民族','民族','民族'  ],
              axisPointer: {  // 坐标轴指示器，坐标轴触发有效
                type: 'line'  // 默认为line，line直线，cross十字准星，shadow阴影
              },
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'   // x轴数值颜色
                }
              },
            },
            yAxis: {
              name:  '人数(万)',   //坐标轴名称
              type: 'value',
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
              // y轴分割颜色
              splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                interval: "auto",         //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                lineStyle: {
                  color: '#3e3e3e'
                }
              },
            },
            series: [
              {
                name:'人口总数',
                data: [ 1750, 1300 ,2000, 1900, 2200, 2200, 1400, 1900, 2200, 2700 ],
                type: 'bar',
                barWidth : '10',//柱图宽度
              }],
            itemStyle: {
              // 设置柱子颜色渐变
              color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1, [
                {offset: 0, color: '#b7ec3f'}, { offset: 1, color: '#00edff'}
              ]),
              legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
            },


          }
        }
      },
      methods:{
        drawzdssmzrk(){
          const zdssmzrkChart = this.$echarts.init( document.getElementById("zdssmzrk" ) );
          zdssmzrkChart.setOption( this.zdssmzrkOption, true);// 使用刚指定的配置项和数据显示图表。
          window.addEventListener("resize",  this.throttle( function(){
            zdssmzrkChart.resize();
          }));

        },
        // 监听窗口大小变化在一定时间内只触发一次，避免高频执行
        throttle(fn) {
          // 当前是否可触发
          let isOpen = true;
          return function () {
            if (!isOpen) return;
            isOpen = false;
            setTimeout(() => {
              fn.apply(this, arguments);
              isOpen = true;
            }, 500)
          }
        }

      },

      mounted() {
        // 渲染地图
        this.drawzdssmzrk();
      },

    }
</script>

<style scoped>

</style>
