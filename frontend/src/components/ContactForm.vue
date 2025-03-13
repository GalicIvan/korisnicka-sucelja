<template>
  <div class="contact-container">
    <div class="contact-form">
      <h2>Kontaktirajte nas</h2>
      <form @submit.prevent="submitForm">
        <div class="form-row">
          <div class="form-column">
            <label for="name">Ime</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Vaše ime" required>

            <label for="email">Email</label>
            <input type="email" id="email" v-model="formData.email" placeholder="Vaš email" required>
          </div>

          <div class="form-column">
            <label for="message">Poruka</label>
            <textarea id="message" v-model="formData.message" placeholder="Vaša poruka" required></textarea>
          </div>
        </div>

        <button type="submit">Pošalji poruku</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Podaci poslani:", formData.value);
  alert("Vaša poruka je poslata!");
  formData.value = { name: "", email: "", message: "" };
};
</script>

<style scoped>
/* Postavljamo osnovni font na sans-serif */
* {
  font-family: 'Arial', sans-serif;
}

.contact-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: white;
  padding: 20px;
}

.contact-form {
  background: #d3d0d0;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 800px;
  text-align: center;
  margin-bottom: 50px;
}

.contact-form h2 {
  color: #333;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: bold;
}

.form-row {
  display: flex;
  gap: 20px;
}

.form-column {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.contact-form label {
  font-weight: bold;
  text-align: left;
  margin: 12px 0 6px;
  color: #555;
  font-size: 16px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 14px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 18px;
  transition: border 0.3s ease-in-out;
  background: #fff;
}

.contact-form input:focus,
.contact-form textarea:focus {
  border: 1px solid #007bff;
  outline: none;
}

.contact-form textarea {
  resize: none;
  height: 150px;
}

.contact-form button {
  width: 100%;
  background: #007bff;
  color: rgb(250, 249, 249);
  border: none;
  padding: 14px;
  border-radius: 8px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 20px;
  transition: background 0.3s ease-in-out;
}

.contact-form button:hover {
  background: #0056b3;
}

/* Responsivnost */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
  }
}
</style>
