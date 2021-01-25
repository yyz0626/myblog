<template>
  <div class="container">
    <p>标题：<input type="text" v-model="title" /></p>
    <p>内容：<input type="textarea" v-model="content" /></p>
    <button @click="publish">发表</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      uid: "",
    };
  },
  created() {
    this.getUserId();
  },

  methods: {
    publish() {
      this.$http
        .post("/blog/publish", {
          title: this.title,
          blog_content: this.content,
          user_id: this.uid,
        })
        .then((res) => {
          let { message } = res.data;
          if (message == "发表成功") {
            alert(message);
            this.$router.push("/");
          } else {
            alert(message);
          }
        });
    },
    getUserId() {
      // var uname = localStorage.getItem("myname");
      var uid = localStorage.getItem("myid");
      // this.uname = uname;
      this.uid = uid;
      console.log(this.uid);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>