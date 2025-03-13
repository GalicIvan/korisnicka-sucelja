<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

function logout() {
  // Ukloni samo token iz localStorage
  localStorage.removeItem('token');

  // Preusmeri na stranicu za autentifikaciju (AuthPage)
  router.push('/auth');

}

</script>

<template>
  <div class="profile-menu">
    <button class="btn">
      <img src="@/assets/img/profile.jpg" alt="Profile icon" class="profile" />
      <FontAwesomeIcon :icon="faArrowDown" class="icon" />
    </button>
    <div class="menu-items">
      <div>{{ userStore.currentUser.firstName }}</div>
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
  gap: 5px;
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
  background: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 200px;
  margin-top: 10px;
  border-radius: 5px;
}

.logout-btn {
  cursor: pointer;
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
