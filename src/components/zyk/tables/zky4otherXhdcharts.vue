<template>
  <div style="margin-top: 60px">
    <!--  鲜活度饼图  -->
    <ve-pie
      :data="xhdData"
      :settings="xhdSettings"
      :extend="xhdExtend"
    ></ve-pie>
  </div>
</template>

<script>
    export default {
      name: "zky4otherXhdcharts",
      data(){

        this.xhdSettings = {
          roseType: 'radius',
          radius: 140,
        };
        this.xhdExtend = {
          // 画布内边距设置
          grid: {
            left: '10',
            right: '6%',
            bottom: '2',
            top:'18',
          },
          tooltip: {
          },
          legend: {
            bottom: 'bottom',
            padding: [
              100,  // 上
              10, // 右
              1,  // 下
              10, // 左
            ],
            zlevel:10,
            orient:"horizontal",                        //图例排列方向
            itemWidth: 50,
            textStyle: {
              fontWeight: 'normal',              //标题颜色
              color: '#ffffff'
            },
            // 使用回调函数
            formatter: function (name) {
              return name + '' ;
            }
          },
          series: {
            label: {
              show: true,
              position: "right",
              color: '#ffffff',
            },
            color : [ '#b8c18b','#2D99FF','#4346D3','#F7517F', '#6648FF','#16CEB9'],
          },
        };

        return {
          xhdData: {},
          datalen : '400px',
        }
      },
      methods: {


      },
      mounted() {
        this.xhdData = {
          columns: ['state', 'num' ],
          rows: [
            { 'state': '日更新量',   'num': 10000 },
            { 'state': '周更新量',   'num': 14000 },
            { 'state': '月更新量',   'num': 24000 },
            { 'state': '季更新量',   'num': 45200 },
            { 'state': '年更新量',   'num': 64100 },
            { 'state': '其他更新量', 'num': 53200  },
          ].sort(function (a, b) { return a.value - b.value; })
        };

      },


    }
</script>

<style scoped>

</style>
