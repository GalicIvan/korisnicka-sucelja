<script setup>
import AppHeader from './AppHeader.vue';
</script>

<template>
  <div class="h-screen bg-yellow-100 flex justify-center items-center">
    <div class="kitchen">
      <div class="overlay">
        <h1 class="naslov">Istraži svijet ukusa – inspiracija za tvoju kuhinju počinje ovdje!</h1>
      </div>
    </div>
  </div>
  <AppHeader></AppHeader>

  <!-- <header class="header">
    <nav class="nav">
      <ul>
        <li><a href="#">Naši recepti</a></li>
        <li><a href="#">O nama</a></li>
      </ul>
    </nav>
  </header> -->
</template>

<style scoped>
div {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.kitchen {
  background-image: url('@/assets/img/bg.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: -5;
  margin: 0%;
  background-repeat: no-repeat;
  overflow: hidden;
  /* border-radius: 20px; */
  /* background-color: rgba(0, 0, 0, 0.6); */
}

.kitchen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.naslov {
  text-align: center;
  color: rgb(104, 104, 104);
  padding: 50px 20px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 5);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 30%;
}

.naslov h1 {
  font-size: 36px;
  font-weight: 700;
  color: #333;
  line-height: 1.4;
  text-transform: uppercase;
  letter-spacing: 2px;
  animation: fadeIn 1.5s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.overlay {
  /* background-color: rgba(0, 0, 0, 0.4); */
  padding: 20px;
  border-radius: 8px;
  color: white;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: rgba(255, 255, 255, 0.7);
  color: black;
  position: fixed; /* Header ostaje na vrhu */
  width: 100%;
  height: 15px;
  top: 0;
  left: 0;
  z-index: 1000;
}

.nav a {
  text-decoration: none;
  color: black;
}

.nav a:hover {
  color: rgb(137, 129, 13);
  /* font-weight: bold; */
  text-transform: uppercase;
  cursor: pointer;
}
</style>
