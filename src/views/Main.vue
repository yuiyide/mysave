<template>
    <div>
        <top-list style="position:fixed,display:flex"></top-list>
        <aside-menu></aside-menu>
    </div>
</template>

<script>
import AsideMenu from './../components/AsideMenu.vue'
import TopList from './../components/TopList.vue'
export default {
    components:{
        AsideMenu,
        TopList
    }
}
</script>

<style>
*{
    padding: 0;
    margin: 0;
    
}
a{
    text-decoration:none;color:#000;
}
ul li{
    list-style: none;
}
body{
    background-image: url(../img/yui.webp);
    
}
body{
   overflow-x: hidden;
}
.select{
    position: relative;
    display: flex;
    top: 100px;
    left: 10%;
}
#ulba{
    height: 1000px;
    position: fixed;
    bottom: -13vh;
}

.div1{
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    opacity: 0.7;
    margin-top: 50px;
    width: 150px;
    height: 40px;
}
#ulba ul {
    position: absolute;
    width: 150px;
    top: 5px;
   
}
#ulba ul li{
    
    color: rgb(133, 122, 231);
    font-weight: bold;
    margin-top: 50px;
    margin-left: 0;
    width: 150px;
    height: 40px;
    text-align: center;
    font-size: 20px;
}
.list nav{
    position: absolute;
    top: 45px;
    left: 150px;
    display: none;
}
.item{
    background-color: rgb(227, 240, 210);
    border-radius: 20px;
    font-weight: bold;
    width: 150px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
    /* position: absolute;
    top: -680px;
    left: 150px;
    display: none;
    width: 100px;
    height: auto; */
}
.item1{
    margin-top: 0px;
}
.item a{
    position: relative;
    color: rgb(133, 122, 231);
    font-weight: bold;
    width: 150px;
    height: 40px;
    text-align: center;
    font-size: 20px;
    top: 5px;
    
}

.list:hover nav {
    display: block !important; 
}
.content{
    /* display: flex; */
    position: relative;
    margin-left: 18%;
    width: 602px;
    /* border: red 2px solid; */
    overflow:none;
}
#titleid{
    height: 100px;
}

#title , #titlect{
    position: relative;
    opacity: 0.6;
    caret-color:#FFA800;
}
.titlebt{
    position: relative;
    left: 723px;
    z-index: 9999;
}
.content div{
    position: relative;
}
.yuiid{
    width: 750px;
    display: block;
    opacity: 0.8;
    font-size: 30px;
    color: rgb(204, 93, 231);
    font-weight: bolder;
    resize: none;
    
}
.yuiidct{
    width: 750px;
    display: block;
    opacity: 0.8;
    font-size: 20px;
    color: rgb(108, 58, 189);
    font-weight: bolder;
    
    resize: none;
}
#addiv{
    width: 750px;
    margin-top: 25px;
    border: red 2px solid;
}
#leimu{left:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(-7px,7px);transform:translate(-7px,7px);-ms-transform:translate(-7px,7px)}
#lamu{right:0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:translate(7px,7px);transform:translate(7px,7px);-ms-transform:translate(7px,7px)}
#leimu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}
#lamu:hover{-webkit-transform:translate(0,0);transform:translate(0,0);-ms-transform:translate(0,0)}
.sidebar_wo{position:fixed;bottom:0;z-index:1000;line-height:0;cursor:pointer}
</style>