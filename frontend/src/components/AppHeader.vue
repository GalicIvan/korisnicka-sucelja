<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import AppProfileButton from './AppProfileButton.vue';

const TOP_OFFSET = 60;

const showBackground = ref(false);
function scrollHandler() {
  if (window.scrollY >= TOP_OFFSET) {
    showBackground.value = true;
  } else {
    showBackground.value = false;
  }
}

onMounted(() => {
  window.addEventListener('scroll', scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler);
});
</script>

<template>
  <header
    class="flex items-center justify-between px-md header"
    :class="{ 'header--background': showBackground }"
  >
    <div class="flex items-center" style="gap: 80px">
      <div class="flex gap-sm">
        <div class="link"><a href="#">Home</a></div>
        <div class="link"><a href="#recipes">Naši recepti</a></div>
        <div class="link"><a href="#addRecipe">Tvoje ideje!</a></div>
        <div class="link"><a href="#contact">Kontakt</a></div>
      </div>
    </div>
    <div class="flex items-center gap-md">
      <AppProfileButton />
    </div>
  </header>
</template>

<style>
.header {
  position: fixed;
  width: 100%;
  z-index: 40;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
}

.header--background {
  background-color: #18181b;
}

.logo {
  height: 80px;
}

.link {
  color: #fff;
  cursor: pointer;
  transition: color 0.4s;
  font-size: 13px;
  margin-right: 25px;
}

.link:hover {
  color: #000000;
}

.icon {
  color: #fff;
  font-size: 13px;
}

.link a {
  color: #fff;
  text-decoration: none;
  transition: color 0.4s;
  cursor: pointer;
}

.link a:hover {
  color: #000000;
}
</style>
