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

      }
    },
    methods:{},
    components:{
      trafficCountHeader,
    },
  }
</script>

<style scoped lang="scss"></style>
