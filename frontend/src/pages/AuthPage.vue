<script setup>
import AppAuthForm from '@/components/AppAuthForm.vue'
</script>

<template>
  <div class="page">
    <nav class="py-sm px-md">
      <p class="logo">Gordon Ramsey</p>
    </nav>
    <div class="flex justify-center align-center page-content">
      <AppAuthForm />
    </div>
  </div>
</template>

<style lang="css" scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.page {
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f7f7f7);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


.page-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 100px;
  box-sizing: border-box;
}

.logo {
  font-size: 48px;
  font-weight: bold;
  color: #333333;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  text-align: left;
}


@media (max-width: 768px) {
  .logo {
    height: 60px;
  }

  .page-content {
    padding: 10px;
  }
}
</style>
