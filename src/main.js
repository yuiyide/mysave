import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import VueCookies from 'vue-cookies'

Vue.use(VueCookies)
Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach((to,from,next)=>{
  
  // store.commit('getToken')
  // const token = store.state.user.token
  // console.log(token)
  // console.log(to.name)
  // console.log($cookies.get("token"))
  if(to.name === 'register'){
    next()
  }else if($cookies.get("token") === null && to.name !== 'login' ){
    next({name:'login'})
  }else{
    next()
  }
})


new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')
