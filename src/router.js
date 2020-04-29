import Vue from 'vue'
import VueRouter from 'vue-router';
import Home from "./components/Home.vue";
import Restaurant from "./components/Restaurant.vue";
import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import Items from "./components/Items.vue";
import Cart from "./components/Cart.vue";
import User from "./components/User.vue";
import Admin from "./components/Admin.vue";
import ForgotPassword from "./components/ForgotPassword.vue";
import Checkout from "./components/Checkout.vue";
import Foodlist from "./components/Foodlist.vue";
import Food from "./components/Food.vue";
import AdminMain from "./components/AdminMain.vue";
import Edititems from "./components/Edititems.vue";
import Basket from "./components/Basket.vue";
import pay from "./components/pay.vue"

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/signup', component: Signup},
        {path: '/Restaurant/:name', component: Restaurant},
        {path: '/Login', component: Login},
        {path: '/Items/:id', component: Items},
        {path: '/Edititems/:id', component: Edititems},
        {path: '/Foodlist/:id/:category', component: Foodlist},        
        {path: '/Food/:id/:category', component: Food},
        {path: '/Cart', component: Cart},
        {path: '/Basket', component: Basket},
        {path: '/Checkout', component: Checkout},
        {path: '/User', component: User},
        {path: '/ForgotPassword', component: ForgotPassword},
        {path: '/Admin', component: Admin},
        {path: '/AdminMain', component: AdminMain},
        {path: '/pay/:orderId', component: pay},
        
        

        
        
        
        
        
    ]
  })