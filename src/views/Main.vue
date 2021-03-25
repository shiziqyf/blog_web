<template>
  <div>
    <div class="fullContent">
      <el-row type="flex" justify="center" class="blog-row">
        <el-col :span="3" class="hidden-md-and-down"></el-col>
        <el-col :span="24">
          <div class="blog-content">
          
              <div class="blog-title">
                <h2>
                  <span v-html="blog.title"></span>
                </h2>
              </div>
          
            <div class="content">
              <mavon-editor class="content-html" v-html="blog.content_html"></mavon-editor>
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
      
      blog: {},
    };
  },

  methods: {
    getData() {
      this.$emit('changeLoad', true)
      this.getRequest("/blog/indexContent", this).then((resp) => {
        this.blog = resp.data;
      }).finally(() => {
        this.$emit('changeLoad', false)
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
  
}
.fullContent {
  /* margin-top: -20px;
  background-color: #f5f5f5; */
}

.main-content {
  width: 100%;
}
/* .content {
  background-color: white;
  padding-left: 10px;
} */
.blog-content {
  /* border: 1px solid #F5F5F5	; */
  /* padding-left: 10px;
  padding-right: 10px;
  padding-bottom: 20px;
   padding-top: 5px;
  background-color: white; */
}
.content-html {
  padding: 10px;
}
img {
  max-width: 98%;
}
.el-card__body {
  padding: 0px;
}
</style>