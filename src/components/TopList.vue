<template>
      <div >
        <select id="sevalue" >
            <option v-for="item in sel" :key="item.item" :value="item.item">{{item.item}}</option>
            <!-- <option value="Js">Js</option>
            <option value="Html">Html</option>
            <option value="Vue">Vue</option>
            <option value="Request">Request</option> -->
        </select>
        <input type="text" v-model="itemvalue" >

        <!-- 选择是否添加或删除Aside的item内容 -->
        <button style="margin-left:5px" @click="addchoice = true">添加</button>
        <button style="margin-left:8px" @click="delchoice = true">删除</button>
        <div v-if="addchoice">是否添加
            <button @click="AddAsideitem">确定</button>
            <button @click="addchoice = false">取消</button>
        </div>
        <div v-if="delchoice">是否删除
            <button @click="del">确定</button>
            <button @click="delchoice = false">取消</button>
        </div>
    </div>
</template>

<script>
import {addItemto,DelAsideitem} from '../js/dbget'
export default {
    name:'TopList',
    data(){
        return{
            sel:[],
            itemvalue:"",
            addchoice:false,
            delchoice:false
        }
    },
    mounted(){
        this.$bus.$on('hlist',(data)=>this.sel=data)
    },
    methods:{
        AddAsideitem(){
            this.addchoice = false;
            let sevalue = document.getElementById('sevalue').value
            addItemto(this.itemvalue,sevalue)
            let yui =[]
            yui.push(this.itemvalue)
            yui.push(sevalue)
            // console.log("yui",yui)
            this.$bus.$emit('Aasideitem',yui)
            this.$router.addRoute('home',{
                    path:`/${this.itemvalue}`,
                    name:`${this.itemvalue}`,
                    component: () => import(/* webpackChunkName: "about" */ '../views/content/Mycontent.vue')
            })
            this.itemvalue = ""
        },
        del(){
            this.delchoice = false;
            this.choice = "删除"
            let sevalue = document.getElementById('sevalue').value
            console.log(this.itemvalue)
            DelAsideitem(this.itemvalue,sevalue)

            let yui =[]
            yui.push(this.itemvalue)
            yui.push(sevalue)
            this.$bus.$emit('Dasideitem',(yui))
            this.itemvalue = ""
        }
    }
}
</script>

<style>

</style>