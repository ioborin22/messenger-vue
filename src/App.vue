<template>
  <div class="app">
    <contact-list @contact-selected="handleContactSelected" />
    <user-messages v-if="selectedContact" :sender="selectedContact.sender" :receiver="selectedContact.receiver" />
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
