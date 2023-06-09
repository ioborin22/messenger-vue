<template>
  <div class="app">
    <contact-list/>
    <bottom-menu/>
  </div>
</template>

<script>
import ContactList from "@/components/ContactList";
import BottomMenu from "@/components/BottomMenu";

export default {
  components: {
    BottomMenu, ContactList
  },
}
</script>

<style>
</style>
