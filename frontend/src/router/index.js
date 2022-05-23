import VueRouter from "vue-router";
//import CommentCard from "../components/CommentCard";
import CommentForm from "../components/CommentForm";
//import NavBar from "../components/NavBar";
// import PostCard from "../components/PostCard";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import PostDetail from "../components/PostDetail";
//import PostForm from "../components/PostForm";
import EditProfil from "../components/EditProfil";


const routes = [
 {path:"/",component: SignIn},
 //{path:"/",component: NavBar,CommentCard},
 {path:"/new",component: CommentForm},
 {path:"/monmur",component: PostDetail},
 {path:"/signup",component: SignUp},
 {path:"/monprofil",component: EditProfil}
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
