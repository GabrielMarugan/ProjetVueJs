<template>
  <div class="bg">
      <div class="rectangle1">

      <router-view></router-view>
  </div>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  },
  created() {
    this.$store.dispatch("initDataComments");
  }
}
</script>

<style scoped>

/* Bg */
.bg{
  background-image:  url("./assets/Bg.svg");
  
position: relative;
width: 2034px;
height: 1219.5px;

}

/* Vector 2 */
.vector2{
position: absolute;
left: 53.17%;
right: 0%;
top: 48.26%;
bottom: 1.39%;

background: rgba(181, 214, 245, 0.19);
}

 /* Vector 3 */
.vector3{
 position: absolute;
left: 0%;
right: 74.41%;
top: 0%;
bottom: 0%;

background: #E2E9EF;
}

/* Rectangle 1 */
.rectangle1{
position: absolute;
left: 1.35%;
right: 13.69%;
top: 4.88%;
bottom: 3.53%;

}
</style>