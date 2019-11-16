<template>
  <div>
    <!--  分性别人口迁【出】原因  -->
    <div id="rkqcyyChart" style="height: 260px;" ></div>
  </div>
</template>

<script>
    export default {
      name: "rkqcyy",
      data(){

        return{
          rkqcyyOption: {
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              orient: 'vertical',
              right: 'right',
              padding:[0,0,0,0],
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
                name:'迁出原因',
                type:'pie',
                radius : '80%',
                center: ['50%', '50%'],
                data:[

                  {value:335, name:'学习'},
                  {value:310, name:'商业'},
                  {value:274, name:'出国'},
                  {value:235, name:'迁移'},
                  {value:200, name:'其他'}
                ]
                  .sort(function (a, b) { return a.value - b.value; }),
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
                color : [  '#42e9c4','#2c7dff','#2dffa3','#b15aff','#00ccff'],

                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                  return Math.random() * 200;
                }
              }
            ]
          },

        }
      },
      methods: {
        drawrkqyyy(){
          // 获取dom并初始化
          const rkqyyyChart = this.$echarts.init( document.getElementById("rkqcyyChart" ) );
          // 使用刚指定的配置项和数据显示图表。
          rkqyyyChart.setOption( this.rkqcyyOption, true);
          // 宽度自适应
          window.addEventListener("resize", () => {
            rkqyyyChart.resize();
          });
        }
      },
      mounted() {
        // 渲染图表
        this.drawrkqyyy();

      },
    }
</script>

<style scoped>

</style>
