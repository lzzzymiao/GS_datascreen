<template>
<!-- 人口自然增长率与机械增长率变化 -->
    <div>
      <div id='cslswl' style="height: 210px"></div>
    </div>
</template>

<script>
    export default {
      name: "cslswl",
      data(){

        return{
          cslswlOption:{
            tooltip : {
              trigger: 'axis',
              axisPointer: {
                type: 'cross',
                label: {
                  backgroundColor: '#6a7985'
                }
              }
            },
            legend: {
              data:['人口自然增长率','机械增长率变化'],
              textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#ffffff'
              },
            },
            grid: {
              left: '2%',
              right: '5%',
              bottom: '5%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
                axisLabel: {
                  // formatter: '{value} ml', 这里格式化x轴表现形式
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
              }
            ],
            yAxis : [{
              name: '比率(‰)',   //坐标轴名称
              nameTextStyle: {    // 坐标轴名称的文字样式
                color: '#fff',
                fontSize:14
              },
              min:-2,
              max:3,
              type : 'value',
              axisLabel: {
                show: true,
                textStyle: {
                  color: '#fff'
                }
              },
              splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                interval: "auto",         //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                lineStyle: {
                  color: '#3e3e3e'
                }
              },

            }],
            series : [
              {
                name:'人口自然增长率',
                type:'line',
                stack: '总量1',
                areaStyle: {
                  color:'#08bbff'
                },
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                data:[0.9, 1.3, 1.2, 1.9, 0.7, -0.2, 1, -0.3, 1.2, 1.6]
              },
              {
                name:'机械增长率变化',
                type:'line',
                stack: '总量2',
                label: {
                  normal: {
                    show: true,
                    position: 'top'
                  }
                },
                areaStyle: {normal: {}},
                data:[1.6, 1.2, -0.3, -0.1, 1.2, 2.3, -0.9, 1.6,2, 1.5]
              }
            ],
            color : [ '#08bbff','#00ff8d'],
          }
        }
      },

      methods:{
        drawcslswl(){
          const cslswlChart = this.$echarts.init( document.getElementById("cslswl" ) );
          cslswlChart.setOption( this.cslswlOption, true);// 使用刚指定的配置项和数据显示图表。
          // 宽度自适应
          window.addEventListener("resize",  this.throttle( function(){
            cslswlChart.resize();
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
        this.drawcslswl();
      },


    }
</script>

<style scoped>

</style>
