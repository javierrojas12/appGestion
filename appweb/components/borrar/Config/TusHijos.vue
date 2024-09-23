<template>
  <q-form
    @submit.prevent="submitHijo"
    autocorrect="off"
    autocapitalize="off"
    autocomplete="nope"
    spellcheck="false"
  >
    <q-card-section>
      <div class="text-h6 titulo">
        Tus hijos
        <q-btn icon="edit" flat round dense @click="show = !show" />
        <h5 class="fontStyle q-ma-none black">
          Aquí puedes modificar los datos de todos tus hijos. Para agregar un
          nuevo hijo, haz clic aquí.
        </h5>
        <q-btn
          to="/Agregar-hijo"
          label="Agregar nuevo hijo"
          icon="add"
          class="full-width q-mt-md q-mb-sm btnStyle"
        />
      </div>
    </q-card-section>

    <q-separator />

    <q-list separator v-if="show">
      <div v-if="btn == 'mostrar'" class="row justify-center">
        <q-item v-for="hijo in hijos" :key="hijo.rut">
          <div class="column">
            <!-- '******************************* FORM HIJO *********************** -->
            <q-card-section>
              <div class="row">
                <q-input
                  outlined
                  dense
                  :bottom-slots="false"
                  hide-bottom-space
                  class="col-6"
                  v-model="hijo.nombre"
                  label="Nombre"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresa el nombre',
                  ]"
                />
                <q-separator vertical spaced="sm" />
                <q-input
                  outlined
                  dense
                  :bottom-slots="false"
                  hide-bottom-space
                  class="col"
                  v-model="hijo.apellidos"
                  label="Apellidos"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresa los apellidos',
                  ]"
                />
              </div>

              <div class="row q-mt-lg">
                <q-input
                  type="date"
                  outlined
                  dense
                  :bottom-slots="false"
                  hide-bottom-space
                  class="col"
                  v-model="hijo.fecha_nacimiento"
                  lazy-rules
                  :rules="[
                    (val) =>
                      (val && val.length > 0) ||
                      'Ingresa la fecha de nacimiento',
                  ]"
                />
              </div>

              <q-select
                outlined
                dense
                class="col q-mt-lg"
                :bottom-slots="false"
                hide-bottom-space
                v-model="hijo.sexo"
                :options="['Femenino', 'Masculino']"
                label="Sexo"
                :rules="[
                  (val) => (val && val.length > 0) || 'Selecciona el sexo',
                ]"
              />

              <div class="row q-mt-lg">
                <q-input
                  outlined
                  type="number"
                  dense
                  :bottom-slots="false"
                  hide-bottom-space
                  v-model="hijo.peso"
                  class="col-6"
                  label="Peso"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresa el peso',
                  ]"
                />
                <q-separator vertical spaced="sm" />
                <q-input
                  outlined
                  dense
                  :bottom-slots="false"
                  hide-bottom-space
                  v-model="hijo.altura"
                  class="col"
                  label="Altura"
                  lazy-rules
                  :rules="[
                    (val) => (val && val.length > 0) || 'Ingresa la altura',
                  ]"
                />
              </div>

              <!-- '**************************** Alergias **************************' -->
              <q-input
                outlined
                dense
                class="q-mt-lg"
                :bottom-slots="false"
                hide-bottom-space
                v-model="hijo.alergias"
                type="textarea"
                label="Alergias"
                lazy-rules
              />
            </q-card-section>
            <q-separator spaced="sm" />
          </div>

          <!-- '*************************** BOTONERA ***********************' -->
        </q-item>
        <div class="row full-width">
          <!-- <q-card-section class="row"> -->
          <q-btn
            label="Modificar hijos"
            class="col q-ma-md q-mb-lg btnStyle"
            type="submit"
          />
          <!-- </q-card-section> -->
        </div>
      </div>
      <div v-else class="row justify-center">
        <h5 class="fontStyle q-ma-none q-pt-md q-pb-sm black">
          No has registrado a tus hijos aún.
        </h5>
      </div>
      <q-separator spaced="md" />
    </q-list>
  </q-form>
</template>


<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
      btn: "",
      show: false,
      error_fecha: false,
      hijos: [
        {
          nombre: "",
          apellidos: "",
          rut: "",
          fecha_nacimiento: null,
          sexo: null,
          peso: "",
          altura: "",
          alergias: "",
          apoderado_id: "",
        },
      ],
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
      return Const.backend + "updateHijo.php";
    },

    //ACTUALIZAR HIJO
    sendHijoToBackend(hijos) {
      if (this.error_fecha == false) {
        this.$q.loading.show();

        this.$axios
          .post(Const.backend + "updateHijo.php", hijos)
          .then((response) => {
            if (response.data instanceof Object) {
              if (response.data.id == -1) {
                this.showErrorMessage(response.data.message);
              } else {
                this.showSuccessMessage(
                  "Los datos fueron actualizados con éxito"
                );
              }
            } else {
              this.showSuccessMessage(
                "Los datos fueron actualizados con éxito"
              );
              this.actualizar();
            }
          })
          .catch((_) => console.log(_))
          .finally((_) => this.$q.loading.hide());
      } else {
        this.showErrorMessage(
          "La fecha de nacimiento no puede ser mayor al día actual"
        );
      }
    },
    submitHijo(evt) {
      this.error_fecha = false;
      let i = 0;
      while (i < this.hijos.length) {
        this.hijos[i].nombre = this.hijos[i].nombre.trim();
        this.hijos[i].apellidos = this.hijos[i].apellidos.trim();
        this.hijos[i].altura = this.hijos[i].altura.trim();
        if (this.hijos[i].alergias) {
          this.hijos[i].alergias = this.hijos[i].alergias.trim();
        }
        this.hijos[i].apoderado_id = this.$store.state.user.id;

        this.validarFecha(this.hijos[i].fecha_nacimiento);
        i++;
      }
      this.sendHijoToBackend(this.hijos);
    },
    validarFecha(val) {
      this.fechaHoy = new Date();
      var miFecha = new Date(val);
      const dia = miFecha.getDate() + 1;
      const mes = miFecha.getMonth() + 1;
      this.miFecha = miFecha.getFullYear() + "/" + mes + "/" + dia;
      this.fechaHoy =
        this.fechaHoy.getFullYear() +
        "/" +
        (this.fechaHoy.getMonth() + 1) +
        "/" +
        this.fechaHoy.getDate();

      if (
        Date.parse(this.fechaHoy) == Date.parse(this.miFecha) ||
        Date.parse(this.fechaHoy) > Date.parse(this.miFecha)
      ) {
        if (this.error_fecha !== true) {
          return (this.error_fecha = false);
        }
      } else {
        return (this.error_fecha = true);
      }
    },

    actualizar() {
      if (this.$store.state.user.id) {
        //OBTENER DATOS DE HIJOS
        this.$axios
          .post(Const.backend + "getHijos.php", {
            kven: this.$store.state.user.id,
          })
          .then((response) => {
            if (Array.isArray(response.data) && response.data.length > 0) {
              this.hijos = response.data;
              this.btn = "mostrar";
            }
          })
          .catch(Const.ErrorHandler.bind(this, this));
      }
    },
  },

  mounted() {
    if (this.$store.state.user.id) {
      this.actualizar();
    }
  },
};
</script>

<style>
</style>