<template>
  <q-item>
    <!-------------------- MOSTRAR LISTA RECIÉN NACidO ---------------------------->
    <q-item-section>
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>Recién nacido</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="rnacido in rnacidos"
        :key="rnacido.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ rnacido.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="!rnacido.id"
                icon="check_box_outline_blank"
                @click="
                  agregar(rnacido.id_vacuna, rnacido.nombre, 'Recién Nacido')
                "
              >
              </q-btn>
              <q-btn
                v-else
                @click="eliminar('rnacido', rnacido.id)"
                icon="check_box"
              >
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA 2 MESES ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>2 meses</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="dos in dosmeses"
        :key="dos.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ dos.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="!dos.id"
                icon="check_box_outline_blank"
                @click="agregar(dos.id_vacuna, dos.nombre, '2 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar('2 meses',dos.id)" icon="check_box"> </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA 4 MESES ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>4 meses</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="cuatro in cuatromeses"
        :key="cuatro.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ cuatro.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="cuatro.id == ''"
                icon="check_box_outline_blank"
                @click="agregar(cuatro.id_vacuna, cuatro.nombre, '4 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar('4 meses',cuatro.id)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA 6 MESES ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>6 meses</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="seis in seismeses"
        :key="seis.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ seis.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="seis.id == ''"
                icon="check_box_outline_blank"
                @click="agregar(seis.id_vacuna, seis.nombre, '6 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar('6 meses',seis.id)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA 12 MESES ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>12 meses</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="doce in docemeses"
        :key="doce.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ doce.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="doce.id == ''"
                icon="check_box_outline_blank"
                @click="agregar(doce.id_vacuna, doce.nombre, '12 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar('12 meses',doce.id)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA 18 MESES ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>18 meses</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="dieciocho in dieciochomeses"
        :key="dieciocho.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ dieciocho.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="dieciocho.id == ''"
                icon="check_box_outline_blank"
                @click="
                  agregar(dieciocho.id_vacuna, dieciocho.nombre, '18 meses')
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar('18 meses',dieciocho.id)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA VACUNACIÓN ESCOLAR ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>Vacunación escolar</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="escolar in vacEscolar"
        :key="escolar.id_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ escolar.curso }} {{ escolar.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="escolar.id == ''"
                icon="check_box_outline_blank"
                @click="
                  agregar(
                    escolar.id_vacuna,
                    escolar.nombre,
                    'Vacunación Escolar'
                  )
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar('escolar',escolar.id)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <q-dialog v-model="mostrarAgregarVacuna">
        <agregar-vacuna
          @close="mostrarAgregarVacuna = false"
          @update="actualizar()"
        />
      </q-dialog>
    </q-item-section>
  </q-item>
</template>


<script>
import Const from "../../assets/const.js";

