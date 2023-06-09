<template>
  <div class="contacts-list-wrapper">
    <div class="contacts-list" v-for="contact in contacts" :key="contact.id">
      <router-link :to="`/messages/${contact.id}`" class="contact">
        <div :class="['avatar', { 'online': contact.online === 1 }, { 'verified': contact.verified === 1 }]">
          <img src="@/assets/woman.png" alt="Profile Picture">
        </div>
        <div class="contact-details">
          <div class="nickname-date">
            <h3 class="nickname">{{ contact.nickname }}</h3>
            <span class="date">{{ contact.date }}</span>
          </div>
          <div class="message-details">
            <p class="last-message">{{ contact.last_message }}</p>
            <span class="message-counter" v-if="contact.count !== 0">{{ contact.count }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          id: 1,
          nickname: 'User1',
          online: 1,
          last_message: 'I\'ve spent a lot of time on BeenVerified recently.',
          date: 'May 17',
          count: 1,
          verified: 1
        },
        {
          id: 2,
          nickname: 'User2',
          online: 0,
          last_message: 'McCarthy told reporters that negotiations are paused until President Joe Biden returns from his trip abroad as he left the Capitol this evening.',
          date: 'May 17',
          count: 0,
          verified: 0
        },
        {
          id: 3,
          nickname: 'User3',
          online: 1,
          last_message: 'Hello. Property ensures the SVG image covers the entire area of the before pseudo-element.',
          date: 'May 16',
          count: 0,
          verified: 0
        },
        {
          id: 4,
          nickname: 'User4',
          online: 0,
          last_message: 'Yesterday was good to get this fish from your track',
          date: 'May 15',
          count: 0,
          verified: 1
        },
        {
          id: 5,
          nickname: 'User5',
          online: 0,
          last_message: 'At the time several strippers complained about being terrified by the Morant situation.',
          date: 'May 13',
          count: 0,
          verified: 0
        },
        {
          id: 6,
          nickname: 'User6',
          online: 0,
          last_message: 'American actress Loni Anderson rose to fame during the 1970s and 1980s.',
          date: 'May 11',
          count: 0,
          verified: 0
        },
        {
          id: 7,
          nickname: 'User7',
          online: 1,
          last_message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          date: 'May 10',
          count: 2,
          verified: 1
        },
        {
          id: 8,
          nickname: 'User8',
          online: 0,
          last_message: 'Ut feugiat metus sit amet ipsum eleifend, eu efficitur massa condimentum.',
          date: 'May 9',
          count: 0,
          verified: 1
        },
        {
          id: 9,
          nickname: 'User9',
          online: 1,
          last_message: 'Nullam vehicula sem id dolor consequat, et dapibus velit iaculis.',
          date: 'May 8',
          count: 0,
          verified: 0
        },
        {
          id: 10,
          nickname: 'User10',
          online: 0,
          last_message: 'Phasellus convallis felis non magna ultricies, in tristique dolor rhoncus.',
          date: 'May 7',
          count: 3,
          verified: 0
        },
        {
          id: 11,
          nickname: 'User11',
          online: 1,
          last_message: 'Vestibulum mattis nisl sed leo consectetur, non pellentesque dolor egestas.',
          date: 'May 6',
          count: 0,
          verified: 1
        },
        {
          id: 12,
          nickname: 'User12',
          online: 0,
          last_message: 'Aenean vitae nunc at orci consectetur tincidunt ut vitae metus.',
          date: 'May 5',
          count: 0,
          verified: 0
        },
        {
          id: 13,
          nickname: 'User13',
          online: 1,
          last_message: 'Pellentesque auctor quam id ipsum finibus, vitae pharetra elit eleifend.',
          date: 'May 4',
          count: 0,
          verified: 0
        },
        {
          id: 14,
          nickname: 'User14',
          online: 1,
          last_message: 'Pellentesque auctor quam id ipsum finibus, vitae pharetra elit eleifend.',
          date: 'May 4',
          count: 0,
          verified: 0
        },
        {
          id: 15,
          nickname: 'User15',
          online: 1,
          last_message: 'Pellentesque auctor quam id ipsum finibus, vitae pharetra elit eleifend.',
          date: 'May 4',
          count: 0,
          verified: 0
        },
        {
          id: 16,
          nickname: 'User16',
          online: 1,
          last_message: 'Pellentesque auctor quam id ipsum finibus, vitae pharetra elit eleifend.',
          date: 'May 4',
          count: 0,
          verified: 0
        },
      ]
    }
  },
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