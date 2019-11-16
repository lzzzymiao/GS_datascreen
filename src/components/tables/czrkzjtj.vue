<template>
    <div>
      <!--   城镇人口总数及城镇化率变化  柱状图   -->
      <div id="czrkzjtj" style="height: 220px"></div>
    </div>
</template>

<script>
    export default {
      name: "czrkzjtj",
      data() {
        return {
          // czrkzjtj 相关参数
          czrkzjtjOption :{
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
            // 工具条
            // toolbox: {
            //   feature: {
            //     dataView: {show: true, readOnly: false},
            //     magicType: {show: true, type: ['line', 'bar']},
            //     restore: {show: true},
            //     saveAsImage: {show: true}
            //   }
            // },
            // 图例组件
            legend: {
              data:['人口数','城镇化率'],      // series中根据此数组区分
              textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#ffffff'
              },
            },
            // 画布内边距设置
            grid: {
              left: '5',
              right: '15',
              bottom: '10',
              height: "75%",                   //图例高度
              containLabel: true   //grid 区域是否包含坐标轴的刻度标签，
            },
            // x轴设置
            xAxis: [
              {
                type: 'category',
                data: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
                axisPointer: {  // 坐标轴指示器，坐标轴触发有效
                  type: 'line'  // 默认为line，line直线，cross十字准星，shadow阴影
                },
                axisLabel: {
                  // formatter: '{value} ml', 这里格式化x轴表现形式
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
              }
            ],
            yAxis: [
              {
                name:  '人口数(万)',   //坐标轴名称
                type: 'value',      //坐标轴类型:
                                    // 'value' 数值轴，适用于连续数据。
                                    // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                                    // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                                    // 'log' 对数轴。适用于对数数据
                nameTextStyle: {    // 坐标轴名称的文字样式
                  color: '#fff'
                },
                min: 20,
                axisLine:{                 //坐标 轴线
                  show: false,             //是否显示坐标轴轴线
                  onZero: true,           //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
                  lineStyle: {}
                },
                splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                  show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                  interval: "auto",         //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                  lineStyle: {
                    color: '#3e3e3e'
                  }
                },
                // interval: 0,       // 是否是反向坐标轴
                axisLabel: {
                  // formatter: '{value}',
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
              },
              {
                type: 'value',
                name: '城镇化率(%)',
                nameTextStyle: {    // 坐标轴名称的文字样式
                  color: '#fff'
                },
                min: 0,
                max: 100,
                axisLine:{                 //坐标 轴线
                  show: true,             //是否显示坐标轴轴线
                  onZero: true,           //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
                  lineStyle: {
                    color:"#383838"
                  }
                },
                interval: 20,
                //坐标轴刻度标签的相关设置
                axisLabel: {
                  formatter: '{value} %',
                  show: true,
                  textStyle: {
                    color: '#fff'
                  }
                },
                splitLine:{                 //坐标轴在 grid 区域中的分隔线。
                  show: false,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
                  interval: "auto",         //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
                  lineStyle: {}
                },
                axisTick :{                 //坐标轴刻度相关设置
                  show: false,              //是否显示坐标轴刻度。
                  alignWithLabel: false,    //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
                  // interval: auto,        //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
                  inside: false,            //坐标轴刻度是否朝内，默认朝外。
                  length: 5,                //坐标轴刻度的长度。
                  lineStyle: {
                    color:"#383838"
                  }
                }
              }
            ],
            series: [
              {
                name:'人口数',
                type:'bar',
                data:[400, 500, 450, 650, 1020, 1300, 1201, 1400, 1600, 1450, 1750, 2100],
                barWidth : '19',//柱图宽度,
              },
              {
                name:'城镇化率',
                type:'line',
                yAxisIndex: 1,
                data:[22.0, 30.2, 33.3, 41.5, 40.3, 40.2, 60.3, 55.4, 63.0, 72.5, 67.0, 75.2]
              },
            ],
            itemStyle: {
              // 设置柱子颜色渐变
              color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1, [
                {offset: 0, color: '#00ffc4'}, { offset: 1, color: '#00c9ff'}
              ]),
              legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
            },
            lineStyle:{
              color: '#ffd600',
              normal:{},
              emphasis:{},
            },
          }

        }

      },
      methods:{
        drawczrkzjtj() {
          const xczyczrkChart = this.$echarts.init( document.getElementById("czrkzjtj" ) );
          xczyczrkChart.setOption( this.czrkzjtjOption, true);// 使用刚指定的配置项和数据显示图表。
          // 宽度自适应
          window.addEventListener("resize",  this.throttle( function(){
            xczyczrkChart.resize();
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
        this.drawczrkzjtj();
      },


    }
</script>

<style scoped>

</style>