export default {
  data() {
    return {
      mostrarAgregarVacuna: false,
      rnacidos: [
        {
          id: "",
          id_vacuna: "1",
          nombre: "BCG",
          protege_contra: "Enfermedades invasoras por M. tuberculosis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "2",
          nombre: "Hepatitis B",
          protege_contra: "Hepatitis B",
          id_hijo: "",
        },
      ],
      dosmeses: [
        {
          id: "",
          id_vacuna: "3",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "4",
          nombre: "Neumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          id_hijo: "",
        },
      ],
      cuatromeses: [
        {
          id: "",
          id_vacuna: "5",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "6",
          nombre: "Antineumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          id_hijo: "",
        },
      ],
      seismeses: [
        {
          id: "",
          id_vacuna: "7",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          id_hijo: "",
        },
      ],
      docemeses: [
        {
          id: "",
          id_vacuna: "8",
          nombre: "Tres vírica",
          protege_contra: "Sarampión, Rubéola y Parotiditis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "9",
          nombre: "Meningococo A,C,W,Y",
          protege_contra: "Enfermedades invasoras por N. meningitidis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "10",
          nombre: "Neumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          id_hijo: "",
        },
      ],
      dieciochomeses: [
        {
          id: "",
          id_vacuna: "11",
          nombre: "Hexavalente",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "12",
          nombre: "Hepatitis A",
          protege_contra: "Hepatitis A",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "13",
          nombre: "Varicela",
          protege_contra: "Varicela",
          id_hijo: "",
        },
      ],
      vacEscolar: [
        {
          id: "",
          id_vacuna: "14",
          curso: "1° Básico",
          nombre: "Tres vírica",
          protege_contra: "Sarampión, Rubéola y Parotiditis",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "15",
          curso: "1° Básico",
          nombre: "DTP acelular",
          protege_contra: "Difteria, Tétanos, Tos Convulsiva",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "16",
          curso: "4° Básico",
          nombre: "VPH",
          protege_contra: "Infecciones por Virus Papiloma Humano",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "17",
          curso: "5° Básico",
          nombre: "VPH",
          protege_contra: "Infecciones por Virus Papiloma Humano",
          id_hijo: "",
        },
        {
          id: "",
          id_vacuna: "18",
          curso: "8° Básico",
          nombre: "DTP acelular",
          protege_contra: "Difteria, Tétanos, Tos Convulsiva",
          id_hijo: "",
        },
      ],
    };
  },
  methods: {
    actualizar() {
      //Cargar id Hijo
      this.$axios
        .post(Const.backend + "getVacunaMinsal.php", {
          kven: this.guardarId,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            for (let i = 0; i < response.data.length; i++) {
              for (let j = 0; j < 5; j++) {
                // Bucle interior
                if (
                  this.rnacidos[j] !== undefined &&
                  response.data[i].tipo === "Recién Nacido" &&
                  response.data[i].id_vacuna == this.rnacidos[j].id_vacuna
                ) {
                  this.rnacidos[j].id = response.data[i].id;
                  this.rnacidos[j].id_hijo = response.data[i].id_hijo;
                }
                if (
                  this.dosmeses[j] !== undefined &&
                  response.data[i].tipo === "2 meses" &&
                  response.data[i].id_vacuna == this.dosmeses[j].id_vacuna
                ) {
                  this.dosmeses[j].id = response.data[i].id;
                  this.dosmeses[j].id_hijo = response.data[i].id_hijo;
                } else if (
                  this.cuatromeses[j] !== undefined &&
                  response.data[i].tipo === "4 meses" &&
                  response.data[i].id_vacuna == this.cuatromeses[j].id_vacuna
                ) {
                  this.cuatromeses[j].id = response.data[i].id;
                  this.cuatromeses[j].id_hijo = response.data[i].id_hijo;
                } else if (
                  this.seismeses[j] !== undefined &&
                  response.data[i].tipo === "6 meses" &&
                  response.data[i].id_vacuna == this.seismeses[j].id_vacuna
                ) {
                  this.seismeses[j].id = response.data[i].id;
                  this.seismeses[j].id_hijo = response.data[i].id_hijo;
                } else if (
                  this.docemeses[j] !== undefined &&
                  response.data[i].tipo === "12 meses" &&
                  response.data[i].id_vacuna == this.docemeses[j].id_vacuna
                ) {
                  this.docemeses[j].id = response.data[i].id;
                  this.docemeses[j].id_hijo = response.data[i].id_hijo;
                } else if (
                  this.dieciochomeses[j] !== undefined &&
                  response.data[i].tipo === "18 meses" &&
                  response.data[i].id_vacuna == this.dieciochomeses[j].id_vacuna
                ) {
                  this.dieciochomeses[j].id = response.data[i].id;
                  this.dieciochomeses[j].id_hijo = response.data[i].id_hijo;
                } else if (
                  this.vacEscolar[j] !== undefined &&
                  response.data[i].tipo === "Vacunación Escolar" &&
                  response.data[i].id_vacuna == this.vacEscolar[j].id_vacuna
                ) {
                  this.vacEscolar[j].id = response.data[i].id;
                  this.vacEscolar[j].id_hijo = response.data[i].id_hijo;
                }
              }
            }
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    },
    showErrorMessage(message) {
      this.$q.notify({ color: "negative", message, icon: "report_problem" });
    },
    showSuccessMessage(message) {
      this.$q.notify({ color: "positive", message, icon: "check_circle" });
    },
    agregar(id_vacuna, nombre, tipo) {
      this.mostrarAgregarVacuna = true;
      this.$store.commit("user/setIdVMinsal", id_vacuna);
      this.$store.commit("user/setnombreVMinsal", nombre);
      this.$store.commit("user/setTipoVMinsal", tipo);
    },
    agregarExtra(id_vacuna, nombre, tipo, fecha) {
      this.mostrarAgregarVacuna = true;
      this.$store.commit("user/setIdVMinsal", id_vacuna);
      this.$store.commit("user/setnombreVMinsal", nombre);
      this.$store.commit("user/setTipoVMinsal", tipo);
      this.extrasPNI.fecha = fecha;
    },
    eliminar(array, id) {
      this.$q
        .dialog({
          title: "Confirmar",
          message: "¿Seguro que deseas eliminar esta vacuna?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.$axios
            .post(Const.backend + "deleteVacunaMinsal.php", {
              //mandar el id
              kven: id,
            })
            .then((response) => {
              this.showSuccessMessage("Se eliminó con éxito");
              this.actualizar();
              if (array === "rnacido") {
                for (let i = 0; i < this.rnacidos.length; i++) {
                  if (this.rnacidos[i].id == id) {
                    this.rnacidos[i].id = "";
                  }
                }
              } else if (array === "2 meses") {
                for (let i = 0; i < this.dosmeses.length; i++) {
                  if (this.dosmeses[i].id == id) {
                    this.dosmeses[i].id = "";
                  }
                }
              } else if (array === "4 meses") {
                for (let i = 0; i < this.cuatromeses.length; i++) {
                  if (this.cuatromeses[i].id == id) {
                    this.cuatromeses[i].id = "";
                  }
                }
              } else if (array === "6 meses") {
                for (let i = 0; i < this.seismeses.length; i++) {
                  if (this.seismeses[i].id == id) {
                    this.seismeses[i].id = "";
                  }
                }
              } else if (array === "12 meses") {
                for (let i = 0; i < this.docemeses.length; i++) {
                  if (this.docemeses[i].id == id) {
                    this.docemeses[i].id = "";
                  }
                }
              } else if (array === "18 meses") {
                for (let i = 0; i < this.dieciochomeses.length; i++) {
                  if (this.dieciochomeses[i].id == id) {
                    this.dieciochomeses[i].id = "";
                  }
                }
              } else if (array === "escolar") {
                for (let i = 0; i < this.vacEscolar.length; i++) {
                  if (this.vacEscolar[i].id == id) {
                    this.vacEscolar[i].id = "";
                  }
                }
              }
            })
            .catch((_) => console.log(_))
            .finally((_) => this.$q.loading.hide());
        });
    },
  },
  components: {
    "agregar-vacuna": require("components/Vacunas/AgregarVacunaMinsal.vue")
      .default,
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
            this.actualizar();
          }
        })
        .catch(Const.ErrorHandler.bind(this, this));
    }
  },
};
</script>

<style>
.colorbg {
  background-color: #a2d7e2;
}
</style>