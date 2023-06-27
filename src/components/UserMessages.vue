<template>
  <div>
    <h2>Correspondence between {{ user1 }} and {{ user2 }}</h2>
    <!-- Display the messages between the two users -->
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user1: 'User1',
      user2: 'User2',
      messages: [
        { id: 1, sender: 'User1', receiver: 'User2', text: 'Hello User2' },
        { id: 2, sender: 'User2', receiver: 'User1', text: 'Hi User1' },
        { id: 3, sender: 'User1', receiver: 'User2', text: 'How are you?' },
        { id: 4, sender: 'User2', receiver: 'User1', text: 'Im good, thanks!' },
      ],
    };
  },
  };
</script>

<style scoped>
/* Add any desired styles for the component */
</style>
