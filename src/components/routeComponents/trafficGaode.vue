<template>
 <div class="tt">
   <luxianWeidu v-if="type === 'lx'"></luxianWeidu>
   <xingzhengquhuaWeidu v-if="type === 'xzqh'"></xingzhengquhuaWeidu>
   <timeWeidu v-if="type === 'shijian'"></timeWeidu>
 </div>
</template>

<script>
  import luxianWeidu from './luxianWeidu'
  import xingzhengquhuaWeidu from './xingzhengquhuaWeidu'
  import timeWeidu from './timeWeidu'
    export default {
      name: 'trafficGaode',
      data(){
        return{
           type: null
        }
      },
      mounted () {
        this.type = this.$route.query.type
        console.log(this.type)
      },
      watch: {
        '$route' (v, ov) {
          this.type = this.$route.query.type
          console.log(this.$route.query.type)
        }
      },
      components:{
        luxianWeidu,
        xingzhengquhuaWeidu,
        timeWeidu
      }
    }
</script>

<style scoped lang="scss">

</style>
