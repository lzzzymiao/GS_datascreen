<template>
<!-- 选择系统的主页 -->
  <div class="hello">

    <header>
      <el-row type="flex" align="bottom">
        <el-col :span="1"></el-col>
        <el-col :span="23">
          <div>
            <p style="font-family: 幼圆;font-size: 48px" >请选择子系统</p>
          </div>
        </el-col>
      </el-row>
    </header>

    <section>
      <el-row type="flex" align="bottom">
        <el-col :span="8" style="padding: 10px">

            <div class="hovereffect">
              <img class="img-responsive" src="../assets/home/logo.png" alt="">
              <div class="overlay">
                <h2>人口可视化平台</h2>
<!--                <router-link  class="info" to="/one">进入</router-link>-->
                <span class="info" @click="go_dp" >进入</span>
              </div>
            </div>

        </el-col>
        <el-col :span="8">
          <div style="padding: 10px;text-align: center"  >
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/home/logo.png" alt="">
              <div class="overlay">
                <h2>资源库展示</h2>
                <router-link class="info" to="/showzyk">进入</router-link>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div style="padding: 10px;text-align: center"  >
            <div class="hovereffect">
              <img class="img-responsive" src="../assets/home/logo.png" alt="">
              <div class="overlay">
                <h2>一人一档展示</h2>
                <a class="info" href="#">进入</a>
              </div>
            </div>
          </div>
        </el-col>

      </el-row>
    </section>

  </div>
</template>

<script>
    export default {
      name: "Home",
      methods:{
        // 在新窗口打开大屏
        go_dp(){
          let routerData = this.$router.resolve({
            path: '/one',
            query: {
              token : this.$route.query.token,
              xtid: this.$route.query.xtid,
            }
          });
          window.open(routerData.href, '_blank');
        }

      },
      mounted() {
        sessionStorage.setItem("token", this.$route.query.token );
        sessionStorage.setItem("xtid", this.$route.query.xtid );
      }

    }
</script>

<style scoped>

  .hello {
    min-height: 100%;
    background-image: url(../assets/bg.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-color: #15171c;
    color: #ffffff;
    font-size: 14px;
  }
  p{
    font-family: 幼圆
  }

  /* 图片效果 */
  .hovereffect {
    width:70%;
    height:100%;
    min-width: 300px;
    overflow:hidden;
    position:relative;
    text-align:center;
    cursor:default;
    border: 1px solid rgb(145, 145, 145);
    margin: 0 auto;
  }

  .hovereffect .overlay {
    width:100%;
    height:100%;
    position:absolute;
    overflow:hidden;
    top:0;
    left:0;
    opacity:0;
    background-color:rgba(0,0,0,0.5);
    -webkit-transition:all .4s ease-in-out;
    transition:all .4s ease-in-out
  }

  .hovereffect img {
    display:block;
    position:relative;
    -webkit-transition:all .4s linear;
    transition:all .4s linear;
  }

  .hovereffect h2 {
    text-transform:uppercase;
    color:#fff;
    text-align:center;
    position:relative;
    font-size:17px;
    background:rgba(0,0,0,0.6);
    -webkit-transform:translatey(-100px);
    -ms-transform:translatey(-100px);
    transform:translatey(-100px);
    -webkit-transition:all .2s ease-in-out;
    transition:all .2s ease-in-out;
    padding:10px;
  }

  /*.hovereffect a.info {*/
  /*  text-decoration:none;*/
  /*  display:inline-block;*/
  /*  text-transform:uppercase;*/
  /*  color:#fff;*/
  /*  border:1px solid #fff;*/
  /*  background-color:transparent;*/
  /*  opacity:0;*/
  /*  filter:alpha(opacity=0);*/
  /*  -webkit-transition:all .5s ease-in-out;*/
  /*  transition:all .5s ease-in-out;*/
  /*  margin:50px 0 0;*/
  /*  padding:7px 14px;*/
  /*}*/
  .info {
    cursor: pointer;
    text-decoration:none;
    display:inline-block;
    text-transform:uppercase;
    color:#fff;
    border:1px solid #fff;
    background-color:transparent;
    opacity:0;
    filter:alpha(opacity=0);
    -webkit-transition:all .5s ease-in-out;
    transition:all .5s ease-in-out;
    margin:50px 0 0;
    padding:7px 14px;
  }


  .hovereffect .info:hover {
    box-shadow:0 0 5px #fff;
  }

  .hovereffect:hover img {
    -ms-transform:scale(1.5);
    -webkit-transform:scale(1.5);
    transform:scale(1.5);
  }

  .hovereffect:hover .overlay {
    opacity:1;
    filter:alpha(opacity=100);
  }

  .hovereffect:hover h2,.hovereffect:hover .info {
    opacity:1;
    filter:alpha(opacity=100);
    -ms-transform:translatey(0);
    -webkit-transform:translatey(0);
    transform:translatey(0);
  }

  .hovereffect:hover .info {
    -webkit-transition-delay:.2s;
    transition-delay:.2s;
  }
  /*  图片效果end  */

  .p_text{
    display: block;
    float: right;
    padding-top: 15px;
    font-size: 20px;
  }


</style>
