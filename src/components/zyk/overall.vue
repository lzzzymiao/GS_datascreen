<template>
    <div style="padding: 10px">
      <el-row >
        <!-- 整体概况，主屏分左右 -->
        <el-col :span="12" >
          <!-- 左： 分左右 -->
          <el-row >
            <el-col :span="8" >
              <!--    左侧资源数目显示    -->
              <div style="padding: 0 0 0 20px;">
                <ul class="zyzl" >
                  <li>
                    <p class="zytitle">资源总数(个)</p>
                    <p class="zycontent">43356821</p>
                  </li>
                  <li>
                    <p class="zytitle">资源总量(条)</p>
                    <p class="zycontent">433211</p>
                  </li>
                  <li>
                    <p class="zytitle">存储规模(GB)</p>
                    <p class="zycontent">1030</p>
                  </li>
                </ul>
              </div>
            </el-col>
            <!--  漂浮动态效果  -->
            <el-col :span="16" >
              <div style="min-height: 300px">
                <div class="ghost" ></div>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!--  右侧资源表格，垂直分三个   -->
        <el-col :span="12" >
          <!-- 选择城市标题 -->
          <el-row :gutter="5"  type="align">
            <div class="chosecity">
              <p>当前已选 <span>[成都市]</span> 的资源</p>
            </div>
          </el-row>
          <!-- 中部数据 -->
          <el-row  :gutter="5"  type="align">
            <el-col :span="12" >
              <div style="padding: 15px" >
                <el-card class="box-card">
                  <div slot="header" class="clearfix"><span>治安业务信息资源 TOP 5</span></div>
                  <div class="contentItem" v-for="(val, index) in itema1" :key="index" >
                    <span class="paiming" > <el-badge :type="index==0 ? 'primary':'info'" class="mark" :value=index+1 /> </span>
                    {{ val.text }} - {{ val.value }}  条
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="padding: 15px" >
                <el-card class="box-card">
                  <div slot="header" class="clearfix"><span>治安业务信息资源 TOP 5</span></div>
                  <div class="contentItem" v-for="(val, index) in itema1" :key="index" >
                    <span class="paiming" > <el-badge :type="index==0 ? 'primary':'info'" class="mark" :value=index+1 /> </span>
                    {{ val.text }} - {{ val.value }}  条
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
          <!-- 下部数据 -->
          <el-row  :gutter="5"  type="align">
            <el-col :span="12"  >
              <div style="padding: 15px" >
                <el-card class="box-card">
                  <div slot="header" class="clearfix"><span>治安业务信息资源 TOP 5</span></div>
                  <div class="contentItem" v-for="(val, index) in itema1" :key="index" >
                    <span class="paiming" > <el-badge :type="index==0 ? 'primary':'info'" class="mark" :value=index+1 /> </span>
                    {{ val.text }} - {{ val.value }}  条
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :span="12">
              <div style="padding: 15px" >
                <el-card class="box-card">
                  <div slot="header" class="clearfix"><span>治安业务信息资源 TOP 5</span></div>
                  <div class="contentItem" v-for="(val, index) in itema1" :key="index" >
                    <span class="paiming" > <el-badge :type="index==0 ? 'primary':'info'" class="mark" :value=index+1 /> </span>
                    {{ val.text }} - {{ val.value }}  条
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
</template>

<script>

  export default {
    name: "overall",
    data() {

      return {
        itema1:[
          { text: '户籍管理'    , value: '363541' },
          { text: '身份证管理'  , value: '225641' },
          { text: '流动人口管理', value: '20154'  },
          { text: '治安事件管理', value: '17442'  },
          { text: '标准地址管理', value: '15621'  },
        ]

      }
    },
  }
</script>

<style scoped>
  p{ margin: 0; padding: 0 ; display: block; padding: 5px}

  .zyzl{
    list-style: none;padding: 0 10px 0 10px
  }
  .zyzl>li{
    text-align: left;
    margin-top: 20px;
    /*height: 30px;*/
  }

  .zyzl>li .zytitle{
    font-size: 17px;
  }

  .zyzl>li .zycontent {
    font-size: 27px;
  }

  /* 漂浮 */
  .ghost {
    width: 100px;height:100px;background-color: rgba(0, 126, 170, 0.54);
    position: absolute;
    animation: ghostUpdown 2s infinite alternate;
    -webkit-animation: ghostUpdown 2s infinite alternate;
  }
  @keyframes ghostUpdown {
    from {
      margin-top: 50px;
    }
    to {
      margin-top: 80px;
    }
  }
  @-webkit-keyframes ghostUpdown {
    from {
      margin-top: 50px;
    }
    to {
      margin-top: 80px;
    }
  }
  /* 漂浮 end */


  .chosecity{
    padding: 20px;
    font-size: 20px;
  }

  /deep/ .el-badge__content {
    border-radius: 10px;
    color: #FFF;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: none !important;
  }

  /deep/ .el-card {
    border: 1px solid #2a2a2a;
    background-color: rgba(28, 31, 40, 0.5) !important;
    color: #ffffff !important;
    -webkit-transition: .3s !important;
    transition: .3s !important;
  }

  /deep/ .el-card__header {
    padding: 18px 20px 0 ;
    border-bottom: none !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
  }

  /deep/ .el-badge__content {
    border-radius: 10px;
    color: #FFF;
    display: inline-block;
    font-size: 12px;
    height: 18px;
    line-height: 18px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: none !important;
    top: -2px !important;
  }


  .clearfix {
    text-align: center;
  }
  .paiming{
    display: inline-block;
    margin-right: 10px;
  }

  .contentItem{
    background-color: rgba(37, 41, 53, 0.5) !important;
    height: 29px;
    line-height: 29px;
    margin-bottom: 9px;
    padding: 0 0 0 3px;
  }

</style>
