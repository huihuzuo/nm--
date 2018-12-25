<template>
  <div class="trafficHeader-wrap">
    <div class="trafficHeader-left">
      <img class='img' src="" alt="">
      <div class="trafficHeader-left-second">
        <el-dropdown trigger="click" >
            <span class="el-dropdown-link">
              交通事件-<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goChoice('trafficEventGaode')" value="高德">高德</el-dropdown-item>
            <el-dropdown-item @click.native="goChoice('trafficEventHangye')" value="行业">行业</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="trafficHeader-center">
      <div class="header-choose" @click="currentItem('lx')">路线维度</div>
      <div class="header-choose" @click="currentItem('xzqh')">行政区划维度</div>
      <div class="header-choose" @click="currentItem('shijian')">时间维度</div>
    </div>
    <div class="trafficHeader-right" v-if="type === 'shijian'">
      <div
        class="timeArr"
        :class="timeSelected === i.index ? 'chooseTime':''"
        v-for="(i,index) in timeList"
        :key="index"
        :index="i.index"
        @click="chooseTimeEvent(i)">
        {{i.time}}
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'trafficEventHeader',
      data(){
          return{
            timeSelected:null,
            timeList:[
              {'index':'0', 'time':'时'},
              {'index':'1', 'time':'日'},
              {'index':'2', 'time':'周'},
              {'index':'3', 'time':'月'},
              {'index':'4', 'time':'季'},
              {'index':'5', 'time':'年'},],
            value1:'行业',
            type: null,
            wrapType: 'trafficEventGaode'
          }
    },
      mounted(){
        this.type = 'lx'
        this.goChoice('trafficEventGaode')
      },
      methods:{
        chooseTimeEvent(i){
          this.timeSelected = i.index
        },
        goChoice(name){
          // this.wrapType = name
          this.$router.push({
            name:  name,
            query: {
              type: this.type
            }
          })
        },
        currentItem(type){
          this.type = type
          this.$router.push({
            name:  name,
            query: {
              type: this.type
            }
          })
          // this.$emit('showWeidu', type)
          $('.trafficHeader-center div').click(function(){
            $('.trafficHeader-center div').removeClass("active");
            $(this).addClass("active")
          })
        }
      }
    }
</script>

<style scoped lang="scss">
  .trafficHeader-wrap{
    position:relative;
    width:100%;
    height:50px;
    background-color: #fff;
    border-bottom: 2px solid lightblue;
    display:flex;
    flex-flow:row nowrap;
    justify-content: space-between;
    .trafficHeader-left{
      display:flex;
      align-items: center;
      margin-left:20px;
      width: 350px;
      .img{
        display:block;
        width:20px;
        height:20px;
        border-radius: 20px;
        background-color: rgb(26,130,238);
      }
      .trafficHeader-left-second{
        display:flex;
        text-align: center;
        line-height:50px;
        margin-left:10px;
        .titleWord{
          color:#1a82ee;
          font-size:14px
        }
      }
    }
    .trafficHeader-center{
      height:50px;
      flex-grow:1;
      display:flex;
      align-items: center;
      justify-content: center;
      position:absolute;
      left:600px;
      .header-choose{
        float:left;
        text-align: center;
        line-height:50px;
        width:100px;
        font-size:12px;
        font-family:SimSun;
        color:rgb(60,60,60);
        &:hover{
          cursor: pointer;
        }
      }
      .active{
        border-left:1px solid rgb(26,130,238);
        border-right:1px solid rgb(26,130,238);
        border-bottom:2px solid #eee
      }
      .titleSelected{
        border-left:1px solid rgb(26,130,238);
        border-right:1px solid rgb(26,130,238);
        border-bottom:2px solid #eee
      }
    }
    .trafficHeader-right{
      display:flex;
      align-items: center;
      margin-right:10px;
      width:350px;
      height:50px;
      .timeArr{
        width:40px;
        height:25px;
        border:1px solid lightblue;
        text-align: center;
        line-height:25px;
        margin-left:10px;
        float:left;
        font-size:12px;
        border-radius: 2px;
        cursor: pointer;
      }
      .chooseTime{
        background-color: rgba(26,130,238,0.6);
        color:#fff;
      }
    }


  }
</style>
