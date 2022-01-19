<script>
import '@/assets/css/base/reset.scss'
import Header from "@/components/global/header/index"
export default {
  components:{
    Header,
  }
}
</script>

<template>
  <Header />
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
