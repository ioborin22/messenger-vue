<template>
  <div class="bottom-menu">
    <button class="menu-item" @click="selectTab('contacts')" :class="{ active: selectedTab === 'contacts' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="selectedTab === 'contacts' ? '#2e7df6' : '#a0a0a0'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
      <br>
      <span class="menu-text" :style="{ color: selectedTab === 'contacts' ? '#2e7df6' : '#a0a0a0' }">Contacts(1/0)</span>
    </button>
    <button class="menu-item" @click="selectTab('online')" :class="{ active: selectedTab === 'online' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="selectedTab === 'online' ? '#2e7df6' : '#a0a0a0'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      <br>
      <span class="menu-text" :style="{ color: selectedTab === 'online' ? '#2e7df6' : '#a0a0a0' }">Online(2367)</span>
    </button>
    <button class="menu-item" @click="selectTab('search')" :class="{ active: selectedTab === 'search' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="selectedTab === 'search' ? '#2e7df6' : '#a0a0a0'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <br>
      <span class="menu-text" :style="{ color: selectedTab === 'search' ? '#2e7df6' : '#a0a0a0' }">Search</span>
    </button>
    <button class="menu-item" @click="selectTab('profile')" :class="{ active: selectedTab === 'profile' }">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" :stroke="selectedTab === 'profile' ? '#2e7df6' : '#a0a0a0'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3"/><circle cx="12" cy="10" r="3"/><circle cx="12" cy="12" r="10"/></svg>
      <br>
      <span class="menu-text" :style="{ color: selectedTab === 'profile' ? '#2e7df6' : '#a0a0a0' }">Profile</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedTab: 'contacts'
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
      switch (tab) {
        case 'contacts':
          this.$router.push('/contacts');
          break;
        case 'online':
          this.$router.push('/online');
          break;
        case 'search':
          this.$router.push('/search');
          break;
        case 'profile':
          this.$router.push('/profile');
          break;
        default:
          break;
      }
    }
  }

};
</script>

<style scoped>
.bottom-menu {
  display: flex;
  justify-content: space-between;
  background-color: #f6f6f6;
  padding: 4px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: #b2b2b2 solid 1px;
  max-width: 33.33%
}

.menu-item {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: inherit;
}

.menu-item.active {
  font-weight: bold;
}

.menu-text {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
</style>