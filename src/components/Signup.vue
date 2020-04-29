<template>
<div id="Signup">
        <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Create an account</h6></td>
        </tr>
    </table>

</div>

<div v-if="userCount == 0">

    <form class="signup" @submit.prevent="postData()">
        <input name="fname" placeholder="First Name" type="text" required="required" v-model="fname">
        <input name="lname" placeholder="Last Name" type="text" required="required" v-model="lname">
        <input name="email" placeholder="Email Address" type="email" required="required" v-model="email">
        <input name="phnumber" placeholder="Phone Number" type="number" required="required" v-model="phnumber">
        <select required name="location" v-model="location">
            <option value="" disabled selected hidden>Select Delivery Location </option>
            <option v-for="one in point" :key="one.place" :value="`${one.price} :${one.place}`">{{one.place}} at ₦{{one.price}}</option>
        </select>
        <textarea name="others" placeholder="Other specifications or Directions to your location: Such as Hostel name, Room Number, Class' Location, etc." v-model="others"></textarea>
        <div class="passwordstyle">
            <table width="100%">
                <tr>
                    <td width="90%">
        <input name="password" placeholder="Password" :type="passwordFieldType" required="required" v-model="password">
                    </td><td><button type="button" @click="switchVisibility">
                        <img src="./assets/soh.png">
                        </button></td></tr></table>
        </div>
        <div class="passwordstyle">
            <table width="100%">
                <tr>
                    <td width="90%">
        <input name="cpassword" placeholder="Confirm Password" :type="passwordFieldType" required="required" v-model="cpassword">
                    </td><td><button type="button" @click="switchVisibility">
                        <img src="./assets/soh.png">
                        </button></td></tr></table>
        </div>
        <button type="submit" class="signup_btn">SIGNUP</button>
 <router-link to="/login"> <button class="reg_btn" type="button">Login</button></router-link>
                
    </form>
</div>
<div v-else class="loggedin">

 <div v-for="one in user" :key="one.firstName" style="margin-left: 10px;">
    Hey, {{one.firstName}}.
        <br />
    It seems you are logged in already.
    </div>


    <router-link to="/user"><button>VIEW ACCOUNT</button></router-link>
    <router-link to="/login"><button @click="logout()">LOGOUT</button></router-link>
    
    

</div>

</div>

</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() {
    return{
    fname:'',
    lname: '',
    email:'',
    location:'',
    phnumber:'',
    password:'',
    cpassword:'',
    others:'',
    passwordFieldType: 'password'


    }
    },
    computed:{
        point(){
            return this.$store.state.point;
        },
        user(){
            return this.$store.state.user;
        },
        userCount(){
         return this.$store.getters.userCount;
       }
    
    },
    


    methods: {
   
    postData: function(){
         if (this.password === this.cpassword){
            const options = {
        headers: {  'Content-type': 'application/json',}
        };
            axios.post('https://mobile-waiter-staging.herokuapp.com/v1/signup',{
            password: this.password,
            phoneNumber: this.phnumber,
            firstName: this.fname,
            lastName: this.lname,
            preferredLocation: this.location + ' - ' + this.others,
            middleName: 'NA',
            email: this.email,
            instagram: 'NA',
            twitter: 'NA',
            

            
            
            }, options)
            .then(({status}) =>{
                window.console.log(status)
                this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Signup Successful'
            }),
            this.$router.push('/login')
            }
            
            )
            .catch(error => {
            window.console.log(error)
            this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Email address or Phone Number already registered.'
            })
            this.email = '',
            this.phnumber = ''
            })
            
            
            
            
            }

            else {

                this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Passwords Do not Match'
            },)
            this.password = ''
            this.cpassword = ''

            }



            },

            
            switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },

    logout(){

            this.$store.dispatch('logout');

    }
}



}



</script>

<style scoped>
#Signup{
    margin-bottom: 70px;
}
.signup{
        margin-top: 30px;
}
.signup input{
    margin-top: 30px;
    margin-left: 10%;
    line-height: 45px;
    border: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border-bottom: solid 1px red;

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
.signup select{
    margin-top: 30px;
    margin-left: 10%;
    height: 45px;
    border: none;
    background: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
    border-bottom: solid 1px red;

}
.signup textarea{
    margin-top: 40px;
    margin-left: 10%;
    height: 100px;
    background: none;
    width: 80%;
    text-align: left;
    display: block;
    padding-left: 10px;
    outline: none;
        border: none;
    background: none;
    border-bottom: solid 1px red;

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
.passwordstyle{

    width: 80%;
    margin-left: 10%;
     outline: none;
    border-bottom: solid 1px red;

}
.passwordstyle input{
        width: 100%;
        margin: 0px;
    padding: 0px;
    min-width: 80%;
        margin-top: 30px;
        text-align: left;
    padding-left: 10px;
    outline: none;
    border: none;

}
.passwordstyle button{
    background: none;
    border: none;
    outline: none;
}
.passwordstyle img{
    height: 30px;
    margin-top: 30px;
    width: 30px;
}
.loggedin{
    text-align: left;
    margin-top: 20px;

}

.loggedin button{
     outline: none;
    width: 80%;
    margin-left: 10%;
    height: 50px;
    background-color: #e85c3a;
    color: white;
    font-size: 20px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: none;
    margin-top: 30px;
}
</style>
