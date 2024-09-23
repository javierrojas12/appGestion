<template>
  <q-item>
    <!-------------------- MOSTRAR LISTA RECIÉN NACIDO ---------------------------->
    <q-item-section>
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>Recién nacido</strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="rnacido in rnacidos"
        :key="rnacido.ID_vacuna"
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
                v-if="rnacido.ID == ''"
                icon="check_box_outline_blank"
                @click="
                  agregar(rnacido.ID_vacuna, rnacido.nombre, 'Recién Nacido')
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar(rnacido.ID)" icon="check_box">
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
        :key="dos.ID_vacuna"
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
                v-if="dos.ID == ''"
                icon="check_box_outline_blank"
                @click="agregar(dos.ID_vacuna, dos.nombre, '2 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar(dos.ID)" icon="check_box"> </q-btn>
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
        :key="cuatro.ID_vacuna"
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
                v-if="cuatro.ID == ''"
                icon="check_box_outline_blank"
                @click="agregar(cuatro.ID_vacuna, cuatro.nombre, '4 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar(cuatro.ID)" icon="check_box">
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
        :key="seis.ID_vacuna"
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
                v-if="seis.ID == ''"
                icon="check_box_outline_blank"
                @click="agregar(seis.ID_vacuna, seis.nombre, '6 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar(seis.ID)" icon="check_box">
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
        :key="doce.ID_vacuna"
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
                v-if="doce.ID == ''"
                icon="check_box_outline_blank"
                @click="agregar(doce.ID_vacuna, doce.nombre, '12 meses')"
              >
              </q-btn>
              <q-btn v-else @click="eliminar(doce.ID)" icon="check_box">
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
        :key="dieciocho.ID_vacuna"
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
                v-if="dieciocho.ID == ''"
                icon="check_box_outline_blank"
                @click="
                  agregar(dieciocho.ID_vacuna, dieciocho.nombre, '18 meses')
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar(dieciocho.ID)" icon="check_box">
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
        :key="escolar.ID_vacuna"
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
                v-if="escolar.ID == ''"
                icon="check_box_outline_blank"
                @click="
                  agregar(
                    escolar.ID_vacuna,
                    escolar.nombre,
                    'Vacunación Escolar'
                  )
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar(escolar.ID)" icon="check_box">
              </q-btn>
            </div>
          </div>
        </q-item-section>
      </q-list>

      <!-------------------- MOSTRAR LISTA VACUNAS EXTRA PNI ---------------------------->
      <q-item-label class="subtitulo colorbg q-pa-sm" top>
        <strong>Vacunas extra PNI </strong>
      </q-item-label>

      <q-list
        class="q-pt-sm q-mb-md"
        v-for="extra in extrasPNI"
        :key="extra.ID_vacuna"
      >
        <q-item-section>
          <div class="row">
            <div class="col-10">
              <q-item-label class="fontStyle">
                {{ extra.curso }} {{ extra.nombre }}
              </q-item-label>
            </div>
            <div class="col-2">
              <q-btn
                v-if="extra.ID == ''"
                icon="check_box_outline_blank"
                @click="
                  agregarExtra(
                    extra.ID_vacuna,
                    extra.nombre,
                    'Extra PNI',
                    extra.fecha
                  )
                "
              >
              </q-btn>
              <q-btn v-else @click="eliminar(extra.ID)" icon="check_box">
              </q-btn>
            </div>
          </div>
          <div class="row">
            <div class="row q-mb-sm">
              <q-input
                type="date"
                outlined
                dense
                :bottom-slots="false"
                v-model="extra.fecha"
                hide-bottom-space
                class="col fontStyle"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Ingrese fecha']"
              />
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
          ID: "",
          ID_vacuna: "1",
          nombre: "BCG",
          protege_contra: "Enfermedades invasoras por M. tuberculosis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "2",
          nombre: "Hepatitis B",
          protege_contra: "Hepatitis B",
          ID_hijo: "",
        },
      ],
      dosmeses: [
        {
          ID: "",
          ID_vacuna: "3",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "4",
          nombre: "Neumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          ID_hijo: "",
        },
      ],
      cuatromeses: [
        {
          ID: "",
          ID_vacuna: "5",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "6",
          nombre: "Antineumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          ID_hijo: "",
        },
      ],
      seismeses: [
        {
          ID: "",
          ID_vacuna: "7",
          nombre: "Hexavalante",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          ID_hijo: "",
        },
      ],
      docemeses: [
        {
          ID: "",
          ID_vacuna: "8",
          nombre: "Tres vírica",
          protege_contra: "Sarampión, Rubéola y Parotiditis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "9",
          nombre: "Meningococo A,C,W,Y",
          protege_contra: "Enfermedades invasoras por N. meningitidis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "10",
          nombre: "Neumococo",
          protege_contra: "Enfermedades invasoras por S. pneumoniae",
          ID_hijo: "",
        },
      ],
      dieciochomeses: [
        {
          ID: "",
          ID_vacuna: "11",
          nombre: "Hexavalente",
          protege_contra:
            "Hepatitis B, Difteria, Tétanos, Tos Convulsiva Enfermedades invasoras por H. influenzae tipo b (Hib) Poliomielitis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "12",
          nombre: "Hepatitis A",
          protege_contra: "Hepatitis A",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "13",
          nombre: "Varicela",
          protege_contra: "Varicela",
          ID_hijo: "",
        },
      ],
      vacEscolar: [
        {
          ID: "",
          ID_vacuna: "14",
          curso: "1° Básico",
          nombre: "Tres vírica",
          protege_contra: "Sarampión, Rubéola y Parotiditis",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "15",
          curso: "1° Básico",
          nombre: "DTP acelular",
          protege_contra: "Difteria, Tétanos, Tos Convulsiva",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "16",
          curso: "4° Básico",
          nombre: "VPH",
          protege_contra: "Infecciones por Virus Papiloma Humano",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "17",
          curso: "5° Básico",
          nombre: "VPH",
          protege_contra: "Infecciones por Virus Papiloma Humano",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "18",
          curso: "8° Básico",
          nombre: "DTP acelular",
          protege_contra: "Difteria, Tétanos, Tos Convulsiva",
          ID_hijo: "",
        },
      ],
      extrasPNI: [
        {
          ID: "",
          ID_vacuna: "19",
          curso: "",
          fecha: "",
          nombre: "Rotavirus",
          protege_contra: "",
          ID_hijo: "",
        },
        {
          ID: "",
          ID_vacuna: "20",
          curso: "",
          fecha: "",
          nombre: "Meningococo B",
          protege_contra: "",
          ID_hijo: "",
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
    agregar(id_vacuna, nombre, tipo) {
      this.mostrarAgregarVacuna = true;
      this.$store.commit("user/setIdVMinsal", id_vacuna);
      this.$store.commit("user/setnombreVMinsal", nombre);
      this.$store.commit("user/setTipoVMinsal", tipo);

      // this.$store.commit("user/setPosicion", nombre);
    },
    agregarExtra(id_vacuna, nombre, tipo, fecha) {
      this.mostrarAgregarVacuna = true;
      this.$store.commit("user/setIdVMinsal", id_vacuna);
      this.$store.commit("user/setnombreVMinsal", nombre);
      this.$store.commit("user/setTipoVMinsal", tipo);
      this.extrasPNI.fecha = fecha;
      i++;
    },
    eliminar(ID) {
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
              //mandar el ID
              kven: ID,
            })
            .then((response) => {
              this.showSuccessMessage("Se eliminó con éxito");
              this.actualizar();
            })
            .catch((_) => console.log(_))
            .finally((_) => this.$q.loading.hide());
        });
    },
    actualizar() {
      if (this.$store.state.user.id) {
        //OBTENER DATOS DE HIJOS
        this.$axios
          .post(Const.backend + "getHijosByRut.php", {
            kven: this.$store.state.user.idHijo,
          })
          .then((response) => {
            if (Array.isArray(response.data)) {
              this.guardarId = response.data[0].id;

              //OBTENER REGISTRO MINSAL  Recién Nacido
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "Recién Nacido",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.rnacidos.length) {
                      if (
                        this.rnacidos[i].ID_vacuna == response.data[i].id_vacuna
                      ) {
                        this.rnacidos[i].ID = response.data[i].id;
                        this.rnacidos[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  2 meses
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "2 meses",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.dosmeses.length) {
                      if (
                        this.dosmeses[i].ID_vacuna == response.data[i].id_vacuna
                      ) {
                        this.dosmeses[i].ID = response.data[i].id;
                        this.dosmeses[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  4 meses
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "4 meses",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.cuatromeses.length) {
                      if (
                        this.cuatromeses[i].ID_vacuna ==
                        response.data[i].id_vacuna
                      ) {
                        this.cuatromeses[i].ID = response.data[i].id;
                        this.cuatromeses[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  6 meses
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "6 meses",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.seismeses.length) {
                      if (this.seismeses[i].ID_vacuna == response.data[i].id_vacuna) {
                        this.seismeses[i].ID = response.data[i].id;
                        this.seismeses[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  12 meses
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "12 meses",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.docemeses.length) {
                      if (this.docemeses[i].ID_vacuna == response.data[i].id_vacuna) {
                        this.docemeses[i].ID = response.data[i].id;
                        this.docemeses[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  18 meses
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "18 meses",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.dieciochomeses.length) {
                      if (
                        this.dieciochomeses[i].ID_vacuna == response.data[i].id_vacuna
                      ) {
                        this.dieciochomeses[i].ID = response.data[i].id;
                        this.dieciochomeses[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));

              //OBTENER REGISTRO MINSAL  Vacunación Escolar
              this.$axios
                .post(Const.backend + "getVacunaMinsal.php", {
                  kven: this.guardarId,
                  tipo_vacuna: "Vacunación Escolar",
                })
                .then((response) => {
                  if (Array.isArray(response.data)) {
                    let i = 0;
                    while (i < this.vacEscolar.length) {
                      if (
                        this.vacEscolar[i].ID_vacuna == response.data[i].id_vacuna
                      ) {
                        this.vacEscolar[i].ID = response.data[i].id;
                        this.vacEscolar[i].ID_hijo = response.data[i].id_hijo;
                      }
                      i++;
                    }
                  }
                })
                .catch(Const.ErrorHandler.bind(this, this));
            }
          })
          .catch(Const.ErrorHandler.bind(this, this));
      }
    },
  },
  components: {
    "agregar-vacuna": require("components/Vacunas/AgregarVacunaMinsal.vue")
      .default,
  },
  mounted() {
    this.actualizar();
  },
};
</script>

<style>
.colorbg {
  background-color: #a2d7e2;
}
</style>