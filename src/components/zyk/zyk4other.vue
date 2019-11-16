<template>
  <div>
    <div style="padding: 10px">
      <el-row >
        <el-col :span="18" :offset="3" >
          <el-row style="margin-top:10px;" >
            <el-col :span="12" >
              <div style="height: 35px;line-height: 35px;font-size: 18px;font-weight: bolder">数据鲜活度</div>
              <div style="margin-top: 30px" >
                <!-- 鲜活度饼图 -->
                <zky4otherXhdcharts></zky4otherXhdcharts>
              </div>
            </el-col>
            <el-col :span="12" style="padding-left: 30px">
              <el-row class="card" :gutter="5"  type="align">
                <div style="height: 35px;line-height: 35px;font-weight: bolder">
                  <span style="font-size: 18px;" >新接入资源</span>
                  <span> </span>
                </div>
                <!-- 轮播图  -->
                <div style="padding:15px 0  15px 0;">
                  <div style="border: 1px solid rgba(255,255,255,0.09)"><dv-scroll-board :config="newInData" style="height:300px" /></div>
                </div>

              </el-row>
              <el-row class="card" :gutter="5"  type="align">
                <div style="height: 35px;line-height: 35px;font-size: 18px;font-weight: bolder">字段属性分布</div>
                <div style="border: 1px solid rgba(255,255,255,0.09)">
                  <zyk4otherZDshfb></zyk4otherZDshfb>
                </div>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="3" ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import zky4otherXhdcharts from './tables/zky4otherXhdcharts'
  import zyk4otherZDshfb from  './tables/zyk4otherZDshfb'
    export default {
      name: "zyk4other",

      components:{
        zky4otherXhdcharts,
        zyk4otherZDshfb
      },

      data(){

        return{
          newInData:{},
        }
      },

      mounted() {

        this.newInData = {
          data: [
            ['卫生资源', '31231'],
            ['行政数据', '34235'],
            ['其他资源', '12331'],
            ['省级人口资源', '223324'],
            ['一标三实信息系统', '15422'],
            ['社会采集平台', '3134'],
            ['政务共享资源', '36521'],
            ['警务资源', '30500'],
            ['政务共享资源', '22503'],
            ['警务资源', '30500'],
            ['其他资源', '12331'],
            ['省级人口资源', '223324'],
            ['一标三实信息系统', '15422'],
            ['其他资源', '12331'],
            ['省级人口资源', '223324'],
            ['一标三实信息系统', '15422']
          ],
          oddRowBGC :'rgba(255,255,255,0.04)',
          evenRowBGC :'rgba(255,255,255,0)',
          rowNum:8,
          align :['left','right']
        }

      }

    }
</script>

<style scoped>

  .row-item{
    height: 40px ;
    line-height: 40px ;
  }

</style>
