<template>
  <q-item clickable>
    <q-item-section>
      <q-item-label class="subtitulo" top>
        <strong>Agregar</strong>
        <q-btn
          round
          class="addNotes q-ma-sm"
          @click="agregar('Recuerdos')"
          icon="add"
        />
      </q-item-label>

      <div class="row q-mt-md justify-center">
        <q-list
          class="row q-mb-md"
          v-for="recuerdo in recuerdos"
          :key="recuerdo.ID"
        >
          <!-- IMAGEN -->
          <q-item-section class="col-12 column" v-if="recuerdo.url">
            <q-img
              class="img_recuerdo"
              width="90vw"
              height="70vw"
              :src="recuerdo.url"
            />
          </q-item-section>
        </q-list>
      </div>
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
      recuerdos: [
        {
          id: "",
          url: "",
          fecha: "",
          ID_hijo: "",
        },
      ],
    };
  },
  methods: {
    agregar(nombre) {
      this.$router.push("/Momento-agregar-imagen");
      this.$store.commit("user/setMomento", nombre);
    },
    cargarImagenes(recuerdos) {
      for (var i = 0; i < recuerdos.length; i++) {
        this.recuerdos[i].url = this.$store.state.user.uploads + recuerdos[i].url;
      }
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
            this.guardarId = response.data[0].id;
            //OBTENER REGISTRO COMIDAS MOMENTOS
            this.$axios
              .post(Const.backend + "getFotosRecuerdos.php", {
                kven: this.guardarId,
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.recuerdos = response.data;
                  this.cargarImagenes(this.recuerdos);
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
<style>
.img_recuerdo div {
  background-size: contain !important;
}
</style>