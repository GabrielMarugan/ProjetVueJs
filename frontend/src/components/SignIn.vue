<template>
  <div class="flex mt-4">
<form v-on:submit.prevent="recaptcha()">

          <input
            type="text"
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="email"
            autocomplete
            placeholder="Email"
            v-model="email"
            required
          />

          <input
            type="password"
            autocomplete
            class="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Mot de passe"
            v-model="password"
            required
          />


          <button type="submit">
           Se connecter
          </button>
        </form>
        <a> Mot de passe perdu ?</a>
        <router-link to="/signup">
        Créer un compte
      </router-link>
        <div v-if=this.error>
            <p> {{this.message}}</p>
        </div>
  </div>

</template>

<script>import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
      error: false,
      message: ''
      
    }
  },
  methods: {
    async recaptcha(){
      await this.$recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login');
      const form = { email: this.email,
                      password: this.password,
                      }
                      ;
      axios.post("http://localhost:3000/api/v1/user/signin", {
         form,token
      }).then( r => {console.log(r);
            localStorage.setItem('MyToken',r.data.token);
            localStorage.setItem('MyId',r.data._id);
            //window.location.href = 'monmur';
            this.$router.push("/monmur");


      })
        .catch((e) => {console.error(e);
            this.error = true;
            if (e.response.status === 400) this.message = "utilisateur inconnu";
                                    
            if (e.response.status === 403) this.message = "mot de passe incorrecte";
                                                     
        });
      //return this.recaptcha();
    }
  }
}
</script>
