import axios from "axios";
export default {
  async getActivityApi({commit}){
    axios
    .get("https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity/Taipei?%24top=10&%24format=JSON",{
    // headers:{
    //   headers: GetAuthorizationHeader()
    // }
    })
    .then((res)=>{
    commit('setActivityArr', res.data)
    })
  } 
}