<template>
  <div id="registerhtml">
      <div class="registerbox">
          <div class="content">
              <a class="topimg"></a>
              <div class="solid">
                <div>
                用户名：<input type="text" v-model="username" >
                </div>
                <div>
                密&emsp;码：<input type="password" v-model="pass">
                </div>
                <div>
                邀请码：<input type="text" v-model="invite">
                </div>
              </div>
          </div>
          <button class="register" @click="register">注&emsp;册</button>
          <button class="login" @click="tologin">登&emsp;录</button>
      </div>
  </div>
</template>

<script>
import {RegisterUser} from '../../js/dbget'
export default {
  data(){
    return{
      username:'',
      pass:'',
      invite:''
    }
  },
  methods:{
    register(){
      console.log("注册")
      RegisterUser(this.username,this.pass,this.invite).then((res)=>{
        console.log(res.data.code)
        if(res.data.code === 2000){
          this.$router.push('/login')
        }else{
          alert("注册失败哈哈")
        }
      })
    },
    tologin(){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
#registerhtml{
  height: 100vh;
  width: 100vw;
  display: flex;
}
.registerbox{
  position: relative;
  display: flex;
  margin: auto;
  height: 320px;
  width: 450px;
  background-color:rgba(105, 206, 236, 0.6);
  border-radius: 5%;
}
.content{
  margin: auto;
}
.solid{
  border-radius: 10px;
  padding: 0 5px 10px 5px;
  border: solid #39c5bb 2px;
}
.content div div{
  margin-top: 10px;
}
.topimg{
  position: absolute;
  height: 90px;
  width: 450px;
  background-image: url('../../img/topimg.jpg');
  top: 0;
  left: 0;
  opacity:0.9; 
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
}
.register{
  border-style: none;
  border-radius: 10px;
  position: absolute;
  text-align: center;
  width: 100px;
  height: 25px;
  bottom: 20%;
  left: 106px;
  background-color: #39c5bb;
}
button:hover{
  background-color: #20aaa1;
}
.login{
  border-style: none;
  border-radius: 10px;
  position: absolute;
  text-align: center;
  width: 100px;
  height: 25px;
  bottom: 20%;
  left: 246px;
  background-color: #39c5bb;
}
</style>