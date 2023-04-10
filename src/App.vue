<template>
<div id="navbar">
<nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary" style="background-color: rgb(222,53,59);">
  <div class="container">
      <img src="https://img1.etsystatic.com/073/0/7321014/il_fullxfull.804174793_3ttw.jpg"
           alt="Hai" width="45" height="35" class="rounded-circle" style="color: white">
    <div id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
            <router-link to="/" style="color: white">Home</router-link> |
        </li>
        <li class="nav-item">
          | <router-link to="/MyContact" style="color: white">Contact</router-link> |
        </li>
        <li class="nav-item">
          | <router-link to="/AboutMe" style="color: white">About</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <p class="fixed-bottom" style="color: black">Copyright by Syakira</p>
</div>
<router-view></router-view>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 50px;
  text-align: center;
}
#navbar{
  color: white;
  padding-bottom: 0;
  margin-bottom: 0;
}
li{
  text-decoration: none;
}
</style>
