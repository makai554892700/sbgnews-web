<template>
  <div class="loginWrapper">
    <div class="bd">
      <el-form :model="formInfo" :rules="userRule" ref="formInfo">
        <el-form-item prop="userName">
          <el-input type="userName" v-model="formInfo.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="formInfo.pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formInfo',false)" class="submitBtn">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('formInfo',true)" class="submitBtn">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!--<div class="ft">
      <router-link to="/register">还没有账号？马上注册</router-link>
    </div>-->
  </div>
</template>

<script>
  import {login, register} from '../common/methods'

  export default {
    name: 'login',
    data: function () {
      return {
        formInfo: {
          userName: '',
          pwd: ''
        },
        userRule: {
          userName: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 3, max: 10, message: '长度在 3 到 16 个字符', trigger: 'blur'}
          ],
          pwd: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 3, max: 20, message: '长度在 3 到 20 个字符', trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submitForm: function (formName, isRegister) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = {
              'userName': this.formInfo.userName,
              'passWord': this.formInfo.pwd,
              'deviceType': 3,
              'rember': true
            }
            if (isRegister) {
              register(this, data)
            } else {
              login(this, data)
            }
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .loginWrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 18px;
  }

  .loginWrapper .hd {
    width: 300px;
  }

  .loginWrapper .hd h2 {
    font-weight: 400;
    color: #20A0FF;
  }

  .loginWrapper .hd p {
    font-size: 15px;
    color: #1f2f3d;
  }

  .loginWrapper .bd {
    width: 300px;
  }

  .loginWrapper .bd .submitBtn {
    width: 100%;
  }

  .loginWrapper .bd .el-form-item:last-child {
    margin-bottom: 10px;
  }

  .loginWrapper .ft {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 300px;
  }

  .loginWrapper .ft a {
    font-size: 14px;
    text-decoration: none;
    color: #20A0FF;
  }
</style>
