<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <h3>MyBlog</h3>
      <router-link to="/login">登录</router-link>
      <router-link to="/regist">注册</router-link>
      <router-link to="/publish">发表</router-link>
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #cccccc;
  padding: 0 20px;
}
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
  width: 1200px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  background: #cccccc;
  padding: 0 20px;
}
</style>
