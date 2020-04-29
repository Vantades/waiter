<template>
<div id="NotificationMessage">
   <div :class="typeclass " class="alert alert-dismissable fade show" role="alert">
    {{notification.message}}
   </div>

</div>
</template>

<script>
export default {
    name: 'NotificationMessage',
    props:  ["notification"],
    computed: {
        typeclass(){
            return `alert-${this.notification.type}`
        }
    },
    created(){
        setTimeout (() => {
            this.$store.dispatch('removeNotification', this.notification)
        }, 2000);
    }
}
</script>

<style scoped>
#NotificationMessage{

}

</style>