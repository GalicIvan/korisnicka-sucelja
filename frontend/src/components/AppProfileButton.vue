<script setup>
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

function logout() {
  localStorage.removeItem('token');
  router.push('/auth');
}
</script>

<template>
  <div class="profile-menu">
    <button class="btn">
      <!-- <img src="@/assets/img/profile.jpg" alt="Profile icon" class="profile" /> -->
      <!-- <FontAwesomeIcon :icon="faArrowDown" class="icon" /> -->
    </button>
    <div class="menu-items">
      <div class="user">{{ userStore.currentUser.firstName }}</div>
      <div @click="logout" class="logout-btn">Logout</div>
    </div>
  </div>
</template>

<style lang="css" scoped>
.btn {
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
}

.profile {
  height: 35px;
}

.icon {
  color: #fff;
  font-size: 13px;
}

.profile-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.menu-items {
  /* border: 1px solid #ccc; */
  /* padding: 10px; */
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
}

.logout-btn {
  text-align: center;
  cursor: pointer;
  color: #fff;
  background-color: #18181b;
  font-weight: bold;
  position: absolute;
  top: 10px;
  right: 10px;
  border: 2px solid #ccc;
  padding: 12px 20px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  border-radius: 35px;
  width: auto;
  height: 25px;
  transition: background-color 0.3s ease, transform 0.2s ease, color 0.3s ease;
  font-size: 14px;
  letter-spacing: 0.5px;
  display: flex;             
  align-items: center;
  justify-content: center;
}

.logout-btn:hover {
  color: #fff;
  background-color: #4b4b4d;
  transform: translateY(-3px);
}

.logout-btn:active {
  transform: translateY(1px);
}


.user {
  color: white;
  text-align: center;
  margin-bottom: 8px;
}
</style>
