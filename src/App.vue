<template>
  <div id="app">
    
    <PigonDiv/>
    <Bod/>
    
  
  
    
  </div>
</template>

<script>

import PigonDiv from './components/PigonDiv.vue';
import Bod from './components/Bod.vue';


export default {
  name: 'App',
  components: {
    Bod,
    PigonDiv,
  }
}
</script>

<style lang="css">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #0B3A42;
  height: 100vh;
  margin: 0;
  box-sizing: border-box;
  
  
}


 


</style>
