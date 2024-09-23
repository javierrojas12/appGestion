<template>
  <!-- '**************************** CAMBIAR PASSWORD **************************' -->
  <q-form
    @submit.prevent="submit"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="nope"
    spellcheck="false"
  >
    <q-card-section>
      <div class="text-h6 titulo items-center">
        Seguridad
        <q-btn icon="edit" flat round dense @click="showPass = !showPass" />
        <h5 class="fontStyle q-ma-none black">Cambia tu contraseña aquí.</h5>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section v-if="showPass">
      <div class="text-h6 subtitulo">Contraseña</div>
      <q-input
        autocomplete="nope"
        name="password"
        type="password"
        outlined
        dense
        :bottom-slots="false"
        hide-bottom-space
        class="col"
        v-model="pass.password"
        label="Contraseña"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Ingresa una contraseña',
          (val) =>
            val.length >= 6 || 'La contraseña debe tener 6 caracteres mínimo',
        ]"
      />
      <div class="text-h6 q-mt-md subtitulo">Repetir Contraseña</div>
      <q-input
        autocomplete="nope"
        name="password"
        type="password"
        outlined
        dense
        :bottom-slots="false"
        hide-bottom-space
        class="col q-mb-sm"
        v-model="pass2"
        label="Contraseña"
        lazy-rules
        :rules="[
          (val) => (val && val.length > 0) || 'Las contraseñas deben coincidir',
          (val) =>
            val.length >= 6 || 'La contraseña debe tener 6 caracteres mínimo',
        ]"
      />
      <q-btn
        label="Cambiar Contraseña"
        class="full-width q-mt-md q-mb-sm btnStyle"
        type="submit"
      />
    </q-card-section>
  </q-form>
</template>

<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
      showPass: false,
      pass2: "",
      pass: {
        password: "",
        rut: "",
      },
    };
  },
  methods: {
    showErrorMessage(message) {
      this.$q.notify({ color: "negative", message, icon: "report_problem" });
    },
    showSuccessMessage(message) {
      this.$q.notify({ color: "positive", message, icon: "check_circle" });
    },
    getBackend() {
      return Const.backend + "updatePassword.php";
    },
    // ACTUALIZAR APODERADO
    // ACTUALIZA CORRECTAMENTE, PERO HAY QUE REVISAR LOS IF|ELSE PORQUE NO ESTÁN BIEN ESTRUCTURADOS
    sendToBackend(pass) {
      this.$axios
        .post(Const.backend + "updatePassword.php", pass)
        .then((response) => {
          //CAPTURAR ERRORES
          this.showSuccessMessage("Los datos fueron actualizados con éxito");
          this.$router.push("/");
        })
        .catch((_) => console.log(_))
        .finally((_) => this.$q.loading.hide());
    },
    submit(evt) {
      if (this.pass.password == this.pass2) {
        this.$q.loading.show();
        this.sendToBackend(this.pass);
      } else {
        this.showErrorMessage("Las contraseñas no coinciden");
      }
    },
  },
  mounted() {
    if (this.$store.state.user.id) {
      //OBTENER DATOS DE APODERADO
      this.$axios
        .post(Const.backend + "getApoderado.php", {
          kven: this.$store.state.user.id,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.pass = response.data[0];
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }
  },
};
</script>

<style>
</style>