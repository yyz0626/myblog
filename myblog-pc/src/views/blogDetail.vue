<template>
  <div class="container">
    <div class="blog">
      <div>
        <div class="blog-title">
          {{ blog[0].title }}
        </div>
        <span>{{ blog[0].blog_time | dateFormat }}</span>
      </div>
      <div class="blog-content">{{ blog[0].blog_content }}</div>
    </div>
    <div class="line"></div>
    <div class="comment">
      <div class="comment-title">添加新评论</div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 8 }"
        placeholder="在这里输入你的评论"
        v-model="comment"
        style="margin-bottom: 20px"
      >
      </el-input>
      <el-button type="info" round @click="push">提交评论</el-button>

      <div class="comments" v-for="items in commentsList" :key="items.comm_id">
        <img :src="imgUrl" class="comment-img" />
        <div class="comment-content">{{ items.comm_content }}</div>
        <div class="nickname">{{ items.nickname }}</div>
        <div class="comment-time">{{ items.comm_time | dateFormat }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: require("../static/github.jpg"),
      // textarea2: "",
      form: {
        name: "",
      },
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
      // console.log(window.localStoragee);
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
.container {
  margin: 50px auto 0;
  text-indent: 2px;
}
.blog {
  width: 1100px;
  margin: 20px auto 50px;
  padding: 20px;
}
.blog-title {
  padding: 10px;
  font-size: 42px;
  font-weight: 600;
}
.blog-content {
  padding: 10px;
  font-size: 24px;
}
.line {
  height: 10px;
  border-bottom: 1px solid #e0e0e0;
}
.comment {
  width: 1100px;
  margin: 20px auto 50px;
  margin-bottom: 20px;
}

.comment-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: left;
}
.comments {
  margin-top: 20px;
  height: 100px;
  padding: 20px;
  border-bottom: 1px solid #ececec;
  position: relative;
}
.comment-img {
  width: 70px;
  height: 70px;
  position: absolute;
  left: 20px;
  border-radius: 50%;
}
.nickname {
  position: absolute;
  left: 110px;
  top: 20px;
  font-weight: 600;
}
.comment-time {
  position: absolute;
  left: 110px;
  top: 60px;
  font-size: 14px;
}
.comment-content {
  position: absolute;
  left: 110px;
  top: 90px;
  font-size: 20px;
  font-weight: 600;
}
</style>