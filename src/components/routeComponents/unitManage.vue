<template>
  <div>
    <div>
      <trafficEventHeader></trafficEventHeader>
    </div>
    <div>
      <router-view/>
    </div>
  </div>
</template>

<script>
  import trafficEventHeader from '../common/trafficEventHeader'
    export default {
      name: "unitManage",
      components:{
        trafficEventHeader
      }
    }
</script>

<style scoped>

</style>
