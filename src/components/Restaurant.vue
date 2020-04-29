<template>
<div id="Home">

<div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            
        </tr>
    </table>

<div class="jumb">
    
<h3>Order Food</h3>
<h5>
    {{name}}
    Order From your favorite restuarants <br />
    Right from your mobile<br />
    NO FUSS NO STRESS NO SWEAT
</h5>
<form @submit.prevent class="selectschool">



<router-link to="/"> <button>  CHANGE SCHOOL </button> </router-link>
</form>

</div>
         
            
            
</div>

<!-- <router-link to="/" class="nodec"> change location </router-link> -->

<!-- <form class="search">
<table width="100%" height="100%">
<tr>
    <td width="85%">
        <input name="search" placeholder="Search Restuarants" v-model="search">
    </td>
        <td width="15%"><button type="submit">
            IN
            </button></td>
</tr>
</table>
</form> -->
<h6 style="text-align: left; margin-left: 20px;"> Our Vendors</h6>

<b-container fluid>
    <b-row>

    <b-col md="6" lg="4"  v-for="item in items" :key="item.id">

<div>
<table width="100%" class="resturant">
<tr>
<td><router-link :to="`/Foodlist/${item.id}/Main Dish`"><img :src="getImgUrl(item.restaurantName)" v-bind:alt="item.restaurantName"></router-link>
   

</td>

</tr>
<tr>
<td><h5 style="text-align: left; margin-top: 10px; color: grey;"> {{item.restaurantName}} Restaurant</h5> 
Last Updated: {{ item.updatedAt | moment("DD/MM/YYYY") }}
 </td>
</tr>
</table>
</div>


    </b-col>





  </b-row>
</b-container>

<!-- {{items}} -->









</div>
</template>


<script>
import axios from 'axios';
export default {
    name: 'Home',
     data(){
  return{
       
  items:[],
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
   
    },
    

mounted(){
axios.get('https://mobile-waiter-staging.herokuapp.com/v1/restaurants?schoolId='+this.name)
.then(response => (this.items = response.data.data.response

   

    ))
},

}
</script>

<style scoped>
#Home{
    margin-bottom: 70px;
}
.top{
    min-height: 300px;
    padding-top: 12px;
    background-color: #e85c3a;
    color: azure;
    margin-bottom: 25px;
}

.top img{
    height: 30px;
    margin-left: 7px;
}
.top td{
    text-align: left;
}
.nodec{
    color: gray;
}
.resturant{
        margin-top: 15px;
        margin-bottom: 15px;
            text-align: left;
}
.resturant img{
    max-height: 250px;
    min-height: 250px;
    width: 100%;
    max-width: 350px;


}
.jumbo{
    margin-top: 30px;
}
.jumbotd{
    padding-left: 30px;
    text-align: justify;
}
.selectschool{
    margin-top: 20px;
}
.selectschool select{
 background-color: white;
 outline: none;
 border: solid 1px red;
 border-radius: 0;
 height: 40px;
}
.selectschool button{
    height: 40px;
    width: 170px;
    background-color: red;
    border: none;
    outline: none;
    color: white;
    margin-left: 5px;
} 
.jumb{
    text-align: left;
    margin-left: 20px;
    margin-top: 20px;
}
</style>