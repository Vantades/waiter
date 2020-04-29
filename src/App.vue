<template>
  <div id="app">

  <router-view></router-view>

    <NotificationsList />
  </div>
</template>

<script>
import NotificationsList from "./components/NotificationsList"
export default {
  name: 'app',
  components: {
    NotificationsList,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0px;
    background-color: #ffffff;
    outline: none;
}

</style>
