<template>
  <div>
    <div class="container">
      <!-- <div class="main_wrapper"> -->
      <div class="side_menu_container">
        <side-menu />
      </div>
      <div class="content_container">
        <div class="instagram_container">
          <h1>Instagram</h1>
          <div class="instagram_block">
            <img src="@/assets/images/instagramPages/instagram1.png" alt="" />
            <a
              href="https://instagram.com/maxandreyanov?igshid=YmMyMTA2M2Y="
              target="_blank"
              >Перейти до Instagram</a
            >
          </div>
          <div class="instagram_block">
            <img src="@/assets/images/instagramPages/instagram2.png" alt="" />
            <a
              href="https://instagram.com/luc1fer6996?igshid=ZDdkNTZiNTM="
              target="_blank"
              >Перейти до Instagram</a
            >
          </div>
          <div class="instagram_block">
            <img src="@/assets/images/instagramPages/instagram3.png" alt="" />
            <a
              href="https://instagram.com/k_r_jinx?igshid=YmMyMTA2M2Y="
              target="_blank"
              >Перейти до Instagram</a
            >
          </div>
        </div>
        <div class="instagram_container">
          <h1>Facebook</h1>
          <img src="@/assets/images/facebook.jpg" alt="" />
          <a href="https://www.facebook.com/chilipizzauzhgorod/" target="_blank"
            >Перейти до Facebok</a
          >
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "ContactsPage",
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";
.container {
  // display: flex;
  // .main_wrapper {
  // }
}

.side_menu_container {
  // display: inline-block;
  // height: 100%;

  position: fixed;
  top: 0;
}

.content_container {
  // display: inline-block;

  // width: 100vw;
  // height: 100vh;
  // background-size: 100% 100%;
  margin-left: 450px;
  background-color: #d8d8d8;
  // background-image: url("../../assets/images/background.jpg");
  .instagram_container {
    margin-left: 150px;
    // margin-top: 50px;
    color: #333333;
    h1 {
      padding-bottom: 5px;
      padding-top: 40px;
      width: 95px;
      font-size: 20px;
      border-bottom: 5px solid #dd3333;
      // background-color: ;
    }

    img {
      margin-top: 20px;
      width: 1000px;
    }

    a {
      display: block;
      margin-top: 20px;
      max-width: 250px;
      background: transparent;
      color: #333333;
      border: 3px solid #dd3333;
      padding: 15px 0px;
      text-align: center;
      font-size: 18px;
      transition: 0.5s;
      &:hover {
        background-color: #dd3333;
        color: #ffff;
      }
    }

    &:last-child {
      padding-bottom: 50px;
    }
  }
}

.instagram_block {
  margin-top: 20px;
  & * {
    display: block;
  }

  a {
    max-width: 250px;
    margin-top: 20px;
    background: transparent;
    color: #333333;
    border: 3px solid #dd3333;
    padding: 15px 0px;
    text-align: center;
    font-size: 18px;
    transition: 0.5s;
    &:hover {
      background-color: #dd3333;
      color: #ffff;
    }
  }
}
</style>
