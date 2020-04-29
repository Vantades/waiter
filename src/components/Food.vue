<template>
<div id="Food">
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

<div v-for="item in items" :key="item.id">
<div class="nofood" v-if="item.items.length == 0">
    Sorry, We currently do not have food in the {{category}} category.
    <a @click="$router.go(-1)">Please check out our other categories</a>
</div>
<div v-else>

<b-container  class="items">
    <b-row>
    <b-col sm="6" md="4" v-for="food in item.items" :key="food.id">
    <table width="100%">
    <tr>
    <td width="40%"><h6>{{food.name}}</h6>
     Base Price: ₦{{food.baseAmount}} <br />
     Per Addition: ₦{{food.amountPerAddition}}
     <p v-if="food.available == 1">Available: Yes</p>
     <p v-else>Available: No</p>
    
</td>
     <td>
       
        Change availability
        <select name="isAvailable" v-model="isAvailable" required>
            <option value="" disabled selected hidden> No </option>
            <option value="1">Yes</option>
            <option value="0">No</option>
        </select>
        <button @click="change(food.itemId)">
     <img src="./assets/update.png" class="itemicon">
         </button>

         <br />

         Change BasePrice
        <input type="number" name="BasePrice" v-model="BasePrice" required :placeholder="`${food.baseAmount}`">
        <button @click="changeBase(food.itemId, food.name)">
     <img src="./assets/update.png" class="itemicon">
         </button>

         <br />

         Change AdditonPrice
        <input type="number" name="AdditonPrice" v-model="AdditonPrice" required :placeholder="`${food.amountPerAddition}`">
        <button @click="changeAdd(food.itemId, food.name)">
     <img src="./assets/update.png" class="itemicon">
         </button>
     </td>
    
     
    </tr>
    </table>
    </b-col>






  </b-row>
</b-container>
</div>
</div>


</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Food',

    data(){
  return{
  items:[],
  quantity: this.quantity,
    id: this.$route.params.id,
    category: this.$route.params.category,
    isAvailable: '',
    BasePrice:'',
    AdditonPrice:''

  }
    },

mounted(){
axios.get('https://mobile-waiter-staging.herokuapp.com/v1/restaurants/' +this.id + '?loadOrders=yes&loadItems=yes&category=' + this.category)
.then(response => (this.items = response.data.data.response))
},
 
methods: {
    change(foodId){
        const options = {
        headers: {  'Content-type': 'application/json' }
        };
        axios.put('https://mobile-waiter-staging.herokuapp.com/v1/item',{
            itemId: foodId,
            restaurantId: this.id,
            available: this.isAvailable, }, options)
            .catch(error => {
            window.console.log(error.response) 
            })
            this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Availability updated'
                })
        setTimeout(function () {
        location.reload();
    }, 100);
            
    },
    changeBase(foodId, name){
        if(this.BasePrice == ''){
            this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Enter Price to change it to'
                })
        }
        else{
        const options = {
        headers: {  'Content-type': 'application/json' }
        };
        axios.put('https://mobile-waiter-staging.herokuapp.com/v1/item',{
            itemId: foodId,
            restaurantId: this.id,
            baseAmount: this.BasePrice, }, options)
            .catch(error => {
            window.console.log(error.response) 
            })
            this.$store.dispatch('addNotification', {
                type: 'success',
                message: name+' Base Price updated to '+ this.BasePrice
                })
            this.BasePrice=''
            setTimeout(function () {
        location.reload();
    }, 100);
            }
            
    },
    changeAdd(foodId, name){
        if(this.AdditonPrice == ''){
            this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Enter Price to change it to'
                })
        }
        else{
        const options = {
        headers: {  'Content-type': 'application/json' }
        };
        axios.put('https://mobile-waiter-staging.herokuapp.com/v1/item',{
            itemId: foodId,
            restaurantId: this.id,
            amountPerAddition: this.AdditonPrice, }, options)
            .catch(error => {
            window.console.log(error.response) 
            })
            this.$store.dispatch('addNotification', {
                type: 'success',
                message: name+' Amount per Addition updated to ' + this.AdditonPrice
                })
                this.AdditonPrice=''
                 setTimeout(function () {
        location.reload();
    }, 100);
            
                
                }
        
            
    }
}
}

</script>

<style scoped>
#Food{
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
    margin-top: 35px;
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
.items select{
    outline: none;
    margin-top: 2px;
     height: 30px; 
     border: 1px solid #e85c3a;
        box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);  
        width: 130px; 
}
.items input{
        outline: none;
        width: 130px; 
    margin-top: 2px;
     height: 30px; 
     border: 1px solid #e85c3a;
        box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.19);  
}
.items button{
    margin-bottom: 5px;
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
</style>