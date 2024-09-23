<template>
  <div class="login-page">
    <h2>Iniciar Sesión</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Correo Electrónico:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit">Iniciar Sesión</button>
    </form>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      if (this.email && this.password) {
        // Hacer la llamada a la API de autenticación
        this.$axios.post('/api/login', {
          email: this.email,
          password: this.password
        })
        .then(response => {
         
          localStorage.setItem('auth_token', token);
          this.$router.push('/dashboard'); // Redirigir después del login
        })
        .catch(error => {
          alert('Correo o contraseña incorrectos.');
        });
      } else {
        alert('Por favor, completa todos los campos.');
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
</style>
