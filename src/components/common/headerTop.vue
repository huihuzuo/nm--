<template>
  <div>
    <div class="trafficHeader-wrap">
      <div class="trafficHeader-left">
        <img class='img' src="" alt="">
        <div class="trafficHeader-left-second">
          <div>交通流量-</div>
          <div class="selector">
            <el-select v-model="value1">
              <el-option @click.native="goChoice('trafficGaode')" value="高德"></el-option>
              <el-option @click.native="goChoice('trafficBaidu')" value="百度"></el-option>
            </el-select>
          </div>
        </div>
      </div>
      <div class="trafficHeader-center">
        <div class="header-choose active" @click="currentItem('lx')">路线维度</div>
        <div class="header-choose" @click="currentItem('xzqh')">行政区划维度</div>
        <div class="header-choose" @click="currentItem('shijian')">时间维度</div>
      </div>
      <div class="trafficHeader-right">
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
  </div>
</template>

<script>
    export default {
      name: 'headerTop',
      props: {
        // weiduHandler:{
        //   type:Function,
        //   require:true,
        //   default:function(){}
        // },
      },
      mounted () {
        this.type = 'lx'
        this.goChoice('trafficGaode')
      },
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
           value1:'',
           type: null,
           wrapType: 'trafficGaode'
         }
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
        }
      }
    }
</script>

<style scoped lang="scss">
  .trafficHeader-wrap{
    width:100%;
    height:50px;
    background-color: #fff;
    border-bottom: 2px solid lightblue;
    display:flex;
    justify-content: space-between;
    .trafficHeader-left{
      display:flex;
      justify-content: space-between;
      align-items: center;
      padding:5px;
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
        .selector{
          .el-select{
            .el-input{
              width:100px;
              border:none;
              outline:none;
              &:hover{
                border:none;
                outline:none;
              }
            }
          }

        }

      }
    }
    .trafficHeader-center{
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
    }
    .trafficHeader-right{
      display:flex;
      align-items: center;
      margin-right:10px;
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
