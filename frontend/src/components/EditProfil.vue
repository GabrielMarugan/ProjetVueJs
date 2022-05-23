<template>
    <div >
        <h1>Mon Profil</h1>
        <div v-if=!isEdited>
            <div>
                Email
            </div>
            <div>
                Nom
            </div>
            <div>
                Prenom
            </div>
            <div>
                photo
            </div>
            <button @click="isEdited=!isEdited">Editer</button>
        </div>
        <div v-else>
            <form v-on:submit.prevent="verifForm()">
                <input type="text" 
                    class="block border border-grey-light w-full p-3 rounded mb-4" 
                    name="email"
                    autocomplete 
                    placeholder="Email" 
                    v-model="email" 
                    required 
                />

                <input type="text" 
                    autocomplete 
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="nom" 
                    placeholder="nom" 
                    v-model="nom" 
                />

                <input type="text" 
                    autocomplete 
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="prenom" 
                    placeholder="prenom" 
                    v-model="prenom" 
                />

                <input type="text" 
                    autocomplete 
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="photo" 
                    placeholder="photo" 
                    v-model="photo" 
                />

                <input type="password" 
                    autocomplete 
                    name="password" 
                    placeholder="Mot de passe"
                    v-model="password" 

                />


                <input type="password" 
                    autocomplete
                    name="ckPassword" 
                    placeholder="Confirmer le mot de passe"
                    v-model="ckPassword" 
  
                />



                <button type="submit">
                    Editer son profil
                </button>
            </form>
            <p v-if="error">{{message}}</p>
        </div>


    </div>
</template>

<script>
import { mapActions } from 'vuex';
//import  axios from 'axios';

export default {
    name: "EditProfil",
    data() {
        return {
            isEdited: false,
            email:'',
            nom: '',
            prenom: '',
            photo: '',
            password:'',
            ckPassword:'',
            error: false,
            message: ''


        }
    },
    props: {

    },
    methods: {
        ...mapActions([]),

        verifForm(){
            this.error = false;
            //si le champ reste vide, alors on considère que l'utilisateur ne souhaite pas modifier son mdp
            if (this.password!=''){
                if (this.password.length < 6 ) {
                    this.message += "le mot de passe doit faire au moins 6 caractères";
                    this.error = true;
                }
                if (this.password !== this.ckPassword) {
                    this.message+= " les mots de passe sont différents";
                    this.error = true;
                }
            }
            //aucune erreur detectée
            if (!this.error){
                this.updateProfil();
                this.isEdited = false;
            }

        },

        updateProfil(){
            console.log(localStorage.getItem('MyId'));
            let form = {
                _id: localStorage.getItem('MyId'),
                email: this.email,
                firstname: this.nom,
                lastname: this.prenom
            }

            if (this.password!==''){
                //le password a été changé
                form = { ...form, 
                    password: this.password
                }
            }
            this.$store.dispatch("updateUser", form);     
            this.isEdited = false;
            this.password='';
            this.ckPassword='';   

        },




    }
}
</script>