<template>
   <div>
    <div id = "header-wrap">
        <div id = "menu-icon" v-on:click = "burgerToggle = !burgerToggle"><img id="burger" src="../assets/menu-icon.png"></div>
        <div id="logo-div" v-if = "!burgerToggle"><img id="gt-logo" src="../assets/gt-logo.svg"></div>
    </div>
    <ul v-if = "burgerToggle">
        <router-link to="/" id = "no-underline"><li><img class="icons" src="../assets/home-icon.png">Home</li></router-link>
        <router-link to="/" id = "no-underline"><li><img class="icons" src="../assets/search-icon.png">Discover</li></router-link>
        <router-link to="/" id = "no-underline"><li><img class="icons" src="../assets/ticket-icon.png">Ticket Web</li></router-link>
        <router-link to="/" id = "no-underline"><li><img class="icons" src="../assets/photo-icon.png">Gallery</li></router-link>
        <router-link to="/refreshments" id = "no-underline"><li><img class="icons" src="../assets/drink-icon.png">Refreshments</li></router-link>
        <router-link to="/" id = "no-underline"><li><img class="icons" src="../assets/heart-icon.png">Preferences</li></router-link>
        <router-link to="/mailing-list" id = "no-underline"><li><img class="icons" src="../assets/email-icon.png">Mailing List</li></router-link>
    </ul>
    </div>
</template>

<script>
export default {
  name: 'app',

  data() {
    return {
        burgerToggle: false
        }
    },

  methods: {
        },
    }
</script>

<style scoped>

    ul {
        padding: 0px;
        margin: 0px;
        margin-top: 50px;
        transition: 1s all;
    }
    li {
        list-style: none;
        width: 100%;
        text-align: left;
        color: white;
        margin-top: 2px;
        letter-spacing: 2px;
        padding: 5px 0px 5px 15px;
        border-bottom: 1px solid #8d8f8d;
        font-size: 18px;
    }
    div {
      background: #3A3C39;
    }
    #logo-div {
      width: 100%;
      text-align: center;
    }
    #burger {
      width: 40px;
    }
    #gt-logo {
      width: 90px;
      margin-top: -70px;
      transform: translateY(30%);
    }
    #no-underline{
        text-decoration: none;
    }
    #header-wrap {
        width: 100%;
        height: 75px;
        background-color: #3A3C39;
    }
    #menu-icon{
        width: 75px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
        padding-top: 20px;
    }
    .icons {
      width: 40px;
      padding-right: 10px;
    }
    .white {
        color: white;
    }
</style>
