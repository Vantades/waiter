<template>
<div id="AdminMain">
    <div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Edit Food Items</h6></td>
        </tr>
    </table>

</div>



<b-container>
    <b-row>

    <b-col sm="6" md="4"  v-for="item in items" :key="item.id">

<div>
<table width="100%" class="resturant">
<tr>
<td><router-link :to="`/edititems/${item.id}`"><img :src="getImgUrl(item.restaurantName)" v-bind:alt="item.restaurantName"></router-link>
   

</td>

</tr>
<tr>
<td><h5 style="text-align: left; margin-top: 10px;"> {{item.restaurantName}} Restaurant</h5> </td>
</tr>
</table>
</div>


    </b-col>





  </b-row>
</b-container>

</div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'AdminMain',
     data(){
  return{
  items:[],
  name: this.$route.params.name,
  }
    },
    methods: {
     getImgUrl(path) {
    var images = require.context('../assets/', false, /\.png$/)
    return images('./' + path + ".png")
  },
    getID: function(id){
    alert(id);
    }
    },

mounted(){
axios.get('https://mobile-waiter-staging.herokuapp.com/v1/restaurants ')
.then(response => (this.items = response.data.data.response))
}

}
</script>

<style scoped>
#AdminMain{
    margin-bottom: 70px;
}

.top{
    height: 45px;
    padding-top: 12px;
    background-color: #e85c3a;
    color: azure;
    margin-bottom: 25px;
}
.search{
    width: 80%;
    margin-left: 10%;
    height: 50px;
    background-color: aqua;
}
.search input{
    background-color: blue;
    width: 100%;
    height: 100%;
}
.search button{
    background-color: gold;
    width: 100%;
    height: 100%;
}
.top img{
    height: 30px;
}
.nodec{
    color: gray;
}
.resturant{
        margin-top: 15px;
        margin-bottom: 15px;
}
.resturant img{
    max-height: 250px;
    max-width: 100%;
    min-height: 250px;
    min-width: 100%;

}
</style>