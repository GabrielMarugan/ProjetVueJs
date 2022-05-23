import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";



Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
      posts:[],
      comments:[],
      users:[]

  },
  getters: {

  },
  mutations: {
      initDataPosts(state,posts){
          state.posts = posts;
      },
      initDataComments(state,comments){
          state.comments = comments;
      },
      initDataUsers(state,users){
          state.users = users;
      }

  },
  actions: {
        async initDataComments({commit}){
          try{
              const response = await axios.get("http://localhost:3000/api/v1/comment");
              console.log(response);
              return commit("initDataComments", response ? response : []);
          }catch (e) {
              console.error(e);
          }
          
  },

  addComment({commit},form) {
    axios
      .post("http://localhost:3000/api/v1/comment/new", {
        content: form.content,
      })
      .then(response => {
        console.log(response.data);
        return commit("initDataComments", response ? response : []); //pas le bon truc a faire ici
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.data.message);
        //router.push('/items').catch(() => {});
      })
  },

  addPost({commit},form) {
    axios
      .post("http://localhost:3000/api/v1/post/new", {
        content: form.content,
      })
      .then(response => {
        console.log(response.data);
        return commit("initDataComments", response ? response : []); //pas le bon truc a faire ici
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.data.message);
        //router.push('/items').catch(() => {});
      })
  },

  updateUser({commit},form) {
    axios
      .put("http://localhost:3000/api/v1/user/"+form._id, {
        form: form,
        token: 'balbal'
      })
      .then(response => {
        console.log(response.data);
        return commit("initDataComments", response ? response : []); //pas le bon truc a faire ici
      })
      .catch(error => {
        console.log(error);
        console.log(error.response.data.message);
        //router.push('/items').catch(() => {});
      })
  },


  },

});

export default store;
