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
          
            <div class="content ">
              <mavon-editor class="content-html" v-html="blog.content_html"></mavon-editor>
            </div>
             <!-- <div class="content-mobile hidden-sm-and-up" >
              <mavon-editor class="content-html" v-html="blog.content_html"></mavon-editor>
            </div> -->

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
      this.$emit('changeLoad', true)
      this.getRequest("/blog/findById?id=" + this.id, this).then((resp) => {
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


.main-content {
  width: 100%;
}

.content {
  margin-top: 35px;
}
.content-html {
  padding: 10px;
  padding-top: 30px;
}
img {
  max-width: 98%;
}
/* .el-divider__text {
  background-color:  #f5f5f5 !important;
} */
</style>