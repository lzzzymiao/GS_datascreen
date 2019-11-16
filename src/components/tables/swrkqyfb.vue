<template>
  <div > <!-- 迁入滚动图 -->
    <dv-scroll-ranking-board :config="swqrconfig" style="padding: 10px; height: 237px;" />
  </div>
</template>

<script>
    export default {
      name: "swrkqyfb",

      data(){
        // this.swqrData = [];
        return{
          // 省外迁入滚动排名配置
          swqrconfig:{
            unit: '%',
            data: [
                {
                  name: '跨省',
                  value: 34
                },
                {
                  name: '省内跨市',
                  value: 30
                },
                {
                  name: '市内跨区县',
                  value: 25
                },
                {
                  name: '区县内跨乡镇',
                  value: 20
                },
                {
                  name: '乡镇内',
                  value: 22
                },
                {
                  name: '国外港澳台',
                  value: 19
                }
              ]
          }

        }
      },

      mounted() {

      }


    }
</script>

<style scoped>

  /deep/ .ranking-value{
    color: #0ecbff;
  }
  /deep/ .dv-scroll-ranking-board .ranking-column .inside-column  {
    position: relative;
    height: 6px;
    border-radius: 5px !important;
    /*background-color: #58fb13;*/
    background: -webkit-linear-gradient(right, #b7ec3f, #00edff);
    background: -o-linear-gradient(right,#b7ec3f,#00edff);
    background: -moz-linear-gradient(right,#b7ec3f,#00edff);
    background: -mos-linear-gradient(right,#b7ec3f,#00edff);
    background: linear-gradient(right,#b7ec3f,#00edff);

    margin-bottom: 2px;
    overflow: hidden;
  }

</style>
