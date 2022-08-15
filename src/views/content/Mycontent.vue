<template>
    <div id="titleid" style="height:auto">
        <div style="height:auto;margin-bottom: 50px;">
            <textarea id="title" style=" width: 750px; height: 50px;font-size: 30px;resize: vertical; text-align: center;"  placeholder="问题" v-model="title" ></textarea>
            <textarea id="titlect" style=" width: 750px; height: 200px;font-size: 20px;resize: vertical;" contenteditable="true" placeholder="内容" v-model="titlect"></textarea>
            <!-- <textarea style=" width: 600px; height: 150px;"></textarea> -->
            <!-- <script src="./js/addtitle.js"></script> -->
            <button class="titlebt" @click="sub = true">提交</button>
            <div v-if="sub">
                是否提交
                <button @click="sumbs">确定</button>
                <button @click="sub = false">取消</button>
            </div>
                <!-- V-for倒序输出 .slice().reverse() -->
                <div  v-for="item in Asidecontent" :key="item.id">
                    <textarea class="yuiid" :id="item.text" :style="{width:750+'px',height:item.titlecth1+'px',fontSize:30+'px',resize:'vertical',textAlign:'center'}" v-model="item.text"></textarea>
                    <textarea class="yuiidct" :id="item.id" :style="{width:750+'px',height:item.titlecth2+'px',fontSize:20+'px',resize:'vertical'}" contenteditable="true" v-model="item.content"></textarea>
                    <!-- getcontent(item.id,item.text,item.content,item.titlecth1,item.titlecth2) -->
                    <!-- <textarea style=" width: 600px; height: 150px;"></textarea> -->
                    <!-- <script src="./js/addtitle.js"></script> -->
                    <button class="titlebt" @click="updatecontidd(item.text,item.id),upd = true" >修改</button>
                    <button class="titlebt" @click="delidd(item.id),del = true" >删除</button>
                </div>

            <div  class="delcon" v-if="del">
                <h4 style="margin-left:15%">是否删除</h4>
                <button @click="dell(delid),del = false">确定</button>
                <button @click="del = false">取消</button>
            </div>
            <div  class="delcon" v-if="upd">
                <h4 style="margin-left:15%">是否修改</h4>
                <button @click="updatecont(),upd = false">确定</button>
                <button @click="upd = false">取消</button>
            </div>
            <div class="ConetntMenu">
                <div v-for="item in Asidecontent" :key="item.id" @click="ScrCont((item.id))">
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {writetext,delcontent,Updatecontent} from '../../utils/dbget'
import { nanoid } from 'nanoid'
export default {
    name:'MyContent',
    data(){
        return{
            Asidecontent:[],
            sub:false,
            del:false,
            upd:false,
            title:"",
            titlect:"",
            delid:"",
            uptext:"",
            upcont:""
            
        }
    },
    methods:{
        sumbs(){
            this.sub = false;
            // let title = document.getElementById('title').value;
            // let titlect = document.getElementById('titlect').value;
            let titlecth1 = document.getElementById('title').scrollHeight;
            let titlecth2 = document.getElementById('titlect').scrollHeight;
            let nano = nanoid()
            if(this.Asidecontent.length !== 0){
                this.Asidecontent.push({id:nano,text:this.title,content:this.titlect,titlecth1:titlecth1,titlecth2:titlecth2})
                let locationpath = this.$route.name
                writetext(nano,this.title,this.titlect,titlecth1,titlecth2,locationpath)
                this.title = "";
                this.titlect = "";
            }else{
                this.Asidecontent = [{id:nano,text:this.title,content:this.titlect,titlecth1:titlecth1,titlecth2:titlecth2}]
                let locationpath = this.$route.name
                writetext(nano,this.title,this.titlect,titlecth1,titlecth2,locationpath)
                this.title = "";
                this.titlect = "";
            }
            document.getElementById('title').style.height = '50px' ;
            document.getElementById('titlect').style.height = '200px';
            // this.Asidecontent.push({id:nano,text:title,content:titlect,titlecth1:titlecth1,titlecth2:titlecth2})
            // this.Asidecontent.push({id:"",text:title,content:titlect,titletch1:titlecth1,titletch:titlecth2})
            // console.log(this.Asidecontent)
            // let locationpath = this.$route.name
            // writetext(nano,title,titlect,titlecth1,titlecth2,locationpath)
        },
        delidd(dataid){
            this.delid = dataid
        },
        dell(data){
            //发送给数据库删除
            delcontent(data)

            //用filter过滤 对应id过滤
            this.Asidecontent= this.Asidecontent.filter((item)=>{
                console.log(item.id)
                return item.id !== `${data}`
            })
            console.log(this.Asidecontent)
            this.delid = ""
        },
        updatecontidd(text,id){
            this.uptext = text
            this.upcont = id
        },
        updatecont(){
            let nano = this.upcont
            let text = document.getElementById(this.uptext).value
            let upcont = document.getElementById(this.upcont).value
            let titlecth1 = document.getElementById(this.uptext).scrollHeight;
            let titlecth2 = document.getElementById(this.upcont).scrollHeight;
            let locationpath = this.$route.name
            Updatecontent(nano,text,upcont,titlecth1,titlecth2,locationpath)
            this.uptext = ""
            this.upcont = ""
        },
        ScrCont(tag){
            document.getElementById(tag).scrollIntoView({ behavior:"smooth",block:'center'})
            }
    },
    mounted(){
        this.$bus.$on('Asidecontent',(Asidecontent)=>{
            this.Asidecontent = Asidecontent
            console.log("Asidecontent",this.Asidecontent)
        })
    }
}
</script>

<style scoped>
.delcon{
    background-color: #39c5bb;
    display: flex;
    align-items:center;
    height: 100px;
    width: 200px;
    position: fixed;
    left: 43%;
    top: 300px;
}
.ConetntMenu{
    position: fixed;
    top: 30vh;
    left: 75%;
    text-align: center;
}
.ConetntMenu div{
    height: 30px;
    width: auto;
}
.ConetntMenu div:hover{
    font-size: 20px;
    color: #39c5bb;
}
</style>