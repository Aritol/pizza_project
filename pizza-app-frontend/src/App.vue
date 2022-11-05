<template>
  <div class="container">
    <!-- <div class="main_wrapper"> -->
    <!-- <main-page />
     -->
    <router-view></router-view>
  </div>
  <!-- </div> -->
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import MainPage from "./pages/MainPage";

export default {
  name: "App",
  components: {
    // MainPage,
  },
};
</script>

<style>
@import "@/assets/styles/null.scss";
@import "@/assets/styles/font.scss";
.container {
  font-family: "Source Serif Pro", serif;
}
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
