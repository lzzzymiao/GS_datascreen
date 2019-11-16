<template>
    <div>
      <ve-wordcloud
        :data="zdfbData"
        :settings="zdfbSettings"
        :extend="zdfbExtend"
        height="300px"
      ></ve-wordcloud>
    </div>
</template>

<script>
    export default {
      name: "zyk4otherZDshfb",

      data () {
        this.zdfbSettings = {
          shape: 'diamond',
          color: ['#00deb2', '#8a23ff', '#4053ff', '#51e9ff'],
          sizeMin: 20,
          sizeMax: 50
        };

        this.zdfbExtend = {
          grid: {
            left: '0%',
            right: '5%',
            bottom: '0%',
            top: '2%',
            width: '150%',
          },
          series: [{

            // Global text style
            textStyle: {
              normal: {
                fontFamily: 'sans-serif',
                fontWeight: 'bold',
                // Color can be a callback function or a color string
                color: function () {
                  // Random color
                  return 'rgb(' + [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160)
                  ].join(',') + ')';
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: '#333'
              }
            },

          }]

        };


        return {
          zdfbData:{ },
        }
      },

      methods:{
        getRows () {
          return [
            {
              'word': '身份证',
              'count': 62199
            }, {
              'word': '姓名',
              'count': 10288
            }, {
              'word': '公安姓名',
              'count': 11620
            }, {
              'word': '地址',
              'count': 274470
            }, {
              'word': '应销未销',
              'count': 12311
            }, {
              'word': '一标三实',
              'count': 11206
            }, {
              'word': '联系电话',
              'count': 14885
            }, {
              'word': '父母姓名',
              'count': 32294
            }, {
              'word': '住址',
              'count': 18574
            }, {
              'word': '一人一档',
              'count': 38929
            }, {
              'word': '婚姻状况',
              'count': 11969
            }, {
              'word': '就业信息',
              'count': 37517
            }, {
              'word': '学历',
              'count': 12053
            }, {
              'word': '虚拟身份',
              'count': 57299
            }, {
              'word': '实有人口',
              'count': 15418
            }, {
              'word': '政治面貌',
              'count': 22905
            }, {
              'word': '身高',
              'count': 9146
            }, {
              'word': '生物特征',
              'count': 49487
            }, {
              'word': '关系信息',
              'count': 33837
            }, {
              'word': '行为信息',
              'count': 9500
            }, {
              'word': 'silent',
              'count': 9744
            }, {
              'word': '更新日期',
              'count': 9840
            }, {
              'word': '社会采集',
              'count': 11932
            }, {
              'word': '资源',
              'count': 113706
            }, {
              'word': '接口调用',
              'count': 114812
            }, {
              'word': '证件信息',
              'count': 16578
            }, {
              'word': '出入境信息',
              'count': 76970
            }, {
              'word': '计生委信息',
              'count': 11704
            }, {
              'word': '政务信息',
              'count': 15964
            }, {
              'word': '人口平台信息',
              'count': 60679
            }, {
              'word': '协同调用',
              'count': 24347
            }, {
              'word': '人脸大库检测',
              'count': 43420
            }, {
              'word': '小区出入记录',
              'count': 25222
            }, {
              'word': '重点人员监控',
              'count': 46904
            }, {
              'word': 'parallelAxis2',
              'count': 14029
            }, {
              'word': 'data2',
              'count': 60679
            }, {
              'word': 'dataZoom2',
              'count': 24347
            }, {
              'word': 'tooltip2',
              'count': 43420
            }, {
              'word': 'toolbox3',
              'count': 25222
            }, {
              'word': 'toolbox4',
              'count': 25222
            }, {
              'word': 'toolbox5',
              'count': 25222
            }, {
              'word': 'toolbox6',
              'count': 25222
            }, {
              'word': 'toolbox88',
              'count': 25222
            }, {
              'word': 'geo2',
              'count': 16904
            }]
        }

      },

      mounted() {
        this.zdfbData = {
          columns: ['word', 'count'],
            rows: this.getRows()
        }


      }

    }
</script>

<style scoped>

</style>
