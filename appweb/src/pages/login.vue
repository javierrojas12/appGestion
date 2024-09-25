<template>
  <div class="login-container">
    <!-- Agregar logo arriba del formulario -->
    <q-form @submit.prevent="onLogin" class="login-form">
      <img src="~assets/logo-lira.png" width="100px" alt="Logo" class="logo" />
      <q-input v-model="email" label="Email" />
      <q-input v-model="password" type="password" label="Password" />
      <q-btn type="submit" label="Login" class="login-button" color="primary" />
    </q-form>

    <!-- Alertas de éxito o error -->
    <q-dialog v-model="showDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">{{ alertMessage }}</div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      alertMessage: "",
      showDialog: false,
      users: [
        { email: "javier", password: "123123" },
        { email: "user2@example.com", password: "password2" },
      ],
    };
  },
  methods: {
    onLogin() {
      const user = this.users.find(
        (user) => user.email === this.email && user.password === this.password
      );

      if (user) {
        // Usuario encontrado, iniciar sesión
        const fakeAuthToken = "123456"; // Generar un token falso para el ejemplo
        localStorage.setItem("authToken", fakeAuthToken);

        // Mostrar mensaje de inicio de sesión exitoso
        this.alertMessage = "Iniciando sesión...";
        this.showDialog = true;
        // Esperar 2 segundos antes de redirigir automáticamente
          if (this.$route.path !== "/dashboard") {
            
            this.$router.push("/dashboard");
              // Redirigir al dashboard si no estamos allí
          } 
      } else {
        // Usuario no encontrado, mostrar error
        this.alertMessage = "Error: Email o contraseña incorrectos";
        this.showDialog = true;
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Georgia, serif;
}

.login-form {
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}

.login-button {
  background-color: #b0b0b0;
  transition: box-shadow 0.3s ease;
  margin-top: 15px;
}

.login-button:hover {
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.q-input input {
  font-family: Georgia, serif;
}

.q-form {
  text-align: center;
}
</style>
