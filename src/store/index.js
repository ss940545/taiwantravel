import { createStore } from 'vuex'
import Activity from './activity'
import GetAuthorizationHeader from "@/api/getApiToken.js";
import state from"./state.js"
import actions from "./actions.js"
import mutations from "./mutations"
import getters from "./getters"

export default createStore({
  state,
  actions,
  mutations,
  getters,
  // state: {
  //   setActivityArr:[],
  // },
  // mutations: {
  //   setActivityArr(state, payload) {
  //     state.setActivityArr = payload
  //   }
  // },
  // actions: {
  //   async getActivityApi({commit}){
  //     axios
  //       .get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?%24top=10&%24format=JSON",{
  //         // headers:{
  //         //   headers: GetAuthorizationHeader()
  //         // }
  //       })
  //       .then((res)=>{
  //         commit('setActivityArr', res.data)
  //       })
  //   }
  // },
  modules: {
    
  }
})
