<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <h1>404</h1>
        <div class="line_container">
          <img src="@/assets/images/line_404_page.png" alt="" />
        </div>
        <div class="text_container">
          <h2>СТОРІНКА</h2>
          <p>НЕ ЗНАЙДЕНА</p>
        </div>
        <div class="button_container">
          <button @click="onMainPage">НА ГОЛОВНУ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",

  methods: {
    onMainPage() {
      this.$router.push({ name: "mainPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: #33cc99;
  .main_wrapper {
    color: #fff;
    font-family: "Open Sans", sans-serif;
    text-align: center;
    h1 {
      margin-top: 150px;
      font-size: 220px;
    }

    img {
      width: 500px;
    }

    .text_container {
      margin-top: 5px;

      font-size: 50px;
      p {
        margin-top: 15px;
      }
    }

    .button_container {
      margin-top: 30px;
      button {
        color: #33cc99;
        font-size: 35px;
        padding: 10px 130px;
      }
    }
  }
}
</style>
