<template>

    <div>
      <div  id="mapCityBox" class="map_style"  style="height: 300px;">
        <!--   加载中   -->
        <div v-loading='true' style="background-color: rgba(255,255,255,0);height: 100%;width: 100%" ></div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "maptest",

      data(){
        this.myscreenWidth = window.innerWidth;
          return{
            mapChart: null,
            currentCity: "",
            city_data: {},
            yData: [],
            barData: [],
            list_data: [], // 每个市对应的人口数等信息
            data_map: [],  // 地图数据
            geoCoordMap: {},

            DS_info:[],  //

          }
      },
      methods:{

        //获取地图数据
        getdata() {
          this.$axios.get("./static/hn.json", {}).then(res => {
            // 绘制地图
            this.initChartMapCity( res.data );
          }).catch(res => {
            console.log(res);
            this.openAlert('getdata() - 获取地图数据失败 ');
          });
        },

        // 绘制地图
        initChartMapCity(resdata) {
          //获取地图数据
          const scmapchart = this.$echarts.init( document.getElementById("mapCityBox") );
          this.mapChart = scmapchart;
          let city = resdata;
          this.$echarts.registerMap("lol", city); //注册地图
          // 各个市州的地图数据
          let data_all = resdata.features;

          this.data_map=[];
          let arr=[];
          data_all.forEach((item, index) => { //勾选对应的item
            this.data_map.push(item.properties); // item.properties ： id: "5113", value: "400", name: "南充市", cp: Array[2], childNum: 7}
            arr.push({
              name:item.properties.name,
              // cp:item.properties.cp  // 经纬度
              value: item.properties.value
            });
          });
          this.DS_info = arr;
          // this.geoCoordMap = arr;
          this.handleData(this.data_map, this.geoCoordMap);

          let mapoption = {
            tooltip: {
              trigger: "item",
              transitionDuration: 0.2,
              formatter: "{b}: 人口密度{c}万人 <br/> ",
            },

            textStyle: {
              color: "#008fff",
              fontSize: 10
            },

            // 左边视觉映射bar
            visualMap: [
              {
                show: true,
                min: 300,
                max: 10000,
                left: 10,
                bottom:"bottom",        //组件离容器下侧的距离,'20%'
                text: ['人口密度(万)'], // 文本，默认为数值文本
                realtime:true,        //拖拽时，是否实时更新
                calculable: true,   // 显示左侧手柄
                // seriesIndex: [1],
                textGap:19,                              //两端文字主体之间的距离，单位为px
                inRange: {
                  color: [ '#002E5F', '#00d9e8', '#00B6FF',] // 拖动bar和Titus对应的颜色
                },
                textStyle: {
                  color: "#ffffff",
                  fontSize: 12
                }
              },
            ],

            series: [
              {
                data: this.DS_info,
                name: "hn",
                type: 'map',
                map: 'lol',
                symbolSize: 1,
                roam: true ,
                label: {
                  normal: {
                    formatter: "{b}",
                    fontSize: 10,
                    show: true
                  },
                  emphasis: {
                    show: true
                  }
                },
                top:0,
                left:'20%',
                right:'10%',
                bottom:0,
                itemStyle: {
                  normal: {
                    color: "#0089ff",
                    // areaColor: "transparent",
                    // borderColor: "transparent",
                    label: {
                      show: true,
                      textStyle: {
                        color: "rgb(255,255,255)",
                        fontSize: 10,
                        align: 'center'
                      }
                    },
                    emphasis:{label:{show:true}}
                  }
                },
                // 缩放设置
                scaleLimit:{
                  min:1,                                  //最小的缩放值
                  max:2,                                  //最大的缩放值
                },
              },
            ],
          };

          scmapchart.setOption( mapoption, true);
          // 宽度自适应
          window.addEventListener("resize",  this.throttle( function(){
            scmapchart.resize();
          }));

          // scmapchart.on("click", (param) => { //点击地图获取数据
          //   alert('你点了：' + param.data.name);
          //   let id = param.data.id;
          //   this.$axios.get(`../../../../static/${id}.json`, {
          //   }).then(res => {
          //     this.initChartMapCity(res.data);
          //   }).catch(res => {
          //     this.openAlert('click - 获取地图数据失败');
          //   });
          // });
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
        },

        // 错误提示
        openAlert(msg){
          this.$message({
            message: msg,
            type: 'warning'
          });
        },


        // 填充数据
        handleData(data, geoCoordMap) {
          this.list_data=[];  // 每个市对应的人口数等信息
          this.barData=[];
          this.yData=[];
          // 往左右两图填充数据
          console.log(data);
          for(let i = 0; i < 10; i++) {
            this.barData.push(data[i]);
            this.yData.push(i + data[i].name);
          }
          //  底图
          for(let i = 0; i < geoCoordMap.length; i++) {
            let cp=geoCoordMap[i].cp;
            if (cp) {
              this.list_data.push({
                name: geoCoordMap[i].name,
                value: geoCoordMap[i].cp.concat(geoCoordMap[i].value)
              });
            } else{
              this.list_data.push({
                name: geoCoordMap[i].name,
                value: geoCoordMap[i].value
              });
            }
          }
        },

      },

      mounted() {
        this.getdata();

      },
      watch:{

      }

    }
</script>

<style scoped>

  /deep/ .el-loading-mask {
    position: absolute;
    z-index: 2000;
    background-color: rgba(255, 255, 255, 0) !important;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
  }

</style>
