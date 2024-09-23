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
        :options="['0 a 12 meses', '1 a 2 años', '2 a 5 años', '5 a 10 años']"
      />
    </div>

    <div v-if="edad === '0 a 12 meses'">
      <q-item-label class="fontStyle">De 0 a 12 meses</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="pesoRecienNacido"
      ></apexchart>
    </div>

    <div v-if="edad === '1 a 2 años'">
      <q-item-label class="fontStyle">De 1 a 2 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="pesoUnAnio"
      ></apexchart>
    </div>

    <div v-if="edad === '2 a 5 años'">
      <q-item-label class="fontStyle">De 2 a 5 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsDos"
        :series="pesoDosAnios"
      ></apexchart>
    </div>

    <div v-if="edad === '5 a 10 años'">
      <q-item-label class="fontStyle">De 5 a 10 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsCinco"
        :series="pesoCincoAnios"
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
      tab: "peso",
      edad: "",
      pesoRecienNacido: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      pesoUnAnio: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      pesoDosAnios: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      pesoCincoAnios: [
        {
          name: "Mi peso",
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
      chartOptionsDos: {
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
          categories: ["2 años", "6", "3 años", "6", "4 años", "6", "5 años"],
        },
      },
      chartOptionsCinco: {
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
            "5 años",
            "6",
            "6 años",
            "6",
            "7 años",
            "6",
            "8 años",
            "6",
            "9 años",
            "6",
            "10 años",
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
          this.pesoRecienNacido,
          this.pesoUnAnio,
          this.pesoDosAnios,
        ];

        /* RECORRO LOS DATOS OBTENIDOS */
        for (var i = 0; i < tempArray.length; i++) {
          /* RECORRO LOS AÑOS DESDE 0 HASTA 2 AÑOS */
          for (var e = 0; e < 3; e++) {
            /* EVALUO SI LA EDAD DEL DATO OBTENIDO ES IGUAL A LA RECORRIDA Y QUE SEA MENOR A 2 AÑOS */
            if (tempArray[i].edad === e && tempArray[i].edad < 2) {
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
            /* EVALUO QUE LA EDAD SEA MAYOR A 0 Y MENOR A 3, QUE EL MES SEA 0 Y CARGO LOS MESES 12*/
            if (
              tempArray[i].edad === e &&
              tempArray[i].edad > 0 &&
              tempArray[i].edad < 3 &&
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
          this.pesoRecienNacido = [
            {
              name: "Mi peso",
              data: this.pesoRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [2.4, 3.2, 3.9, 4.5, 5, 5.4, 5.7, 6, 6.3, 6.5, 6.7, 6.9, 7],
            },
            {
              name: "-1 DE",
              data: [
                2.8, 3.6, 4.5, 5.2, 5.7, 6.1, 6.5, 6.8, 7, 7.3, 7.5, 7.7, 7.9,
              ],
            },
            {
              name: "Mediana",
              data: [
                3.2, 4.2, 5.1, 5.8, 6.4, 6.9, 7.3, 7.6, 7.9, 8.2, 8.5, 8.7, 8.9,
              ],
            },
            {
              name: "+1 DE",
              data: [
                3.7, 4.8, 5.8, 6.6, 7.3, 7.8, 8.2, 8.6, 9, 9.3, 9.6, 9.9, 10.1,
              ],
            },
            {
              name: "+2 DE",
              data: [
                4.2, 5.5, 6.6, 7.5, 8.2, 8.8, 9.3, 9.8, 10.2, 10.5, 10.9, 11.2,
                11.4,
              ],
            },
          ];
          this.pesoUnAnio = [
            {
              name: "Mi peso",
              data: this.pesoUnAnio[0].data,
            },

            {
              name: "-2 DE",
              data: [
                7, 7.2, 7.4, 7.6, 7.7, 7.9, 8.1, 8.2, 8.4, 8.6, 8.7, 8.9, 9,
              ],
            },
            {
              name: "-1 DE",
              data: [
                7.9, 8.1, 8.3, 8.5, 8.7, 8.9, 9.1, 9.2, 9.4, 9.6, 9.8, 10, 10.2,
              ],
            },
            {
              name: "Mediana",
              data: [
                8.9, 9.2, 9.4, 9.6, 9.8, 10, 10.2, 10.4, 10.6, 10.9, 11.1, 11.3,
                11.5,
              ],
            },
            {
              name: "+1 DE",
              data: [
                10.1, 10.4, 10.6, 10.9, 11.1, 11.4, 11.6, 11.8, 12.1, 12.3,
                12.5, 12.8, 13,
              ],
            },
            {
              name: "+2 DE",
              data: [
                11.5, 11.8, 12.1, 12.4, 12.6, 12.9, 13.2, 13.5, 13.7, 14, 14.3,
                14.6, 14.8,
              ],
            },
          ];
        } else {
          this.pesoRecienNacido = [
            {
              name: "Mi peso",
              data: this.pesoRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [
                2.5, 3.4, 4.3, 5, 5.6, 6, 6.4, 6.7, 6.9, 7.1, 7.4, 7.6, 7.7,
              ],
            },
            {
              name: "-1 DE",
              data: [
                2.9, 3.9, 4.9, 5.7, 6.2, 6.7, 7.1, 7.4, 7.7, 8, 8.2, 8.4, 8.6,
              ],
            },
            {
              name: "Mediana",
              data: [
                3.3, 4.5, 5.6, 6.4, 7, 7.5, 7.9, 8.3, 8.6, 8.9, 9.2, 9.4, 9.6,
              ],
            },
            {
              name: "+1 DE",
              data: [
                3.9, 5.1, 6.3, 7.2, 7.8, 8.4, 8.8, 9.2, 9.6, 9.9, 10.2, 10.5,
                10.8,
              ],
            },
            {
              name: "+2 DE",
              data: [
                4.4, 5.8, 7.1, 8, 8.7, 9.3, 9.8, 10.3, 10.7, 11, 11.4, 11.7, 12,
              ],
            },
          ];
          this.pesoUnAnio = [
            {
              name: "Mi peso",
              data: this.pesoUnAnio[0].data,
            },
            {
              name: "-2 DE",
              data: [
                7.7, 7.9, 8.1, 8.3, 8.4, 8.6, 8.8, 8.9, 9.1, 9.2, 9.4, 9.5, 9.7,
              ],
            },
            {
              name: "-1 DE",
              data: [
                8.6, 8.8, 9, 9.2, 9.4, 9.6, 9.8, 10, 10.1, 10.3, 10.5, 10.7,
                10.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                9.6, 9.9, 10.1, 10.3, 10.5, 10.7, 10.9, 11.1, 11.3, 11.5, 11.8,
                12, 12.2,
              ],
            },
            {
              name: "+1 DE",
              data: [
                10.8, 11, 11.3, 11.5, 11.7, 12, 12.2, 12.5, 12.7, 12.9, 13.2,
                13.4, 13.6,
              ],
            },
            {
              name: "+2 DE",
              data: [
                12, 12.3, 12.6, 12.8, 13.1, 13.4, 13.7, 13.9, 14.2, 14.5, 14.7,
                15, 15.3,
              ],
            },
          ];
        }
      } catch (e) {
        console.log("ERROR en cargarDatos.", e);
      }
      this.cargarExtra(tempArray);
    },
    cargarExtra(tempArray) {
      var dosFormat = ["2.0", "2.6", "3.0", "3.6", "4.0", "4.6", "5.0"];
      var cincoFormat = [
        "5.0",
        "5.6",
        "6.0",
        "6.6",
        "7.0",
        "7.6",
        "8.0",
        "8.6",
        "9.0",
        "9.6",
        "10.0",
      ];
      var arrEdades = [dosFormat, cincoFormat];
      var arrCargar = [this.pesoDosAnios, this.pesoCincoAnios];
      var ed = [6, 11];
      var lar = [7, 11];

      /* RECORRO LOS DATOS OBTENIDOS */
      try {
        for (var x = 0; x < 2; x++) {
          for (var i = 0; i < tempArray.length; i++) {
            /* RECORRER AÑOS */
            for (var e = 0; e < ed[x]; e++) {
              /* EVALUO SI LA EDAD DEL DATO OBTENIDO ES IGUAL A LA RECORRIDA Y QUE SEA MAYOR A 1 AÑO */
              if (tempArray[i].edad === e && tempArray[i].edad > 1) {
                /* RECORRO EL ARRAY DOSFORMAT */
                for (var y = 0; y < lar[x]; y++) {
                  var tempFormat = tempArray[i].edad + "." + tempArray[i].mes;
                  if (arrEdades[x][y] === tempFormat) {
                    arrCargar[x][0].data[y] = parseInt(tempArray[i].medida);
                  } else {
                    if (!arrCargar[x][0].data[y]) {
                      /* SI EL MES NO TIENE DATOS, LO ASIGNO A 0 */
                      arrCargar[x][0].data[y] = 0;
                    }
                  }
                }
              }
            }
          }
        }
        if (this.sexo == "Femenino") {
          this.pesoDosAnios = [
            {
              name: "Mi peso",
              data: this.pesoDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [9, 10, 10.8, 11.6, 12.3, 13, 13.7],
            },
            {
              name: "-1 DE",
              data: [10.2, 11.2, 12.2, 13.1, 14, 14.9, 15.8],
            },
            {
              name: "Mediana",
              data: [11.5, 12.7, 13.9, 15, 16.1, 17.2, 18.2],
            },
            {
              name: "+1 DE",
              data: [13, 14.4, 15.8, 17.2, 18.5, 19.9, 21.2],
            },
            {
              name: "+2 DE",
              data: [14.8, 16.5, 18.1, 19.8, 21.5, 23.2, 24.9],
            },
          ];
          this.pesoCincoAnios = [
            {
              name: "Mi peso",
              data: this.pesoCincoAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                13.7, 14.6, 15.3, 16, 16.8, 17.6, 18.6, 19.6, 20.8, 22, 23.3,
              ],
            },
            {
              name: "-1 DE",
              data: [
                15.8, 16.6, 17.5, 18.3, 19.3, 20.3, 21.4, 22.7, 24, 25.5, 27,
              ],
            },
            {
              name: "Mediana",
              data: [
                18.2, 19.1, 20.2, 21.2, 22.4, 23.6, 25, 26.6, 28.2, 30, 31.9,
              ],
            },
            {
              name: "+1 DE",
              data: [
                21.2, 22.2, 23.5, 24.9, 26.3, 27.9, 29.7, 31.6, 33.6, 35.9,
                38.2,
              ],
            },
            {
              name: "+2 DE",
              data: [
                24.9, 26.2, 27.8, 29.6, 31.4, 33.5, 35.8, 38.3, 41, 43.8, 46.9,
              ],
            },
          ];
        } else {
          this.pesoDosAnios = [
            {
              name: "Mi peso",
              data: this.pesoDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [9.7, 10.5, 11.3, 12, 12.7, 13.4, 14.1],
            },
            {
              name: "-1 DE",
              data: [10.8, 11.8, 12.7, 13.6, 14.4, 15.2, 16],
            },
            {
              name: "Mediana",
              data: [12.2, 13.3, 14.3, 15.3, 16.3, 17.3, 18.3],
            },
            {
              name: "+1 DE",
              data: [13.6, 15, 16.2, 17.4, 18.6, 19.8, 21],
            },
            {
              name: "+2 DE",
              data: [15.3, 16.9, 18.3, 19.7, 21.2, 22.7, 24.2],
            },
          ];
          this.pesoCincoAnios = [
            {
              name: "Mi peso",
              data: this.pesoCincoAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                14.1, 15, 15.9, 16.8, 17.7, 18.6, 19.5, 20.4, 21.3, 22.2, 23.2,
              ],
            },
            {
              name: "-1 DE",
              data: [16, 17, 18, 19, 20, 21.1, 22.1, 23.2, 24.3, 25.5, 26.7],
            },
            {
              name: "Mediana",
              data: [
                18.3, 19.4, 20.5, 21.7, 22.9, 24.1, 25.4, 26.7, 28.1, 29.6,
                31.2,
              ],
            },
            {
              name: "+1 DE",
              data: [
                21, 22.2, 23.5, 24.9, 26.4, 27.9, 29.5, 31.2, 33, 34.9, 37,
              ],
            },
            {
              name: "+2 DE",
              data: [
                24.2, 25.5, 27.1, 28.9, 30.7, 32.6, 34.7, 37, 39.4, 42.1, 45,
              ],
            },
          ];
        }
      } catch (e) {
        console.log("ERROR en cargarExtra.", e);
      }
    },
  },
  mounted() {
    if (this.$store.state.user.id) {
      if (this.$store.state.user.edad === 0) {
        this.edad = "0 a 12 meses";
      } else if (this.$store.state.user.edad === 1) {
        this.edad = "1 a 2 años";
      } else if (
        this.$store.state.user.edad >= 2 &&
        this.$store.state.user.edad < 5
      ) {
        this.edad = "2 a 5 años";
      } else if (this.$store.state.user.edad >= 5) {
        this.edad = "5 a 10 años";
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

            //OBTENER PESO CRECIMIENTO
            this.$axios
              .post(Const.backend + "getCrecimiento.php", {
                kven: this.guardarId,
                que_mediste: "Peso",
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