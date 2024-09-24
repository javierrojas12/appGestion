<template>
  <q-page class="q-pa-md dashboard-page dashboard">
    <q-card class="my-card">
      <q-card-section style="background-color: #f8f9fa">
        <!-- <div class="date-selector" > -->
        <div class="row items-center q-pb-sm">
          <p class="card-container" style="margin: 10px">
            SELECCIONE UNA FECHA
          </p>
          <q-btn style="margin: 10px" icon="event" flat color="black">
            <q-popup-proxy transition-show="scale" transition-hide="scale">
              <q-date v-model="selectedDate">
                <div class="row items-center justify-end">
                  <q-btn label="Cancelar" color="black" flat v-close-popup />
                  <q-btn
                    label="OK"
                    color="black"
                    flat
                    @click="applyDate"
                    v-close-popup
                  />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-btn>
        </div>

        <!-- </div> -->
      </q-card-section>

      <q-separator />

      <q-card-actions align="between">
        <div class="list-group list-group-flush">
          <div class="list-group-item">
            <div class="row">
              <div
                v-for="(card, id) in cards"
                :key="id"
                class="col-12 col-sm-6 col-lg-3"
              >
                <div class="card-container" style="width: 100%">
                  <q-card
                    class="text-white custom-card"
                    :style="{ backgroundColor: card.bgColor }"
                  >
                    <q-card-section class="row justify-between items-center">
                      <div class="card-info col-8">
                        <div class="text-h6">{{ card.title }}</div>
                      </div>
                      <div class="col-4">
                        <q-btn class="detail-button" to="/Detail"
                          >Detalle</q-btn
                        >
                      </div>
                      <div class="col-12">
                        {{ card.subtitle }}
                      </div>
                    </q-card-section>
                    <q-separator class="bg-white" />
                    <div class="spinner" v-if="card.loading">
                      <q-spinner color="primary" size="3em" :thickness="10" />
                    </div>
                    <q-card-section class="text-h3"
                      >{{ card.amount }}
                    </q-card-section>
                  </q-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-card-section style="background-color: #f8f9fa">
        <div class="row">
          <div class="col-12">
            <div class="select-container">
              
              <p class="card-container">SELECCIONE UNA FECHA</p>
              
              <q-select 
                v-model="selectedYear"
                :options="years"
                label="Año"
                class="custom-select centered-button stylish-button shadow-button selectors"
                filled
                @input="filterChart"
                style="width: 100px"
              />

              <q-select
            
                v-model="selectedMonth"
                :options="filteredMonths"
                label="Mes"
                class="custom-select centered-button stylish-button shadow-button selectors"
                @input="filterChart"
                filled
                style="width: 100px"
              />
            </div>
          </div>
        </div>
      </q-card-section>
      <q-separator />

      <q-card-actions align="between">
        <!-- Animación de Cargando -->

        <!-- Contenedor del Gráfico -->
        <div id="chart">
          <div class="spinner" v-if="loadingChart">
            <q-spinner color="primary" size="3em" :thickness="10" />
          </div>
          <apexchart
            type="line"
            height="350"
            :options="chartOptions"
            :series="filteredSeries"
          ></apexchart>
        </div>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Const from "../assets/const.js";
import { Loading } from "quasar";
import Vue from "vue";

