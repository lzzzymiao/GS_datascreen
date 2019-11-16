<template>
<div>
  <div style="padding: 10px">
    <el-row >
      <el-col :span="18" :offset="3" >
        <div style="height: 35px;line-height: 35px;margin-top: 10px" >
          <span style="font-size: 18px;font-weight: bolder" >业务视角</span>
        </div>
        <div style="margin-top: 30px">
          <el-tabs v-model="activeName" @tab-click="handleClick" >
            <el-tab-pane label="治安业务信息资源" name="first"  >
              <!--  使用v-if动态刷新el-tabs的子组件  -->
              <zyk4workDetail v-if="activeName=='first'" :queryParam="queryParam" ></zyk4workDetail>
            </el-tab-pane>
            <el-tab-pane label="警务共享资源"    name="second" :lazy="true" >
              <zyk4workDetail v-if="activeName=='second'" :queryParam="queryParam" ></zyk4workDetail>
            </el-tab-pane>
            <el-tab-pane label="政务共享资源"    name="third" :lazy="true" >
              <zyk4workDetail v-if="activeName=='third'" :queryParam="queryParam" ></zyk4workDetail>
            </el-tab-pane>
            <el-tab-pane label="社会化采集信息"  name="fourth" :lazy="true" >
              <zyk4workDetail v-if="activeName=='fourth'" :queryParam="queryParam" ></zyk4workDetail>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
      <el-col :span="3" ></el-col>
    </el-row>
  </div>
</div>
</template>

<script>
    import zyk4workDetail from '../zyk/zyk4workDetail';

    export default {
      name: "zyk4work",
      components:{
        zyk4workDetail
      },
      data() {
        // 会传入子组件的对象
        this.queryParam = {
          mytimer : new Date().getTime(),
          tagname : 'first'
        };

        return {
          activeName: 'first'
        };
      },

      methods: {
        handleClick(tab, event) {
          console.log(tab, event);
          this.queryParam = {
            mytimer : new Date().getTime(),
            tagname : tab.name
          };
        }
      }
    }
</script>

<style scoped>

  /deep/ .el-tabs__item {
    padding: 0 20px;
    height: 35px !important;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 14px;
    font-weight: 500;
    color: #cecece !important;
    position: relative;
  }

  /deep/ .el-tabs__item.is-active {
    color: #02a9ff  !important;
  }

</style>
