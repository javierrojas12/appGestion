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
        :options="['0 a 12 meses', '1 a 2 años', '2 a 5 años']"
      />
    </div>

    <div v-if="edad === '0 a 12 meses'">
      <q-item-label class="fontStyle">De 0 a 12 meses</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="tallaRecienNacido"
      ></apexchart>
    </div>

    <div v-if="edad === '1 a 2 años'">
      <q-item-label class="fontStyle">De 1 a 2 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="tallaUnAnio"
      ></apexchart>
    </div>

    <div v-if="edad === '2 a 5 años'">
      <q-item-label class="fontStyle">De 2 a 5 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsDos"
        :series="tallaDosAnios"
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
      tab: "talla",
      edad: "",
      tallaRecienNacido: [
        {
          name: "Mi talla",
          data: [],
        },
      ],
      tallaUnAnio: [
        {
          name: "Mi talla",
          data: [],
        },
      ],
      tallaDosAnios: [
        {
          name: "Mi talla",
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
    };
  },
  methods: {
    cargarDatos(tempArray) {
      try {
        /* CREO UNA VARIABLE CON LOS ARRAYS A CARGAR*/
        var arrEdad = [
          this.tallaRecienNacido,
          this.tallaUnAnio,
          this.tallaDosAnios,
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
          this.tallaRecienNacido = [
            {
              name: "Mi talla",
              data: this.tallaRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [
                45.4, 49.8, 53, 55.6, 57.8, 59.6, 61.2, 62.7, 64, 65.3, 66.5,
                67.7, 68.9,
              ],
            },
            {
              name: "-1 DE",
              data: [
                47.3, 51.7, 55, 57.7, 59.9, 61.8, 63.5, 65, 66.4, 67.7, 69,
                70.3, 71.4,
              ],
            },
            {
              name: "Mediana",
              data: [
                49.1, 53.7, 57.1, 59.8, 62.1, 64, 65.7, 67.3, 68.7, 70.1, 71.5,
                72.8, 74,
              ],
            },
            {
              name: "+1 DE",
              data: [
                51, 55.6, 59.1, 61.9, 64.3, 66.2, 68, 69.6, 71.1, 72.6, 73.9,
                75.3, 76.6,
              ],
            },
            {
              name: "+2 DE",
              data: [
                52.9, 57.6, 61.1, 64, 66.4, 68.5, 70.3, 71.9, 73.5, 75, 76.4,
                77.8, 79.2,
              ],
            },
          ];
          this.tallaUnAnio = [
            {
              name: "Mi talla",
              data: this.tallaUnAnio[0].data,
            },
            {
              name: "-2 DE",
              data: [
                68.9, 70, 71, 72, 73, 74, 74.9, 75.8, 76.7, 77.5, 78.4, 79.2,
                80,
              ],
            },
            {
              name: "-1 DE",
              data: [
                71.4, 72.6, 73.7, 74.8, 75.8, 76.8, 77.8, 78.8, 79.7, 80.6,
                81.5, 82.3, 83.2,
              ],
            },
            {
              name: "Mediana",
              data: [
                74, 75.2, 76.4, 77.5, 78.6, 79.7, 80.7, 81.7, 82.7, 83.7, 84.6,
                85.5, 86.4,
              ],
            },
            {
              name: "+1 DE",
              data: [
                76.6, 77.8, 79.1, 80.2, 81.4, 82.5, 83.6, 84.7, 85.7, 86.7,
                87.7, 88.7, 89.6,
              ],
            },
            {
              name: "+2 DE",
              data: [
                79.2, 80.5, 81.7, 83, 84.2, 85.4, 86.5, 87.6, 88.7, 89.8, 90.8,
                91.9, 92.9,
              ],
            },
          ];
        } else {
          this.tallaRecienNacido = [
            {
              name: "Mi talla",
              data: this.tallaRecienNacido[0].data,
            },
            {
              name: "-2 DE",
              data: [
                46.1, 50.8, 54.4, 57.3, 59.7, 61.7, 63.3, 64.8, 66.2, 67.5,
                68.7, 69.9, 71,
              ],
            },
            {
              name: "-1 DE",
              data: [
                48, 52.8, 56.4, 59.4, 61.8, 63.8, 65.5, 67, 68.4, 69.7, 71,
                72.2, 73.4,
              ],
            },
            {
              name: "Mediana",
              data: [
                49.9, 54.7, 58.4, 61.4, 63.9, 65.9, 67.6, 69.2, 70.6, 72, 73.3,
                74.5, 75.7,
              ],
            },
            {
              name: "+1 DE",
              data: [
                51.8, 56.7, 60.4, 63.5, 66, 68, 69.8, 71.3, 72.8, 74.2, 75.6,
                76.9, 78.1,
              ],
            },
            {
              name: "+2 DE",
              data: [
                53.7, 58.6, 62.4, 65.5, 68, 70.1, 71.9, 73.5, 75, 76.5, 77.9,
                79.2, 80.5,
              ],
            },
          ];
          this.tallaUnAnio = [
            {
              name: "Mi talla",
              data: this.tallaUnAnio[0].data,
            },
            {
              name: "-2 DE",
              data: [
                71, 72.1, 73.1, 74.1, 75, 76, 76.9, 77.7, 78.6, 79.4, 80.2, 81,
                81.7,
              ],
            },
            {
              name: "-1 DE",
              data: [
                73.4, 74.5, 75.6, 76.6, 77.6, 78.6, 79.6, 80.5, 81.4, 82.3,
                83.1, 83.9, 84.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                75.7, 76.9, 78, 79.1, 80.2, 81.2, 82.3, 83.2, 84.2, 85.1, 86,
                86.9, 87.8,
              ],
            },
            {
              name: "+1 DE",
              data: [
                78.1, 79.3, 80.5, 81.7, 82.8, 83.9, 85, 86, 87, 88, 89, 89.9,
                90.9,
              ],
            },
            {
              name: "+2 DE",
              data: [
                80.5, 81.8, 83, 84.2, 85.4, 86.5, 87.7, 88.8, 89.8, 90.9, 91.9,
                92.9, 93.9,
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
      var arrEdades = [dosFormat];
      var arrCargar = [this.tallaDosAnios];
      var ed = [6];
      var lar = [7];

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
          this.tallaDosAnios = [
            {
              name: "Mi talla",
              data: this.tallaDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [79.3, 83.6, 87.4, 90.9, 94.1, 97.1, 99.9],
            },
            {
              name: "-1 DE",
              data: [82.5, 87.1, 91.2, 95, 98.4, 101.6, 104.7],
            },
            {
              name: "Mediana",
              data: [85.7, 90.7, 95.1, 99, 102.7, 106.2, 109.4],
            },
            {
              name: "+1 DE",
              data: [88.9, 94.2, 98.9, 103.1, 107, 110.7, 114.2],
            },
            {
              name: "+2 DE",
              data: [92.2, 97.7, 102.7, 107.2, 111.3, 115.2, 118.9],
            },
          ];
        } else {
          this.tallaDosAnios = [
            {
              name: "Mi talla",
              data: this.tallaDosAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [81, 85.1, 88.7, 91.9, 94.9, 97.8, 100.7],
            },
            {
              name: "-1 DE",
              data: [84.1, 88.5, 92.4, 95.9, 99.1, 102.3, 105.3],
            },
            {
              name: "Mediana",
              data: [87.1, 91.9, 96.1, 99.9, 103.3, 106.7, 110],
            },
            {
              name: "+1 DE",
              data: [90.2, 95.3, 99.8, 103.8, 107.5, 111.1, 114.6],
            },
            {
              name: "+2 DE",
              data: [93.2, 98.7, 103.5, 107.8, 111.7, 115.5, 119.2],
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
      } else if (this.$store.state.user.edad >= 2) {
        this.edad = "2 a 5 años";
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

            //OBTENER TALLA CRECIMIENTO
            this.$axios
              .post(Const.backend + "getCrecimiento.php", {
                kven: this.guardarId,
                que_mediste: "Talla",
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