export default {
  components: {
    "vue-apex-charts": VueApexCharts,
  },
  data() {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    return {
      selectedDate: {
        start: null, // Fecha de inicio seleccionada
      },
      selectedYear: null,
      selectedMonth: null,
      currentYear,
      currentMonth,
      loadingChart: true,
      cardDate: null,

      monthsPeriod: { value: "whatever" },
      yearsPeriod: { value: "whatever" },
      years: Array.from({ length: 10 }, (_, i) => currentYear - i),
      // Datos de las tarjetas
      cards: {
        estado_resultado: {
          //index:0,
          title: "Estado Resultado",
          amount: "$679,938,635",
          subtitle: "Período al 10/2023",
          bgColor: "#719FB2",
          loading: false,
          showDateMenu: false,
          selectedDate: [],
          filtro: "selector",
        },
        flujo_de_caja: {
          //index:1,
          title: "Flujo de Caja",
          amount: "$0",
          subtitle: "Cargando...",
          bgColor: "rgb(80, 166, 67)",
          loading: false,
          showDateMenu: false,
          selectedDate: [],

          filtro: "selector",
        },
        cuentas_por_cobrar: {
          //index:2,
          title: "Cuentas por Cobrar",
          amount: "$0",
          subtitle: "Cargando...",
          bgColor: "rgb(80, 166, 67)",
          loading: false,
          showDateMenu: false,
          selectedDate: [],

          filtro: "selector",
        },
        cuentas_por_pagar: {
          //index:3,
          title: "Cuentas por Pagar",
          amount: "$0",
          subtitle: "Cargando...",
          bgColor: "rgb(216, 35, 39)",
          loading: false,
          showDateMenu: false,
          selectedDate: [],

          filtro: "selector",
        },
      },
    
      months: [
        { label: "Enero", value: 1 },
        { label: "Febrero", value: 2 },
        { label: "Marzo", value: 3 },
        { label: "Abril", value: 4 },
        { label: "Mayo", value: 5 },
        { label: "Junio", value: 6 },
        { label: "Julio", value: 7 },
        { label: "Agosto", value: 8 },
        { label: "Septiembre", value: 9 },
        { label: "Octubre", value: 10 },
        { label: "Noviembre", value: 11 },
        { label: "Diciembre", value: 12 },
      ],

      series: [],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          stacked: !true,
          toolbar: {
            show: true,
            tools: {
              download: true, // Mantiene el botón de descarga
              selection: false, // Mantiene el botón de selección
              zoom: false, // Mantiene el botón de zoom
              zoomin: true, // Mantiene el botón de zoom in
              zoomout: true, // Mantiene el botón de zoom out
              pan: false, // Mantiene el botón de pan
              reset: false, // Establece el botón de reset (casa) a false para ocultarlo
              // Otras herramientas que desees desactivar también pueden establecerse en false aquí
            },
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: [1, 1, 4],
        },
        title: {
          text: "Ventas - Gastos - Rentabilidad",
          align: "left",
        },
        yaxis: [
          {
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: true,
              color: "grey",
            },
            labels: {
              style: {
                colors: "grey",
              },
              formatter: (val) => {
                return Math.floor(val / 1000000) + "M";
              },
            },
            tooltip: {
              enabled: true,
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
      },
      filteredMonths: [],
    };
  },
  watch: {
    selectedYear() {
      this.filterMonths();
      this.filterChart();
    },
    selectedMonth() {
      this.filterChart(); 
    },
    selectedYear() {
      this.filterMonths();
    },
  },
  computed: {
    filteredSeries() {
      // Añadir esta propiedad computada
      if (!this.selectedDateRange) {
        return this.series;
      }
      const [startDate, endDate] = this.selectedDateRange;
      const filteredData = this.series[0].data.filter((dataPoint) => {
        const date = new Date(dataPoint.x);
        return date >= new Date(startDate) && date <= new Date(endDate);
      });
      return [
        {
          ...this.series[0],
          data: filteredData,
        },
      ];
    },
  },
  methods: {
    formatDate(date) {
      let fecha;

      // Verificar si la fecha es vacía o nula
      if (date === "" || date === null || isNaN(Date.parse(date))) {
        fecha = new Date(); // Usar la fecha act ual si no se proporciona una fecha válida
      } else {
        fecha = new Date(date); // Convertir la fecha proporcionada a un objeto Date
      }

      // Formatear la fecha al formato 'día/mes/año'
      return fecha.toLocaleDateString("es-ES", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      });
    },
    applyDate() {
      Object.keys(this.cards).forEach((id) => {
          this.loadCardData(id); // Carga los datos filtrado
      });
    },
    formatCurrency(amount) {
      // Crear un formateador de número para pesos chilenos
      const formatter = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0, // Puedes ajustar el número de decimales aquí
      });

      // Retirar la moneda del string resultante si no la deseas
      return formatter.format(amount).replace("CLP", "");
    },

   filterChart(){
    if (this.selectedYear && this.selectedMonth?.value) {
    return this.loadChart();
  }
   },


    loadChart(peticion) {
       let valorNull = null;

     
      this.$axios
        .post(Const.backend + "dashboard.php", {
          Distribuidor: "001",
          peticion: "ventas_gastos_rentabilidad",
          FilterYears: this.selectedYear,
          FilterMonth: this.filteredMonths.value
        })
        .then((response) => {
          console.log("ventas_gastos_rentabilidad", response.data);
          if (response.data.estado === 1) {
            this.series = response.data.datos.series;
            this.chartOptions = {
              ...this.chartOptions,
              xaxis: {
                categories: response.data.datos.categories,
              },
              tooltip: {
                y: {
                  formatter: (value) => {
                    return this.formatCurrency(value);
                  },
                },
              },
            };
          }
          this.loadingChart = false;
        })
        .catch(Const.ErrorHandler.bind(this, this));
    },

    loadCardData(peticion) {
      this.cards[peticion].loading = true;
      this.$axios
        .post(
          Const.backend + "dashboard.php", //Const.backend + "getCuentasPorCobrar.php"
          {
            Distribuidor: "001",
            peticion: peticion,
            selectedPeriod: this.formatDate(this.selectedDate),
          }
        )
        .then((response) => {
          console.log(response);
          if (response.data && response.data.datos) {
            const datosParsed = response.data.datos;
            console.log("loadCardData.axios", response.data.datos);
            Vue.set(this.cards, peticion, {
              title: datosParsed.title,
              amount: this.formatCurrency(datosParsed.amount),
              subtitle: datosParsed.subtitle,
              bgColor: datosParsed.bgColor,
              loading: false,
              showDateMenu: false,
              dateRange: this.cards[peticion].dateRange,
              selectedDate: this.cards[peticion].selectedDate,
              filtro: this.cards[peticion].filtro,
            });
          }
        })
        .catch((error) => {
          console.error("Error loading data", error);
          this.cards[peticion].loading = false;
        });
    },
    filterMonths() {
      if (this.selectedYear === this.currentYear) {
        this.filteredMonths = this.months.filter(
          (month) => month.value <= this.currentMonth
        );
      } else {
        this.filteredMonths = this.months;
      }

      // Reset selected month if it's not in the filtered options
      if (
        this.selectedMonth &&
        !this.filteredMonths.some((month) => month.value === this.selectedMonth)
      ) {
        this.selectedMonth = null;
      }
    },
  },
  mounted() {
    // Lógica para cargar datos dinámicos para cada tarjeta
    this.loadCardData("cuentas_por_pagar");
    this.loadCardData("cuentas_por_cobrar");
    this.loadCardData("flujo_de_caja");
    this.loadChart();
  },
};
</script>

