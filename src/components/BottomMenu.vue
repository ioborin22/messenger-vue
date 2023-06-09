<template>
  <div class="bottom-menu">
    <button class="menu-item" @click="selectTab('contacts')" :class="{ active: selectedTab === 'contacts' }">
      Contacts
    </button>
    <button class="menu-item" @click="selectTab('profile')" :class="{ active: selectedTab === 'profile' }">
      Profile
    </button>
    <button class="menu-item" @click="selectTab('online')" :class="{ active: selectedTab === 'online' }">
      Online
    </button>
    <button class="menu-item" @click="selectTab('search')" :class="{ active: selectedTab === 'search' }">
      Search
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
    }
  }
};
</script>

<style>
.bottom-menu {
  display: flex;
  justify-content: space-between;
  background-color: #f0f0f0;
  padding: 10px;
}

.menu-item {
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: #888;
  font-size: 16px;
  cursor: pointer;
}

.menu-item.active {
  color: #333;
  font-weight: bold;
}
</style>
