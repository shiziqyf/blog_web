<template>
  <div >
    <div class="catalog">
      <el-row type="flex" justify="center">
        <el-col :span="6" class="hidden-md-and-down"></el-col>

        <el-col :span="24">
          <div class="catalog-main">
            <div v-for="catalog in catalogs" :key="catalog.id">
              <router-link :to="'/index/fullContent/' + catalog.id">
                <el-row class="row">
                  <el-col :span="24">
                    <el-card shadow="hover" :body-style="{ padding: '30px' }">
                      <el-row class="addition">
                        <el-col :span="6"
                          ><i class="el-icon-date"></i
                          ><span class="chunk" v-text="catalog.up_dtStr"></span
                        ></el-col>
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
              </router-link>
            </div>
          </div>

          <div class="skip">
            <el-row type="flex" justify="center">
              <el-col :span="24"
                ><el-pagination
                  background
                  layout="prev, pager, next"
                  :page-size="navigatePages"
                  :pager-count="5"
                  :total="total"
                  :current-page.sync="nowPage"
                  :hide-on-single-page="false"
                  :current-change="currentChange"
                >
                </el-pagination
              ></el-col>
            </el-row>
          </div>
        </el-col>

        <el-col :span="6" class="hidden-md-and-down"></el-col>
      </el-row>
    </div>
    <el-button @click="currentChange" id="scroller">按钮</el-button>
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






    currentChange() {
      console.log("dd1");
      let d = document.getElementById("scroller")
      console.log(d.scrollTo)
       d.scrollTop
      d.scrollTo(0,0)
      window.scrollTo(0, 0);
    },
  },

  created() {
    console.log(this.nowPage);
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
</style>