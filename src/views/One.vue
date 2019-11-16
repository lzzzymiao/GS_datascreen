<template>
  <div class="hello">
    <header>
      <!-- <img class="top-title-bg" src="../assets/top_title_bg.png" alt=""> -->
      <el-row type="flex" align="bottom">
        <el-col :span="8">
          <el-row class="header-left-time">
            <el-col :span="6" :offset="6">{{date}}</el-col>
            <el-col :span="6" >{{time}}</el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <h1><span>{{ currentDep }}</span>人口分析数据大屏</h1>
        </el-col>
        <el-col :span="8">
          <el-row class="header-right-info">
            <el-col :span="9" :offset="6"><!-- offset 属性可以指定分栏偏移的栏数 -->
              <el-dropdown trigger="click">
                <div id="dropMenu"  class="el-dropdown-link">
                  <i class="fa fa-map-marker"></i>&nbsp;{{currentUser.ssdwmc}}
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item icon="el-icon-plus">成都</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus">成都</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-plus-outline">成都</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-check">成都</el-dropdown-item>
                  <el-dropdown-item icon="el-icon-circle-check"  >成都</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="9">
              <div id="openmenu" @click="drawer = true" >
              <i class="fa fa-list-ul" ></i>&nbsp;目录
            </div>
            </el-col>

          </el-row>
        </el-col>
      </el-row>
    </header>

    <!-- 主屏 -->
    <section>
        <!-- 左滑菜单抽屉 -->
        <el-drawer
          id="menuDrawer"
          title="菜单选项"
          :visible.sync="drawer"
          :open="deawer_Open"
          direction='rtl'
          size='20%'
         >
          <div>
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="MenuOpen"
              @close="menuClose"
              background-color="rgba(17, 22, 36, 0.3)"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
            </el-menu>
          </div>
        </el-drawer>

        <!-- 主屏左8右16 -->
        <el-row :gutter="20">
          <!-- 左6：分垂直4 -->
          <el-col :span="7">
            <el-row id="totleNum" class="card" :gutter="5">
              <dv-decoration-3 style="height:25px;" />
                <el-col :span="12">
                  <div  style="padding-left: 20px;text-align: left" >
                    <h3 >人口总量 /人</h3>
                    <p><span class="zs_span1" style="margin-left: 0;min-width: 220px;font-size: 29px" ><NumberGrow v-bind:startVal='0' v-bind:endVal=rkcount ></NumberGrow></span></p>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div style="padding-right: 20px;float: right" >
                    <h3 style="text-align: center" @click="apiTest">城镇户数及占比</h3>
                    <div style="">
                      <p>
                        <span style="display: inline-block;width: 70px;text-align: left">总户数 :</span>
                        <span class="zs_span1"><NumberGrow v-bind:startVal='0' v-bind:endVal='65214751'></NumberGrow></span>
                      </p>
                      <p>
                        <span style="display: inline-block;width: 70px;text-align: left">城镇化率 :</span>
                        <span class="zs_span1"><NumberGrow v-bind:startVal='0' v-bind:endVal='63.3'></NumberGrow>%</span>
                      </p>
                    </div>
                  </div>
                </el-col>
              </el-row>
            <el-row class="card" :gutter="5"  type="align">
              <el-col :span="24" >
                <div  style="text-align: left" >
                  <h4>年末人口总数及增速</h4>
                  <nmrkzsjzs v-if="flag" :currentUser='currentUser' />
                </div>
              </el-col>
            </el-row>
            <el-row class="card" :gutter="5"  type="align">
              <el-row type="align">
                <div style="padding-top: 15px;font-size: 13px;font-weight: bolder;text-align: center" >户籍人口结构分析</div>
              </el-row>
              <el-col :span="10" >
                <div style="padding:0 0 5px 10px" >
                  <div style="border: 1px solid #12354b;min-width: 170px;min-height:199px" >
                    <div style="padding: 20px;font-size: 13px;font-weight: bolder;text-align: center">性别分析</div>
                    <div style="text-align: center; position: relative;">
                      <nvbl></nvbl>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :span="14" >
                <div style="padding:0 10px 5px 5px">
                  <div style="border: 1px solid #12354b;min-width: 200px;min-height: 237px" >
                    <div style="padding-top: 20px;font-size: 13px;font-weight: bolder;text-align: center">年龄段分析</div>
                    <nldfx></nldfx>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row class="card" :gutter="5"  type="align">
              <el-col :span="24" >
                <div  style="padding-left: 20px;text-align: left" >
                  <h4>少数民族人口</h4>
                  <zdssmzrk></zdssmzrk>
