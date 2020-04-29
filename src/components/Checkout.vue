
<template>
<div id="Checkout">
        <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Checkout</h6></td>
        </tr>
    </table>

</div>



<div v-if="schoolCount == 0">
    You have to select a school before Checkout

    <a href="/"> HAsbh  </a>


</div>
<div v-else>
<div style="text-align: left; margin-bottom: 10px;">
<a @click="$router.go(-1)"><img src="./assets/arrowb.png" class="backimg"></a>
</div>
<div v-if="userCount == 0">
Please Log in First
</div>

<div v-else>
<div v-if="cartItemCount == 0">
Cart is empty
</div>
<div v-else>


<div class="order" v-for="one in user" :key="one.id">
   <p>Name: {{one.lastName}} {{one.firstName}} </p>
    <p>Email: {{one.email}}</p>
    <p>Phone No.: {{one.phoneNumber}}</p>

    <form @submit.prevent="addOrder(one.id, one.preferredLocation)">

    <div class="ordering">
    <input type="radio" name="locate" v-model="locate" value="old" required> <label>Use your preferred address</label>
    
    <p>{{one.preferredLocation}}</p>
    </div>
<div class="ordering">
    <input type="radio" name="locate" v-model="locate" value="new" required> <label>Use a new address</label>
        <select v-if = "school[0].id == 1"  name="location" v-model="location">
            <option value="" disabled selected hidden>Select Delivery Location </option>
            <option v-for="one in point" :key="one.place" :value="`${one.price} :${one.place}`">{{one.place}} at ₦{{one.price}}</option>
        </select>

        <select v-else-if = "school[0].id == 2"  name="location" v-model="location">
            <option value="" disabled selected hidden>Select Delivery Location </option>
            <option v-for="one in points" :key="one.place" :value="`${one.price} :${one.place}`">{{one.place}} at ₦{{one.price}}</option>
        </select>
        
        <textarea name="others" placeholder="Other specifications or Directions to your location: Such as Hostel name, Room Number, Class' Location, etc." v-model="others"></textarea>
</div>

        <select name="payMethod" v-model="payMethod" class="payMethod" required>
            <option value="" disabled selected hidden>Select Payment method </option>
            <option value="online">Pay Online</option>
            <option value="onDelivery">Pay on Delivery</option>
        </select>

        <button class="signup_btn">ORDER </button>

      
    </form>

    
                  
</div>


  <div class="total">  
<table width='100%'>
<tr>
<td style="padding-top: 15px;">
<h6>Food Total:  ₦{{Number(cartItemTotal).toLocaleString()}}</h6></td>
</tr>
</table>
  </div>
</div>
</div>

</div>
</div>

</template>


