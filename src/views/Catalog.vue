<template>
  <div>
    <div class="catalog">
      <el-row type="flex" justify="center">
        <el-col :span="6" class="hidden-md-and-down"></el-col>

        <el-col :span="24">
          <div class="catalog-main">
            <div
              v-for="catalog in catalogs"
              :key="catalog.id"
              @click="toBlogDetail(catalog.id)"
              style="cursor: pointer"
             
            >
              <!-- <router-link :to="'/index/fullContent/' + catalog.id"> -->
              <el-row class="row">
                <el-col :span="24">
                  <el-card shadow="hover" :body-style="{ padding: '30px' }">
                    <el-row class="addition">
                      <el-col :span="6">
                        <i class="el-icon-date"></i>
                        <span class="chunk" v-text="catalog.up_dtStr"></span>
                      </el-col>
                      <div class="adminOption" v-if="$store.state.token != null">
                        <div @click.stop="changeBlog(catalog.id)">
                          <el-col :span="6">
                            <i class="el-icon-edit"></i>
                            <span class="chunk" >修改</span>
                          </el-col>
                        </div>

                        <div class="adminOption" @click.stop="deleteBlog(catalog.id)">
                          <el-col :span="6">
                            <i class="el-icon-delete"></i>
                            <span class="chunk">删除</span>
                          </el-col>
                        </div>
                      </div>
                    </el-row>
                    <el-divider></el-divider>
                    <el-row class="main">
                      <el-col :span="24">
                        <div>
                          <span v-text="catalog.title"></span>
                        </div>
                      </el-col>
                    </el-row>
                  </el-card>
                </el-col>
              </el-row>
              <!-- </router-link> -->
            </div>
          </div>

          <div class="skip">
            <el-row type="flex" justify="center">
              <el-col :span="24">
                <el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="navigatePages"
                  :pager-count="5"
                  :total="total"
                  :current-page.sync="nowPage"
                  :hide-on-single-page="false"
                ></el-pagination>
              </el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="6" class="hidden-md-and-down"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catalogs: [],
      total: 0,
      navigatePages: 0,
      nowPage: parseInt(this.$route.params.pageNum),
    };
  },
  watch: {
    nowPage() {
      this.$router.push("/index/catalog/" + this.nowPage);
    },
  },

  methods: {
    getData() {
      if (this.nowPage == undefined) {
        this.nowPage = 1;
      }
      this.getRequest("/blog/getCatalog?pageNum=" + this.nowPage, this).then(
        (resp) => {
          let data = resp.data;
          this.catalogs = data.list;
          this.total = data.total;
          this.navigatePages = data.navigatePages;

          // this.nowPage = data.pageNum
        }
      );
    },

    toBlogDetail(blogId){
        this.$router.push('/index/fullContent/' + blogId)
    },
    changeBlog(blogId) {
      this.$router.push('/admin/editBlog/' + blogId)
    },
    deleteBlog(blogId) {
      if(confirm("确定删除？")){
          this.postRequest("/blog/deleteBlog?id=" + blogId,).then((resp) => {
            this.$message.success("删除成功")
            this.getData()
          })
      }
    }
  },

  created() {
    this.getData();
  },
};
</script>

<style>
.row {
  margin-bottom: 8px;
}
.addition {
  font-size: 50%;
}
.chunk {
  margin-left: 6px;
}
.adminOption {
  margin-left: 5px;
  margin-right: 5px;
}
</style>