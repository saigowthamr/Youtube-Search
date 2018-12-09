import Vue from 'vue';
import Vuex from 'vuex';
import Ytube from 'youtube-api-search';

Vue.use(Vuex)

export const store = new Vuex.Store({
  
  state:{
     search:'',
     spinner:false,
     videoli:[],
     singVideo:[],
     apiKey:'AIzaSyBLkdyCkzSsPnFYa3H8NGh0OMMOkp9S2vcvhgchchcgfgffgM'
   
},
   getters:{
     se:(state)=>state.search
   },
   mutations:{
       
    update(state,payload){
        state.search=payload
    },
    Videoget(state,pay){
        state.videoli=pay
    },
    singVid(state,singleVideo){
        state.singVideo.push(singleVideo)
    }

   },
   actions:{
    
    videoList({commit,state}){
        state.singVideo=[]
        state.videoli=[]
            state.spinner=true
           Ytube({key:state.apiKey,
                  term:state.search||'music'},function(res){
                      state.spinner=!state.spinner
                      commit('singVid',res[0])
                     commit('Videoget',res.splice(0,4))
                  })
       }
    }

})
