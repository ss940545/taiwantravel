<script>


export default {
  props:{
    isOpen: {
      type: Boolean,
      default: false,
    },
    handleMenuOpen: {
      type: Function,
      default: ()=>{}
    },
    setup(props) {

      return{
        props,
      }
    }
  }
}
</script>

<template>
  <nav :class="{ active: isOpen}">
    <ul class="list">
      <li class="list-item">
        <router-link to="/attractions">
          探索景點
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/activity">
          節慶活動
        </router-link>
      </li>
      <li class="list-item">
        <router-link to="/restaurant">
          品嚐美食
        </router-link>
      </li>
    </ul>
  </nav>
  <a class="menu-btn" href="javascript:;" @click.prevent="handleMenuOpen">
    <img v-show="!isOpen" src="@/assets/icon/menu-icon.svg" alt="menu-icon">
    <img v-show="isOpen" src="@/assets/icon/menu-close-icon.svg" alt="menu-close-icon">
  </a>
</template>



<style>

</style>