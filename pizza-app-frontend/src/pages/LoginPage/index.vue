<template>
  <div>
    <div class="container">
      <div class="main_wrapper">
        <div class="img_container">
          <img src="@/assets/images/pizza_bella_logo.png" alt="" />
        </div>
        <form class="fields_container" @submit.prevent="loginToSite">
          <div class="field">
            <input
              class="login_form_input"
              type="text"
              placeholder=" "
              required
              v-model="email"
            />
            <label for="">Login: </label>
          </div>
          <div class="field">
            <input
              class="login_form_input"
              type="password"
              placeholder=" "
              required
              v-model="password"
            />
            <label for="">Password: </label>
          </div>
          <button type="submit">Увійти</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapActions("auth", ["login", "setErrorFalse"]),
    async loginToSite() {
      try {
        const user = { email: this.email, password: this.password };
        const result = await this.login(user);
        if (result === true) {
          // this.message = "";
          console.log("logged succes");
          this.$router.push({ path: "/" });
        } else {
          // this.message = "Login error!";
          console.log("error");
        }
      } catch (err) {
        console.log(err.response.data.error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/null.scss";
// @import "@/assets/styles/font.scss";
.container {
  // font-family: Source Serif Pro;
  height: 100vh;
  width: 100vw;
  background-color: #b1b1b1;
  .main_wrapper {
  }
}

.img_container {
  text-align: center;
  padding-top: 130px;
  img {
    width: 200px;
  }
}

.fields_container {
  width: 100%;
  max-width: 450px;
  // text-align: center;
  margin: 0 auto;
  margin-top: 120px;
  // position: relative;
  .field {
    // margin-top: 40px;
    position: relative;
    padding-bottom: 100px;

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      box-shadow: border-box;
      outline: none;
      color: #000000;
      font-size: 18px;
      padding: 10px;
      border-radius: 5px;

      &:focus ~ label {
        transform: translateX(-8px) translateY(-35px);
      }
      // &:valid ~ label {
      //   transform: translateX(-8px) translateY(-35px);
      // }
      &:not(:placeholder-shown) {
        ~ label {
          transform: translateX(-8px) translateY(-35px);

          // top: 435px;
          // top: -22px;
          // left: 2px;
        }
      }
    }

    label {
      position: absolute;
      font-size: 18px;
      top: 3px;
      left: 1px;
      padding: 10px;
      transition: 0.4s;
      pointer-events: none;
    }
  }

  // .login_form_input {
  //   position: relative;
  //   z-index: 2;

  //   width: 100%;
  //   color: #000000;
  //   font-size: 18px;
  //   padding: 5px 0px;
  //   border-radius: 5px;
  //   background-color: #d9d9d9;
  //   padding: 10px 5px;

  //   outline: none;
  //   transition: 0.8s ease-in-out;
  //   &:not(:placeholder-shown) {
  //     ~ label {
  //       // transform: translateZ(60%);

  //       // top: 435px;
  //       // top: -22px;
  //       // left: 2px;
  //     }
  //   }
  //   &:focus {
  //     border: 3px solid #d9d9d9;
  //     ~ label {
  //       // transform: translateZ(60%);

  //       top: 430px;
  //       // left: 550px;
  //     }
  //   }

  //   input {
  //     position: absolute;
  //     top: 0;
  //     left: 0;
  //     width: 100%;
  //   }

  //   label {
  //     position: absolute;
  //     // left: 750px;
  //     // top: 50%;
  //     top: 1px;
  //     left: 1px;
  //     // transform: translateY(-60%);
  //     // // left: 10px;
  //     font-size: 18px;
  //     color: #000000;
  //     // z-index: 1;
  //     pointer-events: none;
  //     // top: 15px;
  //     // left: 15px;

  //     color: #9e9e9e;

  //     z-index: 5;
  //     transition: 0.3s;
  //   }
  // }

  // input {
  //   position: relative;

  //   color: #000000;
  //   font-size: 18px;
  //   padding: 5px 0px;
  //   border-radius: 5px;
  //   background-color: #d9d9d9;
  //   padding: 10px 5px;

  //   outline: none;
  //   transition: all 0.8s;
  //   &:not(:placeholder-shown) {
  //     ~ label {
  //       top: 435px;
  //       // top: -22px;
  //       // left: 2px;
  //     }
  //   }

  //   &:focus {
  //     border: 3px solid #d9d9d9;
  //     ~ label {
  //       top: 435px;
  //       // left: 550px;
  //     }
  //   }
  // }
}

button {
  margin: 0 auto;
  margin-top: 40px;
  display: block;
  font-size: 22px;
  color: #000000;
  padding: 8px 60px;
  background-color: #d9d9d9;
  border-radius: 5px;
  transition: 0.3s ease-out;
  &:hover {
    background-color: #3b0040;
    color: #fff;
  }
}
</style>
