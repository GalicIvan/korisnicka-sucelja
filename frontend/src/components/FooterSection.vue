<template>
  <footer class="footer">
    <div class="social-icons">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css">
      <a href="https://www.facebook.com" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
      <a href="https://www.instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://mail.google.com" target="_blank"><i class="fa-solid fa-envelope"></i></a>
      <a href="https://www.twitter.com" target="_blank"><i class="fa-brands fa-twitter"></i></a>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: rgba(51, 51, 51, 0.9);
  color: white;
  text-align: center;
  padding: 15px;
  width: 100%;
  bottom: 0;
  font-size: 14px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
}

.footer a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-size: 20px;
  transition: color 0.3s ease;
}

.footer a:hover {
  color: #28a745;
}

.footer .social-icons {
  margin-top: 10px;
}
</style>
