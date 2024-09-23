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
        :options="['0 a 12 meses', '1 a 2 años']"
      />
    </div>

    <div v-if="edad === '0 a 12 meses'">
      <q-item-label class="fontStyle">De 0 a 12 meses</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions0"
        :series="pesotalla0"
      ></apexchart>
    </div>

    <div v-if="edad === '1 a 2 años'">
      <q-item-label class="fontStyle">De 1 a 2 años</q-item-label>
      <apexchart
        type="line"
        height="350"
        :options="chartOptions1"
        :series="pesotalla1"
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
      tab: "peso-talla",
      edad: "",
      pesotalla0: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      pesotalla1: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      pesotalla2: [
        {
          name: "Mi peso",
          data: [],
        },
      ],
      chartOptions0: {
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
          text: "Peso por talla",
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
            "45",
            "47",
            "50",
            "52",
            "55",
            "57",
            "60",
            "62",
            "65",
            "67",
            "70",
            "72",
            "75",
          ],
        },
      },
      chartOptions1: {
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
          text: "Peso por talla",
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
            "77",
            "80",
            "82",
            "85",
            "87",
            "90",
            "92",
            "95",
            "97",
            "100",
            "102",
            "105",
            "110",
          ],
        },
      },
      chartOptions2: {
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
          text: "Peso por talla",
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: [],
        },
      },
    };
  },
  methods: {
    cargarDatos(tempArray) {
      try {
        /* CREO UNA VARIABLE CON LOS ARRAYS A CARGAR*/
        var arrCargar = [this.pesotalla0, this.pesotalla1];
        var ceroFormat = [45, 47, 50, 52, 55, 57, 60, 62, 65, 67, 70, 72, 75];
        var unoFormat = [
          77, 80, 82, 85, 87, 90, 92, 95, 97, 100, 102, 105, 110,
        ];

        var lar = [13, 13];
        var ed = [1, 2];
        var arrEdades = [ceroFormat, unoFormat];

        for (var x = 0; x < 2; x++) {
          for (var i = 0; i < tempArray.length; i++) {
            /* RECORRER AÑOS */
            for (var e = 0; e < ed[x]; e++) {
              /* EVALUO SI LA EDAD DEL DATO OBTENIDO ES IGUAL A LA RECORRIDA Y QUE SEA MAYOR A 1 AÑO */
              if (tempArray[i].edad === e && tempArray[i].edad >= 0) {
                /* RECORRO EL ARRAY FORMAT */
                for (var y = 0; y < lar[x]; y++) {
                  // console.log(y + " | " + arrEdades[x][y] + " | " + tempArray[i].mes);
                  // var tempFormat = tempArray[i].edad + "." + tempArray[i].mes;
                  if (arrEdades[x][y] === tempArray[i].mes) {
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
          this.pesotalla0 = [
            {
              name: "Mi peso",
              data: this.pesotalla0[0].data,
            },
            {
              name: "-2 DE",
              data: [
                2.1, 2.4, 2.8, 3.3, 3.8, 4.4, 4.9, 5.4, 5.9, 6.4, 6.9, 7.3, 7.7,
              ],
            },
            {
              name: "-1 DE",
              data: [
                2.3, 2.6, 3.1, 3.6, 4.2, 4.8, 5.4, 5.9, 6.5, 7, 7.5, 7.9, 8.4,
              ],
            },
            {
              name: "Mediana",
              data: [
                2.5, 2.9, 3.4, 3.9, 4.5, 5.2, 5.9, 6.5, 7.1, 7.6, 8.2, 8.7, 9.1,
              ],
            },
            {
              name: "+1 DE",
              data: [
                2.7, 3.2, 3.7, 4.3, 5, 5.7, 6.4, 7.1, 7.8, 8.4, 9, 9.5, 10,
              ],
            },
            {
              name: "+2 DE",
              data: [
                3, 3.5, 4, 4.7, 5.5, 6.3, 7.1, 7.8, 8.6, 9.2, 9.9, 10.5, 11,
              ],
            },
          ];
          this.pesotalla1 = [
            {
              name: "Mi peso",
              data: this.pesotalla1[0].data,
            },

            {
              name: "-2 DE",
              data: [
                8.1, 8.5, 8.9, 9.4, 10, 10.5, 11, 11.5, 12.1, 12.6, 13.2, 13.8,
                15.3,
              ],
            },
            {
              name: "-1 DE",
              data: [
                8.8, 9.2, 9.7, 10.3, 10.9, 11.4, 12, 12.6, 13.1, 13.7, 14.4,
                15.1, 16.7,
              ],
            },
            {
              name: "Mediana",
              data: [
                9.6, 10.1, 10.6, 11.2, 11.8, 12.5, 13.1, 13.7, 14.4, 15, 15.8,
                16.5, 18.3,
              ],
            },
            {
              name: "+1 DE",
              data: [
                10.5, 11, 11.6, 12.3, 13, 13.7, 14.3, 15, 15.7, 16.5, 17.3,
                18.2, 20.2,
              ],
            },
            {
              name: "+2 DE",
              data: [
                11.6, 12.1, 12.8, 13.5, 14.2, 15, 15.8, 16.5, 17.3, 18.1, 19,
                20, 22.3,
              ],
            },
          ];
        } else {
          this.pesotalla0 = [
            {
              name: "Mi peso",
              data: this.pesotalla0[0].data,
            },
            {
              name: "-2 DE",
              data: [
                2, 2.4, 2.8, 3.3, 3.8, 4.5, 5.1, 5.7, 6.2, 6.7, 7.2, 7.6, 8.1,
              ],
            },
            {
              name: "-1 DE",
              data: [
                2.2, 2.6, 3, 3.6, 4.2, 4.9, 5.5, 6.1, 6.7, 7.2, 7.8, 8.3, 8.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                2.4, 2.9, 3.3, 3.9, 4.5, 5.3, 6, 6.7, 7.3, 7.9, 8.4, 9, 9.5,
              ],
            },
            {
              name: "+1 DE",
              data: [
                2.7, 3.1, 3.6, 4.2, 5, 5.7, 6.5, 7.2, 7.9, 8.5, 9.2, 9.8, 10.3,
              ],
            },
            {
              name: "+2 DE",
              data: [
                3, 3.4, 4, 4.6, 5.4, 6.3, 7.1, 7.9, 8.6, 9.3, 10, 10.6, 11.3,
              ],
            },
          ];
          this.pesotalla1 = [
            {
              name: "Mi peso",
              data: this.pesotalla1[0].data,
            },
            {
              name: "-2 DE",
              data: [
                8.5, 8.9, 9.3, 9.8, 10.4, 10.9, 11.4, 11.9, 12.4, 12.9, 13.5,
                14.1, 15.4,
              ],
            },
            {
              name: "-1 DE",
              data: [
                9.2, 9.6, 10.1, 10.6, 11.2, 11.8, 12.3, 12.8, 13.4, 14, 14.6,
                15.3, 16.8,
              ],
            },
            {
              name: "Mediana",
              data: [
                10, 10.4, 10.9, 11.5, 12.1, 12.7, 13.3, 13.9, 14.5, 15.2, 15.9,
                16.6, 18.3,
              ],
            },
            {
              name: "+1 DE",
              data: [
                10.9, 11.4, 11.9, 12.5, 13.2, 13.8, 14.4, 15.1, 15.7, 16.5,
                17.3, 18.1, 20,
              ],
            },
            {
              name: "+2 DE",
              data: [
                11.9, 12.4, 13, 13.6, 14.3, 15, 15.7, 16.4, 17.1, 18, 18.8,
                19.8, 21.9,
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
      } else if (this.$store.state.user.edad >= 1) {
        this.edad = "1 a 2 años";
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
                que_mediste: "Peso/Talla",
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