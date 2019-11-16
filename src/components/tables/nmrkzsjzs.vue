<template>
<!-- 年末人口总数即增速 柱状图 -->
    <div>
<!--      <h4 style="color: white;margin-left: 20px">{{ msg }}</h4>-->
      <div id="tb_nmrkzsjzs" style="height: 210px" ></div>
    </div>
</template>

<script>
  // 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
  import dataset from '@antv/data-set';
  import * as G2 from "@antv/g2";

  // 例如：import 《组件名称》 from '《组件路径》';
    export default {
      name: "nmrkzsjzs",
      props:{
        currentUser:{
          type : Object
        }
      },
      components: {},
      // 生命周期 - 创建完成（可以访问当前this实例）
      created() {
      },
      // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
      mounted() {
        this.initComponent();
      },
      data() {


          return {
            // 配置项
            nmrkzsjzsOption: {
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
              // 图例组件
              legend: {
                data:['人口总数','增速'],      // series中根据此数组区分.
                // right:10,
                textStyle: {
                  fontWeight: 'normal',              //标题颜色
                  color: '#ffffff'
                },
              },
              // 画布内边距设置
              grid: {
                left: '10',
                right: '10',
                bottom: '10',
                containLabel: true   //grid 区域是否包含坐标轴的刻度标签，
              },
              // x轴设置
              xAxis: [
                {
                  type: 'category',
                  data: [ '2010','2011','2012','2013','2014','2015','2016','2017','2018' ],
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
                  name:  '人口(万)',   //坐标轴名称
                  type: 'value',      //坐标轴类型:
                                      // 'value' 数值轴，适用于连续数据。
                                      // 'category' 类目轴，适用于离散的类目数据，为该类型时必须通过 data 设置类目数据。
                                      // 'time' 时间轴，适用于连续的时序数据，与数值轴相比时间轴带有时间的格式化，在刻度计算上也有所不同，例如会根据跨度的范围来决定使用月，星期，日还是小时范围的刻度。
                                      // 'log' 对数轴。适用于对数数据
                  nameTextStyle: {    // 坐标轴名称的文字样式
                    color: '#fff'
                  },
                  min: 90000000 ,
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
                    // 只显示前四位
                    formatter: function(params) {
                      return params.toString().substr(0,4);
                    },
                    show: true,
                    textStyle: {
                      color: '#fff'
                    }
                  },

                },
                {
                  type: 'value',
                  name: '增速',
                  nameTextStyle: {    // 坐标轴名称的文字样式
                    color: '#fff'
                  },
                  axisLine:{                 //坐标 轴线
                    show: true,             //是否显示坐标轴轴线
                    onZero: true,           //X 轴或者 Y 轴的轴线是否在另一个轴的 0 刻度上，只有在另一个轴为数值轴且包含 0 刻度时有效
                    lineStyle: {
                      color:"#383838"
                    }
                  },
                  // interval: 0.2,   // 右Y轴数值间隔
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
                    alignWithLabel: false,  //类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
                    // interval: auto,          //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
                    inside: false,           //坐标轴刻度是否朝内，默认朝外。
                    length: 5,                //坐标轴刻度的长度。
                    lineStyle: {
                      color:"#383838"
                    }
                  }
                }
              ],
              series: [
                {
                  name:'人口总数',
                  type:'bar',
                  data: [ 90012697, 90583928, 90973542, 91326594, 91590823, 91020429, 91370295, 91133828, 91210604 ],
                  barWidth : '19',//柱图宽度,
                },
                {
                  name:'增速',
                  type:'line',
                  yAxisIndex: 1,
                  data: [ 0 , 0.63, 0.43, 0.39, 0.29, -0.62, 0.38, -0.26, 0.08,],

                },
              ],
              itemStyle: {
                // 设置柱子颜色渐变
                color: new this.$echarts.graphic.LinearGradient( 0, 0, 0, 1, [
                  {offset: 0, color: '#00edff'}, { offset: 1, color: '#004cff'}
                ]),
                legendHoverLink: true, // 是否启用图例 hover 时的联动高亮。
              },
              lineStyle:{
                color: '#ffd600',
                normal:{},
                emphasis:{},
              },
            },

          }

      },
      watch: {  // 监听charData，当放生变化时，触发这个回调函数绘制图表
        // charData: function (val, oldVal) {
        //   console.log('new: %s, old: %s', val, oldVal);
        //   this.drawChart(val);
        // }
      },
      // 方法集合
      methods:{
        drawxczyczrk(){
          const nmrkzsjzsChart = this.$echarts.init( document.getElementById("tb_nmrkzsjzs" ) );
          nmrkzsjzsChart.setOption( this.nmrkzsjzsOption, true);// 使用刚指定的配置项和数据显示图表。
          // 宽度自适应
          window.addEventListener("resize",  this.throttle( function(){
            nmrkzsjzsChart.resize();
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
        // 年末人口总数 - get方式。拼接参数
        let deptID = this.currentUser.ssdwdm;
        console.log("年末", deptID);
        this.$axios.get( this.$apiurl.servierUrl+'/dp/countYearZrk?deptId='+deptID ).then( res => {
          if( res.data.success == true ){
            console.log("年末",res.data);
            for( let i in res.data ){
              console.log(res.data[i]);
              if(res.data[i]){

              }
            }
          }else{
            this.$message.warning( "serverErr:"+res.data.data['message'] );
          }
        });


        // 渲染地图
        this.drawxczyczrk();
      },
    }
</script>

<style scoped>

</style>
