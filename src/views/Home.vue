<script>
import {useStore} from 'vuex';
import '@/assets/css/components/index.scss'
import { useRouter } from "vue-router";

import {ref, onMounted, computed} from "vue"
import axios from "axios";
import Intro from "@/components/intro/index"
import NearlyActivity from "@/components/nearlyActivity"
import Swiper from "@/components/swiper"


export default {
  name: 'Home',
  components: {
    Intro,
    Swiper,
    NearlyActivity
  },
  setup(){
    const store  = useStore();
    const getActivityFn = ()=>{
      store.dispatch('getActivityApi')
    }
    onMounted(()=>{
      getActivityFn();
    })
    return {  
    }
  },
}
</script>

<template>
<div  class="home-container">
  <Intro />
  <Swiper />

  <!-- 近期活動 -->
  <NearlyActivity />
</div>
</template>

<style>
</style>