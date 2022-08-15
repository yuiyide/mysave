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
  console.log(to.name)
  // store.commit('getToken')
  // const token = store.state.user.token
  // console.log(token)
  // console.log(to.name)
  // console.log($cookies.get("token"))
  if(to.name == 'login' || to.name == 'register'){
    next()
  }else if($cookies.get("token") == null ){
    next({name:'login'})
  }else if( to.name == null && $cookies.get("token") != null){
    next({name:'home'})
  }else {
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
