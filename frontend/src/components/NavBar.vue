<template>
<div class="nav">
    <div class="logo">
        <img src="../assets/logo.svg"/>
    </div>
    <div class="photo">
        <img src="../assets/profil.png" />
    </div>
    <div class="name">
        PSEUDO
    </div>
    <a class="lienMenu"> Mon Mur </a>
    <a class="lienMenu"> Me messages </a>
    <a class="lienMenu"> Mon compte </a>

</div>


</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {

        }
    },
    props: {

    },
    methods: {
        ...mapActions([])
    }
}
</script>

<style scoped>

.nav{
position: absolute;
width: 360px;
height: 1116px;
left: 0px;
top: 0px;

background-image: url("../assets/Rectangle3.svg");

}

.logo{
    height: 41px;
width: 103px;
left: -1px;
top: 0px;
border-radius: nullpx;

    
position: absolute;
left: -0.92%;
right: 6.42%;
top: 0%;
bottom: 0%;

font-family: 'Timmana';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 39px;
display: flex;
align-items: center;
text-align: center;



color: #B5D6F5;
}

.photo{
    
box-sizing: border-box;

position: absolute;
width: 200px;
height: 200px;
left: 80px;
top: 132px;


border: 5px solid #FFFFFF;
}

.name{
    
position: absolute;
width: 360px;
height: 29px;
left: 0px;
top: 390px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

color: #333333;
}

.lienMenu{
    position: absolute;
width: 300px;
height: 29px;
left: 43px;
top: 499px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 29px;
/* identical to box height */

display: flex;
align-items: center;

color: #333333;
}
</style>