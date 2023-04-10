<template>
  <h1>BIG HERO 6</h1>
  <img src="https://s-media-cache-ak0.pinimg.com/736x/d5/00/e5/d500e5b886c5cd5b621f8f99fb30476f.jpg"
  style="float: left" class="rounded-circle" alt="haibaymax">
  <p>
    "Hello. I am Baymax, your personal health care companion."
  </p>


</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
p{
  font-size: 60px;
  align-content: center;
  margin-top: 10%;
  font-family: "Cambria Math";
  color: red;
}
img{
  width: 40%;
  height: 60%;
  margin-top: 0;
}
h1{
  font-family: "Comic Sans MS";
  color: red;
}
router-view{
  background-color: grey;
}
</style>