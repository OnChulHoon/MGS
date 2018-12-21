<template>
  <div id="app">
    <header>
      <nav-bar2></nav-bar2>
    </header>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <br><br><br><br><br>
    <router-view/>
  </div>
</template>

<script>
//import NavBar from './components/navBar/NavBar'
import NavBar2 from './components/navBar/NavBar2'

export default {
  name: 'App',
  components:{
    NavBar2
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
  margin-top: 0;
}
</style>
