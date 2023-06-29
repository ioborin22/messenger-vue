<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text_message }} = {{ message.sender_id }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    selectedContact: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      messages: [],
      apiMessages: "https://ioborin22.com/api/messages/1/2",
    };
  },

  mounted() {
    this.fetchMessages();
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
/* Add any desired styles for the component */
</style>
