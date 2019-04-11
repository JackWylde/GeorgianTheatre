<template>
  <div>
      <div id = "bg-container">

          <router-link to="/selection"><button id = "find-out-btn" v-on:click = "test">Discover Artists</button></router-link>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods:  {
    test: function() {
      console.log("Working")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#find-out-btn{
  padding: 25px;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  position: relative;
  transform: translateY(140px);
  background-color: #3A3C39;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 30px;
  box-shadow: 4px 4px 15px #8d8f8d;
}
div {
  width: 100%;
  text-align: center;
  height: 100%;
  position: fixed;
}
#bg-container {
  height: 100vh;
  z-index: -100;
}
.particles-js-canvas-el {
  height: 100% !important;
}
</style>
