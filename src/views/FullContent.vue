<template>
  <div class="fullContent">
    <el-row type="flex" justify="center">
      <el-col :span="3" class="hidden-md-and-down"></el-col>
      <el-col :span="24">
        <!-- <el-card class="main-content" shadow="never" :body-style="{ padding: '20px' }">
            <div slot="header">
              <span class="title">
                <h3>
                  第三方的飞机上大家覅技术都放假哦is阿胶佛我救死扶伤觉得覅偶就是东非奇偶数据大佛ijdsiof
                </h3>
              </span>
            </div>
            <div v-html="content"></div>
          </el-card> -->
        <div class="blog-title">
          <h3>
            第三方的飞机上大家覅技术都放假哦is阿胶佛我救死扶伤觉得覅偶就是东非奇偶数据大佛ijdsiof
          </h3>
        </div>
        <el-divider></el-divider>
        <div class="content">
          <div v-html="content"></div>
        </div>
      </el-col>
      <el-col :span="3" class="hidden-md-and-down"></el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      content: '<h2><a id="_0"></a>二级标题</h2>',
    };
  },
};
</script>

<style>
.blog-title {
  color: #008b8b;
}
.fullContent {
  height: 100%;
  background-color: white;
}
.main-content {
  width: 100%;
}
</style>