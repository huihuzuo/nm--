<template>
   <div>
     <luxianWeidu2 v-if="type === 'lx'"></luxianWeidu2>
     <xingzhengquhuaWeidu2 v-if="type === 'xzqh'"></xingzhengquhuaWeidu2>
     <timeWeidu2 v-if="type === 'shijian'"></timeWeidu2>
   </div>
</template>

<script>
  import luxianWeidu2 from './luxianWeidu2'
  import xingzhengquhuaWeidu2 from './xingzhengquhuaWeidu2'
  import timeWeidu2 from './timeWeidu2'
  export default {
    name: 'trafficEventGaode',
    data(){
      return{
        type: null
      }
    },
    mounted () {
      this.type = this.$route.query.type
      //console.log(this.type)
    },
    watch: {
      '$route' (v, ov) {
        this.type = this.$route.query.type
        //console.log(this.$route.query.type)
      }
    },
    components:{
      luxianWeidu2,
      xingzhengquhuaWeidu2,
      timeWeidu2
    }
  }
</script>

<style scoped>

</style>
