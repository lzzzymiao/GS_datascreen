webpackJsonp([0],{NEYx:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});e("XLwt");var o={data:function(){return{mapChart:null,currentCity:"",city_data:{},yData:[],barData:[],list_data:[],data_map:[],geoCoordMap:{}}},mounted:function(){this.getdata()},methods:{getdata:function(){var t=this;this.$axios.get("../../../../static/hn.json",{}).then(function(a){console.log(a.data),t.initChartMapCity(a.data)}).catch(function(a){console.log(a),t.openAlert("getdata() - 获取地图数据失败 ")})},handleData:function(t,a){this.list_data=[];for(var e=0;e<a.length;e++){a[e].cp?this.list_data.push({name:a[e].name,value:a[e].cp.concat(a[e].value)}):this.list_data.push({name:a[e].name,value:a[e].value})}console.log(a),console.log(this.list_data),this.barData=[],this.yData=[];for(var o=0;o<10;o++)this.barData.push(t[o]),this.yData.push(o+t[o].name)},initChartMapCity:function(t){var a=this,e=this.$echarts.init(document.getElementById("mapCityBox"));this.mapChart=e;var o=t;this.$echarts.registerMap("lol",o);var i=t.features;this.data_map=[];var n=[];i.forEach(function(t,e){a.data_map.push(t.properties),n.push({name:t.properties.name,cp:t.properties.cp})}),this.geoCoordMap=n,this.handleData(this.data_map,this.geoCoordMap);var r={tooltip:{trigger:"item",formatter:"{b}: 人口密度{c}万人 <br />{b}: 人口密度{c}万人 <br />{b}: 人口密度{c}万人 <br />"},textStyle:{color:"#008fff",fontSize:10},visualMap:[{show:!0,min:0,max:5e3,left:"10",bottom:"auto",text:["高","低"],realtime:!0,calculable:!0,inRange:{color:["#00B6FF","#002E5F","#002E5F","#00FFFF"]},textStyle:{color:"#ffffff",fontSize:12}}],geo:[{show:!0,map:"lol",roam:!1,layoutSize:500,itemStyle:{textStyle:{color:"rgb(0,79,255)",fontSize:11,align:"center"},normal:{show:!0,textStyle:{color:"rgb(0,79,255)",fontSize:11,align:"center"},areaColor:"transparent",borderColor:"transparent",shadowColor:"transparent",shadowBlur:30},emphasis:{areaColor:"#00fbff"}}}],series:[{name:"light",type:"scatter",coordinateSystem:"geo",data:this.list_data,symbolSize:1,roam:!1,label:{normal:{formatter:"{b}",fontSize:10,show:!0},emphasis:{show:!0}},itemStyle:{normal:{color:"#0089ff",label:{show:!0,textStyle:{color:"rgb(255,255,255)",fontSize:10,align:"center"}}}},top:"0%",left:"20%",right:"10%",bottom:"0%"},{name:"lol",type:"map",center:"center",data:this.data_map,label:{emphasis:{show:!1},normal:{show:!1}},mapType:"lol",roam:"scale",top:"0%",left:"20%",right:"10%",bottom:"0%"}]};e.setOption(r,!0),window.addEventListener("resize",function(){e.resize()}),e.on("click",function(t){alert("你点了："+t.data.name);var e=t.data.id;a.$axios.get("../../../../static/"+e+".json",{}).then(function(t){a.initChartMapCity(t.data)}).catch(function(t){console.log(t),a.openAlert("click - 获取地图数据失败")})})},openAlert:function(t){this.$message({message:t,type:"warning"})}},destroyed:function(){window.onresize=null}},i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",{staticClass:"map_style",staticStyle:{height:"300px"},attrs:{id:"mapCityBox"}},[a("div",{directives:[{name:"loading",rawName:"v-loading",value:!0,expression:"true"}],staticStyle:{"background-color":"rgba(255,255,255,0)",height:"100%",width:"100%"}})])])},staticRenderFns:[]};var n=e("VU/8")(o,i,!1,function(t){e("loUg")},"data-v-4f06226a",null);a.default=n.exports},loUg:function(t,a){}});
//# sourceMappingURL=0.af331a830ef1d5c198d8.js.map