<script>
import { useRouter } from "vue-router";
import {ref, onMounted, computed} from "vue"


export default {
  components: {
    
  },
  setup(){
    const router = useRouter();
    const selectValue = ref('attractions');
    const handleSearch = (()=>{
      router.push({
        path: `/${selectValue.value}`,
      })
    })
    onMounted(()=>{
     
    })
    return {
      handleSearch,
      selectValue,
    }
  },
}
</script>

<template>
  <div class="intro">
    <div class="intro-des">
      <h1>
          探索 <strong>台灣之美</strong> <br />
          讓我們更親近這片土地
        </h1>
        <div class="intro-text">
          <img src="@/assets/icon/coordinate.svg" alt="icon">
          <p>台灣旅遊景點導覽</p>
          <p>Taiwan Travel Guide</p>
        </div>
    </div>
    <div class="intro-search">
      <select name="" id="" v-model="selectValue">
        <option value="attractions">探索景點</option>
        <option value="activity">節慶活動</option>
        <option value="restaurant">品嚐美食</option>
      </select>
      <input type="text" placeholder="你想去哪裡？請輸入關鍵字">
      <a href="javascript:;" @click.prevent="handleSearch"> 
        search
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>

