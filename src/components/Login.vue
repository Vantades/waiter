<template>
<div id="Login">
    <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Login</h6></td>
        </tr>
    </table>

</div>

<div v-if="userCount == 0">


    <form class="login" @submit.prevent="postData()">

        
        <input name="email" placeholder="Email Address" type="email" required="required" v-model="email">
        
                <div class="passwordstyle">
            <table width="100%">
                <tr>
                    <td width="90%">
        <input name="password" placeholder="Password" :type="passwordFieldType" required="required" v-model="password" autocomplete="password">
                    </td><td><button type="button" @click="switchVisibility">
                        <img src="./assets/soh.png">
                        </button></td></tr></table>
        </div> <router-link to="/ForgotPassword"><button class="forgot_btn" type="button">Fogot Password ?</button></router-link>
                      <button class="login_btn" type="submit">LOGIN</button>
               <router-link to="/signup"> <button class="reg_btn" type="button">Create Account</button></router-link>
                      
                        
                        
    </form>

</div>

<div v-else class="loggedin">

 <div v-for="one in user" :key="one.firstName" style="margin-left: 10px;">
    Hey, {{one.firstName}}.
        <br />
    It seems you are logged in already.
    </div>


    <router-link to="/user"><button>VIEW ACCOUNT</button></router-link>
    <button @click="logout()">LOGOUT</button>
    
    

</div>

</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    computed: {
        user(){
            return this.$store.state.user;
        },
        userCount(){
         return this.$store.getters.userCount;
       }
    },
    data(){
        return{
        email:'',
        password:'',
        passwordFieldType: 'password',
        items:[],
        error: false,
        }
    },
    methods: {
        postData: function(){
            const options = {
        headers: {  'Content-type': 'application/json',}
        };
            axios.post('https://mobile-waiter-staging.herokuapp.com/v1/login',{
            password: this.password,
            email: this.email
            }, options)
            .then(
                (response) => {     
                this.$store.dispatch('addUser', {
                    id: response.data.data.id,
                    phoneNumber: response.data.data.phoneNumber,
                    firstName: response.data.data.firstName,
                    lastName: response.data.data.lastName,
                    middleName: response.data.data.middleName,
                    email: response.data.data.email,
                    preferredLocation: response.data.data.preferredLocation,
                    instagram: response.data.data.instagram,
                    twitter: response.data.data.twitter,

                })

                this.$store.dispatch('addNotification', {
                type: 'success',
                message: 'Login Successful'
            })
            this.$router.push('/Cart')
                } 
                
                
                )
                .catch(error => {
            window.console.log(error)
            this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'Email address or Password incorrect'
            })
            this.email = ''
            this.password = ''

            })

                
            
            },


        switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
                      
    },


    logout(){

            this.$store.dispatch('logout');
            this.$router.push('/');

    }
    }
}
</script>

<style scoped>
#Login{
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

.login{
    margin-top: 30px;
}
.login input{
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
.login_btn{
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
.forgot_btn{
    display: block;
    margin-left: 10%;
    background: none;
    border: none;
    outline: none;
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