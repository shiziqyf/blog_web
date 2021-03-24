<template>

  <el-menu  :router="true" background-color="#F5F5F5" active-text-color="#6495ED"	>
    <div class="title avatar">
      <el-avatar
        :size="100"
        src="https://z3.ax1x.com/2020/12/28/rTyXa6.jpg"
      ></el-avatar>
    </div>

     <div class="title name-text">
      <h4>礻子的博客</h4>
    </div>

    <el-menu-item index="/index/main"><span class="item"> 首页</span></el-menu-item>
    <el-menu-item index="/index/catalog"><span class="item"> 目录</span></el-menu-item>
    <el-menu-item index="/index/pigeonhole"><span class="item"> 归档</span></el-menu-item>
    <el-menu-item index="/index/aboutMe"><span class="item"> 关于我</span></el-menu-item>
    <el-menu-item index="/admin/newBlog"><span class="item"> 新博客</span></el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      // menuMode: "horizontal"
    };
  },
};
</script>

<style>
.el-menu {
  height: 100%;
  
}
.title{
  margin: 20px;
}
.name-text {
   color: black;
   font-size: 130%;
}
.item {
  font-size: 110%;
}
</style>