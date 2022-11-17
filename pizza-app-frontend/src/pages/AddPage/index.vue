<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="content_container">
          <div class="header_container">
            <header-searchV2 />
          </div>
          <form @submit.prevent>
            <div class="content_wrapper">
              <div class="photo_container">
                <img id="img" :src="photoSrc" alt="" v-if="product.photo" />
                <img v-else src="@/assets/images/test.png" alt="" />
                <label for="files">Обрати Фото</label>
                <input
                  id="files"
                  style="visibility: hidden"
                  type="file"
                  @input="createLogoImage"
                />
              </div>
              <div class="info_container">
                <div class="input_block">
                  <label for="">Назва страви:</label>
                  <input type="text" required v-model.trim="product.name" />
                </div>
                <div class="input_block_textarea">
                  <label for="">Опис страви:</label>
                  <textarea
                    type="text"
                    required
                    v-model.trim="product.description"
                  />
                </div>
                <div class="select_block">
                  <label for="">Оберіть фільтри:</label>
                  <select
                    name=""
                    id="select_category"
                    v-model="product.category"
                  >
                    <option>Напої</option>
                    <option>Десерт</option>
                    <option>Піца</option>
                    <option>Соуси</option>
                  </select>
                </div>
                <div class="input_block" v-if="!twoPrice">
                  <label for="">Введіть ціну:</label>
                  <input
                    type="number"
                    required
                    v-model.number="product.price"
                  />
                </div>
                <div v-else class="input_block_two_price">
                  <div class="blockS">
                    <label for="">Введіть цінуS:</label>
                    <input
                      type="number"
                      required
                      v-model.number="product.priceS"
                    />
                  </div>
                  <div class="blockS">
                    <label for="">Введіть цінуM:</label>
                    <input
                      type="number"
                      required
                      v-model.number="product.priceM"
                    />
                  </div>
                </div>
                <div class="add_price_container" v-if="!twoPrice">
                  <button @click="addPriceField">+</button>
                  <p>Додати додаткову ціну</p>
                </div>
              </div>
            </div>
            <div class="buttons_container">
              <button @click="goBack">Назад</button>
              <button @click="save">{{ recivedId }}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideMenu from "@/components/SideMenu";
import HeaderSearchV2 from "@/components/HeaderSearch/HeaderSearchV2";
import { Buffer } from "buffer";
import { mapActions } from "vuex";
export default {
  name: "AddPage",
  components: {
    SideMenu,
    HeaderSearchV2,
  },

  data() {
    return {
      product: {},
      rawPhotoData: null,
      twoPrice: false,
    };
  },
  computed: {
    recivedId() {
      if (this.$route.params.productId) {
        return "Редагувати";
      }
      return "Додати";
    },

    // recivedParamsId() {
    //   return this.$route.params.id;
    // },

    photoSrc() {
      return (
        this.rawPhotoData ||
        (this.product.photo && this.getImgSrc(this.product.photo))
      );
    },
  },

  methods: {
    ...mapActions("products", [
      "getProductById",
      "addProduct",
      "updateProduct",
    ]),
    goBack() {
      this.$router.push({ name: "menuPage" });
    },
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    createLogoImage(event) {
      const file = event.target.files[0];
      console.log("file");
      console.log(file);
      let reader = new FileReader();
      const self = this;
      reader.onload = (e) => {
        self.rawPhotoData = e.target.result;
        self.product.photo = file;
      };
      reader.readAsDataURL(file);
    },

    addPriceField() {
      this.twoPrice = true;
      this.price = null;
    },

    async save() {
      try {
        if (!this.$route.params.productId) {
          console.log("adddd");
          await this.addProduct(this.product);
        } else {
          await this.updateProduct(this.product);
          this.$router.push({ name: "menuPage" });
        }

        // if (this.$route.params.id) {
        //   this.popupTitle = "Дані товара оновлені успішно";
        // } else {
        //   this.popupTitle = "Товар додано успішно";
        // }
      } catch (err) {
        console.log(err);
      }
    },
  },
  async mounted() {
    if (this.$route.params.productId) {
      try {
        this.product = await this.getProductById(this.$route.params.productId);
        if (this.product.priceS) {
          this.twoPrice = true;
        }
        const categorySelect = document.querySelector("#select_category");
        if (this.product.category === "pizza") categorySelect.selectedIndex = 2;
        if (this.product.category === "souse") categorySelect.selectedIndex = 3;
        if (this.product.category === "drink") categorySelect.selectedIndex = 0;
        if (this.product.category === "dessert")
          categorySelect.selectedIndex = 1;
      } catch (err) {
        console.log(err);
      }
    }
  },

  // watch: {
  //   $route: {
  //     deep: true,
  //     handler() {
  //       if (!this.$route.params.id) {
  //         this.product = {
  //           name: null,
  //           category: null,
  //           descriptionFirstParagraph: null,
  //           descriptionSecondParagraph: null,
  //           availability: null,
  //           characteristics: null,
  //           license: null,
  //         };
  //       }
  //     },
  //   },
  // },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  font-size: 20px;
  .main_wrapper {
    display: flex;
  }
}

