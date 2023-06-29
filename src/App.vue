<template>
  <div class="app">
    <div class="contact-list">
      <contact-list @contact-selected="handleContactSelected" />
    </div>
    <div class="user-messages">
      <user-messages v-if="selectedContact" :selectedContact="selectedContact" />
    </div>
    <bottom-menu />
  </div>
</template>

<script>
import ContactList from "@/components/ContactList";
import UserMessages from "@/components/UserMessages.vue";
import BottomMenu from "@/components/BottomMenu";

export default {
  components: {
    ContactList,
    UserMessages,
    BottomMenu,
  },

  data() {
    return {
      selectedContact: null,
    };
  },

  methods: {
    handleContactSelected(contact) {
      this.selectedContact = contact;
    },
  },
};
</script>

<style>
.app {
  display: flex;
  flex-direction: row;
}

.contact-list {
  flex: 1;
}

.user-messages {
  flex: 2;
}
</style>