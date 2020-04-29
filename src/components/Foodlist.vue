<template>
<div id="Foodlist">
    <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Food List</h6></td>
        </tr>
    </table>

</div>


<div>
<img src="./assets/res.jpg" class="topimg">
<a @click="$router.go(-1)"><img src="./assets/back.png" class="backimg"></a>
</div>

<div class="container">
<b-container>
<b-row>
<b-col md="5" lg="4">
<div class="left_info">
<router-link :to="`/Restaurant/${school}`"> 
<button style="background-color: #f7262d; color: white; border: none; border-radius: 10px; height: 35px; font-size: 10px; ">
     CHANGE RESTUARANT </button> </router-link>


<div class="cart">
<table width="100%">
<tr>
<td style="font-size: 14px; font-weight: 600; padding-left: 10px; "> Order </td>
<td style="text-align: right; padding-right: 10px; "> <img src="./assets/cart_red.png" style="height: 35px; "> </td>
</tr>
</table>

<hr style="width: 80%;">

<table width='100%'>
<tr>
<td width='10%'> <img src="./assets/remove.png" class="itemicon" style="height: 15px; "> </td>
<td width='30%'> <img src="./assets/res.jpg" style="max-height: 40px; ">  </td>
<td width='40%' style="font-size: 12px; ">Bashan Rice</td>
<td width='20%' style="font-size: 13px; "> N500</td>

</tr>
</table>
</div>

</div>



</b-col>
<b-col md="7" lg="8">



<div v-for="item in items" :key="item.id">
<div class="nofood" v-if="item.items.length == 0">
    Sorry, We currently do not have food in the {{category}} category.
    <a @click="$router.go(-1)">Please check out our other categories</a>
</div>
<div v-else>
<b-container  class="items" fluid>
    <b-row>
    <b-col sm="6" md="6" lg="4" v-for="food in item.items" :key="food.id" class="play">
        <div >
    <table width="100%">
    <tr><td>
      <img src="./assets/res.jpg" class="itemimg">  
    </td>
    <td width="50%"><h6>{{food.name}}</h6>
    ₦{{food.baseAmount}} Base Price <br />
    ₦{{food.amountPerAddition}} Per Addition
    
</td>
</tr>
    </table>

    <table  v-if="food.available == 1">
        <tr>
     <td >
         How many additional portions?
    <input type="number" min="0" placeholder="0" class="quantity" name="quantity" v-model="quantity">
     </td>
     <td width="15%"> 
         <button @click="addToCart(food.name, food.baseAmount, food.amountPerAddition, food.id, food.packed, food.packAmount )">
     <img src="./assets/add.png" class="itemicon">
         </button>
     </td>
    </tr>
    </table>

        <table width="100%" v-else>
    <tr><td>
      <img src="./assets/res.jpg" class="itemimg">  
    </td>
    <td width="65%"><h6>{{food.name}}</h6>
    ₦{{food.baseAmount}} Base Price <br />
    ₦{{food.amountPerAddition}} Per Addition
    
</td>
     <td>
         Currently Unavailable
     </td>
     
    </tr>
    </table>
        </div>
    </b-col>






  </b-row>
</b-container>
</div>
</div>


</b-col>
</b-row>
</b-container>
</div>

</div>
</template>

<script>

import axios from 'axios';


export default {
    name: 'Foodlist',

    data(){
  return{
  items:[],
    main: [],
  side: [],
  swallow: [],
  soup: [],
  drink: [],
  quantity: this.quantity,
    id: this.$route.params.id,
    category: this.$route.params.category,

  }
    },
computed:{
        orderrestuarant(){
            return 1
            // this.$store.state.ordercart[0].itemList[0].restuarant;
        },
        school(){
            return this.$store.state.school[0].id;
        },
        },

    methods: {
    addToCart (name, base, addition, id, packed, packamount) {

      

        if (packed == 0){

            if (!this.quantity){
            this.quantity = 0;
             }
        this.$store.dispatch('addProductToCart', {
            name: name,
            base: base,
            quantity: this.quantity,
            total: base + (addition * this.quantity),
            restuarant: this.id,
            itemId: id,
            addition: addition,
        })
        this.quantity = "";

        }

        else{


        if (!this.quantity){
            this.quantity = 0;
             }
        this.$store.dispatch('addProductToCart', {
            name: 'Pack',
            base: packamount,
            quantity: 0,
            total: packamount,
            restuarant: this.id,
            itemId: 0,
            addition: 0,
        })
        this.quantity = "";
        

            if (!this.quantity){
            this.quantity = 0;
             }
        this.$store.dispatch('addProductToCart', {
            name: name,
            base: base,
            quantity: this.quantity,
            total: base + (addition * this.quantity),
            restuarant: this.id,
            itemId: id,
            addition: addition,
        })
        this.quantity = "";
        }
        



        






    },
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('https://mobile-waiter-staging.herokuapp.com/v1/restaurants/' +this.id + '?loadOrders=yes&loadItems=yes&category=' + this.category)
.then(response => (this.items = response.data.data.response))

axios.get('https://mobile-waiter-staging.herokuapp.com/v1/restaurants/' +this.id + '?loadOrders=yes&loadItems=yes&category= Main Dish')
.then(response => (this.main = response.data.data.response))


}
}

</script>

<style scoped>
#Foodlist{
    margin-bottom: 70px;
}
.top{
    height: 45px;
    padding-top: 12px;
    background-color: #e85c3a;
    color: azure;
}
.top img{
    height: 30px;
}
.topimg{
    max-height: 100px;
    max-width: 100%;
    min-height: 100px;
    min-width: 100%;
          position: relative;
      top: 0;
      left: 0;
}
.backimg{
    height: 25px;
    position: absolute;
      top: 60px;
      left: 15px;
}
.items table{

    text-align: left;
    max-height: 80px;
    height: 95px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    font-size: 13px;
}
.items td{
    padding-left: 10px;
    margin-top: 25%;
}
.items h6{
    color: #e85c3a;
    font-size: 15px;
    margin-bottom: 4px;
}

.itemicon{
    height: 2rem;
}
.itemimg{
      height: 60px; 
      width: 80px; 
}
.items button{
    background: none;
    border: none;
    outline: none;
}
.quantity{
    width: 35px;
    border: 1px solid #e85c3a;
    background: none;
    text-align: center;
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);
        outline: none;
}
.nofood{
    text-align: left;
    margin-left: 20px;
    margin-top: 30px;
}
.nofood a{
    color: blue;
}
.play{
    margin-top: 45px;
}
.left_info{
    margin-top: 100px;
    text-align: left;
}
.cart {
    position: relative;
    margin-top: 40px;
    width: 80%;
    background-color: #f7f7f7;
    border-radius: 7px;
    min-height: 400px;
    padding: 10px 5px 10px 5px;
}

@media (max-width: 1200px){
    .cart{
        width: 100%;
    }
}
</style>