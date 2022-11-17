<template>
  <div class="container_search">
    <div class="main_wrapper">
      <div class="logo_container">
        <img
          src="@/assets/images/pizza_bella_logo.png"
          alt=""
          @click="goHome"
        />
      </div>
      <div class="buttons_container">
        <img src="@/assets/images/basket.png" alt="" @click="goToCart" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearchV2",

  methods: {
    goHome() {
      this.$router.push({ name: "mainPage" });
    },
    goToCart() {
      this.$router.push({ name: "cartPage" });
    },
  },
};
</script>

<style lang="scss" scoped>
.container_search {
  width: 100%;
  background-color: #f5f5f5;
  .main_wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
}

.logo_container {
  margin-left: 80px;
  padding: 20px 0px;
  img {
    cursor: pointer;
    width: 95px;
  }
}

.buttons_container {
  margin-top: 40px;
  margin-right: 150px;
  // margin-left: 30px;
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;
  }
}
</style>
