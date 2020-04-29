<template>
<div id="Basket">
<div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Your Basket</h6></td>
        </tr>
    </table>

</div>
<div style="text-align: left;">
<a @click="$router.go(-1)"><img src="./assets/arrowb.png" class="backimg"></a>
</div>

You can have up to four orders in your basket

<b-container  class="items">
    <b-row>
    <b-col sm="6" md="4" v-for="item in ordercart" :key="item.id" class="cart">

    
    <table width="100%">
    <tr><td width="35%">
        <h6>Name </h6>
     
    </td>
    <td >
              
              
              <h6> Extra Portions</h6>

       


    </td>
     <td>
               <h6> Total</h6>
           
     </td>
     
    </tr>

    <tr v-for="one in item.itemList" :key="one.name">

        <td>{{one.name}}</td>

        <td>

    <h6 v-if="one.name == 'Pack' " style="color: black"> X </h6>
    <h6 v-else style="color: black">{{one.quantity}}</h6>
        </td>

        <td> ₦{{Number(one.total).toLocaleString()}}</td>

    </tr>

    <tr>

        <td></td>

        <td></td>

        <td>
            <button style="height: 40px; width: 70px; background-color: black; color: white;
             outline: none; margin-bottom: 5px; border-radius: 30px;
             margin-top: 5px;

             " @click.prevent="removeOrderCart(item.id)">
                REMOVE </button>

        </td>
    </tr>

    
    </table>


    </b-col>






  </b-row>
</b-container>

<div v-if="orderCartTotal == 0">
Basket is empty
</div>
<div v-else class="total">
<table width='100%'>
<tr>
<td style="padding-top: 15px;">
<h6>Total:  ₦{{Number(orderCartTotal).toLocaleString()}}</h6></td>
<td> 
    <router-link :to="`/items/${orderrestuarant}`">
    <button style="height: 30px; background-color: black; border: none; color: white; border-radius: 12px; outline: none; "> Add </button>
    </router-link>
     </td>
    
<td style="padding-top: 5px;" v-if="userCount == 0"> 
    
    <router-link to='/login' >
     <img src="./assets/check.png" class="remall"> 
     </router-link> 
     
     
     
     
      </td>
      <td style="padding-top: 5px;" v-else> 
    
    <router-link to='/Checkout' >
     <img src="./assets/check.png" class="remall"> 
     </router-link> 
     
     
     
     
      </td>


<td style="padding-top: 5px; text-align: right; margin-left: 20px;">
    <button @click.prevent="removeAllProductFromCart()" style="border:none; background: none;">
     <img src="./assets/rem.png" class="remall"> 
     </button>
     </td>
</tr>
</table>
</div>


</div>  
</template>

<script>
export default {
    name: 'Basket',
    computed:{
        ordercart(){
            return this.$store.state.ordercart;
        },
        orderCartTotal(){
         return this.$store.getters.orderCartTotal;
       },
       userCount(){
         return this.$store.getters.userCount;
       },
       
        orderrestuarant(){
            return this.$store.state.ordercart[0].itemList[0].restuarant;
        },
    },
    methods:{
        removeOrderCart(id){
            this.$store.dispatch('removeOrderCart', id);
        },
        removeAllProductFromCart(){
            this.$store.dispatch('removeAllOrderCart'); 
        }
    },
}
</script>


<style scoped>
#Basket{
    margin-bottom: 140px;
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
.items table{

    text-align: left;
    max-height: 80px;
    height: 95px;
    margin-top: 15px;
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
}
.items button{
    background: none;
    border: none;
    outline: none;
}
.backimg{
    height: 25px;
    margin-left: 10px;
    margin-top: 10px;
    text-align: left;
}
.total{
    position: fixed;
    bottom: 65px;
    width: 90%;
    margin-left: 5%;
    height: 50px;
    text-align: left;
    padding-left: 10px;
    border: none;
    background-color: white;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
}
.remall{
    height: 30px;
}
</style>