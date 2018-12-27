<template>
  <div id="app">
    <header>
      <nav-bar-transparent></nav-bar-transparent>
    </header>
       <div id="view-background">
         <div id="router-view">
           <router-view />
         </div>
       </div>
  </div>
</template>

<script>
import NavBarTransparent from './components/navBar/NavBarTransparent'

export default {
  name: 'App',
  components:{
    NavBarTransparent
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
#view-background {
  background: url("../static/6.jpg")no-repeat center center;
  background-size: cover;
  width: 100%;
  height: 1000px;
  margin-top: 0;
}
#router-view{
  padding-top: 100px;
}

</style>
