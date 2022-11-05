<template>
  <div class="container">
    <div class="main_wrapper">
      <div class="side_menu_container">
        <side-menu />
      </div>
      <div class="content_container">
        <img src="@/assets/images/pizza_bella_logo.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "MainPage",
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
.container {
  // width: 100%;
  // height: 100%;

  .main_wrapper {
    display: flex;
  }
}
.side_menu_container {
  align-items: left;
  // position: fixed;
}

.content_container {
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  // background-size: cover;
  // background-position: center;
  background-image: url("../../assets/images/background.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
  // align-self: center;
  img {
    width: 230px;
    height: 230px;
  }
}
</style>
