<template>
<div id="Home">
<div class="head">
    <img src="./assets/homeimg.jpeg" class="img_back">

    <div class="home_nav">
    <table width="100%">
        <tr>
    <td class="home_nav_prime"> <img style="height: 40px;" src="./assets/logo.png"> </td>
    <td  style="text-right: left; padding-right: 1%;"> <button>Login</button> </td>
    <td style="text-right: left; padding-right: 1%;">  <button>Sign Up</button></td>
    
    </tr>
    
    </table>
    </div>

    <div class="home_info">
         Order From
         <br>
         Mobile Waiter
      
        <form @submit.prevent class="selectschool">
        <select name="school" v-model="school" required>
            <option value="" disabled selected hidden>Select Your School  </option>
            <option v-for="one in schools" :key="one.id" :value="`${one.id}`">{{one.name}}</option>
        </select>

        <button style="display: none" v-if="school == ''" ></button>
        <button v-else @click="changeSchool(school)" >  GO </button></form>
        

    </div>

     <div class="home_ad">
         <table>
             <tr>
                 <td>
                  <img src="./assets/driver.jpeg">
                  <br>
                  Become an Agent   
                 </td>

                  <td>
                  <img src="./assets/driver.jpeg">
                  <br>
                  Become an Agent   
                 </td>

                  <td>
                  <img src="./assets/driver.jpeg">
                  <br>
                  Become an Agent   
                 </td>
                 

             </tr>
         </table>
     </div>


</div>


<table class="one">
<tr>
<td width="40%"> <img class="table_img" src="./assets/one.jpeg"> </td>
<td style="text-align: left; "> 
<hr style="width: 80px; border: 4px solid black; margin-left: 0; margin-top: 0;">
Become an Agent
<p class="main_text"> 
Lorem Ipsum Can be used for food and stuff
     </p>

<button style="background-color: #f7262d; color: white; border: none; border-radius: 5px; font-size: 16px;"> JOIN US </button>
</td>
</tr>
</table>


<table class="two">
<tr>
<td style="text-align: left; padding-left: 10px;"> 
<hr style="width: 80px; border: 4px solid black; margin-left: 0; margin-top: 30px;">
Become an Agent
<p class="main_text"> 
Lorem Ipsum Can be used for food and stuff
     </p>

<button style="background-color: #f7262d; color: white; border: none; border-radius: 5px; font-size: 16px;"> JOIN US </button>
</td>
<td width="40%"> <img class="table_img" src="./assets/two.png"> </td>
</tr>
</table>

<table class="one">
<tr>
    <td width="40%"> <img class="table_img" src="./assets/three.jpeg"> </td>
<td style="text-align: left; "> 
<hr style="width: 80px; border: 4px solid black; margin-left: 0; margin-top: 0;">
Become an Agent
<p class="main_text"> 
Lorem Ipsum Can be used for food and stuff
     </p>

<button style="background-color: #f7262d; color: white; border: none; border-radius: 5px; font-size: 16px; "> JOIN US </button>
</td>

</tr>
</table>


<table class="one">
<tr>
    <td style="text-align: left; padding-left: 20px;"> 
        Send us a message
<form>
    <input>
    
    <br>
    <input>
    
    
</form>
</td>

    <td width="40%"> <img class="table_img" src="./assets/exe.jpeg"> </td>

</tr>
</table>




<div class="footer">


  <b-row>

    <b-col sm="6" md="3">
       <h2 style="font-weight: 700; color: white; "> Mobile Waiter </h2>
        <br>
        <br>
        a
    </b-col>

    <b-col sm="6" md="3">
        Menu
        <br>
        Become an agent
        <br>
        Order Food
    </b-col>

     <b-col sm="6" md="3">
        Menu
        <br>
        Become an agent
        <br>
        Order Food
    </b-col>

     <b-col sm="6" md="3" style="text-align: left; color: white; ">
        SUBSCRIBE
        <br>
        
        <br>
        <input style="height: 45px; width: 220px; border: none; padding-left: 10px; border-radius: 15px;" placeholder="Your Email">
    </b-col>

 


  </b-row>

<hr style=" width: 80%; margin-top: 50px; margin-left: 10%; ">

<div>

</div>
</div>



