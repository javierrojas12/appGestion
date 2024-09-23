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
      password: ''
    }
  },
  methods: {
    onLogin() {
      const loginData = {
        email: this.email,
        password: this.password // Enviar la contraseña sin encriptar
      };

      // Enviar los datos al backend
      this.loginRequest(loginData);
    },
    loginRequest(loginData) {
      // Cambia el URL por el endpoint correcto de tu backend PHP
      this.$axios.post('https://api2.aplicacionesweb.cl', loginData)
        .then(response => {
          // Aquí deberías manejar lo que sucede en caso de éxito
          console.log('Login success:', response.data);

          if (response.data.success) {
            // Guardar el token si se devuelve
            localStorage.setItem('authToken', response.data.token);
            
            // Redirigir al dashboard después del login exitoso
            this.$router.push('/Dashboard');
          } else {
            // Manejar el caso en que el login falle
            console.error('Login failed:', response.data.message);
          }
        })
        .catch(error => {
          // Manejo de errores
          console.error('Login error:', error);
        });
    }
  }
}
</script>
