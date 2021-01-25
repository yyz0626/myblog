<template>
  <body>
    <div class="container">
      <div class="login-form">
        <h3>用户登录</h3>
        <p>用户名：<input type="text" name="username" v-model="username" /></p>
        <p>
          密码：<input type="password" name="password" v-model="password" />
        </p>
        <button @click="doLogin" class="btn">登录</button>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    doLogin() {
      this.$http
        .post("/user/login", {
          username: this.username,
          password: this.password,
        })
        .then((res) => {
          let { state, token, uname, uid } = res.data;
          if (state == "success") {
            //存token
            this.$store.dispatch("setToken", token);
            this.$store.dispatch("setName", uname);
            this.$store.dispatch("setId", uid);
            this.$router.push("/");
          } else {
            alert("用户名或密码错误");
          }
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-form {
  width: 650px;
  background: #cccccc;
  margin: 40px auto;
  text-align: center;
  padding: 20px 0;
}

.login-form p {
  padding: 20px 0;
}

.btn {
  width: 70px;
}
</style>