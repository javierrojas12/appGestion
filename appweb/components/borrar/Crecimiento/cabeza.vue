<template>
  <div id="chart">
    <div class="row q-mb-md">
      <q-select
        outlined
        dense
        class="col fontStyle"
        :bottom-slots="false"
        hide-bottom-space
        v-model="edad"
        :options="['0 a 12 meses', '1 a 2 años', '2 a 3 años']"
      />
    </div>

    <div v-if="edad === '0 a 12 meses'">
      <q-item-label class="fontStyle">De 0 a 12 meses</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="cabezaRecienNacido"
      ></apexchart>
    </div>

    <div v-if="edad === '1 a 2 años'">
      <q-item-label class="fontStyle">De 1 a 2 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="cabezaUnAnio"
      ></apexchart>
    </div>

    <div v-if="edad === '2 a 3 años'">
      <q-item-label class="fontStyle">De 2 a 3 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="cabezaDosAnios"
      ></apexchart>
    </div>
  </div>
</template>


<script>
import Const from "../../assets/const.js";

export default {
  name: "Vue",
  sexo: "",
  data() {
    return {
      guardarId: "",
      tab: "cabeza",
      edad: "",
      cabezaRecienNacido: [
        {
          name: "Mi cabeza",
          data: [],
        },
      ],
      cabezaUnAnio: [
        {
          name: "Mi cabeza",
          data: [],
        },
      ],
      cabezaDosAnios: [
        {
          name: "Mi cabeza",
          data: [],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        legend: {
          tooltipHoverFormatter: function (val, opts) {
            return (
              val +
              " - " +
              opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
              ""
            );
          },
        },
        markers: {
          size: 0,
          hover: {
            sizeOffset: 6,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
          width: [5, 2],
        },
        title: {
          text: "Mensual",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
          ],
        },
      },
    };
  },
  methods: {
    cargarDatos(tempArray) {
      try {
        /* CREO UNA VARIABLE CON LOS ARRAYS A CARGAR*/
        var arrEdad = [
          this.cabezaRecienNacido,
          this.cabezaUnAnio,
          this.cabezaDosAnios,
        ];

        /* RECORRO LOS DATOS OBTENIDOS */
        for (var i = 0; i < tempArray.length; i++) {
          /* RECORRO LOS AÑOS DESDE 0 HASTA 3 AÑOS */
          for (var e = 0; e < 4; e++) {
            /* EVALUO SI LA EDAD DEL DATO OBTENIDO ES IGUAL A LA RECORRIDA Y QUE SEA MENOR A 2 AÑOS */
            if (tempArray[i].edad === e && tempArray[i].edad < 3) {
              /* RECORRO LOS MESES DESDE 0 HASTA 11 MESES */
              for (var a = 0; a < 12; a++) {
                /* EVALUO SI EL MES DEL DATO OBTENIDO ES IGUAL AL RECORRIDO */
                if (tempArray[i].mes === a) {
                  /* CARGO EL DATO EN EL ARRAY Y MES CORRESPONDIENTE */
                  arrEdad[e][0].data[a] = parseInt(tempArray[i].medida);
                } else {
                  if (!arrEdad[e][0].data[a]) {
                    /* SI EL MES NO TIENE DATOS, LO ASIGNO A 0 */
                    arrEdad[e][0].data[a] = 0;
                  }
                }
              }
            }
            /* EVALUO QUE LA EDAD SEA MAYOR A 0 Y MENOR A 4, QUE EL MES SEA 0 Y CARGO LOS MESES 12*/
            if (
              tempArray[i].edad === e &&
              tempArray[i].edad > 0 &&
              tempArray[i].edad < 4 &&
              tempArray[i].mes === 0
            ) {
              /* LE RESTO 1 A LA VARIABLE PARA CARGAR EL MES 12 DE LA EDAD ANTERIOR */
              var temp = e - 1;
              /* CARGO EL MES 12 DE CADA ARRAY */
              arrEdad[temp][0].data[12] = parseInt(tempArray[i].medida);
              /* RECORRO LOS OTROS MESES DEL AÑO */
              for (var a = 0; a < 12; a++) {
                if (!arrEdad[temp][0].data[a]) {
                  /* SI EL MES NO TIENE DATOS, LO ASIGNO A 0 */
                  arrEdad[temp][0].data[a] = 0;
                }
              }
            }
          }
        }
        if (this.sexo == "Femenino") {
          this.cabezaRecienNacido = [
            {
              name: "Mi cabeza",
              data: this.cabezaRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [
                31.5, 34.2, 35.8, 37, 38, 38.8, 39.5, 40.2, 40.6, 41, 41.5,
                41.8, 42.2,
              ],
            },
            {
              name: "-1 DE",
              data: [
                32.8, 35.4, 37, 38.2, 39.4, 40.2, 40.8, 41.5, 42, 42.5, 42.8,
                43.2, 43.5,
              ],
            },
            {
              name: "Mediana",
              data: [
                34, 36.5, 38.4, 39.5, 40.5, 41.5, 42.2, 42.8, 43.4, 43.8, 44.2,
                44.5, 44.8,
              ],
            },
            {
              name: "+1 DE",
              data: [
                35, 37.5, 39.5, 40.8, 41.8, 42.6, 43.5, 44, 44.6, 45.2, 45.5,
                45.8, 46.2,
              ],
            },
            {
              name: "+2 DE",
              data: [
                36.4, 38.8, 40.6, 42, 43, 44, 44.8, 45.4, 46, 46.5, 46.8, 47.2,
                47.6,
              ],
            },
          ];
          this.cabezaUnAnio = [
            {
              name: "Mi cabeza",
              data: this.cabezaUnAnio[0].data,
            },
            {
              name: "-2 DE",
              data: [
                42.2, 42.4, 42.6, 42.8, 43, 43.2, 43.4, 43.6, 43.8, 43.9, 44.1,
                44.2, 44.4,
              ],
            },
            {
              name: "-1 DE",
              data: [
                43.5, 43.8, 44, 44.2, 44.5, 44.6, 44.8, 45, 45.2, 45.4, 45.5,
                45.6, 45.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                44.8, 45.2, 45.4, 45.6, 45.8, 46, 46.2, 46.4, 46.5, 46.6, 46.8,
                47, 47.2,
              ],
            },
            {
              name: "+1 DE",
              data: [
                46.2, 46.5, 46.8, 47, 47.2, 47.4, 47.6, 47.8, 47.9, 48.1, 48.3,
                48.4, 48.5,
              ],
            },
            {
              name: "+2 DE",
              data: [
                47.5, 47.8, 48.2, 48.4, 48.6, 48.8, 49, 49.2, 49.4, 49.5, 49.6,
                49.8, 49.9,
              ],
            },
          ];
          this.cabezaDosAnios = [
            {
              name: "Mi cabeza",
              data: this.cabezaDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                45.8, 45.9, 46, 46.2, 46.3, 46.4, 46.5, 46.6, 46.7, 46.8, 46.9,
                47, 47.1,
              ],
            },
            {
              name: "-1 DE",
              data: [
                44.4, 44.5, 44.6, 44.8, 44.9, 45, 45.1, 45.2, 45.3, 45.4, 45.5,
                45.6, 45.7,
              ],
            },
            {
              name: "Mediana",
              data: [
                47.2, 47.3, 47.4, 47.5, 47.6, 47.7, 47.9, 48, 48.1, 48.2, 48.3,
                48.4, 48.5,
              ],
            },
            {
              name: "+1 DE",
              data: [
                48.5, 48.6, 48.7, 48.9, 49.1, 49.2, 49.3, 49.4, 49.5, 49.6,
                49.7, 49.8, 49.9,
              ],
            },
            {
              name: "+2 DE",
              data: [
                49.9, 50.1, 50.2, 50.3, 50.5, 50.6, 50.7, 50.8, 50.9, 51, 51.1,
                51.2, 51.3,
              ],
            },
          ];
        } else {
          this.cabezaRecienNacido = [
            {
              name: "Mi cabeza",
              data: this.cabezaRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [
                32, 34.9, 36.8, 38.1, 39.2, 40.1, 40.8, 41.5, 42, 42.4, 42.8,
                43.2, 43.4,
              ],
            },
            {
              name: "-1 DE",
              data: [
                33.2, 36, 37.9, 39.2, 40.4, 41.3, 42, 42.6, 43.3, 43.7, 44.1,
                44.4, 44.7,
              ],
            },
            {
              name: "Mediana",
              data: [
                34.5, 37.4, 39, 40.5, 41.5, 42.5, 43.3, 43.9, 44.5, 45, 45.4,
                45.7, 46,
              ],
            },
            {
              name: "+1 DE",
              data: [
                35.9, 38.4, 40.3, 41.7, 42.8, 43.7, 44.5, 45.2, 45.7, 46.2,
                46.6, 47, 47.3,
              ],
            },
            {
              name: "+2 DE",
              data: [
                37, 39.5, 41.5, 42.8, 44, 44.9, 45.7, 46.4, 47, 47.5, 47.9,
                48.3, 48.6,
              ],
            },
          ];
          this.cabezaUnAnio = [
            {
              name: "Mi cabeza",
              data: this.cabezaUnAnio[0].data,
            },
            {
              name: "-2 DE",
              data: [
                43.4, 43.7, 43.9, 44.2, 44.3, 44.5, 44.7, 44.8, 45, 45.1, 45.3,
                45.4, 45.5,
              ],
            },
            {
              name: "-1 DE",
              data: [
                44.7, 45, 45.3, 45.5, 45.7, 45.8, 46, 46.2, 46.3, 46.5, 46.6,
                46.7, 46.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                46, 46.3, 46.5, 46.8, 47, 47.1, 47.3, 47.5, 47.6, 47.8, 48,
                48.1, 48.3,
              ],
            },
            {
              name: "+1 DE",
              data: [
                47.3, 47.6, 47.8, 48.1, 48.3, 48.5, 48.7, 48.8, 49, 49.2, 49.3,
                49.4, 49.6,
              ],
            },
            {
              name: "+2 DE",
              data: [
                48.6, 48.8, 49.2, 49.4, 49.6, 49.8, 50, 50.2, 50.3, 50.5, 50.7,
                50.8, 50.9,
              ],
            },
          ];
          this.cabezaDosAnios = [
            {
              name: "Mi cabeza",
              data: this.cabezaDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                45.5, 45.6, 45.7, 45.8, 45.9, 46, 46.1, 46.2, 46.3, 46.4, 46.5,
                46.6, 46.7,
              ],
            },
            {
              name: "-1 DE",
              data: [
                46.8, 47, 47.1, 47.2, 47.3, 47.4, 47.5, 47.6, 47.7, 47.8, 47.9,
                48, 48.1,
              ],
            },
            {
              name: "Mediana",
              data: [
                48.3, 48.4, 48.5, 48.6, 48.7, 48.8, 48.9, 49, 49.1, 49.2, 49.3,
                49.4, 49.5,
              ],
            },
            {
              name: "+1 DE",
              data: [
                49.6, 49.7, 49.8, 49.9, 50.1, 50.2, 50.3, 50.4, 50.5, 50.6,
                50.7, 50.8, 50.9,
              ],
            },
            {
              name: "+2 DE",
              data: [
                50.9, 51.1, 51.2, 51.3, 51.4, 51.6, 51.7, 51.8, 51.9, 52, 52.1,
                52.2, 52.3,
              ],
            },
          ];
        }
      } catch (e) {
        console.log("ERROR en cargarDatos.", e);
      }
    },
  },
  mounted() {
    if (this.$store.state.user.id) {
      if (this.$store.state.user.edad === 0) {
        this.edad = "0 a 12 meses";
      } else if (this.$store.state.user.edad === 1) {
        this.edad = "1 a 2 años";
      } else if (this.$store.state.user.edad >= 2) {
        this.edad = "2 a 3 años";
      }

      //OBTENER DATOS DE HIJOS
      this.$axios
        .post(Const.backend + "getHijosByRut.php", {
          kven: this.$store.state.user.idHijo,
        })
        .then((response) => {
          if (Array.isArray(response.data)) {
            this.guardarId = response.data[0].id;
            this.sexo = response.data[0].sexo;

            //OBTENER CABEZA CRECIMIENTO
            this.$axios
              .post(Const.backend + "getCrecimiento.php", {
                kven: this.guardarId,
                que_mediste: "Tamaño cabeza",
              })
              .then((response) => {
                if (Array.isArray(response.data)) {
                  this.cargarDatos(response.data);
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


<style >
.btnCss {
  border-radius: unset;
  display: block;
  width: 100%;
}
.q-btn__wrapper:before {
  box-shadow: none;
}
text,
.SvgjsText1593 {
  font-family: "Nunito-Regular" !important;
}
.apexcharts-menu-item {
  font-family: "Nunito-Regular" !important;
}
</style>