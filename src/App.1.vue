<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <GanSec para="This text is from GanSection" />
   </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GanSec from './components/GanSec.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    GanSec
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
