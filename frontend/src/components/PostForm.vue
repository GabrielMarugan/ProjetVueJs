<template>
    <div>
        <form v-on:submit.prevent="recaptcha()">
            <input type="text"  name="title" autocomplete v-model="title" required />
            <textarea type="text" size="255" name="content" autocomplete v-model="content" required />

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
    name: "PostForm",
    data() {
        return {
            title :'',
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
                title: this.title,
                content: this.content,
                createdAt: Date.now()
                
            };

            axios.post("http://localhost:3000/api/v1/post/new", {form, token})
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