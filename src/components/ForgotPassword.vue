<template>
<div id="ForgotPassword">
 <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Forgot Password</h6></td>
        </tr>
    </table>

</div>

    <form class="login" @submit.prevent="postData">
       <p> Nawa o! University student and you're forgetting password &#128514; </p>

        
        <input name="email" placeholder="Email Address" type="email" required="required" v-model="email">

        <button class="login_btn">SEND ME MY PASSWORD!</button>

    </form>

</div>
</template>

<script>
export default {
    name: 'ForgotPassword',

    data(){
        return{
            email: '',
        }
    }
    
}
</script>

<style scoped>
#ForgotPassword{
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
.login p{
    margin-left: 5%;
    text-align: left;
    width: 90%;
    hyphens: auto;
}

</style>