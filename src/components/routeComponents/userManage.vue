<template>
    <div>
      <div>
        <headerTop :flagHandler="flagHandler" :weiduHandler="weiduHandler"></headerTop>
      </div>
      <div>
        <router-view/>
      </div>
      <!--<headerTop :flagHandler="flagHandler" :weiduHandler="weiduHandler"></headerTop>-->
      <!--<luxianWeidu v-if="weidu==='a'"></luxianWeidu>-->
      <!--<xingzhengquhuaWeidu v-else-if="weidu==='b'"></xingzhengquhuaWeidu>-->
      <!--<timeWeidu v-else-if="weidu==='c'"></timeWeidu>-->
    </div>
</template>

<script>
  import headerTop from '../common/headerTop'
  import luxianWeidu from './luxianWeidu'
  import xingzhengquhuaWeidu from './xingzhengquhuaWeidu'
  import timeWeidu from './timeWeidu'
  export default {
    name: "userManage",
    data(){
      return{
        weidu:'', //渲染条件
      }
    },
    methods:{
      flagHandler(val){
        this.flag = val    //根据flag发送请求
      },
      weiduHandler(val){
        this.weidu = val   //根据flag和维度发送请求
      },
      showWeidu(){

      }
    },
    components:{
      headerTop,
      luxianWeidu,
      xingzhengquhuaWeidu,
      timeWeidu
    },
    }
</script>

<style scoped lang="scss"></style>
