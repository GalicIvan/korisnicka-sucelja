<script setup>
import AppAuthForm from '@/components/AppAuthForm.vue';
</script>

<template>
  <div class="page">
    <nav class="nav-bar">
      <p class="logo"></p>
    </nav>
    <div class="page-content">
      <AppAuthForm />
    </div>
  </div>
</template>

<style lang="css" scoped>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Arial', sans-serif;
}

.page {
  height: 100vh;
  background-image: url(https://wallpaperaccess.com/full/2882747.jpg);
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.nav-bar {
  width: 100%;
  padding: 20px;
  background-color: transparent;
  text-align: center;
}

.logo {
  font-size: 48px;
  font-weight: bold;
  color: black;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin: 0;
}

.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  padding: 20px;
  box-sizing: border-box;
}

@media (max-width: 768px) {
  .logo {
    font-size: 36px;
  }

  .page-content {
    padding: 10px;
  }
}
</style>
