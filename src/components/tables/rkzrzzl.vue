<template>
    <div>
      <!--   迁移去往地   -->
<!--      <div id="rkzrzzlchart" style="height: 260px"></div>-->

      <dv-active-ring-chart :config="qyqwconfig" style="width: 100%;height:260px" />

    </div>
</template>

<script>
    export default {
      name: "rkzrzzl",
      data(){
        return {

          // rkzrzzlOption: {
          //   color: ['#00ff99', '#007dff','#FFD700'],
          //   tooltip: {
          //     trigger: 'axis'
          //   },
          //   legend: {
          //     data: ['迁入率', '迁出率'],
          //     textStyle: {
          //       fontWeight: 'normal',              //标题颜色
          //       color: '#ffffff'
          //     }
          //   },
          //   grid: {
          //     left: '1',
          //     right: '15',
          //     bottom: '20',
          //     containLabel: true
          //   },
          //   // toolbox: {
          //   //   feature: {
          //   //     saveAsImage: {}
          //   //   }
          //   // },
          //   xAxis: {
          //     type: 'category',
          //     boundaryGap: false,
          //     data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
          //     axisLabel: {
          //       // formatter: '{value} ml', 这里格式化x轴表现形式
          //       show: true,
          //       textStyle: {
          //         color: '#fff'
          //       }
          //     },
          //   },
          //   yAxis: {
          //     name: '比率(%)',   //坐标轴名称
          //     nameTextStyle: {    // 坐标轴名称的文字样式
          //       color: '#fff'
          //     },
          //     type: 'value',
          //     min:0,
          //     max:100,
          //     axisLabel: {
          //       show: true,
          //       textStyle: {
          //         color: '#fff'
          //       }
          //     },
          //     // 设置y轴分割线
          //     splitLine:{                 //坐标轴在 grid 区域中的分隔线。
          //       show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
          //       interval: "auto",         //坐标轴分隔线的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，可以用数值表示间隔的数据，也可以通过回调函数控制。回调函数格式如下：
          //       lineStyle: {
          //         color: '#3e3e3e'
          //       }
          //     },
          //   },
          //   series: [
          //     {
          //       name: '迁入率',
          //       type: 'line',
          //       stack: '总量',
          //       data: [20, 22, 13, 34, 55, 3, 14,30, 20],
          //
          //     },
          //     {
          //       name: '迁出率',
          //       type: 'line',
          //       stack: '总量',
          //       data: [60, 42, 11, 34, 22, 37, 11,12, 27],
          //     }
          //   ],
          // }

          qyqwconfig:{
            lineWidth: 19,
            radius:'70%',
            // digitalFlopStyle: {
            //   fontSize: 18,
            //   fill: '#fff'
            // },
            data: [
              {
                name: '跨省',
                value: 34
              },
              {
                name: '省内跨市',
                value: 30
              },
              {
                name: '市内跨区县',
                value: 25
              },
              {
                name: '区县跨乡镇',
                value: 20
              },
              {
                name: '乡镇内',
                value: 22
              },
              {
                name: '国外港澳台',
                value: 19
              }
            ]
          }

        }
      },
      methods:{
        // drawrkzrzzl(){
        //   const rkzrzzlChart = this.$echarts.init( document.getElementById("rkzrzzlchart" ) );
        //   rkzrzzlChart.setOption( this.rkzrzzlOption, true);// 使用刚指定的配置项和数据显示图表。
        //   window.addEventListener("resize",  this.throttle( function(){
        //     rkzrzzlChart.resize();
        //   }));
        //
        // },
        // // 监听窗口大小变化在一定时间内只触发一次，避免高频执行
        // throttle(fn) {
        //   // 当前是否可触发
        //   let isOpen = true;
        //   return function () {
        //     if (!isOpen) return;
        //     isOpen = false;
        //     setTimeout(() => {
        //       fn.apply(this, arguments);
        //       isOpen = true;
        //     }, 500)
        //   }
        // }


      },

      mounted() {
        // 渲染地图
        // this.drawrkzrzzl();
      },

    }
</script>

<style scoped>

</style>
