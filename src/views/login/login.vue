<template>
    <div id="login-box">
    <h1>登录</h1>
    <div class="from">
        <div class="itemc">
            <!-- <i class="fa fa-github-alt" style="font-size:24px"></i> -->
            <i class="fa fa-user-circle-o"  style="font-size:24px"></i>
            <input type="text" v-model="username" placeholder="Username">
        </div>
        <div class="itemc">
            <!-- <i class="fa fa-search" style="font-size:24px"></i>   pattern="/^[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$/g"-->
            <i class="fa fa-key" style="font-size:24px"></i>
            <input type="password" v-model="password"  placeholder="Password">
        </div>
        <button @click="geilogin">Login</button>
        <button @click="register">register</button>
    </div>
</div>
</template>

<script>
import "../../font-awesome-4.7.0/css/font-awesome.min.css"

import {Loginc} from "../../js/dbget"
export default {
    data(){
        return{
            username:"",
            password:""
        }
    },
    methods:{
        geilogin(){
                Loginc(this.username,this.password).then((res)=>{
                    console.log(res.data.code)
                    if(res.data.code !== 5000){
                        this.$cookies.set("token","25j_7Sl6xDq2Kc3ym0fmrSSk2xV2XkUkX","60m")
                        this.$cookies.set("username",this.username,"60m")
                        this.$router.push("/")  
                    }else{
                        console.log(res.data)
                        console.log("错误")
                        this.$router.push("/login")  
                    }
                })
                
        },
        register(){
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped>
#login-box{
    width:350px;
    height:auto;
    margin:0 auto ;
    margin-top:15%;
    text-align:center;
    background:#eaecee60;
    padding:40px 0px 35px;
}
#login-box h1{
    color:#39c5bb;
}
#login-box .form .itemc{
    margin-top:15px;
}
#login-box .form .itemc i{
    font-size:18px;
    color:#fff;
}
#login-box .form .itemc input{
    width:180px;
    font-size:18px;
    border:0;
    border-bottom:2px solid #fff;
    padding:1px 1px;
    background:#ffffff00;
    color:#fff;
}
#login-box 	button{
    margin-top:20px;
    width:195px;
    height:30px;
    font-size:20px;
    font-weight:700;
    color:#fff;
    background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);
    /* background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%); */
    border:0;
    border-radius:15px;
}

</style>