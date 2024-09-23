<template>
  <q-card class="full-width">
    <q-card-section class="row">
      <div class="text-h6 subtitulo">Registrar Diente</div>
      <q-space />
      <q-btn v-close-popup flat round dense icon="close" />
    </q-card-section>

    <q-form
      @submit.prevent="submit"
      autocorrect="off"
      autocapitalize="off"
      autocomplete="nope"
      spellcheck="false"
    >
      <q-card-section>
        <div class="row q-mb-sm">
          <q-item-label class="fontStyle black">{{
            diente.posicion
          }}</q-item-label>
        </div>

        <q-separator horizontal spaced="md" />

        <q-item-label class="fontStyle black q-mt-md q-mb-sm">
          ¿Cuándo erupcionó este diente?
        </q-item-label>

        <div class="text-h6 fontStyle">Fecha</div>

        <div class="row q-mb-sm">
          <q-input
            type="date"
            outlined
            dense
            :bottom-slots="false"
            v-model="diente.fecha"
            hide-bottom-space
            class="col fontStyle"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'Ingrese fecha']"
          />
        </div>
      </q-card-section>

      <q-card-actions class="row justify-center">
        <q-btn class="col btnStyle q-ma-sm" label="Agregar" type="submit" />
      </q-card-actions>
    </q-form>
  </q-card>
</template>

<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
      diente: {
        ID: "",
        posicion: "",
        ID_hijo: "",
        fecha: "",
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
      return Const.backend + "addDiente.php";
    },
    validarFecha(val) {
      this.fechaHoy = new Date();
      var miFecha = new Date(val);
      const dia = miFecha.getDate() + 1;
      const mes = miFecha.getMonth() + 1;
      miFecha = miFecha.getFullYear() + "/" + mes + "/" + dia;
      this.fechaHoy =
        this.fechaHoy.getFullYear() +
        "/" +
        (this.fechaHoy.getMonth() + 1) +
        "/" +
        this.fechaHoy.getDate();

      if (
        Date.parse(this.fechaHoy) == Date.parse(miFecha) ||
        Date.parse(this.fechaHoy) > Date.parse(miFecha)
      ) {
        return true;
      } else {
        return false;
      }
    },
    sendToBackend(diente) {
      if (this.validarFecha(this.diente.fecha) === true) {
        this.$q.loading.show();

        this.$axios
          .post(Const.backend + "addDiente.php", diente)
          .then((response) => {
            if (response.data instanceof Object) {
              if (response.data.id == -1) {
                this.showErrorMessage(response.data.message);
              } else {
                this.showSuccessMessage("El diente fue registrado con éxito");
                this.$emit("close");
                this.$emit("update");
              }
            } else this.showErrorMessage("Error desconocido:" + response.data);
          })
          .catch((_) => console.log(_))
          .finally((_) => this.$q.loading.hide());
      } else {
        this.showErrorMessage(
          "La fecha de erupción no puede ser mayor al día actual"
        );
      }
    },
    submit(evt) {
      this.sendToBackend(this.diente);
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
            this.diente.ID_hijo = response.data[0].id;
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }

    this.diente.posicion = this.$store.state.user.posicion;
  },
};
</script>
