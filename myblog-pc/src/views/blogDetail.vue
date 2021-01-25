<template>
  <div class="container">
    <div class="blog">
      <div class="blog-title">
        <h3>{{ blog[0].title }}</h3>
        <span>{{ blog[0].blog_time }}</span>
        <div class="blog-content">{{ blog[0].blog_content }}</div>
      </div>
    </div>
    <h1>评论</h1>
    <input type="text" v-model="comment" placeholder="在这里写下评论..." />
    <button @click="push">发表</button>
    <div class="comments" v-for="items in commentsList" :key="items.comm_id">
      <div class="comment">{{ items.comm_content }}</div>
      <div class="comment-info">
        <span class="nickname">{{ items.nickname }}</span>
        <span class="comm_time">{{ items.comm_time }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commentsList: "",
      blog: [],
      comment: "",
    };
  },
  created() {
    this.getBlogComment();
    this.getBlogDetail();
  },
  methods: {
    getBlogComment() {
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/comment", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let comments = res.data.comments;
          this.commentsList = comments;
        });
    },
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      this.$http
        .get("/blog/detail", {
          params: {
            blogId: blogId,
          },
        })
        .then((res) => {
          let blog = res.data.detail;
          this.blog = blog;
        });
    },
    push() {
      this.$http
        .post("/blog/writeComment", {
          comm_content: this.comment,
          blog_id: this.$route.params.blogId,
          user_id: localStorage.getItem("myid"),
        })
        .then((res) => {
          let { message } = res.data;
          if (message == "评论成功") {
            alert(message);
            this.comment = "";
            this.$router.go(0);
          } else {
            alert(message);
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.blog {
  margin: 20px auto;
  padding: 20px;
  background: #ccc;
}
.blog-title {
  padding: 10px;
}
.blog-content {
  padding: 10px;
}
.comments {
  margin-top: 20px;
  padding: 20px;
  background: palegreen;
}
.comment-info {
  float: right;
  .nickname {
    margin-right: 10px;
  }
}
</style>