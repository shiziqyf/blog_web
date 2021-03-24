<template>
  <div class="login-card">
    <el-row type="flex" justify="center">
      <el-col :span="18" class="hidden-xs-only"></el-col>
      <el-col :span="12" class="hidden-md-and-down"></el-col>
      <el-col :span="24">
        <el-card>
          <div slot="header" class="login-title">
            <span >管理员登录</span>
            
          </div>
          <div>
            <el-form label-width="80px" label-position="left">
              <el-form-item label="用户名">
                <el-input v-model="username" placeholder="用户名"></el-input>
              </el-form-item>
              <el-form-item label="密码">
                <el-input v-model="password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="login">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
       <el-col :span="12" class="hidden-md-and-down"></el-col>
      <el-col :span="18" class="hidden-xs-only"></el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.postRequest("/user/login", {
        username: this.username,
        password: this.password,
      }).then((resp) => {
        this.$store.commit('login',resp.data)
        this.$router.push('/index')
      });
    },
  },
};
</script>

<style>
.login-card {
  margin: 20px;
}
.login-title{
    text-align: center;
}
</style>