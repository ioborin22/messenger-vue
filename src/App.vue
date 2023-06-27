<template>
  <div class="app">
    <bottom-menu/>
    <router-view></router-view> <!-- Add this line -->
  </div>
</template>

<script>
import BottomMenu from "@/components/BottomMenu";

export default {
  components: {
    BottomMenu,
  }
};
</script>

<style>
</style>
