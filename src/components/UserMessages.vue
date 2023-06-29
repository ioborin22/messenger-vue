<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text_message }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    selectedContact: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      messages: [],
      apiMessages: `https://ioborin22.com/api/messages/1/${this.selectedContact.contact_id}`,
    };
  },

  mounted() {
    this.fetchMessages();
  },

  watch: {
    selectedContact() {
      this.apiMessages = `https://ioborin22.com/api/messages/1/${this.selectedContact.contact_id}`;
      this.fetchMessages();
    },
  },

  methods: {
    fetchMessages() {
      axios
          .get(this.apiMessages)
          .then((response) => {
            this.messages = response.data;
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>

<style scoped>
</style>
