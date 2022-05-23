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

          
          <input
            type="password"
            autocomplete
            name="ckPassword"
            placeholder="Confirmer le mot de passe"
            v-model="ckPassword"
            required
          />


          <button  v-if="ckPassword===password && password.length >= 6" type="submit" >
            S'enregistrer
          </button>
        <button  v-else disabled type="submit" >
            S'enregistrer
        </button>
        </form>
        <p v-if="password.length < 6"> Le mot de passe doit faire au moins 6 caractères</p>
        <p v-if="ckPassword!==password" color="red"> les mots de passes sont différents</p>
        <p v-if=this.error >{{message}}</p>
        <router-link to="/"> Déjà un compte ?</router-link>
  </div>
</template>

<script>import axios from "axios";

export default {
  name: "SignIn",
  data() {
    return {
      email: '',
      password: '',
      ckPassword:'',
      error: false,
      message: ''
      
    }
  },
  methods: {
    async recaptcha(){
      await this.$recaptchaLoaded()

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha('login');
      console.log(token);
      const form = { email: this.email,
                      password: this.password,
                      createdAt: Date.now
                      }
                      ;
      axios.post("http://localhost:3000/api/v1/user/", {
         form, token
      }).then( r => {
        //enregistrement réussi
        console.log(r);
        localStorage.setItem('MyToken',r.data.token);
        localStorage.setItem('MyId',r.data._id);
        console.log(r.data._id);
        //window.location.href = 'monprofil';
        this.$router.push('/monprofil');

      })
      .catch( (e) => {
          console.error(e);
            this.error = true;
 
                                    
            if (e.response.status === 403) this.message = "email déjà existant";

      })
      //return this.recaptcha();
    }
  }
}
</script>
