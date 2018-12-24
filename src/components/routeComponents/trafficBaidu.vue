<template>
 <div>
   <luxianWeidu></luxianWeidu>
   <xingzhengquhuaWeidu></xingzhengquhuaWeidu>
   <timeWeidu></timeWeidu>
 </div>
</template>

<script>
  import luxianWeidu from './luxianWeidu'
  import xingzhengquhuaWeidu from './xingzhengquhuaWeidu'
  import timeWeidu from './timeWeidu'
  export default {
    name: 'trafficBaidu',
    components:{
      luxianWeidu,
      xingzhengquhuaWeidu,
      timeWeidu
    }
  }
</script>

<style scoped lang="scss">

</style>
