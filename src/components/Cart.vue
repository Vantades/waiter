<template>
<div id="Cart">
<div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Your Cart</h6></td>
        </tr>
    </table>

</div>
<div style="text-align: left;">
<a @click="$router.go(-1)"><img src="./assets/arrowb.png" class="backimg"></a>
</div>

<b-container  class="items">
    <b-row>
    <b-col sm="6" md="4" v-for="one in cart" :key="one.name" class="cart">
    <table width="100%">
    <tr><td width="35%">
        <h6>Name </h6>
     {{one.name}}
    </td>
    <td >
              
              
              <h6> Extra Portions</h6>

    <h6 v-if="one.name == 'Pack' " style="color: black"> X </h6>
    <h6 v-else style="color: black">{{one.quantity}}</h6>
       


    </td>
     <td>
               <h6> Total</h6>
            ₦{{Number(one.total).toLocaleString()}}
     </td>
     <td width="15%"> 
         <button @click.prevent="removeProductFromCart(one.name)" v-if="one.name == 'Pack' " style="display: none">
         
         </button>
         <button @click.prevent="removeProductFromCart(one.name)" v-else >
         <img src="./assets/remove.png" class="itemicon">
         </button>
     </td>
    </tr>
    </table>
    </b-col>






  </b-row>
</b-container>

<div v-if="cartItemTotal == 0">
Cart is empty
</div>
<div v-else class="total">
<table width='100%'>
<tr>
<td style="padding-top: 15px;">
<h6>Total:  ₦{{Number(cartItemTotal).toLocaleString()}}</h6></td>

<!-- This is an if for the checkout button.. so make sure to change both conditions -->
 
<td style="padding-top: 5px;" v-if="userCount == 0"> 
    
    <router-link to='/login' >
    

     CHECHOUT .. Fix button
     </router-link> 
     
     
     
     
      </td>
      <td style="padding-top: 5px;" v-else> 
    

     <router-link to='/Checkout' >
    <button style="background: none; border: none; outline: none;">
     <!-- <img src="./assets/basket.png" class="remall">  -->

     CHECHOUT .. Fix button
    </button> 
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
    name: 'Cart',
    computed:{
        cart(){
            return this.$store.state.cart;
        },
        cartItemTotal(){
         return this.$store.getters.cartItemTotal;
       },
      

       
       
       userCount(){
         return this.$store.getters.userCount;
       }
    },
    methods:{
        removeProductFromCart(name){
            this.$store.dispatch('removeProductFromCart', name);
        },
        removeAllProductFromCart(){
            this.$store.dispatch('removeAllProductFromCart'); 
        },
        notification(message, type){

             this.$store.dispatch('addNotification', {
                type: type,
                message: message,
                })


        },

       
        addToBasket(){
            

            this.$store.dispatch('addToOrderCart', {
            restuarantId: this.$store.getters.restuarantId,
            id: Math.random().toString(36).substr(2, 5),
            total: this.$store.getters.cartItemTotal,
            itemList: this.$store.state.cart,
        });

         this.$store.dispatch('removeAllProductFromCart');
        this.$router.push('Basket');
         



        }
    },
}
</script>


<style scoped>
#Cart{
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