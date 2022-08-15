<template>
  <div id="app">
    <!-- <img src="../src/img/bg_key (1).webp" style="position: absolute;width: 100%; z-index: 0;"> -->
    <!-- <router-view/> -->
    <!-- <top-list style="position:fixed"></top-list> -->
    <!-- <aside-menu></aside-menu> -->
    <router-view></router-view>
     <div class="sidebar_wo" id="leimu"> <img src="./img/a.png" alt="雷姆" :onmouseover="src='./img/b.png'" :onmouseout="src='./img/a.png'" @click="gotop"> </div>
     <div class="sidebar_wo" id="lamu"> <img src="./img/c.png" alt="拉姆" :onmouseover="src='./img/d.png'" :onmouseout="src='./img/c.png'" @click="gobot"> </div>
  </div>
</template>

<script>
// import AsideMenu from './components/AsideMenu.vue'
// import TopList from './components/TopList.vue'
// import axios from "axios";
// import {GetAside} from "./js/dbget"
import addtitle from "./js/addtitle"

  
export default {
  name: 'HomeView',

  components:{
    // TopList,
    // AsideMenu,
    
},
data(){
  return{
    
  }
},
methods:{
  gotop(){
        window.scrollTo(0,0);
    },
	gobot(){
  		 window.scrollTo(0,50000);
	},
}
  
}  
</script>

<style>
*{
    padding: 0;
    margin: 0;
    
}
body{
    background-image: url(./img/yui.webp);
}
a{
    text-decoration:none;color:#000;
}
#leimu{left:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(-7px,7px);transform:translate(-7px,7px);-ms-transform:translate(-7px,7px)}
#lamu{right:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(7px,7px);transform:translate(7px,7px);-ms-transform:translate(7px,7px)}
#leimu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}
#lamu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}
.sidebar_wo{position:fixed;bottom:0;z-index:1000;line-height:0;cursor:pointer}
</style>
