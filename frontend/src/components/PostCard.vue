<template>
    <div class="post">
        <img class="photo" src="../assets/profil.png"/>
        <div >
            <div class="title">Titre</div>
            <div class="content"> Contenu</div>
            <div class="bulle"></div>
            <div class="comments">comments</div>
            <div class="likes">3</div>
            <div class="toe"></div>
        </div>


    </div>
</template>

<style scoped>
.post{
height: 125px;
width: 488px;
left: 0px;
top: 0px;
border-radius: 30px;
    
background: #FFFFFF;
border-radius: 30px;
}

.title{
    height: 21px;
width: 348px;
left: 113px;
top: 18px;
border-radius: nullpx;

    position: relative;
    display: inline;
left: 23.16%;
right: 5.53%;
top: 14.4%;
bottom: 68.8%;

font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 100.52%;
/* or 16px */


color: #000000;
}

.photo{
    position: relative;
height: 60px;
width: 60px;
left: 31px;
top: 32px;
border-radius: 0px;

left: 6.35%;
right: 81.35%;
top: 25.6%;
bottom: 26.4%;

}

.content{
    position: relative;
    display: flex;
left: 23.16%;
right: 5.53%;
top: 32.8%;
bottom: 33.6%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 100.52%;
/* or 16px */


color: #444444;
}

.bulle{
    position: relative;
    
    height: 14.0625px;
width: 14.0625px;
left: 0.46875px;
top: 0.46875px;
border-radius: 0px;

left: 3.12%;
right: 3.12%;
top: 3.12%;
bottom: 3.12%;

background: #444444;
}

.comments{
height: 15px;
width: 144px;
left: 134px;
top: 91px;
border-radius: nullpx;


position: relative;
display: inline-block;
left: 27.46%;
right: 43.03%;
top: 72.8%;
bottom: 15.2%;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 100%;
/* or 12px */

display: flex;
align-items: center;
letter-spacing: -0.065em;

color: #444444;

}

.likes{
height: 15px;
width: 70px;
left: 379px;
top: 91px;
border-radius: nullpx;

    position: relative;
left: 77.66%;
right: 7.99%;
top: 72.8%;
bottom: 15.2%;

font-family: 'Inter';
font-style: normal;
font-weight: 300;
font-size: 12px;
line-height: 100%;
/* or 12px */

display: inline-block;
align-items: center;
text-align: right;
letter-spacing: -0.065em;

color: #444444;
}

.toe{

height: 13.985787391662598px;
width: 11.869657516479492px;
left: 2.125244140625px;
top: 1.007110595703125px;
border-radius: 0px;

position: relative;
display:inline-block;
left: 13.28%;
right: 12.53%;
top: 6.29%;
bottom: 6.29%;

background: #000000;
}
</style>