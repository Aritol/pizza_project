<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->

    <some-page />
    <button @click="text">OK</button>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import SomePage from "./pages/SomePage";

export default {
  name: "App",
  components: {
    // HelloWorld,
    SomePage,
  },

  methods: {
    text() {
      alert("asdasdasdasdsa");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
