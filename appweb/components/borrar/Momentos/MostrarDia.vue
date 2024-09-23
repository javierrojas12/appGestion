<template>
  <q-card class="dia-width">
    <!-- LACTANCIA -->
    <q-item class="logo-celeste" clickable>
      <q-item-section>
        <q-item-label class="subtitulo" top>
          <strong>Lactancia materna</strong>
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

    <!-- COMIDA -->
    <q-item class="logo-mostaza" clickable>
      <q-item-section>
        <q-item-label class="subtitulo" top>
          <strong>Alimentación</strong>
        </q-item-label>

        <q-list class="q-mb-sm" v-for="comida in comidas" :key="comida.ID">
          <q-item-section>
            <q-item-label class="fontStyle">
              <strong>{{ comida.actividad }}</strong>
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="comida.fecha" side top>
            <div class="row">
              <div class="column justify-center">
                <q-icon class="q-mr-xs" name="event" size="18px" />
              </div>
              <div class="column">
                <q-item-label class="row justify-end fontStyle" caption>
                  {{ obtenerHora(comida.fecha) }}
                </q-item-label>
              </div>
            </div>
          </q-item-section>

          <q-item-section side>
            <q-btn :icon="comida.animo" flat round dense />
          </q-item-section>

          <q-item-section v-if="comida.url">
            <q-img height="150px" width="150px" :src="comida.url" />
          </q-item-section>
        </q-list>
      </q-item-section>
    </q-item>

    <!-- BAÑO -->
    <q-item class="logo-rosa" clickable>
      <q-item-section>
        <q-item-label class="subtitulo" top>
          <strong>Baño</strong>
        </q-item-label>

        <q-list class="q-mb-sm" v-for="bano in banos" :key="bano.ID">
          <q-item-section>
            <q-item-label class="fontStyle">
              <strong>{{ bano.actividad }}</strong>
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="bano.fecha" side top>
            <div class="row">
              <div class="column justify-center">
                <q-icon class="q-mr-xs" name="event" size="18px" />
              </div>
              <div class="column">
                <q-item-label class="row justify-end fontStyle" caption>
                  {{ obtenerHora(bano.fecha) }}
                </q-item-label>
              </div>
            </div>
          </q-item-section>

          <q-item-section side>
            <q-btn :icon="bano.animo" flat round dense />
          </q-item-section>

          <q-item-section v-if="bano.url">
            <q-img height="150px" width="150px" :src="bano.url" />
          </q-item-section>
        </q-list>
      </q-item-section>
    </q-item>

    <!-- SUEÑO -->
    <q-item class="logo-celeste" clickable>
      <q-item-section>
        <q-item-label class="subtitulo" top>
          <strong>Sueño</strong>
        </q-item-label>

        <q-list class="q-mb-sm" v-for="sueno in suenos" :key="sueno.ID">
          <q-item-section>
            <q-item-label class="fontStyle">
              <strong>{{ sueno.actividad }}</strong>
            </q-item-label>
          </q-item-section>

          <q-item-section v-if="sueno.fecha" side top>
            <div class="row">
              <div class="column justify-center">
                <q-icon class="q-mr-xs" name="event" size="18px" />
              </div>
              <div class="column">
                <q-item-label class="row justify-end fontStyle" caption>
                  {{ obtenerHora(sueno.fecha) }}
                </q-item-label>
              </div>
            </div>
          </q-item-section>

          <q-item-section v-if="sueno.hasta" side top>
            <div class="row">
              <div class="column">
                <q-item-label class="row justify-end fontStyle" caption>
                  {{ obtenerHora(sueno.hasta) }}
                </q-item-label>
              </div>
            </div>
          </q-item-section>

          <q-item-section side>
            <q-btn :icon="sueno.animo" flat round dense />
          </q-item-section>

          <q-item-section v-if="sueno.url">
            <q-img height="150px" width="150px" :src="sueno.url" />
          </q-item-section>
        </q-list>
      </q-item-section>
    </q-item>
  </q-card>
</template>

<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
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
      comidas: [
        {
          ID: "",
          actividad: "",
          tipo: "",
          fecha: "",
          animo: "",
          url: "",
          ID_hijo: "",
        },
      ],
      banos: [
        {
          ID: "",
          actividad: "",
          tipo: "",
          fecha: "",
          animo: "",
          url: "",
          ID_hijo: "",
        },
      ],
      suenos: [
        {
          ID: "",
          actividad: "",
          tipo: "",
          fecha: "",
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
    actualizarPage() {
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
                fecha: this.fecha,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.lactancias = response.data;
                  this.cargarImagenes(this.lactancias);
                }
              })
              .catch(Const.ErrorHandler.bind(this, this));

            //OBTENER REGISTRO COMIDAS MOMENTOS
            this.$axios
              .post(Const.backend + "getMomentos.php", {
                kven: this.guardarId,
                tipo: "Alimentación",
                fecha: this.fecha,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.comidas = response.data;
                  this.cargarImagenes(this.comidas);
                }
              })
              .catch(Const.ErrorHandler.bind(this, this));

            //OBTENER REGISTRO BAÑOS MOMENTOS
            this.$axios
              .post(Const.backend + "getMomentos.php", {
                kven: this.guardarId,
                tipo: "Baño",
                fecha: this.fecha,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.banos = response.data;
                  this.cargarImagenes(this.banos);
                }
              })
              .catch(Const.ErrorHandler.bind(this, this));

            //OBTENER REGISTRO SUEÑO MOMENTOS
            this.$axios
              .post(Const.backend + "getMomentos.php", {
                kven: this.guardarId,
                tipo: "Sueño",
                fecha: this.fecha,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.suenos = response.data;
                  this.cargarImagenes(this.suenos);
                }
              })
              .catch(Const.ErrorHandler.bind(this, this));
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    },
    cargarImagenes(datos) {
      for (var i = 0; i < datos.length; i++) {
        if (datos[i].url) {
          datos[i].url = this.$store.state.user.uploads + datos[i].url;
        }
      }
    },
  },
  mounted() {
    if (this.$store.state.user.dia) {
      this.fecha = this.$store.state.user.dia.replace("/", "-");
      this.fecha = this.fecha.replace("/", "-");
    }

    if (this.$store.state.user.id) {
      this.actualizarPage();
    }
  },
};
</script>

<style>
.dia-width {
  min-width: 90%;
}
</style>