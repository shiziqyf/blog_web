<template>
  <div>
    <el-row>
       <el-col><el-input placeholder="标题" v-model="blog.title"> </el-input></el-col>
    </el-row>
    <mavon-editor ref="md" v-model="blog.content" @save="save"></mavon-editor>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      blog: {},
    };
  },
  computed: {
    content_html() {
      return this.$refs.md.d_render;
    },
  },
  methods: {
    save() {
      this.blog.content_html = this.content_html;
      this.postRequest("/blog/add", this.blog).then((resp) => {
        console.log(resp.data);
      });
    },
  },
};
</script>

<style>
</style>