<!--                  <ve-histogram :data="chartData" height="300px" :settings="chartSettings"></ve-histogram>-->
                </div>
              </el-col>
            </el-row>
          </el-col>

          <!-- 右18：分左右 -->
          <el-col :span="17">
            <!-- 左13 -->
            <el-col :span="13" >
              <!-- 四川地图 -->
              <el-row :gutter="5"  type="align">
                <dv-border-box-1>
                  <div style="padding: 20px" >
                    <div style="overflow:hidden; border-radius: 5px">
                      <!-- <mapcity />-->
                      <maptest></maptest>
                    </div>

                  </div>
                </dv-border-box-1>
              </el-row>
              <!-- 人口迁移原因-->
              <el-row class="card"  :gutter="5"  type="align">
                <el-col :span="12">
                  <div  style="padding:0 5px 0 5px;text-align: left" >
                    <h4>迁出原因</h4>
                    <rkqcyy></rkqcyy>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div  style="padding-left: 10px;text-align: left" >
                    <h4>迁入原因</h4>
                    <rkqryy></rkqryy>
                  </div>
                </el-col>
              </el-row>
                  <!-- 动态迁移-->
                  <el-row class="card"  :gutter="5"  type="align">
                    <el-col :span="12">
                      <div style="padding-left: 20px" >
                        <h4>人口迁移范围(迁入)</h4>
                        <div  >
                          <swrkqyfb></swrkqyfb>
                        </div>
                      </div>
                    </el-col>
                    <el-col :span="12">
                      <h4>人口迁移范围(迁出)</h4>
                      <rkzrzzl/>
                    </el-col>
                  </el-row>
                </el-col>
            <!-- 右11 -->
            <el-col :span="11" >
              <el-row style="margin-top: 10px" :gutter="5"  type="align">
                <div  style="text-align: center;" >

                  <el-col :span="12"  style="padding: 8px" >
                    <div class="btn_left" >
                      <div><img src="../assets/Pdf.png" alt=""></div>
                      <div><p >人口数据分析报告</p></div>
                    </div>
                  </el-col>
                  <el-col :span="12" style="padding: 8px" >
                    <div class="btn_right" >
                      <div><img src="../assets/mx.png" alt=""></div>
                      <div><p>人口综合分析算法模型</p></div>
                    </div>
                  </el-col>
                </div>
              </el-row>
              <el-row class="card" :gutter="5"  type="align">
                <el-col :span="24" >
              <div  style="padding-left: 20px;text-align: left" >
                <h4>城镇人口总数及城镇化率变化</h4>
                <czrkzjtj/>
              </div>
            </el-col>
          </el-row>
          <el-row class="card" :gutter="5"  type="align">
            <el-col :span="24" >
              <div  style="padding-left: 20px;text-align: left" >
                <h4 style="color: white">乡村转移城镇人口数及增长率</h4>
                <xczyczrk/>
              </div>
            </el-col>
          </el-row>
          <el-row class="card" :gutter="5"  type="align">
            <el-col :span="24" >
              <div  style="padding-left: 20px;text-align: left" >
                <h4 style="color: white">人口自然增长率与机械增长率变化</h4>
                <cslswl></cslswl>
              </div>
            </el-col>
          </el-row>
        </el-col>
          </el-col>
        </el-row>

      </section>
  </div>

</template>

