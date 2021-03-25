<template>
  <div>
    <div class="fullContent">
      <el-row type="flex" justify="center" class="blog-row">
        <el-col :span="3" class="hidden-md-and-down"></el-col>
        <el-col :span="24">
         
            <div class="blog-content">
              <div class="blog-title">
                <h3>
                  <span v-html="blog.title"></span>
                </h3>
              </div>
              <el-divider></el-divider>
              <div class="content">
                <div v-html="blog.content_html"></div>
              </div>
            </div>
        
        </el-col>
        <el-col :span="3" class="hidden-md-and-down"></el-col>
      </el-row>
    </div>
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
      id: this.$route.params.id,
      blog: {},
    };
  },

  methods: {
    getData() {
      this.getRequest("/blog/findById?id=" + this.id, this).then((resp) => {
        this.blog = resp.data;
      });
    },
  },

  created() {
    this.getData();
  },
};
</script>

<style>
.blog-title {
  color: #008b8b;
}
.fullContent {
  /* margin-top: -20px;
  background-color: #f5f5f5; */
}

.main-content {
  width: 100%;
}
.blog-content {
  /* border: 1px solid #F5F5F5	; */
  padding-left: 10px;
  background-color: white;
}
img {
  max-width: 98%;
}
.el-card__body {
  padding: 0px;
}
</style>