<script>
import '@/assets/css/components/header.scss'
import Logo from "@/components/global/header/logo"
import NavBar from "@/components/global/header/navBar"
import {ref} from "vue"

export default {
  components:{
    Logo,
    NavBar
  },
  setup(){
    const isOpen = ref(false);
    const handleMenuOpen = ()=>{
      isOpen.value = !isOpen.value
    }
    return{
      isOpen,
      handleMenuOpen,
    }
  },

}
</script>

<template>
  <header>
    <div class="container">
      <Logo />
      <NavBar 
        :isOpen="isOpen"
        :handleMenuOpen="handleMenuOpen"
      />
    </div>
  </header>
</template>



<style>

</style>