.side_menu_container {
  position: fixed;
  top: 0;
}

.content_container {
  width: 100%;
  // height: 100vh;
  background-size: 100% 100%;

  margin-left: 450px;
  background-image: url("../../assets/images/background_addpage.png");
}

.content_wrapper {
  margin-top: 50px;
  margin-left: 200px;
  display: flex;
  .photo_container {
    // text-align: center;
    img {
      width: 300px;
    }
    label {
      cursor: pointer;
      margin: 0 auto;
      margin-top: 40px;
      display: block;
      background: #d9d9d9;
      border-radius: 20px;
      font-size: 22px;
      padding: 8px 70px;
      transition: 0.4s;
      &:hover {
        // background: transparent;
        background: #9c9999;

        // color: ;
      }
    }
  }
}

.info_container {
  margin-left: 200px;
  margin-top: 20px;
  .input_block {
    margin-top: 30px;

    label {
    }

    input {
      margin-left: 10px;
      background: #d9d9d9;
      border-radius: 25px;
      font-size: 20px;
      padding: 10px 20px;
    }

    // textarea {
    //   margin-left: 10px;
    //   background: #d9d9d9;
    //   border-radius: 25px;
    //   font-size: 20px;
    //   padding: 10px;
    //   height: 130px;
    //   width: 259px;
    // }

    &:last-child {
      label {
        margin-right: 10px;
      }
    }
  }
  // :nth-child(2) {
  // }
  .input_block_textarea {
    margin-top: 30px;
    display: flex;
    // justify-content: center;
    align-items: center;

    label {
      // margin-bottom: 50px;
      margin-right: 10px;
      // align-items: center;
      // display: flex;
      // justify-content: start;
    }

    textarea {
      // display: block;
      resize: none;
      margin-left: 10px;
      background: #d9d9d9;
      border-radius: 25px;
      font-size: 20px;
      padding: 10px;
      height: 130px;
      width: 295px;
    }
  }
}

.select_block {
  margin-top: 30px;
  label {
    margin-right: 27px;
  }

  select {
    padding: 10px;
    width: 250px;
    text-align: center;
    background: #d9d9d9;
    border-radius: 25px;
    font-size: 20px;
  }
}

.buttons_container {
  margin-top: 150px;
  padding-bottom: 50px;
  text-align: center;
  display: flex;
  justify-content: space-between;
  button {
    font-size: 24px;
    padding: 10px 0px;
    text-align: center;
    width: 160px;
    border-radius: 20px;
    transition: 0.4s;
    &:first-child {
      margin-left: 270px;

      background: #eca634;
      border: 3px solid #eca634;
      &:hover {
        border: 3px solid #eca634;
        background: transparent;
      }
    }
    &:last-child {
      margin-right: 250px;

      background: #ab6db0;
      border: 3px solid #ab6db0;
      &:hover {
        border: 3px solid #ab6db0;
        background: transparent;
      }
    }
  }
}

.add_price_container {
  display: flex;
  margin-top: 20px;
  p {
    margin-left: 20px;
    margin-top: 10px;
  }
  button {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 17px;
    // padding: 10px;
    background: #db5f5f;
    border-radius: 50%;
  }
}

.input_block_two_price {
  margin-top: 20px;
  .blockS {
    margin-top: 20px;
    &:first-child {
      label {
        margin-right: 8px;
      }
    }
  }

  input {
    margin-left: 10px;
    background: #d9d9d9;
    border-radius: 25px;
    font-size: 20px;
    padding: 10px 20px;
  }
}
</style>
