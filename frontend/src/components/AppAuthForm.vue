<script setup>
import { ref } from 'vue';
import AppInput from '@/components/AppInput.vue';
import AppButton from '@/components/AppButton.vue';
import authApi from '@/api/auth';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const userStore = useUserStore();

const isSignInMode = ref(true);

const firstName = ref();
const lastName = ref();
const email = ref();
const password = ref();

const isSubmitting = ref(false);

async function submit() {
  try {
    isSubmitting.value = true;
    const { token, user } = await authApi[isSignInMode.value ? 'signin' : 'signup']({
      email: email.value,
      password: password.value,
      ...(!isSignInMode.value ? { firstName: firstName.value, lastName: lastName.value } : {}),
    });

    localStorage.setItem('token', token);

    userStore.currentUser = user;

    router.push({
      name: 'HomePage',
    });
  } catch {
  } finally {
    isSubmitting.value = false;
  }
}
</script>

<template>
  <form class="auth-form" @submit.prevent="submit">
    <h2 class="form-title">{{ isSignInMode ? 'Sign in' : 'Sign up' }}</h2>
    <div class="input-fields">
      <div v-if="!isSignInMode" class="input-group">
        <AppInput id="firstName" label="First name" v-model="firstName" />
        <AppInput id="lastName" label="Last name" v-model="lastName" />
      </div>
      <AppInput id="email" label="Email" v-model="email" />
      <AppInput id="password" type="password" label="Password" v-model="password" />
    </div>
    <AppButton type="submit" primary :label="isSignInMode ? 'Sign in' : 'Sign up'" />
    <p v-if="isSubmitting">...Submitting</p>
    <p class="toggle-text">
      {{ isSignInMode ? 'New to Recepies?' : 'Already have an account?' }}
      <a class="toggle-link" @click="isSignInMode = !isSignInMode">
        {{ isSignInMode ? 'Sign up now.' : 'Sign in.' }}
      </a>
    </p>
  </form>
</template>

<style scoped>
.auth-form {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form-title {
  font-size: 28px;
  font-weight: bold;
  color: black;
  margin-bottom: 20px;
}

.input-fields {
  width: 100%;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 15px;
}

.toggle-text {
  font-size: 14px;
  color: #555;
}

.toggle-link {
  color: #007bff;
  cursor: pointer;
}

.toggle-link:hover {
  text-decoration: underline;
}

.auth-form button {
  background-color: blue;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 12px 20px;
  border-radius: 6px;
  border: none;
  width: 100%;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px; /* Dodana margina između buttona i prethodnih input polja */
  margin-bottom: 15px; /* Dodana margina između buttona i tekstualnih linkova */
}

.auth-form button:hover {
  background-color: #0056b3;
}

.auth-form .form-title {
  text-align: center;
}

.auth-form input {
  margin-bottom: 15px;
}

.auth-form p {
  text-align: center;
}
</style>
