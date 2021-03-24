<template>
  <div>
    <el-row type="flex" justify="center">
      <el-col :span="9" class="hidden-md-and-down"></el-col>
      <router-link to="/index/fullContent">
        <el-col :span="24">
          <el-row class="row">
            <el-col :span="24">
              <el-card shadow="hover" :body-style="{ padding: '40px' }">
                测试博客
              </el-card>
            </el-col>
          </el-row>

          <el-row class="row" type="flex" justify="center">
            <el-col :span="24">
              <el-card shadow="hover" :body-style="{ padding: '40px' }"
                >测试博客</el-card
              >
            </el-col>
          </el-row>

          <el-row class="row" type="flex" justify="center">
            <el-col :span="24">
              <el-card shadow="hover" :body-style="{ padding: '40px' }"
                >测试博客</el-card
              >
            </el-col>
          </el-row>
        </el-col>
      </router-link>

      <el-col :span="9" class="hidden-md-and-down"></el-col>
    </el-row>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
export default {};
</script>

<style>
.row {
  margin-bottom: 20px;
}
</style>