<template>
    <div  >
      <!--   男女比例图   -->
      <div id="nvblchart" style="height: 160px"> </div>
      <div style="padding-bottom: 5px;text-align: center">男女性别比 {{xbb}} </div>
    </div>
</template>

<script>
    export default {
      name: "nvbl",

      data(){
        this.xbb = 0;
        this.nvblData = [];
        return {
          xbb :( (121556 / 112554) * 100).toFixed(2) ,
        }
      },

      methods:{
        drawnvbl(){
          const nvblChart = this.$echarts.init( document.getElementById("nvblchart" ) );

          // 配置项
          let nvblOption = {
            tooltip: {
              trigger: 'item',
              position:'top',
              formatter: "{a} <br/>{b}:{c} ({d}%)"
            },
            legend: {
              data:['男','女'],
              textStyle: {
                fontWeight: 'normal',              //标题颜色
                color: '#ffffff'
              },
            },
            series: [
              {
                name:'男女比例',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '50%'],

                label: {
                  normal: {
                    position: 'inner'
                  }
                },
                labelLine: {
                  normal: {
                    show: false
                  }
                },
                data: this.nvblData,
              }
              ],
            color : [ '#42e9c4','#00A1FF'],//设置饼状图每个颜色块的颜色
          };
          nvblChart.setOption( nvblOption , true );// 使用刚指定的配置项和数据显示图表。
          window.addEventListener("resize", () => {
            nvblChart.resize();
          });
        }

      },
      mounted() {
        this.nvblData = [
          { value:112554, name:'女' },
          { value:121556, name:'男' },
        ];
        this.drawnvbl();

      }


    }
</script>

<style scoped>

</style>
