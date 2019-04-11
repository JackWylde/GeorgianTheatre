<template>
    <div id="parent">

        <div id="wrapper">
            <div class="speech-wrapper">
                <div class="speech-bubble">
                    <h3>Mailing List</h3>
                </div>
            </div>
        </div>
        <form id="mailing-list">
            <div class="mailinglist-wrapper">
                <h2>Sign up for exclusive perks</h2>

                <label>Email:</label>
                <input type="text" id="email">
                <br>
                <label>First Name:</label>
                <input type="text" id="fname">
                <br>
                <label>Last Name:</label>
                <input type="text" id="lname">
                <br>

                <button @click.prevent="store">Sign Up</button>
                <p v-if="success">You have successfully signed up!</p>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                fname: "",
                lname: "",
                success: false
            }
        },
        methods: {
            store: function () {

                const form = document.querySelector('#mailing-list');

                this.email = form.email.value;
                this.fname = form.fname.value;
                this.lname = form.lname.value;

                db.collection('mailList').add({
                    email: this.email,
                    fname: this.fname,
                    lname: this.lname
                });
                this.success = true;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

    p {
        color: white;
        padding-top: 10px;
    }

    .mailinglist-wrapper {
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        height: 510px;
        background: #3A3C39;
        align-items: center;
        width: 85%;
    }

    .mailinglist-wrapper input {
        height: 15px;
        padding: 20px 20px;
        width: 80%;
    }

    .mailinglist-wrapper label {
        font-size: 20px;
        color: white;
    }

    .mailinglist-wrapper h2 {
        font-size: 1.5rem;
        color: white;
        font-weight: lighter;
        padding: 10px 0;
    }

    .mailinglist-wrapper button {
        width: 6rem;
        height: 2rem;
        border-radius: 1rem;
        margin: 0.7rem;
        background-color: #6C7C59;
        border: #6C7C59 !important;
        color: white;
    }
</style>