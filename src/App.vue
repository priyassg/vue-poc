<template>
  <div id="app">
  <header>
    <nav>
      <ul>
        <li class="nav-item">
          <router-link exact active-class="active-link" class="nav-link" :to="{ name: 'Home'}">
            <img class="logo" src="./assets/build-a-bot-logo.png">
            Home Page
          </router-link>
        </li>
        <li class="nav-item">
          <router-link exact class="nav-link" active-class="active-link" :to="{ name: 'Build'}">
            Build Page
          </router-link>
        </li>
        <li class="nav-item">
          <router-link exact class="nav-link" active-class="active-link" :to="{ name: 'BrowseParts'}">
            Browse Page
          </router-link>
        </li>
        <li class="nav-item cart">
          <router-link exact class="nav-link" active-class="active-link" :to="{ name: 'Cart'}">
            Cart {{this.$store.state.robots.cart.length}}
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
  <div class="container">
  <aside class="aside">
    <router-view name="sidebar"></router-view>
  </aside>
  <main>
    <router-view />
  </main>
  </div>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
main{
  padding: 30px;
  background-color: white;
  width: 964px;
  min-height: 300px;
}
header {
  background-color: #999;
  width: 1184px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.nav-link.cart {
  margin-left: auto;
  position: relative;
  border-right: none;
}
.active-link{
  color: white
}
.container {
  display: flex;
  margin: 10px auto 0 auto;
  justify-content: center
}
.aside {
  padding: 30px;
  background-color: #aaa;
  width: 100px;
  min-height: 100px;
}
</style>
