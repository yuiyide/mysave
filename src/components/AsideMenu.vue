<template>
    <div class="select">
        <ul id="ulba">
            <div id="AsideBox">
                <div v-for="dd in div1" :key="dd.item" class="div1"></div>
                <div class="div1">
                    <i  class="fa fa-plus-square-o fa-2x" aria-hidden="true" style="margin:3% 0" @click="jia"></i>
                    <i  class="fa fa-minus fa-2x" aria-hidden="true" style="float: right;margin-top: 5px;" @click="jian"></i>
                    <div class="wrapper" style="margin-bottom;:10px" v-if="jiajia">
                        <div class="input-data">
                            <input type="text" style="background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);" required v-model="Addasidevalue">
                            <div class="underline"></div>
                            <label>添加</label>
                        </div>
                        <button @click="subAddasidevalue">提交</button>
                        <button @click="jiajia = !jiajia" style="float:right">取消</button>
                    </div>
                    <div class="wrapper"  v-if="jianjian">
                        <div class="input-data">
                            <input type="text" style="background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);" required v-model="Addasidevalue">
                            <div class="underline"></div>
                            <label>删除</label>
                        </div>
                        <button @click="subDelasidevalue">提交</button>
                        <button @click="jianjian = !jianjian" style="float:right">取消</button>
                    </div>
                </div>
                <!-- <div class="div1"></div>
                <div class="div1"></div>
                <div class="div1"></div> -->
            </div>
            <ul id="AsideBoxItem">
                 <li v-for="dd in div1" :key="dd.item" class="list"  @click="lockk(dd.item)" >{{dd.item}}
                     <!-- id=dd.item为了方便删除子表 -->
                    <nav :id="dd.item" @click.stop>
                        <h1  @click="content(ite.item),itemlockk(dd.item)"  class="item" v-for="ite in Asideitem[dd.item]" :key="ite.item" >
                        <a >{{ite.item}}</a>
                        </h1>
                    </nav>
                </li>
                <!-- <li class="list">
                    <input type="text" placeholder="输入添加的内容">
                    <button>提交</button>
                </li> -->
            </ul>
            <!-- <button @click="get">cc</button> -->
        </ul>    
    <router-view class="content" ></router-view>
    </div>
   
</template>

