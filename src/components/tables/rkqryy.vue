<template>
  <div>
    <!--  分性别人口迁【入】原因  -->
    <div id="rkqr_yyChart" style="height: 260px;" ></div>
  </div>
</template>

<script>
    export default {
      name: "rkqryy",
      data(){

        return{
          rkqr_yyOption:{
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              right: 'right',
              padding:[0,10,0,0],
              textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#ffffff'
              },
            },

            visualMap: {
              show: false,
              min: 80,
              max: 600,
              inRange: {
                colorLightness: [0, 1]
              }
            },
            series : [
              {
                name:'迁入原因',
                type:'pie',
                radius : '80%',
                center: ['50%', '50%'],
                data:[
                  { value:310, name:'学习' },
                  { value:390, name:'商业' },
                  { value:220, name:'出国' },
                  { value:335, name:'迁入' },
                  { value:201, name:'其他' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                  normal: {
                    position: 'inner',
                    textStyle: {
                      fontSize:11,
                      color: '#ffffff'
                    }
                  }
                },

                //设置饼状图每个颜色块的颜色
                color : [ '#42e9c4','#4894ff','#00ccff'],

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function ( idx ) {
                  return Math.random() * 200;
                }
              }
            ]
          },

        }
      },
      methods: {
        drawrkqryy(){
          // 获取dom并初始化
          const rkqryyChart = this.$echarts.init( document.getElementById("rkqr_yyChart" ) );
          // 使用刚指定的配置项和数据显示图表。
          rkqryyChart.setOption( this.rkqr_yyOption, true);
          // 宽度自适应
          window.addEventListener("resize",  this.throttle( function(){
            rkqryyChart.resize();
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
        // 渲染图表
        this.drawrkqryy();

      },
    }
</script>

<style scoped>

</style>
