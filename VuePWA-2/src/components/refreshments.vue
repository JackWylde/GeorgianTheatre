<template>
  <div id = "parent">
    <div id = "wrapper">
      <div class = "speech-wrapper">
        <div class = "speech-bubble">
          <h3>Refreshments</h3>
        </div>
      </div>
      <div class="main-text">
        <p>Welcome to The Georgian Theatre, Stockton-on-Tees – Teesside’s longest running and one of north-east England’s finest independent music venues…<br><br>
          We provide a great programme of live music – and when we throw our doors open, anyone can pop by for a drink and a chat in our bar area - serving fine real ales, craft beers, gins and ciders.<br><br>
          We’re child and dog friendly  – and we think The Georgian Theatre is a really great place just to gather and hang out…<br><br>
          Although we don't currently open regularly during the day for food and drink; we offer a catering service for special events and bookings.</p>
      </div>
        <div class="g-container">
            <div id="selections-container">
              <div class="selection-item">
                <div class = "speecher-wrapper">
                  <div class = "speecher-bubble">
                    <h3>Bar Opening</h3>
                  </div>
                </div>
              <p>WE OPEN OUR BAR FROM 5:00PM ON THE NIGHTS WE HAVE EVENTS RUNNING.<br>NON-TICKET HOLDERS ARE WELCOME TO USE OUR BAR.</p><br>
              <p>SERVING...</p>
              <p>REAL ALES</p>
              <p>PREMIUM GINS</p>
              <p>FRESH COFFEES</p>
              <div id="slider">
                <app-slider></app-slider>
            </div>
            </div>
        </div>
        </div>

      <div class="main-text">
        <div class = "speechs-wrapper">
          <div class = "speechs-bubble">
            <h3>Hot Drinks</h3>
          </div>
        </div>
        <img id="coffee" src="../assets/coffee.svg">
          <li>Americano - £1.60</li>
          <li>CAPPUCCINO - £2.00</li>
          <li>FLAT WHITE - £2.50 </li>
          <li>LATTE - £2.00</li>
          <li>MOCHA -  £2.60</li>
          <li>HOT CHOCOLATE - £2.20</li>
          <li>POT OF TEA FOR ONE - £1.70</li>
          <li>POT OF TEA FOR TWO - £3.00</li>
      </div>
      </div>

  </div>
</template>

<script>
import Slider from './Slider.vue';
export default {
  components: {
    'app-slider':Slider
  },
  data() {
    return{}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.g-container {
  margin: 10px;
}
#slider {
  margin: 10px;
}
#coffee {
  margin-left: 20px;
}
li {
  list-style: none;
}
#selections-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
  background-color: #6C7C59;
  color: white;
  padding: 10px;
  padding-bottom: 25px;
}
#selections-container p{
  margin-top: 5px;
}
#parent {
  width: 100%;
  text-align: center;
  height: 100%;
  position: fixed;
}
#bg-container {
  height: 100vh;
  z-index: -100;
}
#wrapper {
  position: relative;
}
.main-text {
  background: #3A3C39;
  color: white;
  margin: 10px;
  padding: 20px;
  text-align: center;
}
p {
  margin: 0px;
}
.speech-wrapper {
  margin-bottom: 12px;
}
.speech-bubble {
  width: 300px;
  height: 65px;
  font-size: 18px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  background-color: #6C7C59;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
h3 {
  color: white;
  font-weight: lighter;
  margin-top: 12px;
}
.speechs-wrapper {
  margin-bottom: 12px;
  width: 100%; 
}
.speechs-bubble h3 {
  color: #6C7C59;
}
.speechs-bubble {
  width: 100%;
  height: 65px;
  font-size: 18px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  background-color: white;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.speecher-bubble {
  width: 100%;
  height: 65px;
  font-size: 18px;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 96%, 50% 75%, 0 75%);
  background-color: #3A3C39;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
}
img {
  max-width: 100%;
  margin-top: 10px;
}
</style>