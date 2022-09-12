<script setup>
import { ref, reactive, onMounted } from "vue";
import utils from '@/utils/utils'

const loginLogo = new URL("../../assets/logo.svg", import.meta.url).href;
const bgColor = ref('#626aef')

const loginFormData = reactive({
  username: "",
  password: "",
  remember: false,
});

const loginForm = ref()
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: true }
  ]
})

const login = () => {
  let isOk = true
  loginForm.value.validate((valid, fields) => {
    if (!valid) {
      isOk = false
    }
  })

  if (!isOk) return

  utils.set('login', JSON.stringify(loginFormData))
  // TODO 调用后台登录
}

onMounted(() => {
  const data = JSON.parse(utils.get('login'))
  loginFormData.username = data.username
  loginFormData.password = data.password
  loginFormData.remember = data.remember
  console.log(data)
  // loginFormData.remember = utils.get('remember')
})

const lineHeight = ref("45px")
</script>

<template>
  <div class="login-page">
    <div class="login-header"></div>
    <div class="login-panel">
      <div class="logo">
        <el-image :src="loginLogo" class="logo-img"></el-image>
      </div>
      <div class="login-text">
        <div>用户登录</div>
      </div>
      <div class="form">
        <el-form ref="loginForm" :rules="rules" :model="loginFormData">
          <el-form-item label="" prop="username">
            <el-input
              v-model="loginFormData.username"
              placeholder="请输入用户名"
              prefix-icon="Avatar"
            ></el-input>
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input type="password" v-model="loginFormData.password" placeholder="请输入密码" prefix-icon="Lock"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-checkbox v-model="loginFormData.remember" label="记住密码"></el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="danger" v-on:click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="login-footer"></div>
  </div>
</template>

<style scoped>
.login-page {
  background-color: v-bind(bgColor);
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  justify-items: center;
}

.login-page .login-panel {
  width: 450px;
  margin: 0 auto;
  align-self: center;
}

.login-page .login-panel .login-text {
  line-height: 6vh;
  text-align: center;
  font-size: 26px;
  color: #fff;
  letter-spacing: 6px;
  margin: 10px 0 ;
}

.login-page .login-panel .form :deep(.el-form-item__label) {
  color: #fff;
  height: v-bind(lineHeight);
  line-height: v-bind(lineHeight);
}

.login-page .login-panel .form :deep(.el-input__prefix-inner) {
  color: #000;
}

.login-page .login-panel .form :deep(.el-input__inner) {
  height: v-bind(lineHeight);
}

.login-page .login-panel .form :deep(.el-checkbox__label) {
  color: #fff;
}

.login-page .login-panel .form :deep(.el-button) {
  width: 100%;
  height: v-bind(lineHeight);
  line-height: v-bind(lineHeight);
  border-radius: v-bind(lineHeight);
}

.login-page .login-panel .logo {
  text-align: center;
}

.login-page .login-panel .logo .logo-img {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  box-shadow: 0 0 10px #fff;
}

.login-page .login-panel .logo .logo-img :deep(img) {
  width: 80px;
  height: 80px;
  border-radius: 100%;
  background-color: #fff;
}
</style>
