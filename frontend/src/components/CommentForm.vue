<template>
    <div>
        <form v-on:submit.prevent="recaptcha()">
            <textarea type="text" class="newComment" name="content" autocomplete v-model="content" />

            <button type="submit">
                Envoyer

            </button>
            <div class="arrow">
                >
            </div>

        </form>
    </div>

</template>

<script>
import { mapActions } from 'vuex';
import  axios from 'axios';

export default {
    name: "CommentForm",
    data() {
        return {

            content: ''


        }
    },
    props: {

    },
    methods: {
        ...mapActions([]),


        async recaptcha() {
            await this.$recaptchaLoaded();

            // Execute reCAPTCHA with action "login".
            const token = await this.$recaptcha('login');
            const form = {
                content: this.content,
                token: token
            };

            axios.post("http://localhost:3000/api/v1/comment/new", {form})
                .then(r => {
                    console.log(r);
                    console.log('envoie réussi');
                })
                .catch((e) => {
                    console.error(e);
                });
            //return this.recaptcha();
        }
    }
}
</script>

<style scoped>
.newComment {
    position: relative;
    height: 134px;
    width: 583px;
    left: 0px;
    top: 0px;
    border-radius: 30px;

    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #F8F8F8;
    border-radius: 30px;
}

.envoye {
    height: 17px;
    width: 53px;
    left: 595px;
    top: 1447px;
    border-radius: nullpx;

    position: relative;
    width: 53px;
    height: 17px;
    left: 595px;
    top: 1447px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #0085FF;
}

.arrow {
    height: 11px;
    width: 11px;
    left: 0.5px;
    top: 0.5px;
    border-radius: 0px;


    position: relative;
    left: 4.17%;
    right: 4.17%;
    top: 4.17%;
    bottom: 4.17%;

    background: #0085FF;
}
</style>