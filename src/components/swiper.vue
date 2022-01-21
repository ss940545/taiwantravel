<script>
import {useStore} from 'vuex';
import {ref, onMounted, computed} from "vue"
import axios from "axios";
// import { Swiper, SwiperSlide } from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import "swiper/swiper-bundle.css";

export default {
  setup(){
    const store  = useStore;
    // Swiper.use([Navigation, Pagination]);

    onMounted(() => {
      // let  swiper = new Swiper(".mySwiper", {
      //   pagination: {
      //     el: ".swiper-pagination",
      //   },
      // });
      // swiper = new Swiper('.mySwiper', {
      //   slidesPerView: 1,
      //   loop: false,
      //   pagination: {
      //     el: ".swiper-pagination",
      //     clickable: true,
      //     bulletClass: "swiper-my-bullet",
      //     bulletActiveClass: "swiper-my-bullet-active",
      //   },
      //   navigation: {
      //     nextEl: ".swiper-my-button-next",
      //     prevEl: ".swiper-my-button-prev",
      //     disabledClass: "swiper-my-button-disabled",
      //   },
      // });
    });
  } 
}
</script>

<template>
 <h1>siwper</h1>

</template>



<style>

</style>