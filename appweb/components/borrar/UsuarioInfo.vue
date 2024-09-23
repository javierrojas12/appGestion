<template>
  <div class="row full-width q-mt-xs">
    <div class="col-4">
      <q-btn to="/Cambiar-foto">
        <q-img
          :src="hijos.url"
          placeholder-src="~assets/icon-child.png"
          class="hijoImagen"
          width="85px"
          height="85px"
      /></q-btn>
    </div>
    <div class="col-8 q-pt-sm">
      <label class="black bold capitalize fontStyle"
        >{{ hijos.nombre }} {{ hijos.apellidos }}</label
      ><br />
      <label class="black bold fontStyle"> {{ hijos.rut }} </label><br />
      <label class="black bold fontStyle">
        {{ hijos.fecha_nacimiento }}
      </label>
    </div>
  </div>
</template>

<script>
import Const from "../assets/const.js";
import { mapActions } from "vuex";
import { format } from 'quasar'
const { capitalize } = format

export default {
  data() {
    return {
      hijos: {
        nombre: "",
        apellidos: "",
        rut: "",
        fecha_nacimiento: "",
        userImages: "",
        url: "",
      },
      url: "",
    };
  },
  mounted() {
    if (this.$store.state.user.idHijo == false) {
      this.$store.commit("user/setIdHijo", this.$route.params.id);
    }
    this.actualizar();
  },
  methods: {
    actualizar() {
      if (this.$store.state.user.id) {
        //OBTENER DATOS DE HIJOS
        this.$axios
          .post(Const.backend + "getHijosByRut.php", {
            kven: this.$store.state.user.idHijo,
          })
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.hijos = response.data[0];
              this.hijos.nombre = capitalize(this.hijos.nombre);
              this.hijos.apellidos = capitalize(this.hijos.apellidos);
              this.$store.commit("user/setIdHijo", this.hijos.rut);
              this.calcularedad(this.hijos.fecha_nacimiento);
              this.cargarImages(this.hijos);
            }
          })
          .catch(Const.ErrorHandler.bind(this, this));
      }
    },
    calcularedad(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var dhijo = birthDate.getDate() + 1;
      var dhoy = today.getDate();

      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      if (m < 1) {
        var dif = 12 + m;
      } else {
        dif = 0;
      }
      this.hijos.fecha_nacimiento = age;

      //Valida que el niño tenga 0 o más años y que los meses no estén en negativo
      if (this.hijos.fecha_nacimiento >= 0 && m >= 1) {
        this.hijos.fecha_nacimiento =
          this.hijos.fecha_nacimiento + " año(s) y " + m + " mes(es)";
      } else if (this.hijos.fecha_nacimiento >= 0 && m < 1) {
        //Valida que el niño tenga más de 0 años y que los meses estén en negativo

        if (dif == 12 && (dhijo < dhoy || dhijo == dhoy)) {
          //valida que la diferencia sea 12 y que el día del nacimiento sea menor o igual al día de hoy
          this.hijos.fecha_nacimiento = "";
          this.hijos.fecha_nacimiento = age + " año(s) y 0 mes(es)";
        } else if (dif == 12 && dhijo > dhoy) {
          this.hijos.fecha_nacimiento = "";
          age = age - 1;
          this.hijos.fecha_nacimiento = age + " año(s) y " + dif + " mes(es)";
        } else {
          this.hijos.fecha_nacimiento =
            this.hijos.fecha_nacimiento + " año(s) y " + dif + " meses";
        }
      }

      this.$store.commit("user/setEdad", age);
      return this.hijos.fecha_nacimiento;
    },
    cargarImages(hijos) {
      this.hijos.url = this.$store.state.user.uploads + hijos.url;
    },
  },
};
</script>
