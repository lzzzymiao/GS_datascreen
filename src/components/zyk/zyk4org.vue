<template>
<div>
  <div style="padding: 10px">
    <el-row >
      <el-col :span="18" :offset="3" >
        <div style="height: 35px;line-height: 35px;margin-top: 10px" >
          <span style="font-size: 18px;font-weight: bolder" >组织视角</span>
        </div>
        <div style="margin-top: 30px">
          <ve-histogram
            :data="chartData"
            :settings="chartSettings"
            :extend="barExtend"
            :legend-visible="false"
            :events="chartEvents"
            height="600px"
          ></ve-histogram>
        </div>
      </el-col>
      <el-col :span="3" ></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
    export default {
      name: "zyk4org",
      data() {
        this.loading = true;
        this.tableData = [];
        this.orgName = [];   // 柱状图x轴填充数据
        this.ogrData = [];

        this.barExtend = {
          tooltip: {
            trigger: 'axis',   // 触发类型；轴触发，axis则鼠标hover到一条柱状图显示全部数据，item则鼠标hover到折线点显示相应数据
            axisPointer: {    // 坐标轴指示器，坐标轴触发有效
              type: 'cross',
              crossStyle: {
                color: '#cfcfcf'
              }
            }
          },
          yAxis : {
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
            splitLine: {                 //坐标轴在 grid 区域中的分隔线。
              show: true,              //是否显示分隔线。默认数值轴显示，类目轴不显示。
              lineStyle: {
                color: '#272727'
              }
            },
          },
          xAxis: {
            nameTextStyle: {    // 坐标轴名称的文字样式
              color: '#fff',
            },
            type: 'category',
            axisPointer: {  // 坐标轴指示器，坐标轴触发有效
              type: 'line'  // 默认为line，line直线，cross十字准星，shadow阴影
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: '#fff',   // x轴数值颜色
                fontSize:17
              }
            },
          },
          series: {
            label: { show: true, position: "top",  color: '#ffffff' },
            barWidth : '20',//柱图宽度
            emphasis:{
              itemStyle:{
                color: '#39FFA1',
                cursor: 'default',
              }
            }
          },
          itemStyle: {
            // 设置柱子颜色渐变
            color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1, [
              {offset: 0, color: '#2ece82'}, { offset: 1, color: '#00ffd6'}
            ]),
            // legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
          },
        };

        this.chartEvents = {
          click: (e) => {
            self.name = e.name;
            console.log(e);
            this.$router.push( { name: 'zyk4orgDetail', params: { orgname: e.name } } )
          }
        };

        // v-charts 配置项
        this.chartSettings = {
          yAxisName: ['资源数'],
        };

        return {
          chartData: {
            columns: [ '组织名称' , '资源数' ],
            rows: [
              { '组织名称': '人社厅' , '资源数': 2345, },
              { '组织名称': '省厅'   , '资源数': 3333, },
              { '组织名称': '市局'   , '资源数': 1232, },
              { '组织名称': '成都公安', '资源数': 3212, },
              { '组织名称': '自贡公安', '资源数': 4322, },
              { '组织名称': '广安公安', '资源数': 1654, },
              { '组织名称': '教育局' , '资源数': 1654, },
              { '组织名称': '人社厅' , '资源数': 2341, },
              { '组织名称': '粮食局' , '资源数': 2000, },
              { '组织名称': '卫生局' , '资源数': 5432, },
              { '组织名称': '德阳公安', '资源数': 2654, },
              { '组织名称': '巴中公安', '资源数': 2312, },
              { '组织名称': '公安'  , '资源数': 1654, },
              { '组织名称': '公安2' , '资源数': 2000, },
              { '组织名称': '公安3' , '资源数': 3541, },
            ]
          },
        }
      },
      methods: {
        drawzzChart(){
          const zzChart = this.$echarts.init( document.getElementById( "zzChartdom" ) );
          this.zzChart = zzChart;
          // 组织视角状图参数
          let zzChartOption = {
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
              name: '组织名称',   //坐标轴名称
                nameTextStyle: {    // 坐标轴名称的文字样式
                color: '#fff'
              },
              type: 'category',
                data: this.orgName ,
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
              name: '资源数',   //坐标轴名称
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
                color: '#272727'
                }
              },
            },
            series: [
              {
                name:'资源数',
                data:  this.ogrData ,
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'top',
                    color: '#ffffff'
                  }
                },
                barWidth : '25',//柱图宽度
              }],
              itemStyle: {
              // 设置柱子颜色渐变
              color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1, [
                {offset: 0, color: '#16CEB9'}, { offset: 1, color: '#00ffc6'}
              ]),
              // legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
            },


          };
          this.zzChart.setOption( zzChartOption, true);// 使用刚指定的配置项和数据显示图表。

          window.addEventListener("resize", () => {
            this.zzChart.resize();
          });


        },

        clickthis( params ){
          console.log(params);
          let point=[params.offsetX,params.offsetY];
          if(this.zzChart.containPixel('gird', point)){
            let xIndex=this.zzChart.convertFromPixel({seriesIndex:0}, point)[0];
            let op=this.zzChart.getOption();
            let name=op.xAxis[0].data[xIndex];
            console.log( xIndex);
            console.log(op);
            console.log(name);
          }
        }


      },

      mounted() {
        // 一进来就请求后端接口

           // setInterval( ()=>{
        //   this.loading = false;
        // }, 2000 );



        // 渲染地图
        // this.drawzzChart();

      }


    }
</script>

<style scoped>



</style>
