<template>
  <div class="log">
    <div class="user"><i class="fa fa-user-o fa-lg logout" aria-hidden="true"></i></div>
    <div class="out" @click="out"><i class="fa fa-sign-out" aria-hidden="true">退出</i></div>
  </div>
</template>

<script>

export default {
    name:'logout',
    methods:{
      out(){
        console.log(this.$cookies.get('username'))
        if (this.$cookies.get('username') != null) {
          this.$cookies.remove('username' )
        }
        if (this.$cookies.get('token') != null) {
            this.$cookies.remove('token' )
        }
        this.$router.push({name:'login'})
      }
    }
}
</script>

<style scoped>
.log{
  display: flex;
  width: 100px;
  height: 16px;
  flex-direction: column;
  align-items: center;
}
.user{
  height: 21px;
  width: 19px;
  margin: 0 auto;
}
.logout{
  margin: 0 auto;
}
.log:hover :nth-child(2){
  cursor:pointer; 
  display: block;
}
.out{
  height: 16px;
  width: 47px;
  display: none;
}
</style>