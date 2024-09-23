<template>
  <q-page class="q-pa-md dashboard-page">
    
    <!-- Tarjetas de Recuento de Dinero -->
    
    
    <div class="row">
    
      <div v-for="(card, id) in cards" :key="id" class="col-12 col-sm-6 col-lg-3">
        
        <div class="card-container">
        
          <q-card v-if="!card.loading" class="text-white custom-card" :style="{ backgroundColor: card.bgColor }" >
            
            <q-card-section class="row justify-between items-center">
            
              <div>
                <div class="text-h6">{{ card.title }}</div>
                <div>{{ card.subtitle }}</div>
              </div>
   
            <!-- Selector de rango de fecha -->
            <div class="row items-center q-pt-sm" style='z-index:2000' v-model="card.showDateMenu" v-if="card.filtro === 'rango'">
                <q-btn icon="event" flat color="white">
                    <q-popup-proxy transition-show="scale" transition-hide="scale">
                        <q-date v-model="card.dateRange" range>
                            <div class="row items-center justify-end">
                                <q-btn label="Cancelar" color="primary" flat v-close-popup />
                                <q-btn label="OK" color="primary" flat @click="changeDateRange(card, id)" v-close-popup />
                            </div>
                        </q-date>
                    </q-popup-proxy>
                </q-btn>
 
            </div>
            <q-btn   to="/detail">Ver detalles</q-btn>

              <!-- Selector de opciones predefinidas -->
              <q-select v-if="card.filtro === 'selector'"
                filled
                v-model="card.selectedPeriod"
                :options="periodOptions"
                @input="changeMonths(card, id)"
                style="width: 100px"
                class="custom-select  "
              />
            </q-card-section>
            <q-separator class="bg-white" />
            <q-card-section class="text-h3">{{ card.amount }}</q-card-section>


          </q-card>
          <div class="spinner" v-if="card.loading">
            <q-spinner color="primary" size="3em" :thickness="10" />
          </div>
        </div>
      </div>
    </div>

    <!-- Gráfico de Ventas -->
    <div class="row q-mt-xl">
      <div class="col">
        <div v-if="!loadingChart">
        <q-select 
            v-model="selectedYear"
            :options="years"
            label="Año"
            class="custom-select color-select"
            filled
            @input="filterMonths"
             style="width: 100px"
             
              />
              <hr>
              <q-select 
              v-model="selectedMonth"
              :options="filteredMonths"
              label="Mes"
              class="custom-select color-select"
              filled
              style="width: 100px"
              />
            </div>
          <!-- </div> -->
        <!-- <div class="col-6">
          <q-input
            v-model="periodOptions"
            type="number"
            label="Año"
            outlined
            min="2000"
            max="2100"
          />
        </div> -->

        <!-- </div> -->
          <!-- Animación de Cargando -->
          <div class="spinner" v-if="loadingChart">
            <q-spinner color="primary" size="3em" :thickness="10" />
          </div>
          <!-- Contenedor del Gráfico -->
          <div id="chart" v-if="!loadingChart">
            <apexchart
              type="line"
              height="350"
              :options="chartOptions"
              :series="filteredSeries"
            ></apexchart>
          </div>
        </div>
      </div>
    <!-- </div> -->
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
      selectedYear: null,
      selectedMonth: null,
      currentYear,
      currentMonth,
      loadingChart: true,
      monthsPeriod: { value: "whatever" },
      yearsPeriod: { value: "whatever" },
      years: Array.from({ length: 10 }, (_, i) => currentYear - i),
      // Datos de las tarjetas
      cards: { 
        estado_resultado:{
          //index:0,	
          title: "Estado Resultado",
          amount: "$679,938,635",
          subtitle: "Período al 10/2023",
          bgColor: "#719FB2",
          loading: false,
          showDateMenu: false,
          dateRange: {},
          selectedPeriod: { value: "whatever" },
          filtro: "rango",
        },
        flujo_de_caja:{
          //index:1,		
          title: "Flujo de Caja",
          amount: "$0",
          subtitle: "Desde 17/10/2023 al 17/10/2023",
          bgColor: "#C49804",
          loading: false,
          showDateMenu: false,
          dateRange: {},
          selectedPeriod: { value: "whatever" },
          filtro: "rango",
        },
        cuentas_por_cobrar:{
          //index:2,	
          title: "Cargando...",
          amount: "",
          subtitle: "",
          bgColor: "#ccc",
          loading: true,
          showDateMenu: false,
          dateRange: {},
          selectedPeriod: { label: "3 meses", value: "3m" },
          filtro: "selector",
        },
        cuentas_por_pagar:{
          //index:3,
          title: "Cargando...",
          amount: "",
          subtitle: "",
          bgColor: "#ccc",
          loading: true,
          showDateMenu: false,
          dateRange: {},
          selectedPeriod: { label: "3 meses", value: "3m" },
          filtro: "selector",
        },
      },
      periodOptions: [
        { label: "3 meses", value: "3m" },
        { label: "6 meses", value: "6m" },
        { label: "12 meses", value: "12m" },
      
      ],
      months: [
        { label: 'Enero', value: 1 },
        { label: 'Febrero', value: 2 },
        { label: 'Marzo', value: 3 },
        { label: 'Abril', value: 4 },
        { label: 'Mayo', value: 5 },
        { label: 'Junio', value: 6 },
        { label: 'Julio', value: 7 },
        { label: 'Agosto', value: 8 },
        { label: 'Septiembre', value: 9 },
        { label: 'Octubre', value: 10 },
        { label: 'Noviembre', value: 11 },
        { label: 'Diciembre', value: 12 },
       ], 
      // years: [
      //   { label: '2012', value: 2012 },
      //   { label: '2013', value: 2013 },
      //   { label: '2014', value: 2014 },
      //   { label: '2015', value: 2015 },
      //   { label: '2016', value: 2016 },
      //   { label: '2017', value: 2017 },
      //   { label: '2018', value: 2018 },
      //   { label: '2019', value: 2019 },
      //   { label: '2020', value: 2020 },
      //   { label: '2021', value: 2021 },
      //   { label: '2022', value: 2022 },
      //   { label: '2023', value: 2023},
      //   { label: '2024', value: 2024}
      // ], 

      // Opciones y datos del gráfico
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
      //  selectedMonth: null,
      // selectedYear: new Date().getFullYear(),
      
        dataLabels: {
          enabled: false
          /*,formatter: (val) => {
            return val / 1000000 + 'M'
          }*/
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
              	}
				,formatter: (val) => {
					return Math.floor(val / 1000000) + 'M'
				}
            },
            tooltip: {
              enabled: true,
            },
          },
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
      },
    filteredMonths: []
    };
  },
  watch: {
    selectedYear() {
      this.filterMonths();
    }
  },
  computed: {
    
  filteredSeries() { // Añadir esta propiedad computada
    if (!this.selectedDateRange) {
      return this.series;
    }
    const [startDate, endDate] = this.selectedDateRange;
    const filteredData = this.series[0].data.filter((dataPoint) => {
      const date = new Date(dataPoint.x);
      return (
        date >= new Date(startDate) &&
        date <= new Date(endDate)
      );
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
    formatCurrency(amount) {
      // Crear un formateador de número para pesos chilenos
      const formatter = new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        minimumFractionDigits: 0, // Puedes ajustar el número de decimales aquí
      })

      // Retirar la moneda del string resultante si no la deseas
      return formatter.format(amount).replace("CLP", "");
    },

    // Método para mostrar el menú de fecha
    //showDateMenu(index) {
    //	this.cards[index].showDateMenu = !this.cards[index].showDateMenu;
    //},

    changeDateRange(card, id) {
      // Implement fetch logic based on card.dateRange
      card.showDateMenu = false;
      console.log("changeDateRange:", card, id);
      this.loadCardData(id);
    },

	//fetchDataForRange(card, index){},
    changeMonths(card, id) {
      // Implement fetch logic based on card.selectedPeriod
      //console.log("Fetching data for period:", card.selectedPeriod);
      console.log("changeMonths",card,id)
      this.loadCardData(id);
    },
    
    loadCardData(peticion) {
      console.log('loadCardData',peticion)
      console.log(' selectedPeriod',this.cards[peticion].selectedPeriod)
      console.log(' dateRange',this.cards[peticion].dateRange)
    
      this.cards[peticion].loading=true;	
      this.$axios
        .post( Const.backend + "dashboard.php"  //Const.backend + "getCuentasPorCobrar.php"
        	, { Distribuidor:"001"
        		, peticion:peticion
        		, selectedPeriod:this.cards[peticion].selectedPeriod.value
        		, dateRange:this.cards[peticion].dateRange
        		})
        .then((response) => {
          if (response.data && response.data.datos) {
            const datosParsed = response.data.datos 
console.log('loadCardData.axios',response.data.datos)            
            Vue.set(this.cards, peticion, {
              title: datosParsed.title,
              amount: this.formatCurrency(datosParsed.amount),
              subtitle: datosParsed.subtitle,
              bgColor: datosParsed.bgColor,
              loading: false,
              showDateMenu: false,
              dateRange: this.cards[peticion].dateRange,
              selectedPeriod: this.cards[peticion].selectedPeriod,
              filtro: this.cards[peticion].filtro
            })
          }
        })
        .catch((error) => {
          console.error("Error loading data", error);
          /*Vue.set(this.cards, peticion, {
            ...this.cards[cardIndex],
            loading: false,
          });*/
        });
    },
    filterMonths() {
      if (this.selectedYear === this.currentYear) {
        this.filteredMonths = this.months.filter(month => month.value <= this.currentMonth);
      } else {
        this.filteredMonths = this.months;
      }

      // Reset selected month if it's not in the filtered options
      if (this.selectedMonth && !this.filteredMonths.some(month => month.value === this.selectedMonth)) {
        this.selectedMonth = null;
      }
    }
  
      

},
  mounted() {
  
    // Lógica para cargar datos dinámicos para cada tarjeta
    this.loadCardData("cuentas_por_pagar"); 
    this.loadCardData("cuentas_por_cobrar"); 

    this.filterMonths();
    //OBTENER DATOS DE CUENTAS POR VENTAS - GASTOS - RENTABILIDAD
    this.$axios
      .post(Const.backend + 'dashboard.php'
      	, { Distribuidor:'001'
        	, peticion: 'ventas_gastos_rentabilidad'
        	//, selectedPeriod:this.cards[peticion].selectedPeriod.value
        	//, dateRange:this.cards[peticion].dateRange
        	})
      .then((response) => {    
        console.log("ventas_gastos_rentabilidad",response.data);
        if (response.data.estado === 1) {
          // Actualizamos las categorías de xaxis y las series del gráfico
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
};
</script>

<style>
.dashboard-page {
  background-color: white;
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
  width: 100%; /* Asegura que el botón ocupe todo el ancho */
}

.q-separator {
  margin: 0; /* Elimina cualquier margen predeterminado si es necesario */
}

.chart-container {
  position: relative;
  width: 100%;
  height: 350px; /* Asegúrate de que esta altura coincida con la altura de tu gráfico */
}

.card-container {
  position: relative;
  width: 100%;
  height: 100%; /* Ajusta según el tamaño de tus tarjetas */
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
  color: white; /* Cambia el color del texto del input */
}
</style>
