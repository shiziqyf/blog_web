<template>
  <div class="el-menu-outer">
    <el-menu :router="true" background-color="#DCDCDC" active-text-color="#000000">
      <!-- 头像部分 -->

      <div class="myheader">
        <div class="title avatar">
          <el-avatar :size="100" fit="fill" src="/image.png"></el-avatar>
        </div>

        <div class="title name-text">
          <p class="small-font">一个喜欢看电影的程序员</p>

          <p class="title-font">我的个人博客</p>
        </div>
      </div>

      <hr />
      <!-- 列表 -->
      <div class="el-menu-exHeader">
        <el-menu-item index="/index/main">
          <i class="el-icon-s-home menu-item-icon"></i>
          <span class="item">首页</span>
        </el-menu-item>
        <el-menu-item index="/index/catalog/1">
          <i class="el-icon-menu menu-item-icon"></i>
          <span class="item">目录</span>
        </el-menu-item>
        <el-menu-item index="/index/pigeonhole">
          <i class="el-icon-s-data menu-item-icon"></i>
          <span class="item">归档</span>
        </el-menu-item>
        <el-menu-item index="/index/aboutMe">
          <i class="el-icon-s-custom menu-item-icon"></i>
          <span class="item">关于我</span>
        </el-menu-item>
        <div v-if="$store.state.token != null">
          <el-menu-item index="/admin/editBlog">
            <i class="el-icon-edit menu-item-icon"></i>
            <span class="item">新博客</span>
          </el-menu-item>
          <el-menu-item @click="outLogin">
            <i class="el-icon-warning menu-item-icon"></i>
            <span class="item">退出登录</span>
          </el-menu-item>
        </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // menuMode: "horizontal"
    };
  },

  methods: {
    outLogin() {
      this.$store.commit("outLogin");
      localStorage.removeItem("token");
    },
  },

  created() {
    console.log(this.$store.state.token);
  },
};
</script>

<style>
.el-menu {
  height: 100%;
}
.title {
  margin: 20px;
}
.name-text {
  color: black;
  font-size: 130%;
}
.item {
  font-size: 110%;
}

.el-menu-outer {
  height: 100%;
}

.el-menu-exHeader {
  text-align: left;
}

.menu-item-icon {
  color: black !important;
}

hr {
  border: 0;
  height: 1px;
  background-color: #bebebe;
}
.small-font {
  font-size: 0.5em;
  /* font-weight: lighter; */
  color: #707070;
}

.title-font {
  font-size: 1em;
  font-weight: bold;
}
</style>