</div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Home',
     data(){
  return{
  schools:[],
  name: this.$route.params.name,
  school:'' ,
  }
    },
    methods: {
     getImgUrl(path) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + path + ".png")
  },
    getID: function(id){
    alert(id);
    },
     changeSchool(school){
     this.$store.dispatch('addSchool', {
       
            id: school
        })
        this.$router.push('/Restaurant/'+school)
        
    }
    },

mounted(){
axios.get('https://mobile-waiter-staging.herokuapp.com/v1/schools ').then(response => (this.schools = response.data.data.response))
    


}
}
</script>

<style scoped>
#Home{
    
}
.home_nav_prime{
    text-align: left; 
    padding-left: 1%; 
    width: 80%;

}
.head{
  width: 100%;
  max-height: 600px;
  position: relative;
 
}
.footer {
    width: 100%;
   background-color: #f7262d;
   min-height: 250px;
   padding-top: 50px;
}

.img_back{
    width: 100%;
      max-height: 600px;
}


.home_nav {
  width: 100%;
  position: absolute;
  top: 7px;
}
.home_nav button {
    background: none;
    background-color: #f7262d;
    color: white;
    border: none;
    width: 80px;
    border-radius: 5px;
    font-size: 14px;
    margin-left: 10px;
}
.home_info{
    width: 100%;
    position: absolute;
    top: 30%;
    text-align: left;
    padding-left: 10%;
    font-size: 50px;
    color: white;
    font-weight: 800;
}



.home_ad{
    position: absolute;
    bottom: 0px;
    width: 100%;

}
.home_ad img{
    height: 7%;
}
.home_ad table{
    margin-left: 30%;
    background-color: #f7f7f7;
     height: 100px;
     width: 40%;
     font-size: 14px;
}

.selectschool select{
 background-color: white;
 outline: none;
 border: none;
 border-radius: 0;
 height: 35px;
 width: 200px;
 font-size: 14px;
}
.selectschool button{
    height: 40px;
    width: 50px;
    background-color: red;
    border: none;
    outline: none;
    color: white;
    margin-left: 10px;
     font-size: 14px;
} 
.one{
    background-color: #f7f7f7;
    width: 100%;
    height: 200px;
    font-size: 30px;
    padding-bottom: 40px;
}

.two{
    background-color: #fadbb7;
    width: 100%;
    height: 200px;
    font-size: 30px;
}

.table_img{
    height: 30%;
}
.main_text{
    font-size: 20px;
}
.one input{
    background: none; height: 60px; background-color: #ffff; border: none; border-radius: 15px; margin-top: 20px;
    
}











@media (max-width: 900px) {
.home_ad img{
    height: 5%;
}
.home_ad table{
        margin-left: 25%;
    height: 70px;
     font-size: 10px;
     width: 50%;
} 

.home_info{
    width: 100%;
    position: absolute;
    top: 20%;
    text-align: left;
    padding-left: 10%;
    font-size: 35px;
    color: white;
    font-weight: 800;
}
.table_img{
    height: 20%;
}



}


@media (max-width: 500px) {
.home_ad img{
    height: 3%;
}
.one input{
    width: 100%;
    height: 40px;
}
.home_ad table{
        margin-left: 25%;
    height: 50px;
     font-size: 5px;
     width: 50%;
} 

.home_info{
    width: 100%;
    position: absolute;
    top: 20%;
    text-align: left;
    padding-left: 10%;
    font-size: 20px;
    color: white;
    font-weight: 800;
}
.selectschool select{
 background-color: white;
 outline: none;
 border: solid 1px red;
 border-radius: 7px;
 padding-left: 4px;
 height: 30px;

}
.selectschool button{
    height: 30px;
    width: 50px;
    background-color: red;
    border: none;
    outline: none;
    color: white;
    margin-left: 10px;
} 
.home_nav_prime{
    text-align: left; 
    padding-left: 1%; 
    width: 50%;

}
.table_img{
    height: 15%;
}

.one{
    background-color: #f7f7f7;
    width: 100%;
    height: 200px;
    font-size: 20px;
}
.two{                                
    width: 100%;
    height: 200px;
    font-size: 20px;
}


.main_text{
    font-size: 14px;
}

}





</style>