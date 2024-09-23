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
        :options="[
          '0 a 12 meses',
          '1 a 2 años',
          '2 a 5 años',
          '5 a 10 años',
          '10 a 15 años',
          '15 a 19 años',
        ]"
      />
    </div>

    <div v-if="edad === '0 a 12 meses'">
      <q-item-label class="fontStyle">De 0 a 12 meses</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="alturaRecienNacido"
      ></apexchart>
    </div>

    <div v-if="edad === '1 a 2 años'">
      <q-item-label class="fontStyle">De 1 a 2 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions"
        :series="alturaUnAnio"
      ></apexchart>
    </div>

    <div v-if="edad === '2 a 5 años'">
      <q-item-label class="fontStyle">De 2 a 5 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsDos"
        :series="alturaDosAnios"
      ></apexchart>
    </div>

    <div v-if="edad === '5 a 10 años'">
      <q-item-label class="fontStyle">De 5 a 10 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsCinco"
        :series="alturaCincoAnios"
      ></apexchart>
    </div>

    <div v-if="edad === '10 a 15 años'">
      <q-item-label class="fontStyle">De 10 a 15 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsDiez"
        :series="alturaDiezAnios"
      ></apexchart>
    </div>

    <div v-if="edad === '15 a 19 años'">
      <q-item-label class="fontStyle">De 15 a 19 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptionsQuince"
        :series="alturaQuinceAnios"
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
      tab: "altura",
      edad: "",
      alturaRecienNacido: [
        {
          name: "Mi altura",
          data: [],
        },
      ],
      alturaUnAnio: [
        {
          name: "Mi altura",
          data: [],
        },
      ],
      alturaDosAnios: [
        {
          name: "Mi altura",
          data: [],
        },
      ],
      alturaCincoAnios: [
        {
          name: "Mi altura",
          data: [],
        },
      ],
      alturaDiezAnios: [
        {
          name: "Mi altura",
          data: [],
        },
      ],
      alturaQuinceAnios: [
        {
          name: "Mi altura",
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
      chartOptionsDiez: {
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
            "10 años",
            "6",
            "11 años",
            "6",
            "12 años",
            "6",
            "13 años",
            "6",
            "14 años",
            "6",
            "15 años",
          ],
        },
      },
      chartOptionsQuince: {
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
            "15 años",
            "6",
            "16 años",
            "6",
            "17 años",
            "6",
            "18 años",
            "6",
            "19 años",
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
          this.alturaRecienNacido,
          this.alturaUnAnio,
          this.alturaDosAnios,
          this.alturaCincoAnios,
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
          this.alturaRecienNacido = [
            {
              name: "Mi altura",
              data: this.alturaRecienNacido[0].data,
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
          this.alturaUnAnio = [
            {
              name: "Mi altura",
              data: this.alturaUnAnio[0].data,
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
                71.4, 72.5, 73.7, 74.8, 75.8, 76.8, 77.8, 78.8, 79.7, 80.6,
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
          this.alturaRecienNacido = [
            {
              name: "Mi altura",
              data: this.alturaRecienNacido[0].data,
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
          this.alturaUnAnio = [
            {
              name: "Mi altura",
              data: this.alturaUnAnio[0].data,
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
      var diezFormat = [
        "10.0",
        "10.6",
        "11.0",
        "11.6",
        "12.0",
        "12.6",
        "13.0",
        "13.6",
        "14.0",
        "14.6",
        "15.0",
      ];
      var quinceFormat = [
        "15.0",
        "15.6",
        "16.0",
        "16.6",
        "17.0",
        "17.6",
        "18.0",
        "18.6",
        "19.0",
      ];

      var arrEdades = [dosFormat, cincoFormat, diezFormat, quinceFormat];
      var arrCargar = [
        this.alturaDosAnios,
        this.alturaCincoAnios,
        this.alturaDiezAnios,
        this.alturaQuinceAnios,
      ];

      // EDAD MAXIMA+1, EJEMPLO MAXIMO 5 -> MAXIMO 6
      var ed = [6, 11, 16, 20];
      // LARGO DEL EDADFORMAT
      var lar = [7, 11, 11, 9];

      /* RECORRO LOS DATOS OBTENIDOS */
      try {
        for (var x = 0; x < 4; x++) {
          for (var i = 0; i < tempArray.length; i++) {
            /* RECORRER HASTA LOS 5 AÑOS  */
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
          this.alturaDosAnios = [
            {
              name: "Mi altura",
              data: this.alturaDosAnios[0].data,
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
          this.alturaCincoAnios = [
            {
              name: "Mi altura",
              data: this.alturaCincoAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                99.9, 102.3, 104.9, 107.4, 109.9, 112.4, 115, 117.6, 120.3, 123,
                125.8,
              ],
            },
            {
              name: "-1 DE",
              data: [
                104.7, 107.2, 110, 112.7, 115.3, 118, 120.8, 123.5, 126.4,
                129.3, 132.2,
              ],
            },
            {
              name: "Mediana",
              data: [
                109.4, 112.2, 115.1, 118, 120.8, 123.7, 126.6, 129.5, 132.5,
                135.5, 138.6,
              ],
            },
            {
              name: "+1 DE",
              data: [
                114.2, 117.1, 120.2, 123.3, 126.3, 129.3, 132.4, 135.5, 138.6,
                141.8, 145,
              ],
            },
            {
              name: "+2 DE",
              data: [
                118.9, 122, 125.4, 128.6, 131.7, 134.9, 138.2, 141.4, 144.7,
                148.1, 151.4,
              ],
            },
          ];
          this.alturaDiezAnios = [
            {
              name: "Mi altura",
              data: this.alturaDiezAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                125.8, 128.7, 131.7, 134.7, 137.6, 140.2, 142.5, 144.4, 145.9,
                147.1, 147.9,
              ],
            },
            {
              name: "-1 DE",
              data: [
                132.2, 135.3, 138.4, 141.4, 144.4, 147.1, 149.4, 151.3, 152.8,
                154, 154.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                138.6, 141.8, 145, 148.2, 151.2, 154, 156.4, 158.3, 159.8,
                160.9, 161.7,
              ],
            },
            {
              name: "+1 DE",
              data: [
                145, 148.3, 151.6, 154.9, 158.1, 160.9, 163.3, 165.3, 166.7,
                167.8, 168.5,
              ],
            },
            {
              name: "+2 DE",
              data: [
                151.4, 154.8, 158.3, 161.7, 164.9, 167.8, 170.3, 172.2, 173.7,
                174.7, 175.4,
              ],
            },
          ];
          this.alturaQuinceAnios = [
            {
              name: "Mi altura",
              data: this.alturaQuinceAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                147.9, 148.5, 148.9, 149.2, 149.5, 149.7, 149.8, 150, 150.1,
              ],
            },
            {
              name: "-1 DE",
              data: [
                154.8, 155.4, 155.7, 156, 156.2, 156.3, 156.5, 156.6, 156.6,
              ],
            },
            {
              name: "Mediana",
              data: [
                161.7, 162.2, 162.5, 162.7, 162.9, 163, 163.1, 163.1, 163.2,
              ],
            },
            {
              name: "+1 DE",
              data: [
                168.5, 169, 169.3, 169.5, 169.5, 169.6, 169.7, 169.7, 169.7,
              ],
            },
            {
              name: "+2 DE",
              data: [
                175.4, 175.9, 176.1, 176.2, 176.2, 176.3, 176.3, 176.3, 176.2,
              ],
            },
          ];
        } else {
          this.alturaDosAnios = [
            {
              name: "Mi altura",
              data: this.alturaDosAnios[0].data,
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
          this.alturaCincoAnios = [
            {
              name: "Mi altura",
              data: this.alturaCincoAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                100.7, 103.4, 106.1, 108.7, 111.2, 113.6, 116, 118.3, 120.5,
                122.8, 125,
              ],
            },
            {
              name: "-1 DE",
              data: [
                105.3, 108.2, 111, 113.8, 116.4, 119.1, 121.6, 124.1, 126.6,
                129, 131.4,
              ],
            },
            {
              name: "Mediana",
              data: [
                110, 112.9, 116, 118.9, 121.7, 124.5, 127.3, 129.9, 132.6,
                135.2, 137.8,
              ],
            },
            {
              name: "+1 DE",
              data: [
                114.6, 117.7, 120.9, 124, 127, 130, 132.9, 135.8, 138.6, 141.4,
                144.2,
              ],
            },
            {
              name: "+2 DE",
              data: [
                119.2, 122.4, 125.8, 129.1, 132.3, 135.5, 138.6, 141.6, 144.6,
                147.6, 150.5,
              ],
            },
          ];
          this.alturaDiezAnios = [
            {
              name: "Mi altura",
              data: this.alturaDiezAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                125, 127.3, 129.7, 132.2, 134.9, 137.9, 141.2, 144.5, 147.8,
                150.8, 153.4,
              ],
            },
            {
              name: "-1 DE",
              data: [
                131.4, 133.8, 136.4, 139.1, 142, 145.2, 148.6, 152.1, 155.5,
                158.5, 161.2,
              ],
            },
            {
              name: "Mediana",
              data: [
                137.8, 140.4, 143.1, 146, 149.1, 152.4, 156, 159.7, 163.2,
                166.3, 169,
              ],
            },
            {
              name: "+1 DE",
              data: [
                144.2, 146.9, 149.8, 152.9, 156.2, 159.7, 163.5, 167.3, 170.9,
                174.1, 176.8,
              ],
            },
            {
              name: "+2 DE",
              data: [
                150.5, 153.5, 156.6, 159.8, 163.3, 167, 170.9, 174.8, 178.6,
                181.8, 184.6,
              ],
            },
          ];
          this.alturaQuinceAnios = [
            {
              name: "Mi altura{",
              data: this.alturaQuinceAnios[0].data,
            },
            {
              name: "-2 DE",
              data: [
                153.4, 155.5, 157.4, 158.8, 159.9, 160.6, 161.2, 161.6, 161.9,
              ],
            },
            {
              name: "-1 DE",
              data: [
                161.2, 163.3, 165.1, 166.5, 167.5, 168.2, 168.7, 169, 169.2,
              ],
            },
            {
              name: "Mediana",
              data: [
                169, 171.1, 172.9, 174.2, 175.2, 175.8, 176.1, 176.4, 176.5,
              ],
            },
            {
              name: "+1 DE",
              data: [
                176.8, 178.9, 180.7, 181.9, 182.8, 183.3, 183.6, 183.8, 183.8,
              ],
            },
            {
              name: "+2 DE",
              data: [
                184.6, 186.8, 188.4, 189.7, 190.4, 190.9, 191.1, 191.1, 191.1,
              ],
            },
          ];
        }
      } catch (e) {
        console.log("ERROR en cargarDosACinco.", e);
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
      } else if (
        this.$store.state.user.edad >= 5 &&
        this.$store.state.user.edad < 10
      ) {
        this.edad = "5 a 10 años";
      } else if (
        this.$store.state.user.edad >= 10 &&
        this.$store.state.user.edad < 15
      ) {
        this.edad = "10 a 15 años";
      } else if (this.$store.state.user.edad >= 15) {
        this.edad = "15 a 19 años";
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

            //OBTENER ALTURA CRECIMIENTO
            this.$axios
              .post(Const.backend + "getCrecimiento.php", {
                kven: this.guardarId,
                que_mediste: "Altura",
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