import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import { VueReCaptcha } from 'vue-recaptcha-v3';
import store from '@/store';
import router from '@/router';

const SITE_KEY='6LdIwFgfAAAAAGf8eiiK6Jcm_3Z2w15eXrKJA34G';

Vue.use(VueRouter)

Vue.use(VueReCaptcha, { 
  siteKey: SITE_KEY,
  loaderOptions: {
    useRecaptchaNet: true
      }
   })

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
