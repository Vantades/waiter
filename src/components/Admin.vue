<template>
<div id="Login">
    <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Edit Food Items</h6></td>
        </tr>
    </table>

</div>

    <form class="login" @submit.prevent="postData">

        
        <input name="text" placeholder="ID" type="text" required="required" v-model="text">
        
                <div class="passwordstyle">
            <table width="100%">
                <tr>
                    <td width="90%">
        <input name="password" placeholder="Password" :type="passwordFieldType" required="required" v-model="password" autocomplete="password">
                    </td><td><button type="button" @click="switchVisibility">
                        <img src="./assets/soh.png">
                        </button></td></tr></table>
        </div>        <button class="login_btn" >LOGIN</button>
                      
                        
                        
    </form>

</div>
</template>

<script>
export default {
    name: 'Admin',
    data(){
        return{
            text: '',
            password: '',
            passwordFieldType: 'password',

        }
    }
    ,
    methods: {
        postData(){
            if (this.text == 'posy' && this.password == '1234') {
                this.$router.push('/AdminMain')
            }
            else {
                this.$store.dispatch('addNotification', {
                type: 'danger',
                message: 'ID or Password incorrect'
            })
            }
        },
        switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
                      
    },
        
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