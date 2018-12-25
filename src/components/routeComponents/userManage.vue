<template>
    <div>
      <div>
        <trafficCountHeader></trafficCountHeader>
      </div>
      <div>
        <router-view/>
      </div>
    </div>
</template>

<script>
  import trafficCountHeader from '../common/headerTop'
  export default {
    name: "userManage",
    data(){
      return{
        weidu:'', //渲染条件
      }
    },
    methods:{},
    components:{
      trafficCountHeader,
    },
  }
</script>

<style scoped lang="scss"></style>
