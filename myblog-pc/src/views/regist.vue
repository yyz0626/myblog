<template>
  <div class="container">
    <div class="regist-form">
      <h3>用户注册</h3>
      <p>
        用户名：<input
          type="text"
          name="username"
          id="username"
          v-model="username"
        />
        <span id="info"></span>
      </p>
      <p>密码：<input type="password" name="password" v-model="password" /></p>
      <p>昵称：<input type="text" name="nickname" v-model="nickname" /></p>
      <button @click="doRegist" class="btn">注册</button>
    </div>
  </div>
</template>




<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      nickname: "",
    };
  },
  methods: {
    doRegist() {
      this.$http
        .post("/user/regist", {
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        })
        .then((res) => {
          let { message } = res.data;
          if (message == "注册成功") {
            alert(message);
            this.$router.push("/login");
          } else {
            alert(message);
          }
        });
    },
  },
};
</script>


<style lang="scss" scoped>
.regist-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  text-align: center;
  padding: 20px 0;
}

.regist-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>
