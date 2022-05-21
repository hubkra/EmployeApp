<template>
<div id="app">
  <MyEmployee />
  </div>
 
  
</template>

<script>
import MyEmployee from './components/MyEmployee.vue'


export default {
  name: 'App',
  components: {
    MyEmployee
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
