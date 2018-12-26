<template>
  <div class="content">
    <div class="table-header">
      <div class="bar"></div>
      <div @click="showRank('1')" class="rank active">拥堵指数排名</div>
      <div @click="showRank('2')" class="rank">拥堵频率排名</div>
    </div>
    <el-table
      :header-cell-style="{background:'#ddecfc'}"
      v-if="flag==='1'"
      :data="indexRanking"
      border
      height="600px">
      <el-table-column
        prop="rank"
        label="排名"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        prop="lx"
        label="路线"
        width="90"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zcyd"
        label="正常拥堵"
        width="84"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ycyd"
        label="异常拥堵"
        width="87"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ydnum"
        label="拥堵总数"
        width="87"
        align="center">
      </el-table-column>
    </el-table>
    <el-table
      :header-cell-style="{background:'#ddecfc'}"
      v-if="flag==='2'"
      :data="indexRanking"
      border
      height="600px">
      <el-table-column
        prop="rank"
        label="排名"
        width="50"
        align="center">
      </el-table-column>
      <el-table-column
        prop="lx"
        label="路线"
        width="90"
        align="center">
      </el-table-column>
      <el-table-column
        prop="zcyd"
        label="正常拥堵"
        width="84"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ycyd"
        label="异常拥堵"
        width="87"
        align="center">
      </el-table-column>
      <el-table-column
        prop="ydnum"
        label="拥堵总数"
        width="87"
        align="center">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
 export default {
    name: 'indexRanking',
    data(){
      return{
        indexRanking:[],
        flag:null

      }
    },
    mounted(){
      this.loadIndexRanking('indexRanking')
      this.showRank('1')
    },
    methods:{
      loadIndexRanking(val){
        this.$api.loadIndexRanking(val)
          .then(res =>{
            if(res.status === 200){
              this.indexRanking = res.data
            }else{
              this.$message.error('err')
            }
          }).catch(err =>{
          this.$message.error('err')
        })
      },
      showRank(flag){
        this.flag=flag
        $('.table-header .rank').click(function(){
          $('.table-header .rank').removeClass("active");
          $(this).addClass("active")
        })
      }

    }
 }
</script>

<style scoped lang="scss">
  .table-header{
    display:flex;
    margin-bottom:16px;
    .bar{
      width:4px;
      height:13px;
      background-color: rgb(26,130,238);
    }
    .active{
      color: #1a82ee;
    }
    div{
      font-size:12px;
      font-family: SimSun;
    }
    div:nth-child(2){
      margin-left:7px;
      &:hover{
        cursor: pointer;
      }
    }
    div:nth-child(3){
      margin-left:10px;
      &:hover{
        cursor: pointer;
      }
    }

  }


</style>
