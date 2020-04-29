<template>
<div class="NotificationsList">
    <NotificationMessage 
    v-for="notification in notifications"
    :key="notification.id"
    :notification="notification"
    />
     
</div>
</template>

<script>
import NotificationMessage from "./NotificationMessage"
export default {
    name: 'NotificationsList',
    components: {
        NotificationMessage,
    },
    computed:{
        notifications(){
         return this.$store.getters.notification;
       }
    },
}
</script>

<style>
.NotificationsList{
position: fixed;
bottom: 0;
right: 0;
margin-right: 10px;
width: 300px;
}
</style>