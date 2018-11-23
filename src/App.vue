<template>
<div>
  <Header/>
  <div id="app">
    <router-view/>
  </div>
</div>
</template>

<script>
import Header from './components/main/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
#app {
  font-family: 'M PLUS Rounded 1c', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
