<template>
  <div class="contacts-list-wrapper">
    <div class="contacts-list" v-for="contact in contacts" :key="contact.user_id">
      <router-link :to="`/messages/${contact.contact_id}`" class="contact">
        <div :class="['avatar', { 'online': contact.online === 1 }, { 'verified': contact.email_verified_at !== NULL }]">
          <img :src="contact.avatar" alt="Profile Picture">
        </div>
        <div class="contact-details">
          <div class="nickname-date">
            <h3 class="nickname">{{ contact.nickname }}</h3>
            <span class="date">{{ messages.date }}</span>
          </div>
          <div class="message-details">
            <p class="last-message">{{ messages.last_message }}</p>
            <span class="message-counter" v-if="messages.count !== 0">{{ messages.count }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      contacts: [],
      messages: [],
      apiUrl: 'https://ioborin22.com/api/contacts/1/added'
    }
  },
  mounted() {
    // Make an API call to fetch the contacts data
    this.fetchContacts();
  },
  methods: {
    fetchContacts() {
      // Use axios to fetch data from the API
      axios.get(this.apiUrl)
          .then(response => {
            // Store the retrieved contacts data in the contacts array
            this.contacts = response.data;
          })
          .catch(error => {
            console.log(error);
          });
    }
  }
}
</script>

<style>

html, body {
  margin: 0; /* Remove default margin */
  padding: 0; /* Remove default padding */
}

.contacts-list-wrapper {
  max-height: calc(100vh - 53px); /* Adjusted max-height to account for the bottom-menu */
  overflow-y: auto; /* Use 'auto' to show scrollbar only when needed */
  scrollbar-width: thin; /* Width of the custom scrollbar */
  scrollbar-color: #a0a0a0 transparent; /* Color of the custom scrollbar */
  padding-right: 8px; /* Add padding to create space for the scrollbar */
  margin-top: 16px;
  margin-left: 8px;
}

/* Track */
.contacts-list-wrapper::-webkit-scrollbar {
  width: 6px; /* Width of the scrollbar track */
}

/* Handle */
.contacts-list-wrapper::-webkit-scrollbar-thumb {
  background-color: #a0a0a0; /* Color of the scrollbar handle */
  border-radius: 3px; /* Border radius of the scrollbar handle */
}

.contacts-list {
  max-width: 400px;
  margin: 0 auto;

}

.contact {
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
  text-decoration: none;
  color: inherit;
  padding-bottom: 8px;
  border-bottom: 1px solid #c8c8c8;
}

.avatar img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.avatar {
  position: relative;
}

.avatar.online::before {
  content: "";
  position: absolute;
  top: 30px;
  right: 0;
  width: 10px;
  height: 10px;
  background-color: #2ecc71;
  border-radius: 50%;
}

.avatar.verified::before {
  background-image: url('@/assets/check-mark-w.png');
  background-size: cover;
}

.contact-details {
  margin-left: 10px;
  flex-grow: 1;
}

.nickname-date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nickname {
  margin: 0;
  font-size: 16px;
  font-weight: bold;
}

.date {
  font-size: 12px;
  color: #8a8a8a;
}

.message-details {
  display: flex;
  justify-content: space-between;
}

.last-message {
  margin: 0;
  font-size: 14px;
  color: #8a8a8a;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.message-counter {
  padding: 2px 6px;
  font-size: 12px;
  background-color: #e74c3c;
  color: #fff;
  border-radius: 10px;
  margin-left: 5px;
  width: auto;
  height: 14px;
}

@media (max-width: 480px) {
  .contacts-list {
    max-width: 100%;
  }
}
</style>