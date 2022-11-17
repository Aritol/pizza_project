<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="content_container">
          <div class="headers_container">
            <div class="header_button">
              <button><a href="tel:+380991515122">(099) 15-15-122</a></button>
            </div>
            <div class="header_button">
              <button>
                В межах міста <br />
                доставка безкоштовна
              </button>
            </div>
            <div class="header_button">
              <button>м. Ужгород, вул. Олександра Можайського 3А</button>
            </div>
          </div>
          <div class="map_container">
            <div class="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2638.5366759091153!2d22.286710915846655!3d48.59956962684904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739190fd86e9c9d%3A0x908cd32424020bd8!2zM0EsINGD0LsuINCc0L7QttCw0LnRgdC60L7Qs9C-LCAz0JAsINCj0LbQs9C-0YDQvtC0LCDQl9Cw0LrQsNGA0L_QsNGC0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDg4MDAw!5e0!3m2!1sru!2sua!4v1668202132409!5m2!1sru!2sua"
                width="650"
                height="600"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
export default {
  name: "DeliveryPage",
  components: {
    SideMenu,
  },
};
</script>

<style lang="scss" scoped>
.container {
  .main_wrapper {
    display: flex;
  }

  .content_container {
    width: 100vw;
    height: 100vh;
    background-size: 100% 100%;
    background-image: url("../../assets/images/background.png");

    display: flex;
    justify-content: space-around;
  }
}

.headers_container {
  padding-top: 300px;
  padding-left: 30px;
}

.header_button {
  margin-bottom: 60px;
  button {
    font-size: 25px;
    height: 90px;
    // padding: 25px 0px;
    width: 450px;
    border-radius: 20px;
    transition: 0.4s ease-out;

    a {
      color: #000;
      &:visited {
        color: #000;
      }
    }

    &:hover {
      // height: 90px;
      transform: translateY(-10%);
    }
  }
}

.map_container {
  padding-top: 205px;

  iframe {
    border-radius: 15px;
  }
}
</style>
