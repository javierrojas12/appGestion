<template>
  <q-item class="logo-celeste" clickable>
    <q-item-section>
      <q-item-label class="subtitulo" top>
        <div class="row">
          <div class="col-11">
            <strong>Lactancia materna</strong>
          </div>
          <div class="col-1">
            <q-btn @click="agregar('Lactancia')" icon="add" flat round dense />
          </div>
        </div>
      </q-item-label>

      <!-- DESCRIPCIÓN -->
      <q-list
        class="q-mb-sm"
        v-for="lactancia in lactancias"
        :key="lactancia.ID"
      >
        <q-item-section>
          <q-item-label class="fontStyle">
            <strong>{{ lactancia.actividad }}</strong>
          </q-item-label>
        </q-item-section>

        <!-- FECHA -->
        <q-item-section side top>
          <div class="row">
            <div class="column justify-center">
              <q-icon class="q-mr-xs" name="event" size="18px" />
            </div>
            <div class="column">
              <q-item-label class="row justify-end fontStyle" caption>
                {{ obtenerHora(lactancia.fecha) }}
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <!-- Hora -->
        <q-item-section side top>
          <div class="row">
            <div class="column">
              <q-item-label class="row justify-end fontStyle" caption>
                {{ obtenerHora(lactancia.hasta) }}
              </q-item-label>
            </div>
          </div>
        </q-item-section>

        <!-- ANIMO -->
        <q-item-section side>
          <q-btn :icon="lactancia.animo" flat round dense />
        </q-item-section>

        <!-- IMAGEN -->
        <q-item-section v-if="lactancia.url">
          <q-img height="150px" width="150px" :src="lactancia.url" />
        </q-item-section>
      </q-list>
    </q-item-section>
  </q-item>
</template>

<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
      date: "",
      guardarId: "",
      lactancias: [
        {
          ID: "",
          actividad: "",
          tipo: "",
          fecha: "",
          hasta: "",
          animo: "",
          url: "",
          ID_hijo: "",
        },
      ],
    };
  },
  methods: {
    obtenerHora(fecha) {
      return fecha.substr(-8, 5);
    },
    agregar(nombre) {
      this.$router.push("/Momento-agregar");
      this.$store.commit("user/setMomento", nombre);
    },
    obtenerMes() {
      if (this.fechaHoy.getMonth() + 1 < 10) {
        this.mes = this.fechaHoy.getMonth() + 1;
        this.mes = "0" + this.mes;
      } else {
        this.mes = this.fechaHoy.getMonth() + 1;
      }
      return this.mes;
    },
    obtenerDia() {
      if (this.fechaHoy.getDate() < 10) {
        this.dia = "0" + this.fechaHoy.getDate();
      } else {
        this.dia = this.fechaHoy.getDate();
      }
      return this.dia;
    },
    cargarImagenes(lactancias) {
      for (var i = 0; i < lactancias.length; i++) {
        if (this.lactancias[i].url) {
          this.lactancias[i].url =
            this.$store.state.user.uploads + lactancias[i].url;
        }
      }
    },
  },
  mounted() {
    //OBTENER DÍA ACTUAL
    this.fechaHoy = new Date();
    this.fechaHoy =
      this.fechaHoy.getFullYear() +
      "-" +
      this.obtenerMes() +
      "-" +
      this.obtenerDia();
    this.date = this.fechaHoy;

    if (this.$store.state.user.id) {
      //OBTENER DATOS DE HIJOS
      this.$axios
        .post(Const.backend + "getHijosByRut.php", {
          kven: this.$store.state.user.idHijo,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.guardarId = response.data[0].id;

            //OBTENER REGISTRO LACTANCIA MOMENTOS
            this.$axios
              .post(Const.backend + "getMomentos.php", {
                kven: this.guardarId,
                tipo: "Lactancia",
                fecha: this.date,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.lactancias = response.data;
                  this.cargarImagenes(this.lactancias);
                }
              })
              .catch(Const.ErrorHandler.bind(this, this));
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }
  },
};
</script>