<script>
  // js依赖
  import moment from '@/utils/date.js';
  import 'echarts/map/js/province/sichuan.js'; //引入四川地图

  // 图表组件
  import nmrkzsjzs from '../components/tables/nmrkzsjzs';    // 年末人口总数即增速
  import xczyczrk  from '../components/tables/xczyczrk';     // 乡村转移城镇人口数及增长率
  import nldfx     from '../components/tables/nldfx';         // 年龄段分析
  import swrkqyfb  from '../components/tables/swrkqyfb';      // 省外人口迁移分布
  import czrkzjtj  from '../components/tables/czrkzjtj';      // 城镇人口增加数及城镇化率变化
  import rkzrzzl   from '../components/tables/rkzrzzl';      // 人口自然增长率
  import zdssmzrk  from '../components/tables/zdssmzrk';     //  少数民族人口
  import rkqcyy    from '../components/tables/rkqcyy' ;       // 省外迁出原因
  import rkqryy    from '../components/tables/rkqryy';        // 省外迁入原因
  import nvbl      from '../components/tables/nvbl';         // 男女比例饼图
  import cslswl    from '../components/tables/cslswl';      // 出生率死亡率折线图

  // import mapcity   from '../components/SCmap/mapcity';  // 不可缩放四川地图
  import maptest   from'../components/SCmap/maptest';       // 可缩放四川地图


  // 其他组件
  import NumberGrow from'../components/NumberGrow';         // 动态数字


  export default {
    name: 'One',
    components:{
      NumberGrow,
      nmrkzsjzs,
      xczyczrk,
      nldfx,
      swrkqyfb,
      czrkzjtj,
      rkzrzzl,
      zdssmzrk,
      rkqcyy,
      rkqryy,
      nvbl,
      cslswl,
      maptest

    },
    data() {
      this.date = moment.getDate(); // 获取日期

      return {
        drawer: false,          // 抽屉
        flag: false,
        time: moment.getTime(), // 小时分钟
        currentDep : '四川省',   // 当前用户级别
        currentUser:{           // 当前用户
          ssdwmc:'',
          ssdwdm:'',
        },
        rkcount: 91615342,            // 人口总数

      };
    },
    methods: {
      // 抽屉打开的回调
      deawer_Open(){

        document.getElementsByClassName("el-drawer")[0].css('background-color','#1c1f25')
      },
      // 抽屉关闭的回调  :before-close="handleClose"
      deawer_Close(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },

      // 菜单打开回调
      MenuOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      // 菜单关闭回调
      menuClose(key, keyPath) {
        console.log(key, keyPath);
      },

      handleButtonClick(e) {
        console.log('click left button', e);
      },
      handleMenuClick(e) {
        console.log('click', e);
      },

      // 测试 - ------------------------------------
      apiTest(){
        this.$message({
          type:'warning',
          message :'212123' ,
        });

      }

    },
    computed: {},
    mounted() {
      // 时间
      this.timer = setInterval(() => {
        this.time = moment.getTime();
      }, 60000);

      // 获取当前登录用户信息 get - public/getUserInfo/
      this.$axios.get( this.$apiurl.authUrl+'/public/getUserInfo/' ).then( res => {
        console.log(res.data.success);
        // res 为对象类型。后端返回的数据在 res.data 中。
        if( res.data.success == true ){
          let deptId = res.data.data.user['ssdwdm'];
          this.currentUser.ssdwmc = res.data.data.user['ssdwmc'];
          this.currentUser.ssdwdm = deptId;

          // 获取人口总量 - get方式。拼接参数  public/getUserInfo/
          this.$axios.get( this.$apiurl.servierUrl+'/dp/countYearZrk?deptId='+deptId ).then( res => {
            if( res.data.success == true ){
              this.flag = true;
              console.log(res.data);
            }else{
              this.$message.warning( "serverErr:"+res.data.data['message'] );
            }
          });

        }else{
          this.$message.warning( "serverErr:"+res.data.data['message'] );
        }

        }
      ).catch( res => {
          this.loading = false;
          console.log(res);
      });



    },


    beforeDestroy() {
      this.timer && clearInterval(this.timer);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
  .hello {
    min-height: 100%;
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #15171c;
    /*font-family: MicrosoftYaHei;*/
    color: #ffffff;
    font-size: 14px;

    .top-title-bg {
      width: 100%;
      top: -43px;
      height: 148px;
      position: fixed;
      z-index: 1;
    }
    & > header {
      background: url(../assets/top_title_bg.png) no-repeat;
      background-size: 100% 92px;
      background-position: 0px -41px;

      h1 {
        position: relative;
        z-index: 10;
        margin: 0;
        padding: 10px 0px ;
        text-align: center;
        color: #fff;
        font-family: "微软雅黑";
        background-image: -webkit-gradient(
            linear,
            0 0,
            0 bottom,
            from(#a9caf3),
            to(#f5f9ff)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .header-left-time {
        background: url(../assets/header-left-bg.png) no-repeat;
        background-size: 100%;
        padding: 7px;
      }
      .header-right-info {
        background: url(../assets/header-right-bg.png) no-repeat;
        background-size: 100%;
        padding: 7px;
        span {
          color: #ff9b43;
        }
      }
    }

    section {
      padding: 10px 20px 20px 40px;

      .btn_left{
        border-radius: 8px;
        padding: 0 5px 0 5px;
        border-left: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
      }
      .btn_left:hover{
        text-shadow:0 0 2px #00fcff ;
        border-color: #00fcff;
        border-left: 2px solid #00fcff;
        border-right: 2px solid #00fcff;
        cursor: pointer;
        color: #00fcff;
      }

      .btn_right{
        border-radius: 8px;
        padding: 0 5px 0 5px;
        border-left: 1px solid gainsboro;
        border-right: 1px solid gainsboro;
      }
      .btn_right:hover{
        border-color: #00fcff;
        text-shadow:0 0 2px #00fcff ;
        border-left: 2px solid #00fcff;
        border-right: 2px solid #00fcff;
        cursor: pointer;
        color: #00fcff;
      }


      .btn_right img {
        z-index:1;
        transition-delay: 0s;
        transition-duration: 0.5s;
        transition-property: all;
        transition-timing-function: ease;
        /* Firefox 4 */
        -moz-transition-delay: 0s;
        -moz-transition-duration: 0.5s;
        -moz-transition-property: all;
        -moz-transition-timing-function: ease;
        /* Safari 和 Chrome */
        -webkit-transition-delay: 0s;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-property: all;
        -webkit-transition-timing-function: ease;
        /* Opera */
        -o-transition-delay: 0s;
        -o-transition-duration: 0.5s;
        -o-transition-property: all;
        -o-transition-timing-function: ease;
      }
      .btn_right:hover img {
        transform: scale(1.3, 1.3);
        -ms-transform:scale(1.3, 1.3); 	/* IE 9 */
        -moz-transform:scale(1.3, 1.3); 	/* Firefox */
        -webkit-transform:scale(1.3, 1.3); /* Safari 和 Chrome */
        -o-transform:scale(1.3, 1.3); 	/* Opera */
      }
      .btn_left img {
        z-index:1;
        transition-delay: 0s;
        transition-duration: 0.5s;
        transition-property: all;
        transition-timing-function: ease;
        /* Firefox 4 */
        -moz-transition-delay: 0s;
        -moz-transition-duration: 0.5s;
        -moz-transition-property: all;
        -moz-transition-timing-function: ease;
        /* Safari 和 Chrome */
        -webkit-transition-delay: 0s;
        -webkit-transition-duration: 0.5s;
        -webkit-transition-property: all;
        -webkit-transition-timing-function: ease;
        /* Opera */
        -o-transition-delay: 0s;
        -o-transition-duration: 0.5s;
        -o-transition-property: all;
        -o-transition-timing-function: ease;
      }
      .btn_left:hover img {
        transform: scale(1.3, 1.3);
        -ms-transform:scale(1.3, 1.3); 	/* IE 9 */
        -moz-transform:scale(1.3, 1.3); 	/* Firefox */
        -webkit-transform:scale(1.3, 1.3); /* Safari 和 Chrome */
        -o-transform:scale(1.3, 1.3); 	/* Opera */
      }



    }
    h4 {
      color: white !important;
      text-align: center;
      height: 20px;
    }
    .card {
      background: rgba(12, 15, 25, 0.3);
      box-shadow: 1px 0px 10px rgba(46, 88, 118, 0.67) inset;
      border: 1px #00253c solid;
      min-width: 300px;
    }

  }

  /deep/ .el-dropdown-menu {
    background-color: #2b4e76 !important;
  }
  /*/deep/ .el-dropdown-menu .el-dropdown-menu__item{*/
  /*  color: white !important;*/
  /*}*/

  /deep/ .el-drawer  {
    background-color: rgb(23, 35, 51) !important;
  }// ---end

  // 抽屉内菜单样式
  /deep/ .el-submenu__title:hover  {
    outline: 0;
    background-color: #2b4e76 !important;
  }
  /deep/ .el-menu-item:hover{
    outline: 0;
    background-color: #2b4e76 !important;
  }// ---end



  #openmenu:hover {
    cursor: pointer;
    color: #00fcff;
  }


  .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .zs_span1{
    color: #ffaa00;
    font-size: 15px;
    font-weight: bold;
    display: inline-block;
    margin-left: 5px;
  }

  a:hover{
    color: #00fcff;
  }

  #dropMenu{
    color: white;
  }
  #dropMenu:hover{
    cursor: pointer;
    color: #00fcff;
  }


</style>
