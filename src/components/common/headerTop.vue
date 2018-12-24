<template>
  <div>
    <div class="trafficHeader-wrap">
      <div class="trafficHeader-left">
        <img class='img' src="" alt="">
        <div class="trafficHeader-left-second">
          <div>交通流量-</div>
          <div class="selector">
            <el-select v-model="value1">
              <el-option @click.native="goChoice('/userManage/trafficGaode')">高德</el-option>
              <el-option @click.native="goChoice('/userManage/trafficBaidu')">百度</el-option>
            </el-select>
          </div>

          <!--<el-dropdown>
          <span class="el-dropdown-link">
            <span>交通流量-</span>
            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="goChoice('/userManage/trafficGaode')">高德</el-dropdown-item>
              <el-dropdown-item @click.native="goChoice('/userManage/trafficBaidu')">百度</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>-->
        </div>
      </div>
      <div class="trafficHeader-center">
        <div class="header-choose" @click="currentItem()">路线维度</div>
        <div class="header-choose" @click="currentItem()">行政区划维度</div>
        <div class="header-choose" @click="currentItem()">时间维度</div>
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
    <!--<div class="selector-header">
      <div class="selector-innerWrap">
        <div class="first-col">
          <div class="first-div">路线：</div>
          <el-select v-model="formData" clearable placeholder="请选择" size="small">
            <el-option
              v-for="item in luxianList"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="second-col">
          <div class="first-div">行政区划：</div>
          <el-select v-model="formData" clearable placeholder="请选择" size="small">
            <el-option
              v-for="item in division"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="third-col">
          <div class="first-div">选择时间：</div>
          <el-date-picker
            size="small"
            v-model="value5"
            type="year"
            placeholder="选择年">
          </el-date-picker>
          <el-date-picker
            size="small"
            v-model="value4"
            type="month"
            placeholder="选择月">
          </el-date-picker>
        </div>
        <div class="forth-col">统计分析</div>
      </div>
    </div>
    <timeWeiduEchart></timeWeiduEchart>-->
  </div>
</template>

<script>
    export default {
      name: 'headerTop',
      props: {
        weiduHandler:{
          type:Function,
          require:true,
          default:function(){}
        },
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
           value1:''
         }
      },
      methods:{
        chooseTimeEvent(i){
          this.timeSelected = i.index
        },
        goChoice(path){
          this.$router.push(path)
        },
        currentItem(){
           //this.$emit('showWeidu')
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
