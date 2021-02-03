<template>
  <div id="app">
    <header>
      <router-link to="/" id="title"><h1>MyBlog</h1></router-link>
      <button @click="logout">登出</button>
      <p>你好，{{ uname }}</p>
    </header>
    <div id="v-content" v-bind:style="{ minHeight: Height + 'px' }">
      <router-view />
    </div>
    <footer>
      <h3>YYZ'S Blog</h3>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uname: "",
      Height: 0,
    };
  },
  created() {
    this.getUserName();
  },
  mounted() {
    //动态设置内容高度 让footer始终居底   header+footer的高度是100
    this.Height = document.documentElement.clientHeight - 130; //监听浏览器窗口变化
    window.onresize = () => {
      this.Height = document.documentElement.clientHeight - 130;
    };
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      location.href = "/login";
    },
    getUserName() {
      var uname = localStorage.getItem("myname");
      this.uname = uname;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

ul,
ol {
  list-style: none;
}

.container {
  width: 100%;
  margin: 0 auto;
}
header {
  z-index: 999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  top: 0;
  align-items: center;
  // margin-bottom: 130px;
  height: 50px;
  // background: rgb(36, 36, 36);
  background: #000;
  // opacity: 0.7;
  padding: 0 20px;
  h1 {
    color: rgb(223, 223, 223);
  }
}

footer {
  width: 100%;
  height: 80px;
  background: black;
  color: white;
  h3 {
    line-height: 80px;
  }
}
</style>
