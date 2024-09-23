<template>
  <q-card class="full-width">
    <q-card-section class="row">
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
      <div class="text-h6 subtitulo">
        ¿Confirmas que a {{ nombre_hijo }} le suministraron la siguiente vacuna?
      </div>
    </q-card-section>
    <!-- <br/> -->
    <q-form
      @submit.prevent="submit"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="nope"
      spellcheck="false"
    >
      <q-card-section class="row">
        <div class="text-h6 subtitulo">
          {{ nombre_vacuna }} de {{ vacuna.tipo_vacuna }}
        </div>
      </q-card-section>

      <q-card-actions class="row">
        <q-btn class="col btnStyle q-mb-md" label="Agregar" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import Const from "../../assets/const.js";
import { format } from 'quasar'
const { capitalize } = format

export default {
  data() {
    return {
      nombre_hijo: "",
      nombre_vacuna: "",
      vacuna: {
        id_vacuna: "",
        id_hijo: "",
        tipo_vacuna: "",
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
      return Const.backend + "addVacunaMinsal.php";
    },
    sendToBackend(vacuna) {
      this.$axios
        .post(Const.backend + "addVacunaMinsal.php", vacuna)
        .then((response) => {
          if (response.data instanceof Object) {
            if (response.data.id == -1) {
              this.showErrorMessage(response.data.message);
            } else {
              this.showSuccessMessage("La vacuna fue registrado con éxito");
              this.$emit("close");
              this.$emit("update");
            }
          } else this.showErrorMessage("Error desconocido:" + response.data);
        })
        .catch((_) => console.log(_))
        .finally((_) => this.$q.loading.hide());
    },
    submit(evt) {
      this.$q.loading.show();
      this.sendToBackend(this.vacuna);
    },
  },
  mounted() {
    if (this.$store.state.user.id) {
      //OBTENER DATOS DE HIJOS
      this.$axios
        .post(Const.backend + "getHijosByRut.php", {
          kven: this.$store.state.user.idHijo,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.vacuna.id_hijo = response.data[0].id;
            this.nombre_hijo = capitalize(response.data[0].nombre);
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }
    this.nombre_vacuna = this.$store.state.user.nombreVMinsal;
    this.vacuna.tipo_vacuna = this.$store.state.user.tipoVMinsal;
    this.vacuna.id_vacuna = this.$store.state.user.idVMinsal;
  },
};
</script>
