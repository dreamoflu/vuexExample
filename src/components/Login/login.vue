<style>

  .loginWrap {
    width: 100%;
    height: 100% !important;
    margin: 0 auto;
    box-sizing: border-box;
    /*margin-top: -60px;*/
  }

  .loginWrap .loginWrap-main {
    width: 100%;
    height: 100%;
    min-width: 1000px;
    /*background: #eeeeee;*/
    margin: 0 auto;
    position: absolute;
  }

  .loginWrap-main {
    background-image: url('./bg.png');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .loginbox {
    position: absolute;
    top: 204px;
    right: 260px;
    width: 340px;
    height: 360px;
    background-color: #fff;
    opacity: 0.9;
    border-radius: 10px;

  }

  .inputbox {
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  .logo {
    width: 200px;
    height: 60px;
  }

  .logowrap {
    margin-top: 20px;
  }

  .iconlogo {
    width: 36px;
    height: 36px;
    margin-top: 2px;
    /*margin-left: -10px;*/
    border-right: 1px solid #e6e6e6;

  }

  input {
    border-radius: 35px !important;
    border: none !important;
    /*border-radius: 0!important;*/
  }

  .phoneinput {

    width: 250px;
    height: 42px;
    /*padding-left: 20px;*/
    border-radius: 10px;
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    border: 1px solid #e6e6e6;
  }

  .verifyInput {
    width: 250px;
    height: 40px;
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
  }

  .verifycode {
    color: #22aae5;
    font-size: 14px;
    font-family: '微软雅黑';
  }

  .verify {
    float: left;
    color: #666;
    font-size: 14px;
    font-family: '微软雅黑';
    margin-left: 46px;
  }

  .loginbtn {
    width: 250px;
    height: 40px;
    background-color: #22aae5;
    border-radius: 20px;
    color: #fff;
    font-size: 14px;
    font-family: '微软雅黑';
    margin-top: 50px;
    margin-left: 46px;
  }

  .verifybtn {
    width: 90px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #e6e6e6;
    border-radius: 10px;
    color: #333;
    font-size: 14px;
    font-family: '微软雅黑';
    display:flex;
    align-items: center;
    justify-content: center;
    /*flex-direction:row;*/
    /*text-align: center;*/
    /*padding-top: 12px;*/
  }
  .inputFont{
    font-size: 12px;
  }
</style>
<template>
  <div class="loginWrap">
    <div class="loginWrap-main">
      <div class="loginbox">
        <div class="inputbox">
          <div class="logowrap">
            <img class="logo" src="./logo.png" alt="">
          </div>
          <div style="height:30px;">
          </div>

          <div class="phoneinput">
            <div><img class="iconlogo " src="./account.png" alt=""></div>
            <el-input class="inputFont" placeholder="请输入手机号" v-model="phone">
            </el-input>
          </div>

          <div class="verifyInput">
            <div
              style="display:flex;felx-direction:row;width:150px;height:40px;border-radius: 10px;border:1px solid #e6e6e6;margin-right:10px;">
              <div><img class="iconlogo" src="./lock.png" alt=""></div>
              <el-input class="codeinput inputFont " placeholder="请输入验证码" v-model="verify">
              </el-input>
            </div>
            <div class="verifybtn" @click=""><span style="">获取验证码</span></div>
          </div>
        </div>
        <div class="verify">收不到验证码？试试<span class="verifycode">“语音验证码”</span></div>
        <el-button class="loginbtn" @click="">登录</el-button>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        phone: '',
        verify: '',

        multipleSelection: []
      }
    },

    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }
</script>
