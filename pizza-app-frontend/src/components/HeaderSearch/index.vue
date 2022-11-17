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
      <div class="buttons_container_middle">
        <button @click="goToAdd">Додати позицію</button>
      </div>
      <div class="search_container">
        <div class="search_input_container">
          <input type="text" />
        </div>
        <div class="buttons_container">
          <img src="@/assets/images/search.png" alt="" @click="search" />
          <img src="@/assets/images/basket.png" alt="" @click="goToCart" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSearch",

  methods: {
    goHome() {
      this.$router.push({ name: "mainPage" });
    },
    goToCart() {
      this.$router.push({ name: "cartPage" });
    },
    goToAdd() {
      this.$router.push({ name: "addPage" });
    },

    search() {},
  },
};
</script>

<style lang="scss" scoped>
.container_search {
  width: 100%;
  max-width: 100vw;
  background-color: #f5f5f5;
  .main_wrapper {
    display: flex;
    // justify-content: space-around;
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
.buttons_container_middle {
  margin-left: 100px;
  margin-top: 45px;
  button {
    font-size: 20px;
    padding: 8px;
    text-align: center;
    background-color: #eda630;
    border-radius: 40px;
    border: 3px solid #eda630;

    color: #333;
    transition: 0.3s;
    &:hover {
      background-color: transparent;
    }
  }
}

.buttons_container {
  margin-top: 40px;

  margin-left: 30px;
  display: flex;
  justify-content: space-between;
  img {
    width: 50px;
    height: 50px;
    cursor: pointer;

    &:last-child {
      margin-left: 50px;
    }
  }
}

.search_container {
  display: flex;
  margin-left: 50px;
}
.search_input_container {
  margin-top: 45px;
  // width: 100%;
  // max-width: 500px;
  padding: 0px 10px 0px 120px;
  input {
    width: 500px;
    // width: 100%;
    font-size: 22px;
    padding: 10px 0px 10px 15px;
    background-color: #d9d9d9;
    border-radius: 25px;
  }
}
</style>