<script>
import Mycontent from '../views/content/Mycontent.vue'
import {GetAside, GetItem,GetContent,Addaside,Delaside,Delasideitems} from "../js/dbget"
import {getcontent} from "../js/addtitle"
import jsCookie from 'js-cookie'
import "../font-awesome-4.7.0/css/font-awesome.min.css"
// import axios from "axios";
export default {
    name:'AsideMenu',
    data(){
        return{
            div1:[],
            Asideitem:[],
            Asidecontent:[],
            jiajia:false,
            jianjian:false,
            Addasidevalue:"",

        }
    },
    methods:{
        content(data){
            this.$router.push({name:data})
            GetContent(data).then(res=>{
                // this.Asidecontent.forEach(item => {
                // getcontent(item.id,item.text,item.content,item.titlecth1,item.titlecth2)
                // });
                if(res !== ""){
                this.$bus.$emit('Asidecontent',res)
                }else{
                this.$bus.$emit('Asidecontent',"")
                    // alert('这里是空的')
                    // this.$router.go(-1)
                }
            })
        },
        itemlockk(asidename){
            if(document.getElementById(asidename).style.display === "block"){
                document.getElementById(asidename).style.display = "none"
            }
        },
        lockk(asidename){
            this.lockif = !this.lockif
            // document.getElementById(asidename).style.display
            if(document.getElementById(asidename).style.display !== "block"){
                document.getElementById(asidename).style.display = "block"
            }else{
                document.getElementById(asidename).style.display = "none"
            }
        },
        subAddasidevalue(){
            this.jiajia = !this.jiajia;

            if(this.div1 === ""){
                this.div1 = [{item:this.Addasidevalue}]
                this.$bus.$emit('hlist',this.div1)
            }else{
                this.div1.push({item:this.Addasidevalue})
            }

            //设置一个空值，让后面加asideitem时识别位置
            this.$set(this.Asideitem,this.Addasidevalue,"")
            console.log("ss",this.Asideitem)
            Addaside(this.Addasidevalue)
            this.$store.commit('addrouter',this.Addasidevalue)
            this.Addasidevalue =""
        },
        subDelasidevalue(){
            this.jianjian = !this.jianjian;
            this.div1 = this.div1.filter((item)=>{
                return item.item !== this.Addasidevalue
            })
            this.$bus.$emit('hlist',this.div1)
            // this.Asideitem[this.Addasidevalue].forEach(element => {
            //     Delasideitems(element.item)
            // });
            Delaside(this.Addasidevalue)
            this.Addasidevalue =""
        },
        jia(){
            if(this.jianjian !== false){
                this.jianjian = false
                this.jiajia = true
            }else{
                this.jiajia = !this.jiajia
            }
        },
        jian(){
            if(this.jiajia !== false){
                this.jiajia = false
                this.jianjian = true
            }else{
                this.jianjian = !this.jianjian
            }
        },
        // get(){
        //  console.log(this.div1)    
        // }
    },
    components:{
        Mycontent,
    },
    mounted() {
        // let AsideBox = document.getElementById('AsideBox')
        // let AsideBoxItem = document.getElementById('AsideBoxItem')
       
        GetAside().then(res=>{
            // console.log(res)
            this.div1 = res
            // console.log(res)
            this.$bus.$emit('hlist',res)
            res.forEach( element => { 
                // console.log("ele"+element)
                const yui = element.item
                GetItem(element).then(res=>{
                    // console.log(yui)
                    
                    //在vue对象里添加对象不能用传统的 this.Asideitem.yui ={....} 因为在Vue v-for中需要getting获取数据所以用this.$set(this.Asideitem,yui,res.data)
                   this.$set(this.Asideitem,yui,res.data)
                     console.log(this.Asideitem)
                   
                    // console.log(this.Asideitem.Css)
                    // this.Asideitem.Css.push({item:yui})
                //    this.$store.commit('additem',`${yui}:${res.data}`)
                    // console.log(this.item['Css'])
                        if(res.data.length !== 0){
                        res.data.forEach(element => {
                            this.$store.commit('addrouter',element)
                        //     this.$router.options.routes[0].children.push({
                        //     path:`${element.item}`,
                        //     name:`${element.item}`,
                        //     component: () => import(/* webpackChunkName: "about" */ '../views/content/Mycontent.vue')
                        // })
                        });
                        }
                        // console.log(this.rous)
                    // this.$store.commit('addrouter', res.data)

                    // this.item.push({elment:res.data})
                })
                // GetItem(element).then(res=>{
                //     onsole.log(res+"res")
                //     this.item.push(res.data)
                // })
                // console.log(this.item)
                // .then( res=>{
                //          // console.log(res+"res")
                //         console.log("yui"+res.data)
                //         this.item.push(res.data)
                //         // this.$store.commit('addrouter', res.data)
                // })
            });
        })


       
        //在Aside添加一个子
        this.$bus.$on('Aasideitem',async (data)=>{
            // console.log(data)
            if(this.Asideitem[`${data[1]}`] === ""){
                this.Asideitem[data[1]] = [{item:data[0]}]
                this.$store.commit('addrouter',data[0])
            }else{
                this.Asideitem[data[1]].push({item:data[0]})
                // console.log(this.Asideitem[data[1]])
                this.$store.commit('addrouter',data[0])
            }
         
            
            // console.log(this.Asideitem[`${data[1]}`].length) 
        })
        // addtitle.GetAside(AsideBox,AsideBoxItem);
        //在Aside删除一个子
        this.$bus.$on('Dasideitem',(data)=>{
            if(data[0] !== ""){
                this.Asideitem[data[1]] = this.Asideitem[data[1]].filter((item)=>{
                console.log(item.item)
                return item.item !== data[0]
                })
            }
            // console.log(this.Asideitem[data[1]] )
        })
    },
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    outline: none;
    /* 这个属性是告诉浏览器：你想要设置的边框和内边距的值是包含在总宽高内的 */
    box-sizing: border-box;
}
body{
    /* 弹性布局 水平垂直居中 */
    display: flex;
    justify-content: center;
    align-items: center;
    /* 设置body最小高度为100%窗口高度 */
    min-height: 100vh;
    /* 渐变背景 */
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
}
.wrapper{
    width: 150px;
    height: 50px;
    background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);
    /* 内边距（上下左右） */
    padding: 5px;
    /* 盒子阴影 */
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    /* 圆角 */
    /* border-radius: 8px; */
}
.wrapper .input-data{
    /* 相对定位 */
    position:relative;
    width: 100%;
    height: 40px;
}
.wrapper .input-data input{
    width: 100%;
    height: 100%;
    border:none;
    font-size: 14px;
    /* border-bottom: 2px solid #c0c0c0; */
}
/* 输入框获得焦点时 */
.wrapper .input-data input:focus ~ label,
/* 输入框的值为合法时 */
.wrapper .input-data input:valid ~ label{
    /* label上移，同时改变字号、字体颜色 */
    transform: translateY(-25px);
    font-size: 15px;
    color: #2c6fdb;
}
.wrapper .input-data label{
    /* 绝对定位 */
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: #808080;
    /* 这个属性可以使点击label穿透到输入框 */
    pointer-events: none;
    /* 现在动画有点生硬，在这里需要给动画加个过渡 */
    transition: all 0.3s ease;
}
.wrapper .input-data .underline{
    position: absolute;
    bottom: 0px;
    height: 2px;
    width: 100%;
    background-color: #2c6fdb;
    /* 沿X轴缩小 */
    transform: scaleX(0);
    /* 这里同样给动画加个过渡 */
    transition: all 0.3s ease;
}
.wrapper .input-data input:focus ~ .underline,
.wrapper .input-data input:valid ~ .underline{
    /* 沿X轴放大 */
    transform: scaleX(1);
}




.wrapper{
	animation: bounce-in-top 1.1s both;
    
}

/* ----------------------------------------------
 * Generated by Animista on 2022-6-26 15:18:11
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation bounce-in-top
 * ----------------------------------------
 */
@keyframes bounce-in-top {
  0% {
    transform: translateY(-500px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateY(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateY(-65px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateY(-28px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateY(-8px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateY(0);
    animation-timing-function: ease-out;
  }
}


</style>