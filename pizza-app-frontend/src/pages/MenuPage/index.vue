<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="side_menu_container">
          <side-menu />
        </div>
        <div class="content_container">
          <div class="header_container">
            <header-search />
          </div>
          <div class="loading_container" v-if="isLoading">
            <video
              loop
              autoplay
              muted
              src="@/assets/loading_video/loading.mp4"
              width="200"
            ></video>
          </div>
          <div class="content_wrapper" v-if="!isLoading">
            <div class="category_container">
              <button @click="onPiizaFilterClick">Піци</button>
              <button @click="onSnacsFilterClick">Закуски</button>
              <button @click="onDessetsFilterClick">Десерти</button>
              <button @click="onSouseFilterClick">Соуси</button>
              <button @click="onDrinksFilterClick">Напої</button>
            </div>
            <div class="menu_container">
              <product-item
                class="menu_item"
                v-for="product in piizaFilter"
                :key="product._id"
                :productData="product"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Buffer } from "buffer";
import { mapActions, mapGetters } from "vuex";

import SideMenu from "@/components/SideMenu";
import ProductItem from "@/components/ProductItem";
import HeaderSearch from "@/components/HeaderSearch";
export default {
  name: "MenuPage",
  components: {
    SideMenu,
    HeaderSearch,
    ProductItem,
  },
  data() {
    return {
      filterWord: null,
    };
  },

  computed: {
    ...mapGetters("products", ["isLoading", "products"]),
    ...mapGetters("cart", ["getCartList"]),
    piizaFilter() {
      if (this.filterWord) {
        return this.products.filter((el) => el.category == this.filterWord);
      } else return this.products;
    },
  },
  methods: {
    ...mapActions("products", ["loadProducts"]),
    getImgSrc(photo) {
      let binary = Buffer.from(photo.data);
      let imgData = new Blob([binary.buffer], {
        type: "application/octet-stream",
      });
      let link = URL.createObjectURL(imgData);
      return link;
    },

    onPiizaFilterClick() {
      this.filterWord = "pizza";
    },
    onSnacsFilterClick() {
      this.filterWord = "snacs";
    },
    onDessetsFilterClick() {
      this.filterWord = "dessert";
    },
    onSouseFilterClick() {
      this.filterWord = "souse";
    },
    onDrinksFilterClick() {
      this.filterWord = "drink";
    },
  },

  // watch: {
  //   $route: {
  //     deep: true,
  //     handler() {
  //       if (
  //         this.$route.params.category == "pizza" ||
  //         this.$route.params.category == "souse" ||
  //         this.$route.params.category == "dessert"
  //       ) {
  //         this.loadProducts(this.$route.params.category);
  //       }

  //       // if (this.$route.path !== "/products")
  //       //   this.loadProducts(this.$route.params.category);
  //     },
  //   },
  // },

  async mounted() {
    await this.loadProducts();
  },
};
</script>

<style lang="scss" scoped>
.loading_container {
  background-color: #bdb8b8b7;
  // width: 1236.19px;
  width: 100%;
  top: 0;
  // height: 1604px;
  height: 100%;
  position: fixed;
  // margin-left: 450px;
  // left: 55%;
  // text-align: center;
  video {
    margin-top: 350px;
    margin-left: 650px;
    border-radius: 20px;
  }
}

.container {
  width: 100%;
  // max-width: 1000px;
  // overflow-x: hidden;
  background-color: #ffffff;
  .main_wrapper {
    display: flex;
  }
}

.content_container {
  width: 100%;
  margin-left: 450px;
}

.side_menu_container {
  position: fixed;
  top: 0;
}

.content_wrapper {
  display: flex;
  // justify-content: space-between;
}
.category_container {
  margin-left: 80px;
  margin-top: 120px;
  button {
    color: #000000;
    width: 320px;
    font-size: 24px;
    padding: 10px;
    text-align: center;
    display: block;
    background: #d9d9d9;
    border-radius: 15px;
    margin-top: 40px;

    &:hover {
      background: #a8a6a6;
    }
  }
}

.menu_container {
  margin-left: 190px;
  width: 700px;
  // .menu_item {
  //   &:hover {
  //     background-color: #968d8db7;
  //   }
  // }
}
</style>
