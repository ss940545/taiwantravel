<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
 setup() {
    const store = useStore();

    const getActivityArr = computed(() => store.getters.getActivityArr);

    
  },
}
</script>

<template>
    <h1>ddddd</h1>

</template>



<style>

</style>