<template>
    <div class="commentcard">
        <div class="photo">

        </div>
        <div class="heure">

        </div>
        <div class="date">

        </div>
        <div class="comment">
            <div class="title">
                {{$store.state.comments.data[0].title}}
            </div>
            <div class="content">
                {{$store.state.comments.data[0].content}}
            </div>
        </div>


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
/* Comment */
.commentcard {
    position: relative;
    width: 477px;
    height: 106px;
}

/* Ellipse 5 */
.photo {
    position: absolute;
    left: 0%;
    right: 91.61%;
    top: 0%;
    bottom: 62.26%;

    /* background: url(.png); */
}

.heure {

    position: absolute;
    left: 0.21%;
    right: 91.61%;
    top: 44.34%;
    bottom: 46.23%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 100.52%;
    /* identical to box height, or 10px */

    text-align: center;

    color: #444444;
}

.date {
    position: absolute;
    left: 0%;
    right: 91.61%;
    top: 56.6%;
    bottom: 36.79%;

    font-family: 'Inter';
    font-style: italic;
    font-weight: 300;
    font-size: 7px;
    line-height: 100.52%;
    /* identical to box height, or 7px */

    text-align: center;

    color: #444444;
}

.comment {
    position: absolute;
    left: 13%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #DEDEDE;
    border-radius: 30px;
}

.title {
    position: absolute;
    left: 17.82%;
    right: 4.61%;
    top: 14.15%;
    bottom: 74.53%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100.52%;
    /* identical to box height, or 12px */


    color: #444444;
}

.content {
    
    position: absolute;
    left: 17.82%;
    right: 4.61%;
    top: 36.79%;
    bottom: 17.92%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 100.52%;
    /* or 12px */


    color: #444444;
}
</style>