<style>
.dashboard-page {
  background-color: rgb(255, 255, 255);
}

.custom-card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  border-radius: 10px;
  margin: 20px 10px; /* Asegúrate de que haya espacio entre las tarjetas cuando se apilen verticalmente */
}

.q-separator {
  margin: 10px 0;
}

.q-card__section--vert {
  padding: 10px;
}

.text-h3.q-card__section.q-card__section--vert {
  font-size: 2.5rem;
}

@media (max-width: 425px) {
  .text-h3.q-card__section.q-card__section--vert {
    font-size: 35px;
  }
  .q-card__section--vert {
    padding: 0px;
  }
}
@media (max-width: 768px) {
  .q-card__section--vert {
    padding: 5px;
  }
}

.full-width {
  width: 100%;
}

.q-separator {
  margin: 0;
}

.chart-container {
  position: relative;
  width: 100%;
  height: 350px;
}

.spinner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-select .q-field__control span {
  color: rgb(0, 0, 0);
}

.select-container {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.stylish-button {
  border-radius: 8px;
  border: none;
  background: linear-gradient(145deg, #ffffff79, #ffffff);
  color: #fff; /* Texto blanco */
  transition: all 0.3s ease;
}

.stylish-button:hover {
  background: linear-gradient(145deg, #ffffff63, #ffffff);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
.styled-text {
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  margin: 10px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.dashboard {
  padding: 20px;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
}
.detail-button {
  padding: 8px 5px;
  color: white;
  font-weight: lighter;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
}

.detail-button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.date-selector {
  margin-bottom: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
}
.card-header {
  display: block;
}

.date-selector h3 {
  margin-bottom: 10px;
}
.selectors {
  display: flex;
  gap: 10px;
}

select {
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.card-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px; /* Espaciado debajo de las tarjetas */
  gap: 20px;
}
.card .button-container button {
  background-color: white;
  color: #333;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.card .button-container button:hover {
  background-color: #ddd;
}
</style>
