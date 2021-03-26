<template>
  <div>
    <el-row>
      <el-col>
        <el-input placeholder="标题" v-model="blog.title"></el-input>
      </el-col>
    </el-row>
    <mavon-editor ref="md" v-model="blog.content" @save="save"></mavon-editor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      blog: {},
    };
  },
  computed: {
    content_html() {
      return this.$refs.md.d_render;
    },
  },
  methods: {
    getData() {
      this.$emit('changeLoad', true)
      this.getRequest("/blog/findById?id=" + this.id, this).then((resp) => {
        if(resp.data != null) {
            this.blog = resp.data;
        }
     
      }).finally(()=> {
        this.$emit('changeLoad', false)
      });
    },
    save() {
      this.$emit('changeLoad', true)
      this.blog.content_html = this.content_html;
      this.blog.id = this.id
      if (this.id != undefined) {
        this.postRequest("/blog/changeBlog", this.blog).then((resp) => {
          this.$message.success("修改成功");
        }).finally(() => {
         this.$emit('changeLoad', false)
      });
      } else {
        this.postRequest("/blog/add", this.blog).then((resp) => {
          this.$message.success("保存成功");
        }).finally(() => {
         this.$emit('changeLoad', false)
      });
      }
    },
  },

  created() {
    if (this.id != undefined) {
      this.getData();
    }
  },
};
</script>

<style>
</style>