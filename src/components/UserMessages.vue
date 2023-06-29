
<template>
  <div>
    <div v-for="message in messages" :key="message.id" class="message-bubble" :class="{ 'sender': message.sender_id === 1, 'receiver': message.sender_id !== 1 }">
      <div class="message-text">{{ message.text_message }}<span class="date" v-if="message.flag === 0"> (unread)</span></div>
      <div class="message-time">{{ message.created_at }}</div>
    </div>
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
.message-container {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 65px;

  position: absolute;
  top: 80px;
  /* replace 70px with the height of your chat-header section */
  width: 100%;
}

.message-bubble {
  max-width: 80%;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  clear: both;
  word-wrap: break-word;
}

.message-bubble img {
  max-width: 100%;
  height: auto;
}

.sender {
  align-self: flex-end;
  background-color: #e3e3e3e3;
}

.receiver {
  align-self: flex-start;
  background-color: #333333;
}

.message-text {
  font-size: 16px;
}

.message-time {
  font-size: 12px;
  margin-top: 5px;
  color: #999;
}
</style>
