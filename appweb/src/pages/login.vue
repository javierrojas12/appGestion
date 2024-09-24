<template>
  <q-form @submit.prevent="onLogin">
    <q-input v-model="email" label="Email" />
    <q-input v-model="password" type="password" label="Password" />
    <q-btn type="submit" label="Login" color="primary" />
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      // Lista de usuarios hardcodeados
      users: [
        { email: 'usuario1@gmail.com', password: 'password1' },
        { email: 'user2@example.com', password: 'password2' }
      ]
    };
  },
  methods: {
    onLogin() {
      const user = this.users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (user) {
        // Usuario encontrado, login exitoso
        console.log('Login success for user:', user.email);
        
        // Redirigir al dashboard
        this.$router.push('/dashboard');
      } else {
        // Si no se encuentra el usuario o las credenciales son incorrectas
        console.error('Login failed: Invalid email or password');
      }
    }
  }
};
</script>
