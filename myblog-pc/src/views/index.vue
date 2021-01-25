<template>
  <div class="blog-list">
    <div class="blog" v-for="item in blogList" :key="item.blogId">
      <h3 class="blog-title">
        <router-link :to="{ path: '/blog/detail/' + item.blog_id }">{{
          item.title
        }}</router-link>
      </h3>
      <p class="blog-content">{{ item.content }}</p>
      <span class="post-time">{{ item.postTime }}</span>
    </div>
    <button @click="logout">登出</button>
    <p>你好，{{ uname }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogList: [],
      uname: "",
    };
  },
  created() {
    this.getData();
    this.getUserName();
  },
  methods: {
    getData() {
      this.$http.get("/blog/list").then((res) => {
        let { state } = res.data;
        if (state == "auto-fail") {
          alert("请求未授权！-then");
        } else {
          let { blogs } = res.data;
          this.blogList = blogs;
        }
      });
    },
    getUserName() {
      var uname = localStorage.getItem("myname");
      this.uname = uname;
    },
    logout() {
      this.$store.dispatch("logout");
      location.href = "/login";
    },
  },
};
</script>

<style lang="scss" scoped>
.blog-list {
  width: 815px;
  margin: 20px auto;
}

.blog {
  background: #cccccc;
  padding: 20px;
  margin: 20px 0;
}

.blog-title,
.blog-content,
.post-time {
  margin: 20px 0;
}
</style>