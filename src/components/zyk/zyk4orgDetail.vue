<template>
  <div>
    <div style="padding: 10px">
      <el-row >
        <el-col :span="18" :offset="3" >
          <div class="detailhader" >
            <span style="font-size: 18px;font-weight: bolder" >组织视角 - {{orgName}}</span>
            <div class="backbtn"><el-button size="small" @click="backOrg">返回</el-button></div>
          </div>
          <div style="margin-top: 15px">
            <el-table
              v-loading="isloading"
              element-loading-text="加载中.."
              size="medium"
              ref="filterTable"
              :header-cell-style="{background:'transparent' , color:'#5682E4', borderBottom:'1px solid #3B3B3B'}"
              :row-style="{ color:'#ffffff' }"
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="zyname"
                label="数据名称"
                width="180"
              />
              <el-table-column
                prop="zyfrom"
                label="数据来源"
                width="180"
              />
              <el-table-column
                prop="inserttime"
                label="接入时间"
                sortable
                width="180"
                column-key="date"
                :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                :filter-method="filterHandler"
              >
              </el-table-column>
              <el-table-column
                prop="modifytime"
                label="更新时间"
                width="180">
              </el-table-column>
              <el-table-column
                prop="zytotal"
                label="数据量"
                sortable
                :formatter="formatter">
              </el-table-column>
              <el-table-column
                prop="tag"
                label="鲜活度"
                width="100"
                :filters="[{ text: '普通', value: '普通' }, { text: '优秀', value: '优秀' }]"
                :filter-method="filterTag"
                filter-placement="bottom-end">
                <template slot-scope="scope">
                  <el-tag
                    effect="dark"
                    :type="scope.row.tag === '普通' ? 'primary' : 'success'"
                    disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
              </el-table-column>
            </el-table>

          </div>
        </el-col>
        <el-col :span="3" ></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
      name: "zyk4orgDetail",
      data() {

        this.orgName='';

        this.isloading = true;
        this.tableData = [];
        return {
          tableData: []
        }
      },
      methods: {
        resetDateFilter() {
          this.$refs.filterTable.clearFilter('date');
        },
        clearFilter() {
          this.$refs.filterTable.clearFilter();
        },
        formatter(row, column) {
          return row.zytotal;
        },
        filterTag(value, row) {
          return row.tag === value;
        },
        filterHandler(value, row, column) {
          const property = column['property'];
          return row[property] === value;
        },

        backOrg(){
          console.log(11);
          this.$router.push( { name: 'zyk4org' } )
        }
      },

      mounted() {
        this.orgName = this.$route.params.orgname;

        this.isloading = true;
        this.tableData = [
          {zyname:'农村社保信息', zyfrom:'市局', inserttime: '2016-05-02', modifytime: '2016-05-02', zytotal: '88105', tag: '普通'},
          {zyname:'出生人员信息', zyfrom:'派出所', inserttime: '2016-05-04', modifytime: '2016-05-02', zytotal: '123625', tag: '优秀'},
          {zyname:'死亡人员信息', zyfrom:'市局', inserttime: '2016-05-01', modifytime: '2016-05-02', zytotal: '26541', tag: '普通'},
          {zyname:'结婚登记信息', zyfrom:'金牛区', inserttime: '2016-05-03', modifytime: '2016-05-02', zytotal: '985412', tag: '普通'},
          {zyname:'农村社保信息', zyfrom:'市局', inserttime: '2016-05-02', modifytime: '2016-05-02', zytotal: '88105', tag: '普通'},
          {zyname:'出生人员信息', zyfrom:'派出所', inserttime: '2016-05-04', modifytime: '2016-05-02', zytotal: '123625', tag: '优秀'},
          {zyname:'死亡人员信息', zyfrom:'市局', inserttime: '2016-05-01', modifytime: '2016-05-02', zytotal: '26541', tag: '普通'},
          {zyname:'结婚登记信息', zyfrom:'金牛区', inserttime: '2016-05-03', modifytime: '2016-05-02', zytotal: '985412', tag: '普通'},
          {zyname:'农村社保信息', zyfrom:'市局', inserttime: '2016-05-02', modifytime: '2016-05-02', zytotal: '88105', tag: '普通'},
          {zyname:'出生人员信息', zyfrom:'派出所', inserttime: '2016-05-04', modifytime: '2016-05-02', zytotal: '123625', tag: '优秀'},
          {zyname:'死亡人员信息', zyfrom:'市局', inserttime: '2016-05-01', modifytime: '2016-05-02', zytotal: '26541', tag: '普通'},
          {zyname:'结婚登记信息', zyfrom:'金牛区', inserttime: '2016-05-03', modifytime: '2016-05-02', zytotal: '985412', tag: '普通'}
        ];
        this.isloading = false;

      },
      watch: {
        $route: function ( val, oldVal ) {
          // get方式。拼接参数
          // this.$axios.get( this.$myurl.baseUrl+'/showlog/listdetile?index='+val.params.listIndex ).then( res => {
          //   // res 为对象类型。后端返回的数据在 res.data 中。
          //   console.log( res.data);
          //   if( res.data.success === true ){
          //
          //   }else{
          //     this.$notify.error({
          //       title: '警告',
          //       message: res.data.message ,
          //     });
          //   }
          // }).catch(res => {
          //   this.loading = false;
          //   this.$notify.error({
          //     title: '提示',
          //     message: "网络缓慢，请稍后再试",
          //   });
          // });



        }

      }


    }
</script>


<style scoped>

  /deep/ .el-table, .el-table__expanded-cell {
    background-color: transparent !important;
  }
  /deep/ .el-table tr {
    background-color: rgba(21, 23, 28, 0.61) !important;
  }

  /deep/ .el-table-filter {
    border: 1px solid #3b3b3b !important;;
    border-radius: 2px;
    background-color: #1d2027 !important;;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1) !important;;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1) !important;;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 2px 0;
  }

  /deep/ .el-table-filter__bottom {
    border-top: 1px solid #3b3b3b !important;
    padding: 8px;
  }

  /deep/ .el-table td, .el-table th {
    border-bottom: 1px solid #3B3B3B;
  }

  /* 加载中 */
  /deep/ .el-loading-mask {
    position: absolute;
    z-index: 2000;
    background-color: rgba(21, 23, 29, 0.9) !important;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transition: opacity .3s;
    transition: opacity .3s;
  }

  /deep/ .el-loading-spinner .circular {
    height: 70px;
    width: 70px;
    -webkit-animation: loading-rotate 2s linear infinite;
    animation: loading-rotate 2s linear infinite;
  }

  .detailhader{
    margin-top: 10px;
    height: 35px;
    line-height: 35px;
  }

  .backbtn{
    display: inline-block;
    float: right;
  }

  /deep/ .el-button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: rgba(255, 255, 255, 0) !important;
    border: 1px solid #DCDFE6 !important;
    color: #fdfdfd !important;
    -webkit-appearance: none;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0;
    margin: 0;
    -webkit-transition: .1s;
    transition: .1s;
    font-weight: 500;
    padding: 8px 14px !important;
    font-size: 13px !important;
    border-radius: 4px;
  }

  /deep/ .el-button:focus, .el-button:hover {
    color: #409EFF !important;;
    border-color: #6cdbff !important;;
    background-color: rgba(0, 206, 255, 0) !important;;
  }


</style>
