<template>
  <div class="loginWrapper">
    <div class="bd">
      <el-form :model="loginForm" :rules="loginRule" ref="loginForm">
        <el-form-item prop="userName">
          <el-input type="userName" v-model="loginForm.userName" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="loginForm.pwd" placeholder="密码" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')" class="submitBtn">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="ft">
      <router-link to="/register">还没有账号？马上注册</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        loginForm: {
          userName: '',
          pwd: ''
        },
        loginRule: {
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
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var data = {
              'usr': this.loginForm.userName,
              'pwd': this.loginForm.pwd
            }
            this.$http.get('/sbgnews/api/user/login', data)
              .then(res => {
                if (res.data.code === 0) {
                  sessionStorage.setItem('accessToken', res.data.data.accessToken)
                  sessionStorage.setItem('userName', res.data.data.userName)
                  sessionStorage.setItem('uid', res.data.data.id)
                  console.log(res.data.data.userName)
                  this.$router.push({name: '/mine', params: {username: res.data.data.userName}})
                  console.log('登陆ok')
                } else {
                  console.log('登陆失败')
                }
              })
              .catch(err => {
                console.log(err)
              })
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
