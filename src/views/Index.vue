<template>
  <el-container class="main">
    <div class="aside" @click="isShowDriver=false">
      <el-drawer
        :visible.sync="isShowDriver"
        direction="ltr"
        :with-header="false"
        :modal="false"
        :show-close="false"
        class="drawer hidden-sm-and-up"
      >
        <span>
          <Header/></span>
      </el-drawer>
    </div>

    <el-aside width="200px" class="aside hidden-xs-only aside-layout"
      ><Header
    />
    </el-aside>
    <el-main class="main">
     
      <div class="header hidden-sm-and-up" @click="isShowDriver=true">
       <i class="el-icon-s-unfold menu-icon" ></i>
    </div>
      <router-view :key="$route.fullPath"></router-view>
    </el-main>
  </el-container>
</template>

<script>
import Header from "../components/Header.vue";

export default {
  components: {
    Header,
  },
 
  data() {
    return {
      isShowDriver: false,
    };
  },
  methods: {
     
  }
};
</script>

<style>
.main {
  height: 100%;
}
.el-main {
  /* background-color: #f5f5f5; */
  background-color: #f5f5f5
}
.el-header {
  margin-bottom: 8px;
}
.header {
  padding: 8px;
  margin-bottom: 10px;
  background-color: #F5F5F5	;
  font-size: 150%;
}
.drawer {
  width: 200%;
  text-align: center;
}
.aside{
  text-align: center;
  
}
.aside-layout {
  border-right:8px solid white
}
.menu-icon {
  padding-left: 10px;
}
#top {
  /* height: 0;
  background-color: red; */
}

</style>