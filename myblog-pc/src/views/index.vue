<template>
  <div class="container">
    <div class="pic">1</div>

    <div class="blog-list" v-for="item in dataShow" :key="item.blog_Id">
      <router-link :to="{ path: '/blog/detail/' + item.blog_id }" tag="div">
        <div class="post-time">
          <span>{{ item.blog_time | dateFormat }}</span>
          <span> + {{ item.blog_length }}字 </span>
        </div>
        <div class="blog-title">
          <h1>{{ item.title }}</h1>
        </div>
        <!-- <div id="blog_detail">123</div> -->
        <!-- <p id="blog-content">{{ item.blog_content }}</p> -->
      </router-link>
    </div>
    <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @next-click="nextPage"
        @prev-click="prePage"
        :current-page.sync="currentPage"
        @current-change="clog"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      total: 0,
      data: [],
      uname: "",
      totalPage: [],
      pageSize: 5,
      pageNum: 1,
      dataShow: "",
      currentPage: 0,
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        let { blogs } = res.data;
        this.data = blogs;
        this.pageNum = Math.ceil(this.data.length / this.pageSize) || 1;
        this.total = this.pageNum * 10;
        for (let i = 0; i < this.pageNum; i++) {
          this.totalPage[i] = this.data.slice(
            this.pageSize * i,
            this.pageSize * (i + 1)
          );
        }
        this.dataShow = this.totalPage[this.currentPage - 1];
      });
    },
    nextPage() {
      if (this.currentPage === this.pageNum - 1) return;
      this.dataShow = this.totalPage[++this.currentPage];
    },
    // 上一页
    prePage() {
      if (this.currentPage === 0) return;
      this.dataShow = this.totalPage[--this.currentPage];
    },
    clog() {
      this.dataShow = this.totalPage[this.currentPage - 1];
    },
    // setDetail() {
    //   var blog_content = document.getElementById("blog-content");
    //   var demoHtml = blog_content.innerHTML.slice(0, 20) + "......";
    //   console.log(demoHtml);
    //   blog_content.innerHTML = demoHtml;
    // },
  },
};
</script>


<style lang="scss" scoped>
.pic {
  background: url(../assets/bg12.jpg);
  height: 400px;
}
.blog-list {
  width: 700px;
  height: 200px;
  cursor: pointer;
  margin: 20px auto;
  border: 3px solid black;
  padding: 20px;
}

.blog-list:hover {
  border-color: rgb(189, 99, 99);
  h1 {
    color: rgb(189, 99, 99);
  }
}

.blog-title,
.blog-content,
.post-time {
  margin: 10px 0;
  text-align: left;
}
.post-time {
  color: rgb(153, 153, 153);
  margin-top: 0;
  font-size: 16px;
}
.block {
  margin-bottom: 30px;
}
</style>