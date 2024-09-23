<template>
  <q-card class="full-width">
    <q-card-section class="row">
      <div class="text-h6 titulo">Nueva Nota</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <q-card-section>
        <div class="text-h6 fontStyle">Nota</div>

        <div class="row q-mb-sm">
          <q-input
            autofocus
            class="col"
            v-model="notas.comentario"
            outlined
            type="textarea"
            label="Escribe aquí..."
            :rules="[(val) => (val && val.length > 0) || 'Ingresa tu nota']"
          />
        </div>
        <div class="text-h6 fontStyle">Fecha</div>

        <div class="row q-mb-sm">
          <q-input
            type="date"
            outlined
            dense
            :bottom-slots="false"
            v-model="notas.create_time"
            hide-bottom-space
            class="col"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Ingresa la fecha']"
          />
        </div>
      </q-card-section>

      <q-card-actions class="row justify-center">
        <q-btn label="Agregar" class="col btnStyle q-ma-sm" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import Const from "../assets/const.js";

export default {
  data() {
    return {
      notas: {
        comentario: "",
        create_time: "",
        creado_por: "",
        ID_creador: "",
        apoderado_ID: "",
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
      return Const.backend + "addNotas.php";
    },
    sendToBackend(notas) {
      this.$axios
        .post(Const.backend + "addNotas.php", notas)
        .then((response) => {
          if (response.data instanceof Object) {
            if (response.data.id == -1) {
              this.showErrorMessage(response.data.message);
            } else {
              this.showSuccessMessage("Los nota fue creada con éxito");
              this.$emit("close");
              this.$emit("update");
            }
          } else this.showErrorMessage("Error desconocido:" + response.data);
        })
        .catch((_) => console.log(_))
        .finally((_) => this.$q.loading.hide());
    },
    submitForm(evt) {
      this.$q.loading.show();
      this.notas.comentario = this.notas.comentario.trim();
      this.sendToBackend(this.notas);
    },
  },
  mounted() {
    if (this.$store.state.user.id) {
      this.notas.creado_por = "Apoderado";
      this.notas.ID_creador = this.$store.state.user.id;
      this.notas.apoderado_ID = this.$store.state.user.id;
    }
  },
};
</script>