<script>
import axios from 'axios';
export default {
    name: 'Signup',
     
        computed:{
        point(){
            return this.$store.state.point;
        },

        points(){
            return this.$store.state.points;
        },
         school(){
            return this.$store.state.school;
        },
        cartItemTotal(){
         return this.$store.getters.cartItemTotal;
       },
       schoolCount(){
         return this.$store.getters.schoolCount;
       },
      user(){
            return this.$store.state.user;
        },
        cart(){
            return this.$store.state.cart;
        },
        cartItemCount(){
            
            return this.$store.getters.cartItemCount;

        },

        restuarantId(){
                    return this.$store.getters.restuarantId;
        },
        
       userCount(){
         return this.$store.getters.userCount;
       },
       

       
    },
    data() {
    return{
    fname:'',
    twitter: '',
    instagram:'',
    email:'',
    location: '',
    others:'',
    locate:'',
    payMethod: '',
    
    

          
    }
    },

    methods: {

    addOrder(id, preferred) {

       

        if (this.locate == 'new'){
            if (this.location == ''){

                this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Select a delivery location'
                })
                
            }
            else {

                if (this.payMethod == 'online'){
                    const options = {
                        headers: {  'Content-type': 'application/json',}
                        };
                axios.post('https://mobile-waiter-staging.herokuapp.com/v1/order',{
                customerId: id,
                restaurantId: this.$store.getters.restuarantId,
                subTotal: this.cartItemTotal,
                fee: parseInt(this.location.replace(/(^\d+)(.+$)/i,'$1')),
                address: this.location + ' ' + this.others,
                itemList: [this.cart] ,
                onlinePayment: true,
            }, options)
            .then(
                (response) => {     
                
                window.console.log(response.data)
                this.$router.push(response.data.data )
            
                } 
                
                
                )
            .catch(error => 
            {
            window.console.log(error)
            })


            this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Order Successful'
                })

                }

                else {

                     const options = {
                        headers: {  'Content-type': 'application/json',}
                        };
                axios.post('https://mobile-waiter-staging.herokuapp.com/v1/order',{
                customerId: id,
                restaurantId: this.$store.getters.restuarantId,
                subTotal: this.cartItemTotal,
                fee: parseInt(this.location.replace(/(^\d+)(.+$)/i,'$1')),
                address: this.location + ' ' + this.others,
                itemList: [this.cart] ,
                onlinePayment: false,


                
            }, options)
            
            .catch(error => 
            {
            window.console.log(error)
            })


            this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Order Successful'
                })
                this.$router.push('/Restaurant/Convenant%20University')

                }
                
            }
            


        }

        else if (this.locate == 'old'){

            


          
          if (this.payMethod == 'online') {                               


    const options = {
                        headers: {  'Content-type': 'application/json',}
                        };
                axios.post('https://mobile-waiter-staging.herokuapp.com/v1/order',{
                customerId: id,
                restaurantId: this.$store.getters.restuarantId,
                subTotal: this.cartItemTotal,
                fee: parseInt(preferred.replace(/(^\d+)(.+$)/i,'$1')),
                address: preferred,
                itemList: [this.cart] ,
                onlinePayment: true,


                
            }, options)
            .then(
                (response) => {     
                
                window.console.log(response.data)
                this.$router.push(response.data.data )
            
                } 
                
                
                )
            .catch(error => {
            window.console.log(error.message)
            })


        this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Order Successful'
                })
                // this.$router.push('/Restaurant/Convenant%20University')



        }
        
        else {
             const options = {
                        headers: {  'Content-type': 'application/json',}
                        };
                axios.post('https://mobile-waiter-staging.herokuapp.com/v1/order',{
                customerId: id,
                restaurantId: this.$store.getters.restuarantId,
                subTotal: this.cartItemTotal,
                fee: parseInt(preferred.replace(/(^\d+)(.+$)/i,'$1')),
                address: preferred,
                itemList: [this.cart] ,
                onlinePayment: false,
            }, options)
            .then(
                (response) => {     
                
                window.console.log(response.data)
                this.$router.push(response.data.data )
            
                } 
                
                
                )
            .catch(error => {
            window.console.log(error.message)
            })


        this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Order Successful'
                })
                this.$router.push('/Restaurant/Convenant%20University')


        }

        

        }

        
        
    },
    
    },


}



</script>

<style scoped>
#Checkout{
    margin-bottom: 130px;
}
.signup{
        margin-top: 10px;
}
.signup input{
    margin-bottom: 30px;
    margin-left: 10%;
    line-height: 40px;
    border: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border-bottom: solid 1px red;

}
.ordering select{
    margin-bottom: 30px;
    margin-left: 10%;
    height: 40px;
    border: none;
    background: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border-bottom: solid 1px red;

}
.ordering textarea{
    margin-bottom: 10px;
    margin-left: 10%;
    height: 140px;
    background: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border: solid 1px red;
    border-radius: 15px;

}
.signup_btn{
    outline: none;
    width: 90%;
    height: 50px;
    background-color: #e85c3a;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin-top: 30px;

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
.reg_btn{
    width: 100%;
    margin-top: 30px;
   display: block;
    background: none;
    border: none;
    outline: none;
    text-align: center;
    color: #e85c3a;

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
.order p{
    width: 90%;
    font-weight: 500;
    text-align: left;
    margin-left: 5%;
    min-height: 40px;
    border: none;
    padding-left: 10px;
    padding-top: 5px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.ordering{
        text-align: left !important;
    border: 1px solid #e85c3a;
    margin-top: 40px;
    width: 90%;
    margin-left: 5%;
    padding-top: 10px;
        padding-bottom: 10px;
}
.ordering input{
    text-align: left !important;
    background-color: red;
    margin-left: 20px;
    margin-bottom: 15px;
    
}
.payMethod{
      margin-bottom: 30px;
    margin-left: 5%;
    height: 50px;
    background: none;
    width: 90%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border: solid 1px red;
    margin-top: 30px;
}
</style>
