<template>
  <div id="allbg">

    <div class="hello">
      <header>
        <!-- <img class="top-title-bg" src="../assets/top_title_bg.png" alt=""> -->
        <el-row class="zykheader" type="flex" align="bottom">
          <el-col :span="8" :offset="1">
            <h1>人口信息服务备份资源库数据资源展示</h1>
          </el-col>
          <el-col style="height: 79px;line-height: 85px;font-size:15px;padding-top: 10px" :span="15">
            <el-row style="height: 80px"  type="flex" align="bottom">
              <el-col :span="4" :offset="4">
                <router-link active-class="activeRT" to="/showzyk/overall" >整体概括</router-link></el-col>
              <el-col :span="4"><router-link active-class="activeRT" to="/showzyk/org"     >组织视角</router-link></el-col>
              <el-col :span="4"><router-link active-class="activeRT" to="/showzyk/work"    >业务视角</router-link></el-col>
              <el-col :span="4"><router-link active-class="activeRT" to="/showzyk/synergy" >协同视角</router-link></el-col>
              <el-col :span="4"><router-link active-class="activeRT" to="/showzyk/other"   >其他视角</router-link></el-col>
            </el-row>
          </el-col>
        </el-row>
      </header>

      <section>
        <router-view/>
      </section>
    </div>
  </div>


</template>

<script>
  import particles from 'particles.js'

  export default {
    name: "zyk",
    data() {

      return {}
    },
    methods: {},

    components: {},

    watch: {
      $route: function (val, oldVal) {

      }
    },

    mounted() {
      // 全局背景
      particlesJS( 'allbg',
        {
          "particles": {
            "number": {
              "value": 355,
              "density": {
                "enable": true,
                "value_area": 789.1476416322727
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "circle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              }
            },
            "opacity": {
              "value": 0.48927153781200905,
              "random": false,
              "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0,
                "sync": false
              }
            },
            "size": {
              "value": 2,
              "random": true,
              "anim": {
                "enable": true,
                "speed": 7,
                "size_min": 0,
                "sync": false
              }
            },
            "line_linked": {
              "enable": false,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 0.6,
              "direction": "none",
              "random": true,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "bubble"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 83.91608391608392,
                "size": 1,
                "duration": 3,
                "opacity": 1,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        }
      );

    }

  }
</script>

<style scoped lang='scss'>
  @import "../../styles/mixin.scss";

  /deep/ #app {
    background-color: transparent;
    min-width: 1500px;
  }

  .activeRT{
    color: #009cff;
    font-size: 17px;
    text-shadow: 0px 0px 8px #009cff;
  }
  .hello {
    min-height: 100%;
    /*background-image: url(../../assets/bg.png);*/
    background-repeat: no-repeat;
    background-size: 100% 100%;
    /*background-color: #15171c;*/
    color: #ffffff;
    font-size: 14px;
    z-index: 999;

    .zykheader{
      height: 70px;
      border-bottom: 1px solid #515151;
    }


  }

  a{
    transition-property: font-size;
    transition-duration: 0.1s ;
    transition-delay: 0ms;
    letter-spacing:2px;
  }
  a:hover{
    transform: scale(1.05) translateZ(0);
    font-size: 17px;
    text-shadow: 0 0 5px #FFFFFF;
  }

  /deep/ .particles-js-canvas-el{
    position: absolute;
    top:0;
    background-color: #080815;
    z-index: -333;
  }



</style>
