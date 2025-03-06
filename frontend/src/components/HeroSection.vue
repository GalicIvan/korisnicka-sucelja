<template>
  <div class="h-screen bg-yellow-100 flex justify-center items-center">
    <div class="kitchen">
      <div class="overlay">
        <h1 class="naslov">Istraži svijet ukusa – inspiracija za tvoju kuhinju počinje ovdje!</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  height: 100vh;
}

.kitchen {
  background-image: url('@/assets/img/kitchen.jpg');
  background-size: cover;
  background-position: center;
  height: 90vh;
  width: 90%;
  position: relative;
  z-index: -1;
  margin: 0%;
  background-repeat: no-repeat;
  overflow: hidden;
  border-radius: 20px;
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
  background-color: rgba(255, 255, 255, 0.914);
  border-radius: 15px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 4);
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
  background-color: rgba(0, 0, 0, 0.4);
  padding: 20px;
  border-radius: 8px;
  color: white;
}
</style>
