<template>
  <div>
    <div style="padding: 10px">
      <el-row >
        <el-col :span="18" :offset="3" >
          <div style="height: 35px;line-height: 35px;margin-top: 10px" >
            <span style="font-size: 18px;font-weight: bolder" >调用数据排名</span>
          </div>
          <div style="margin-top: 15px">
            <el-row>
              <el-row :span="18"  >
                <div class="xtbox">
                  <zky4synsjdypm></zky4synsjdypm>
                </div>

              </el-row>
              <!--  垂直三个环形图   -->
              <el-row :span="6" >
                <el-row :gutter="5"  type="align">

                </el-row>
                <el-row :gutter="5"  type="align">

                </el-row>
                <el-row :gutter="5"  type="align">

                </el-row>
              </el-row>
            </el-row>
          </div>
        </el-col>
        <el-col :span="3" ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import  zky4synsjdypm from '../zyk/tables/zky4synsjdypm'
    export default {
      name: "zyk4synergy",

      data(){
        return{
          xtconfig: this.xtconfig,
        }
      },

      components:{
        zky4synsjdypm
      },

      mounted() {

        this.xtconfig = {
          data: [
            {name: '南阳', value: 167},
            {name: '周口', value: 67},
            {name: '漯河', value: 123},
            {name: '郑州', value: 55},
            {name: '西峡', value: 98}
          ]
        }

      }

    }
</script>

<style scoped>

  .xtbox{
    height: 650px;   /* 调用排名区域最高650  */
    overflow-y:auto
  }

  ::-webkit-scrollbar-thumb {
    background: #c6c6c6;
    -webkit-box-shadow: inset 0 0 3px rgba(0,0,0,0.3);
  }
  ::-webkit-scrollbar-track {
    background: #45474f;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  }


</style>
