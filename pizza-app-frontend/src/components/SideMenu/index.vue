<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="logo_container">
          <img src="@/assets/images/pizza_bella_logo.png" alt="" />
        </div>
        <div class="title_container">
          <h1>Pizza Bella</h1>
          <p>Хто не любить піцу?</p>
          <p>Найсмачніша піца для вас та всієї вашої родини</p>
        </div>
        <div class="menu_buttons_container">
          <button @click="this.$router.push({ name: 'menuPage' })">Меню</button>
          <button @click="this.$router.push({ name: 'contactPage' })">
            Соц. Мережі
          </button>
          <button @click="this.$router.push({ name: 'deliveryPage' })">
            Доставка
          </button>
          <button
            v-if="authenticated"
            @click="this.$router.push({ name: 'signup' })"
          >
            Додати адміністратора
          </button>
        </div>
        <div class="social_container">
          <a
            href="https://instagram.com/maxandreyanov?igshid=YmMyMTA2M2Y="
            target="_blank"
            ><img src="@/assets/icons/social_icons/instagram.png" alt=""
          /></a>
          <a href="https://www.facebook.com/chilipizzauzhgorod/" target="_blank"
            ><img src="@/assets/icons/social_icons/facebook.png" alt=""
          /></a>
          <a href="https://t.me/MaxDurant" target="_blank"
            ><img src="@/assets/icons/social_icons/telegram.png" alt=""
          /></a>
          <a href="https://twitter.com/elonmusk" target="_blank"
            ><img src="@/assets/icons/social_icons/twitter.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "SideMenu",
  computed: {
    ...mapGetters("auth", ["authorized"]),
    authenticated() {
      return this.authorized;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  // height: 100%;
  height: 100vh;
  // position: sticky;
  // top: 10px;
  max-width: 500px;
  background: linear-gradient(
    179.32deg,
    rgba(242, 99, 49, 0.814727) 6.19%,
    #ff7f3f 30.92%,
    rgba(246, 216, 96, 0.6) 71.6%,
    rgba(195, 203, 184, 0.6) 93.23%
  );
  .main_wrapper {
    // padding-bottom: 10000px;
  }
}

.logo_container {
  padding: 50px 100px 40px 100px;
  display: flex;
  justify-self: center;
  img {
    margin: 0 auto;
    width: 250px;
  }
}

.title_container {
  width: 100%;
  max-width: 340px;
  text-align: center;
  margin: 0 auto;
  h1 {
    font-size: 26px;
    font-weight: bold;
  }

  p {
    font-weight: 600;
    margin-top: 15px;
    font-size: 20px;
  }
  margin-bottom: 30px;
}

.menu_buttons_container {
  padding: 0px 30px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  button {
    margin-bottom: 20px;
    width: 100%;
    height: 100%;
    max-height: 55px;
    display: block;
    border: #202020 4px solid;
    background: #202020;
    border-radius: 25px;

    color: #ffff;
    padding: 12px;
    font-size: 20px;
    transition: 0.15s ease-in-out;
    &:hover {
      background: #20202000;
      color: #202020;
    }
  }
}

.social_container {
  // margin: 0 auto;
  padding-top: 40px;
  text-align: center;
  display: flex;
  justify-content: space-around;
  img:hover {
    cursor: pointer;
  }
}
</style>
