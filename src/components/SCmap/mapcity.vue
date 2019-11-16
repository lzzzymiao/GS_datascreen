<template>
  <div>
    <div  id="mapCityBox" class="map_style"  style="height: 300px;">
      <div v-loading='true' style="background-color: rgba(255,255,255,0);height: 100%;width: 100%" ></div>
    </div>
  </div>
</template>

<script>
	import echarts from "echarts";
	export default {
		data() {
			return {
				mapChart: null,
				currentCity: "",
				city_data: {},
				yData: [],
				barData: [],
				list_data: [], // 地市名字
				data_map: [],  // 地图数据
				geoCoordMap: {}
			};
		},
		mounted() {
			this.getdata();
		},

    methods: {

      //获取地图数据
      getdata() {
        this.$axios.get("../../../../static/hn.json", {}).then(res => {
          console.log(res.data);
          // 绘制地图
          this.initChartMapCity(res.data);
        }).catch(res => {
          console.log(res);
          this.openAlert('getdata() - 获取地图数据失败 ');
        });
      },

      //echarts自适应
			handleData(data, geoCoordMap) {
				//地图名字标记
				this.list_data=[];
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

				console.log(geoCoordMap);
				console.log(this.list_data);

				this.barData=[];
				this.yData=[];

				//往左右两图填充数据
				for(let i = 0; i < 10; i++) {
					this.barData.push(data[i]);
					this.yData.push(i + data[i].name);
				}
			},


      // 绘制地图
			initChartMapCity(resdata) {
				//获取地图数据
				const scmapchart = this.$echarts.init( document.getElementById("mapCityBox") );
        this.mapChart = scmapchart;
				let city = resdata;
        this.$echarts.registerMap("lol", city); //注册地图
				let data_all = resdata.features;

				this.data_map=[];
				let arr=[];
				data_all.forEach((item, index) => { //勾选对应的item
					this.data_map.push(item.properties);
					arr.push({
						name:item.properties.name,
						cp:item.properties.cp
					});
				});

				this.geoCoordMap=arr;
//				console.log(this.geoCoordMap)
				this.handleData(this.data_map, this.geoCoordMap);

				let option = {

          tooltip: {
            trigger: "item",
            formatter: "{b}: 人口密度{c}万人 <br />"  +
              "{b}: 人口密度{c}万人 <br />"  +
              "{b}: 人口密度{c}万人 <br />" ,
          },

          textStyle: {
            color: "#008fff",
            fontSize: 10
          },

          // 视觉映射
          visualMap: [
            {
              show: true,
              min: 0,
              max: 5000,
              left: '10',
              bottom:"auto",        //组件离容器下侧的距离,'20%'
              text: ['高', '低'], // 文本，默认为数值文本
              realtime:true,        //拖拽时，是否实时更新
              calculable: true,   // 显示左侧手柄
              // seriesIndex: [1],
              inRange: {
                color: ['#00B6FF', '#002E5F','#002E5F', '#00FFFF'] // 拖动bar和Titus对应的颜色
              },
              textStyle: {
                color: "#ffffff",
                fontSize: 12
              }
            },
          ],

          //地图渲染
          geo: [{
            show: true,
            map: "lol",
            // roam: 'scale',
            roam: false,
            layoutSize: 500,                             //地图的大小,支持相对于屏幕宽高的百分比或者绝对的像素大小。
            itemStyle: {
              textStyle: {
                color: "rgb(0,79,255)",
                fontSize: 11,
                align: 'center'
              },
              normal: {
                show:true,                          //是否在普通状态下显示标签。
                textStyle:{
                  color: "rgb(0,79,255)",
                  fontSize: 11,
                  align: 'center'
                },              //普通状态下的标签文本样式。
                areaColor: "transparent",
                borderColor: "transparent",
                shadowColor: "transparent",
                shadowBlur: 30
              },
              emphasis: {
                areaColor: "#00fbff"
              }
            }
          }],

          series: [

            {
              name: "light",
              type: "scatter",
              coordinateSystem: "geo",
              data: this.list_data,
              symbolSize: 1,
              // roam: 'scale' ,
              roam: false,
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
                  }
                }
              },
              top:'0%',
              left:'20%',
              right:'10%',
              bottom:'0%',
            },

            {
              name:'lol',
              type: "map",
            	center: "center",

            	data: this.data_map,
            	label: {
            		emphasis: {
            			show: false
            		},
            		normal: {
            			show: false
            		}
            	},
            	mapType: "lol",
            	roam: 'scale' ,
              top:'0%',
              left:'20%',
              right:'10%',
              bottom:'0%',

            },
          ],

				};

        scmapchart.setOption(option, true);

        // 宽度自适应
        window.addEventListener("resize", () => {
          scmapchart.resize();
        });

        scmapchart.on("click", (param) => { //点击地图获取数据
					alert('你点了：' + param.data.name);
					let id = param.data.id;
					this.$axios.get(`../../../../static/${id}.json`, {
					}).then(res => {
						this.initChartMapCity(res.data);
					}).catch(res => {
						console.log(res);
            this.openAlert('click - 获取地图数据失败');
					});
				});

			},

      // 错误提示
      openAlert(msg){
        // this.$message({
        //   message: msg,
        //   type: 'warning'
        // });
      }

		},

		destroyed() {
			window.onresize = null;
		}
	};
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
