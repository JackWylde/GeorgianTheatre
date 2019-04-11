<template>
  <div id = "parent">

          <div id = "wrapper">
            <div class = "speech-wrapper">
            <div class = "speech-bubble">
              <h3>Tell us what you love...</h3>
            </div>
            </div>

            <div id = "selections-container">
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/punk.jpg">Punk</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/rock.jpg">Rock</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/metal.jpg">Metal</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/rnb.jpg">RNB</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/pop.jpg">Pop</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/rap.jpg">Rap</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/dance.jpg">Dance</div>
              <div class = "selection-item" v-on:click="selectedItem"><img src="../assets/retro.jpg">Retro</div>
            </div>
          </div>

          <div class = "button-wrap">
            <router-link to="/show-gigs"><button id = "get-listings" v-on:click="getValue"> {{name}} </button></router-link>
          </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: "Show Upcoming Gigs",
      selectedItems: []
    }
  },
  methods:{
    getValue() {
      //console.log(this.selectedItems);
      //Put items into session store here.
      sessionStorage.setItem("music_Selection", JSON.stringify(this.selectedItems));

    },
    selectedItem(event){

        console.log(event.target.textContent); 

        let item = event.target.textContent;
        let arr = this.selectedItems;

        if (arr.includes(item)){
            return
        }

        if (event.target.textContent === ""){ 
          //console.log("I am an image"); 
          //console.log(event.target.textContent); 
          //debugger; 
          let parentEle = event.target.parentElement; 
          let textValue = parentEle.textContent; 
            if (arr.includes(textValue)){
              //console.log(this.selectedItems); 
              return
            }
          //console.log(textValue); 
          this.selectedItems.push(textValue); 
          parentEle.style.backgroundColor = "#3A3C39"; 
          parentEle.style.color = "white"; 
          //console.log(this.selectedItems); 
        } else {

        this.selectedItems.push(event.target.textContent);
        event.target.style.backgroundColor = "#3A3C39";
        event.target.style.color = "white";
        //console.log(this.selectedItems); 
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
#selections-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  text-align: center;
}
#selections-container div {
  min-width: 140px;
  min-height: 130px;
  text-align: center;
}
#get-listings{
  text-align: center;
  width: 240px;
  height: 40px;
  margin: 0 auto;
  position: relative;
  background-color: #6C7C59;
  color: white;
  border: none;
  font-size: 18px;
}
.selection-item {
  background-color: #F8F8F8;
  -webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 88%, 50% 75%, 0 75%);
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 65% 75%, 66% 88%, 50% 75%, 0 75%);
}
img {
  width: 120px;
  height: auto;
  display: block;
  margin-left: 10px;
  margin-top: 5px;
}
.button-wrap {
 text-align: center;
    margin: 15px;
}
.i-am-active {
  background-color: #3A3C39 !important;
}
</style>
