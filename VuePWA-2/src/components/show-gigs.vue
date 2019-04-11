<template>
  <div>
    <div id="bg-container">
      <h2>Come see what you love</h2>
      <div v-for="item in firebaseReturn" class="gig_container">

        <div class="gig_image">
          <img :src = "item.imgSrc" class = "gig_image">
           <!-- <img src = "/src/assets/" class = "gig_image">  -->
           <!-- <img :src = "'/static/' + this.id + '.jpg'" class = "gig_image">  -->
        </div>


        <div class = "container px-0">
        <div class = "row">
        <div class="ticket_details">
          <h4>{{item.name}}</h4>
          <h4>{{item.date}}</h4>
        </div>
          <div class="ticket_buttons">
              <button class = "btn-primary gig_button">Buy</button>
          </div>
      </div>
    </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [

        ],
        holdStringResponse: [

        ],
        firebaseReturn: []
      }
    },
    methods: {
      test: function () {
        console.log("Working");
      }
    },
    beforeCreate() {
      //this.selected = sessionStorage.getItem("music_Selection",JSON.stringify()); 
      /*
      this.holdStringResponse = sessionStorage.getItem("music_Selection");
  
      this.selected = JSON.parse(this.holdStringResponse); 
        
      console.log(this.selected); 
      console.log(this.selected.length);
      */
    },
    mounted() {
      console.log("I am mounted");
      //this.selected = sessionStorage.getItem("music_Selection",JSON.stringify());   
      // this.selected.forEach(element => {
      //   console.log(element);
      this.holdStringResponse = sessionStorage.getItem("music_Selection");

      this.selected = JSON.parse(this.holdStringResponse);
      //console.log(this.selected); 
      //console.log(this.selected.length); 
      for (let i = 0; i < this.selected.length; i++) {
        //console.log(this.selected[i]); 
        db.collection(this.selected[i]).get().then((snapshot) => {
          snapshot.docs.forEach(doc => {
            this.firebaseReturn.push(doc.data());
            //  console.log(this.firebaseReturn[i].name); 
            //  console.log(this.firebaseReturn[i].date); 
            //  console.log(this.firebaseReturn[i].ticketsLeft);
          })
          // console.log(this.firebaseReturn); 
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  * {
    margin: 0px;
    box-sizing: border-box;
  }

  div {
    text-align: center;
    margin: 0px;
  }

  #bg-container {
    height: 100vh;
    z-index: -100;
  }

  .particles-js-canvas-el {
    height: 100% !important;
  }

  .gig_container {
    background-color: #3A3C39;
    margin: 0 auto;
    margin-bottom: 1rem;
    margin-top: 1rem;
    width: 90%; 
  }

  .gig_image {
    height: 150px;
    background-color: aliceblue;
  }

  .ticket_details {
    text-align: left; 
    width: 60%; 
  }

  .ticket_details h3,
  .ticket_details h4 {
    padding: 1rem;
    color: white;
    letter-spacing: 2px;
    font-weight: lighter;
    background-color: #3A3C39;
  }

  .ticket_buttons { 

    display: flex; 
    width:40%;  
    flex-direction: row-reverse;
  }

  .gig_button {
    width: 4rem;
    height: 2rem; 
    border-radius: 1rem; 
    margin: 0.7rem; 
    background-color: #6C7C59; 
    border: #6C7C59 !important; 
  }

  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #6C7C59 !important;
    border: #6C7C59 !important;
  }

  button:focus {
    outline: 0px !important; 
  }

  .gig_image {
    width: 100%; 
  }

</style>