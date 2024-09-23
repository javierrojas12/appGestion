<template>
  <!-- FORM DATOS DE USUARIO APODERADO -->
  <q-form
    @submit.prevent="submit"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="nope"
    spellcheck="false"
  >
    <q-card-section>
      <div class="text-h6 titulo items-center">
        Mi Perfil
        <q-btn
          icon="edit"
          flat
          round
          dense
          @click="showApoderado = !showApoderado"
        />
        <h5 class="fontStyle q-ma-none black">
          Revisa y modifica los datos de tu perfil aquí.
        </h5>
      </div>
    </q-card-section>
    <q-separator />

    <!-- '**************************** DATOS USUARIO **************************' -->

    <!-- Nombre -->
    <q-card-section v-if="showApoderado">
      <div class="text-h6 subtitulo">Nombre</div>
      <div class="row">
        <q-input
          autofocus
          outlined
          dense
          :bottom-slots="false"
          hide-bottom-space
          class="col-6"
          v-model="user.nombre"
          label="Nombre"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Ingresa tu nombre']"
        />
        <q-separator vertical spaced="sm" />

        <!-- Apellido -->
        <q-input
          outlined
          dense
          :bottom-slots="false"
          hide-bottom-space
          class="col"
          v-model="user.apellidos"
          label="Apellidos"
          lazy-rules
          :rules="[(val) => (val && val.length > 0) || 'Ingresa tus apellidos']"
        />
      </div>
      <!-- RUT -->
      <div class="text-h6 subtitulo q-mt-md">Rut</div>
      <q-item-label v-if="mirut"> {{ mirut }}</q-item-label>
      <div class="row" v-else>
        <q-input
          class="col"
          outlined
          dense
          :bottom-slots="false"
          v-model="user.rut"
          hide-bottom-space
          reverse-fill-mask
          mask="X-X"
          lazy-rules
          :rules="[
            (val) =>
              (val && val.length > 0 && $RUT.validaRut(val)) ||
              'Ingresa tu rut',
          ]"
        />
      </div>
      <!-- Correo -->
      <div class="text-h6 subtitulo q-mt-md">Correo</div>
      <q-item-label class="fontStyle"> {{ user.correo }}</q-item-label>

      <q-btn
        label="Guardar"
        class="full-width q-mt-md q-mb-sm btnStyle"
        type="submit"
      />
      <q-separator spaced="md" />
    </q-card-section>
  </q-form>
</template>

<script>
import Const from "../../assets/const.js";
import { mapActions } from "vuex";

export default {
  data() {
    return {
      showApoderado: false,
      mirut: "",
      user: {
        id: "",
        nombre: "",
        apellidos: "",
        rut: "",
        correo: "",
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
      return Const.backend + "updateApoderado.php";
    },
    // ACTUALIZAR APODERADO
    // ACTUALIZA CORRECTAMENTE, PERO HAY QUE REVISAR LOS IF|ELSE PORQUE NO ESTÁN BIEN ESTRUCTURADOS
    sendToBackend(user) {
      this.$axios
        .post(Const.backend + "updateApoderado.php", user)
        .then((response) => {
          if (response.data == 1) {
            this.showSuccessMessage("Los datos fueron actualizados con éxito");
            this.mirut = this.user.rut;
          } else {
            this.showErrorMessage("El rut ingresado ya existe");
          }
        })
        .catch((_) => console.log(_))
        .finally((_) => this.$q.loading.hide());
    },
    submit(evt) {
      this.user.nombre = this.user.nombre.trim();
      this.user.apellidos = this.user.apellidos.trim();
      this.$q.loading.show();
      this.sendToBackend(this.user);
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
            this.user = response.data[0];
            this.mirut = response.data[0]["rut"];
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }
  },
};
</script>

<style>
</style>