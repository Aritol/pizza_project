<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="img_container">
          <img :src="getImgSrc(productData.photo)" alt="" />
        </div>
        <div class="content_container">
          <div class="buttons_top_container" v-if="authenticated">
            <button @click="onEdit">Редагувати</button>
            <img @click="onDelete" src="@/assets/images/delete.png" alt="" />
          </div>
          <div class="description_container">
            <h1>{{ productData.name }}</h1>
            <p>{{ productData.description }}</p>
          </div>
          <div
            class="buttons_container"
            v-if="productData.category !== 'souse' && !productData.price"
          >
            <button>
              ⌀ 30 см <span>{{ productData.priceS }}грн</span>
            </button>
            <button>
              ⌀ 40 см <span>{{ productData.priceM }}грн</span>
            </button>
          </div>
          <div class="buttons_container" v-if="productData.category == 'souse'">
            <button>
              20 г. <span>{{ productData.priceS }}грн</span>
            </button>
            <button>
              50 г. <span>{{ productData.priceM }}грн</span>
            </button>
          </div>
          <div class="one_price_container" v-if="productData.price">
            <button v-if="productData.category == 'dessert'">
              1шт. <span>{{ productData.price }} грн</span>
            </button>
            <button v-if="productData.category == 'drink'">
              0.5л <span>{{ productData.price }} грн</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Buffer } from "buffer";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ProductItem",
  props: {
    productData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters("auth", ["authorized"]),
    authenticated() {
      return this.authorized;
    },
  },
  methods: {
    ...mapActions("products", ["deleteProduct"]),
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    onDelete() {
      this.deleteProduct(this.productData._id);
    },

    onEdit() {
      this.$router.push({
        name: "addPage",
        params: { productId: this.productData._id },
      });
    },
  },

  mounted() {},
};
</script>

<style lang="scss" scoped>
.container {
  margin-top: 50px;
  // transition: all 0.5s ease-in-out;
  border: 1px solid #968d8db7;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);

  &:hover {
    // background-color: #968d8db7;
    border: 1px solid #c7c1c1b7;
    box-shadow: 0 6px 14px 0 rgb(0 0 0 / 20%);
  }
  .main_wrapper {
    display: flex;
    padding: 10px;
  }
}

.img_container {
  img {
    width: 200px;
    height: 200px;
  }
}

.content_container {
  margin-left: 25px;
  font-size: 22px;
  width: 100%;
  max-width: 430px;
}

.buttons_top_container {
  text-align: right;
  display: block;
  button {
    font-size: 20px;
    color: #333;
    padding: 12px 25px;
    background: #eda630;
    border-radius: 55px;

    border: 3px solid #eda630;

    color: #333;
    transition: 0.3s;
    &:hover {
      background-color: transparent;
    }
  }

  img {
    margin-left: 30px;
    // width: 60px;
    cursor: pointer;
  }
}

.description_container {
  h1 {
    margin-top: 25px;
    font-size: 28px;
    font-weight: bold;
  }
  p {
    margin-top: 30px;
  }
}

.buttons_container {
  margin-top: 22px;
  margin-left: 20px;
  button {
    color: #ffffff;
    font-size: 21px;
    text-align: center;
    transition: 0.3s;
    max-width: 185px;

    &:first-child {
      padding: 8px 55px;
      background: #eda630;
      border: 3px solid #eda630;
      border-radius: 55px;
      &:hover {
        color: #333;
        background-color: transparent;
      }
    }
    &:last-child {
      padding: 8px 55px;
      color: #ffffff;
      background: #b05db5;
      border: 3px solid #b05db5;

      border-radius: 60px;
      margin-left: 35px;
      &:hover {
        color: #333;
        background-color: transparent;
      }
    }

    span {
      display: block;
      color: #333;
    }
  }
}

.one_price_container {
  margin-top: 22px;
  margin-left: 174px;
  button {
    color: #ffffff;
    font-size: 21px;
    text-align: center;
    transition: 0.3s;
    padding: 8px 55px;
    background: #eda630;
    border: 3px solid #eda630;
    border-radius: 55px;
    &:hover {
      color: #333;
      background-color: transparent;
    }
    span {
      display: block;
      color: #333;
    }
  }
}
</style>
