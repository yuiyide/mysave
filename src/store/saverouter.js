import router from '@/router';

export default {
    state:{
        routerlist:[
            {
                path:'/home',
                name:'Main',
                component:() => import('../views/Main.vue'),
                // redirect:'/user',
                children:[
                  {
                    path: 'user',
                    name: 'User',
                    component: () => import('../views/content/Mycontent.vue')
                  },
                ]
              },
        ],
        item:[]
    },
    mutations:{
         addrouter(state,item){
                // router.addRoute({
                //     path:`/${item.item}`,
                //     name:`${item.item}`,
                //     component: () => import(/* webpackChunkName: "about" */ '../views/content/Mycontent.vue')
                // })
                router.addRoute('home',{
                        path:`${item.item}`,
                        name:`${item.item}`,
                        component: () => import(/* webpackChunkName: "about" */ '../views/content/Mycontent.vue')
                    })
        },
        saverouter(state){
             router.addRoute(state.routerlist[0])
        }
    }   
}