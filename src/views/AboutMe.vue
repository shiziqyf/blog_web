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
              <mavon-editor class="content-html" v-html="contentHtml"></mavon-editor>
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
      // contentHtml: '<h1><a id="_0"></a>关于我</h1><ul><li>一个喜欢看电影的程序猿</li><li>一个擅长后端开发的程序猿</li><li>目前正在学习ios开发</li><li>目标成为一名能够养活自己的独立开发者</li></ul>'
      contentHtml: ''
    };
  },

  methods: {
    // getData() {
    //   this.$emit('changeLoad', true)
    //   this.getRequest("/blog/indexContent", this).then((resp) => {
    //     this.blog = resp.data;
    //   }).finally(() => {
    //     this.$emit('changeLoad', false)
    //   });
    // },
  },

  created() {
    // this.getData();
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