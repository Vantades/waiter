<template>
<div id="Items">

<div class="top">
    <table width="100%">
        <tr>
            <td width="15%"> <img src="./assets/logo.png"> </td>
            <td width="85%"><h6>Food Categories</h6></td>
        </tr>
    </table>

</div>



<div>
<img src="./assets/res.jpg" class="topimg">
<a @click="$router.go(-1)" class="backbtn"><img src="./assets/back.png" class="backimg"></a>
</div>
<b-container class="items">
  <b-row>

    <b-col sm="6" md="4">
    <table width="85%">
    <tr><td width="85%"><router-link :to="`/Foodlist/${id}/Main Dish`"><h6>MAIN DISH</h6></router-link></td>
     <td width="15%"> <router-link :to="`/Foodlist/${id}/Main Dish`">
     <img src="./assets/arrow.png"></router-link></td>
    </tr>
    </table>
    </b-col>

    <b-col sm="6" md="4">
    <table width="85%">
    <tr><td width="85%"><router-link :to="`/Foodlist/${id}/Side Dish`"><h6>SIDE DISH</h6></router-link></td>
     <td width="15%"> <router-link :to="`/Foodlist/${id}/Side Dish`">
     <img src="./assets/arrow.png"></router-link></td>
    </tr>
    </table>
    </b-col>

    <b-col sm="6" md="4">
    <table width="85%">
    <tr><td width="85%"><router-link :to="`/Foodlist/${id}/Swallow`"><h6>SWALLOW</h6></router-link></td>
     <td width="15%"> <router-link :to="`/Foodlist/${id}/Swallow`">
     <img src="./assets/arrow.png"></router-link></td>
    </tr>
    </table>
    </b-col>

    <b-col sm="6" md="4">
    <table width="85%">
    <tr><td width="85%"><router-link :to="`/Foodlist/${id}/Soup`"><h6>SOUP</h6></router-link></td>
     <td width="15%"> <router-link :to="`/Foodlist/${id}/Soup`">
     <img src="./assets/arrow.png"></router-link></td>
    </tr>
    </table>
    </b-col>


    <b-col sm="6" md="4">
    <table width="85%">
    <tr><td width="85%"><router-link :to="`/Foodlist/${id}/Drinks`"><h6>DRINKS</h6></router-link></td>
     <td width="15%"> <router-link :to="`/Foodlist/${id}/Drinks`">
     <img src="./assets/arrow.png"></router-link></td>
    </tr>
    </table>
    </b-col>


  </b-row>
</b-container>

</div>
</template>

<script>
export default {
    name: 'Items',
    data(){
        return{
            id : this.$route.params.id,
        }
    }
}
</script>

<style scoped>
#Items{
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
    max-height: 200px;
    max-width: 100%;
    min-height: 200px;
    min-width: 100%;
          position: relative;
      top: 0;
      left: 0;
}
.items table{

    text-align: center;
    height: 60px;
    margin-top: 35px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 20px;
    margin-left: 7%;
    text-decoration: none;
}
.items td{
    padding-left: 10px;
    margin-top: 25%;
    text-decoration: none;
}
.items h6{
    color: #e85c3a;
}

.items img{
    height: 20px;
}
.backimg{
    height: 25px;
    position: absolute;
      top: 60px;
      left: 15px;
}
.backbtn{
    height: 40px;
    width: 40px;
    background-color: grey;
}
</style>