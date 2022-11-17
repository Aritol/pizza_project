<template>
  <div class="container">
    <div class="main_wrapper">
      <div class="side_menu_container">
        <side-menu />
      </div>
      <div class="content_container">
        <div class="header_container">
          <header-searchV2 />
        </div>
        <div class="title_container">
          <h1>Оформлення замовлення</h1>
        </div>
        <div class="content_wrapper">
          <div class="left_colum">
            <input type="text" placeholder="Ім'я" />
            <input type="text" placeholder="Номер" />
            <input type="text" placeholder="Адреса" />
            <div class="radiobuttons_container">
              <div class="labels_block">
                <label for="">Готівкою при отриманні</label>
                <label for="">Сплатити онлайн</label>
              </div>
              <div class="radio_block">
                <input type="radio" />
                <input type="radio" />
              </div>
            </div>
            <label for="">Зателефонувати мені для уточнення деталей</label>
            <input type="checkbox" />
          </div>
          <div class="right_colum">
            <div class="title">
              <p>Ваше замовлення</p>
            </div>
            <div class="ordered_items_list">
              <cart-item> </cart-item>
            </div>
          </div>
        </div>
        <div class="content_footer_container">
          <p>Сума замовлення: 278 грн</p>
          <button>оформити замовлення</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import HeaderSearchV2 from "@/components/HeaderSearch/HeaderSearchV2";

export default {
  name: "CartPage",
  components: {
    SideMenu,
    HeaderSearchV2,
  },
};
</script>

<style lang="scss" scoped>
.container {
}
.main_wrapper {
  display: flex;
}

.content_container {
  width: 100%;
}

.title_container {
  text-align: center;
  margin-top: 40px;
  // margin: 0 auto;
  h1 {
    // text-align: center;
    font-size: 24px;
  }
}
.header_container {
}

.content_wrapper {
  margin-left: 100px;
  display: flex;
}

.left_colum {
  margin-top: 40px;
  width: 100%;
  max-width: 500px;
  input {
    display: block;
    margin-top: 30px;
    background: #e8e8e8;
    border-radius: 30px;
    font-size: 20px;
    padding: 10px 15px;
    width: 100%;
  }
}
.right_colum {
  margin-top: 40px;
  width: 100%;
  max-width: 500px;
  margin-left: 200px;

  .title {
    margin-top: 25px;
    width: 100%;
    background: #fcc66e;
    border-radius: 30px;
    text-align: center;
    p {
      font-size: 20px;

      padding: 12px 50px;
    }
  }
}

.radiobuttons_container {
  margin-top: 40px;

  padding: 10px 20px;
  background: #e8e8e8;
  border-radius: 30px;
  display: flex;
  .labels_block {
    label {
      display: block;
    }
  }
  .radio_block {
  }
}

.content_footer_container {
  margin-left: 100px;

  margin-top: 50px;
  background: #ffce80;
  border: 2px solid #37093a;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  max-width: 1200px;
  p {
    margin-top: 35px;
    margin-left: 20px;
    margin-bottom: 15px;
  }

  button {
    margin: 20px 20px 20px 0px;
    background: rgba(185, 176, 176, 0.5);
    border: 2px solid #a845b0;
    border-radius: 30px;
    padding: 10px;
    font-size: 16px;
  }
}
</style>
