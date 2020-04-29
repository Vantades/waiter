<template>
<div id="User">
<div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>User Account</h6></td>
        </tr>
    </table>

</div>

<div v-if="userCount == 0" class="loggedin">
<p style="margin-left: 10px;"> Hey, You do not seem to be logged in.</p>
    <router-link to="/login"><button>LOGIN</button></router-link>
</div>

<div v-else>

<div v-for="one in user" :key="one.firstName" class="user">
    Hey, {{one.firstName}}.



   <p>Name: {{one.lastName}} {{one.firstName}} </p>
    <p>Email: {{one.email}}</p>
    <p>Phone No.: {{one.phoneNumber}}</p>
    <p>Preferred Location: {{one.preferredLocation}}</p>

    






    </div>

</div>

<div class="loggedin">
<button @click="logout()">LOGOUT</button>
</div>
</div>
</template>

<script>
export default {
    name: 'User',
    computed: {
        user(){
            return this.$store.state.user;
        },
        userCount(){
         return this.$store.getters.userCount;
       }
    },
    methods: {
        logout(){

            this.$store.dispatch('logout');
            this.$router.push('/login');

    }
    }
}
</script>


<style scoped>
#User{
    margin-bottom: 70px;
}
.loggedin{
    text-align: left;
    margin-top: 40px;

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
.top{
    height: 45px;
    padding-top: 12px;
    background-color: #e85c3a;
    color: azure;
}
.top img{
    height: 30px;
}
.user{
    margin-top: 20px;
    text-align: left;
    margin-left: 20px;
}
.user p{
    margin-top: 20px;
    font-size: 17px;
    font-weight: 600;
}
</style>