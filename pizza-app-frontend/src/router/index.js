import { createRouter, createWebHashHistory } from "vue-router";

import MainPage from "@/pages/MainPage";
import MenuPage from "@/pages/MenuPage";
import ContactsPage from "@/pages/ContactsPage";
import DeliveryPage from "@/pages/DeliveryPage";
// import AccessDeniedPage from "@/pages/AccessDeniedPage";
import PageNotFound from "@/pages/PageNotFound";

const routes = [
  { path: "/", component: MainPage, name: "mainPage" },
  { path: "/contact", component: ContactsPage, name: "contactPage" },
  { path: "/delivery", component: DeliveryPage, name: "deliveryPage" },
  { path: "/menu", component: MenuPage, name: "menuPage" },

  //   {
  //     path: "/products/:category",
  //     component: ProductsList,
  //     name: "productsList",
  //   },
  // {
  //   path: "/products/:pathMatch(.*)*",
  //   component: ProductsList,
  //   name: "productsList",
  // },
  //   {
  //     path: "/product/:category/:id",
  //     component: ProductInfoPage,
  //     name: "productInfoPage",
  //   },
  //   { path: "/about", component: AboutPage, name: "aboutPage" },
  //   {
  //     path: "/delivery",
  //     component: DeliveryAndPayments,
  //     name: "deliveryAndPayments",
  //   },

  //   {
  //     path: "/products/edit/:id?",
  //     component: EditPage,
  //     name: "editPage",
  //     meta: { auth: true },
  //   },
  //   { path: "/cart", component: CartPage, name: "cart" },
  //   { path: "/orders", component: OrdersPage, name: "ordersPage" },

  //   { path: "/signup", component: Signup, name: "signup", meta: { auth: true } },
  //   {
  //     path: "/OrderInformation/:id",
  //     component: OrderInfo,
  //     name: "orderInfo",
  //     meta: { auth: true },
  //   },
  //   { path: "/letters", component: LettersPage, name: "lettersPage" },
  //   {
  //     path: "/letterInfo/:id",
  //     component: LetterInfoPage,
  //     name: "letterInfoPage",
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/createOrder",
  //     component: CreateOrderPage,
  //     name: "createOrderPage",
  //   },
  //   {
  //     path: "/forbidden",
  //     component: AccessDeniedPage,
  //     name: "accessDeniedPage",
  //   },
  {
    path: "/:pathMatch(.*)*",
    component: PageNotFound,
    name: "pageNotFound",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
