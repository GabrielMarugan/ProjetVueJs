<template>
    <div class="postDetail">
        <div class="postDate">
            4 Mai
        </div>
        <button class="btnCommentaire">
            Commenter
        </button>
        <button
          @click="editingPost()">Editer
        </button>

            
            
            <template v-if=this.isEdited>
                    <input type="text"  name="title" autocomplete v-model="title" required value=this.title/>

                    
            </template>  
        
            <template v-else>
                <div class="postTitre">Le Titre</div>
                
            </template>
        
        <div class="postAuteur">
            Auteur
        </div>
        <div class="postLike">
            NbLike
        </div>
        <div class="line">
        </div>
        <template v-if=!this.isEdited>
        <div class="postPhoto">
            PHOTO
        </div>
        <div class="postContent">
            Content
        </div>
        </template>
        <template v-else>
                <textarea type="text"  name="content" autocomplete v-model="content" required value="this.content" />
        </template>
        <div class="line"></div>
        <div class="postComments">
            <comment-card :comment="comment" v-for="comment in $store.getters.todosOfCurrentPage" :key="comment._id" />
        </div>



    </div>
</template>

<script>
import { mapActions } from 'vuex';
import CommentCard from './CommentCard';

export default {
    components: {
        CommentCard

    },
    data() {
        return {
            isEdited: false,
            title: "coucoo",
            content: undefined

        }
    },
    props: {

    },
    methods: {
        ...mapActions([]),

        editingPost(){
            this.isEdited = !this.isEdited;

        }
    }
}
</script>

<style scoped>
.postPhoto{

position: relative;
width: 583px;
height: 266px;
left: 75px;
top: 232px;
}

.btnCommentaire{
    height: 34px;
width: 149px;
border-radius: 30px;

display:inline-block;
    
position: relative;


background: #0085FF;
border-radius: 30px;

left: 5%;
right: 8.18%;
top: 23.18%;
bottom: 20.94%;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;

}
.postDate{
position: relative;

height: 34px;
width: 129px;
left: 19.38%;
right: 19.38%;
top: 29.41%;
bottom: 29.41%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100.52%;
/* identical to box height, or 14px */

display: flex;
align-items: center;

color: #FFFFFF;

background: #444444;
border-radius: 30px;
}

.postLike{
position: absolute;
width: 49px;
height: 14px;
left: 79px;
top: 164px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100.52%;
/* identical to box height, or 14px */

display: flex;
align-items: center;

color: #545454;

}

.postContentDate{
  position: relative;
left: 19.38%;
right: 19.38%;
top: 29.41%;
bottom: 29.41%;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100.52%;
/* identical to box height, or 14px */

display: flex;
align-items: center;

color: #FFFFFF;
}

.postAuteur{
    position: relative;
width: 122px;
height: 14px;
left: 79px;
top: 138px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100.52%;
/* identical to box height, or 14px */

display: flex;
align-items: center;

color: #0085FF;
}

.postTitre{
    position: relative;
width: 380px;
height: 20px;
left: 79px;
top: 110px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 100.52%;
/* or 20px */

display: flex;
align-items: center;

color: #000000;
}

.line{
    
position: relative;
width: 583px;
height: 0px;
left: 79px;
top: 832px;

border: 1px solid #DDDDDD;

}
.postContent{
    
position: relative;
width: 583px;
height: 291px;
left: 79px;
top: 541px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 100.52%;
/* or 14px */


color: #444444;
}

</style>