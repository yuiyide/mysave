
export default {
    state:{
        token:""
    },
    mutations:{
        savelogin(state,data){
            state.token = data
        },
        gettoken(){
            return state.token
        }
    }
}