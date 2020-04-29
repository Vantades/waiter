<template>
<div>
<table class="nav_main">
<tr>
  <td>  <router-link to="/"> <img src="./assets/hom.png" class="nav_img"></router-link></td>

    <td>  <router-link to="/Cart"> <img src="./assets/cart.png" class="nav_img"></router-link> 
    <b-badge pill variant="light">{{cartItemCount}}</b-badge> 
    </td>


  
      
      
      
      <td v-if="userCount == 0">  <router-link to="/login"> <img src="./assets/acc.png" class="nav_img"></router-link></td>
        <td v-else>  <router-link to="/user"> <img src="./assets/acc.png" class="nav_img"></router-link></td>
   </tr>

</table>
</div>
</template>

<script>
export default {
    name: 'BottomNav',

    computed:{
       cartItemCount(){
         return this.$store.getters.cartItemCount;
       },
        userCount(){
         return this.$store.getters.userCount;
       }
    }
}
</script>

<style scoped>
.nav_main{
  background-color: white;
    position: fixed;
    bottom: 0;
  width: 100%;
    text-align: center;
    height: 55px;
        box-shadow: 5px 10px 16px 5px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.nav_img{
height: 35px;
}


</style>