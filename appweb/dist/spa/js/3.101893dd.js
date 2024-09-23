(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{aa46:function(t,e,a){"use strict";a("c6bc")},c6bc:function(t,e,a){},ec95:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-page",{staticClass:"q-pa-md dashboard-page"},[a("div",{staticClass:"row"},t._l(t.cards,(function(e,o){return a("div",{key:o,staticClass:"col-12 col-sm-6 col-lg-3"},[a("div",{staticClass:"card-container"},[e.loading?t._e():a("q-card",{staticClass:"text-white custom-card",style:{backgroundColor:e.bgColor}},[a("q-card-section",{staticClass:"row justify-between items-center"},[a("div",[a("div",{staticClass:"text-h6"},[t._v(t._s(e.title))]),a("div",[t._v(t._s(e.subtitle))])]),"rango"===e.filtro?a("q-btn",{attrs:{icon:"event"},on:{click:function(e){return e.stopPropagation(),t.showDateMenu(o)}}}):t._e(),"selector"===e.filtro?a("q-select",{staticClass:"custom-select",staticStyle:{width:"100px"},attrs:{filled:"",options:t.periodOptions},on:{input:function(a){return t.fetchDataForPeriod(e,o)}},model:{value:e.selectedPeriod,callback:function(a){t.$set(e,"selectedPeriod",a)},expression:"card.selectedPeriod"}}):t._e()],1),a("q-separator",{staticClass:"bg-white"}),a("q-card-section",{staticClass:"text-h3"},[t._v(t._s(e.amount))]),"rango"===e.filtro?a("q-menu",{model:{value:e.showDateMenu,callback:function(a){t.$set(e,"showDateMenu",a)},expression:"card.showDateMenu"}},[a("q-date",{attrs:{range:""},on:{input:function(a){return t.fetchDataForRange(e,o)}},model:{value:e.dateRange,callback:function(a){t.$set(e,"dateRange",a)},expression:"card.dateRange"}}),a("q-separator"),a("div",{staticClass:"row justify-center"},[a("q-btn",{staticClass:"full-width",attrs:{label:"Aplicar",color:"primary",flat:""},on:{click:function(a){return t.applyDateRange(e,o)}}})],1)],1):t._e()],1),e.loading?a("div",{staticClass:"spinner"},[a("q-spinner",{attrs:{color:"primary",size:"3em",thickness:10}})],1):t._e()],1)])})),0),a("div",{staticClass:"row q-mt-xl"},[a("div",{staticClass:"col"},[a("div",{staticClass:"chart-container",staticStyle:{position:"relative",height:"350px"}},[t.loadingChart?a("div",{staticClass:"spinner"},[a("q-spinner",{attrs:{color:"primary",size:"3em",thickness:10}})],1):t._e(),t.loadingChart?t._e():a("div",{attrs:{id:"chart"}},[a("apexchart",{attrs:{type:"line",height:"350",options:t.chartOptions,series:t.series}})],1)])])])])},s=[],n=a("ded3"),r=a.n(n),i=(a("ac1f"),a("5319"),a("159b"),a("1321")),l=a.n(i),c={backend:"https://appediatra.aplicacionesweb.dev/backend/",ErrorHandler:function(t){t.$q.notify({message:"Error al intentar conectar con el servidor",color:"negative",icon:"error"})}},d=(a("f508"),a("2b0e")),u={components:{"vue-apex-charts":l.a},data:function(){return{loadingChart:!0,cards:[{title:"Estado Resultado",amount:"$679,938,635",subtitle:"Período al 10/2023",bgColor:"#719FB2",loading:!1,showDateMenu:!1,dateRange:{},selectedPeriod:null,filtro:"rango"},{title:"Flujo de Caja",amount:"$0",subtitle:"Desde 17/10/2023 al 17/10/2023",bgColor:"#C49804",loading:!1,showDateMenu:!1,dateRange:{},selectedPeriod:null,filtro:"rango"},{title:"Cargando...",amount:"",subtitle:"",bgColor:"#ccc",loading:!0,showDateMenu:!1,dateRange:{},selectedPeriod:null,filtro:"selector"},{title:"Cargando...",amount:"",subtitle:"",bgColor:"#ccc",loading:!0,showDateMenu:!1,dateRange:{},selectedPeriod:null,filtro:"selector"}],periodOptions:[{label:"3 meses",value:"3m"},{label:"6 meses",value:"6m"},{label:"12 meses",value:"12m"}],series:[],chartOptions:{chart:{height:350,type:"line",stacked:!1,toolbar:{show:!0,tools:{download:!0,selection:!1,zoom:!1,zoomin:!0,zoomout:!0,pan:!1,reset:!1}}},dataLabels:{enabled:!1},stroke:{width:[1,1,4]},title:{text:"Ventas - Gastos - Rentabilidad",align:"left"},yaxis:[{axisTicks:{show:!1},axisBorder:{show:!0,color:"grey"},labels:{style:{colors:"grey"}},tooltip:{enabled:!0}}],tooltip:{fixed:{enabled:!0,position:"topLeft",offsetY:30,offsetX:60}},legend:{horizontalAlign:"center",offsetX:40}}}},methods:{formatCurrency:function(t){var e=new Intl.NumberFormat("es-CL",{style:"currency",currency:"CLP",minimumFractionDigits:0});return e.format(t).replace("CLP","")},showDateMenu:function(t){this.cards.forEach((function(e,a){a!==t&&(e.showDateMenu=!1)})),this.cards[t].showDateMenu=!this.cards[t].showDateMenu},applyDateRange:function(t,e){t.showDateMenu=!1,console.log("Fetching data for range:",t.dateRange)},fetchDataForPeriod:function(t,e){console.log("Fetching data for period:",t.selectedPeriod)},loadCardData:function(t,e){var a=this;this.$axios.post(c.backend+"getCuentasPorCobrar.php",{peticion:t}).then((function(t){if(t.data&&t.data.datos){var o=JSON.parse(t.data.datos);d["a"].set(a.cards,e,{title:o.title,amount:a.formatCurrency(o.amount),subtitle:o.subtitle,bgColor:o.bgColor,loading:!1,showDateMenu:!1,dateRange:{},selectedPeriod:null,filtro:"selector"})}})).catch((function(t){console.error("Error loading data",t),d["a"].set(a.cards,e,r()(r()({},a.cards[e]),{},{loading:!1}))}))}},mounted:function(){var t=this;this.loadCardData("cuentasporpagar",2),this.loadCardData("cuentasporcobrar",3),this.$axios.post(c.backend+"getCuentasPorCobrar.php",{peticion:"ventasgastosrentabilidad"}).then((function(e){console.log(e.data),1===e.data.estado&&(t.series=e.data.datos.series,t.chartOptions=r()(r()({},t.chartOptions),{},{xaxis:{categories:e.data.datos.categories},tooltip:{y:{formatter:function(e){return t.formatCurrency(e)}}}})),t.loadingChart=!1})).catch(c.ErrorHandler.bind(this,this))}},p=u,h=(a("aa46"),a("2877")),g=a("9989"),f=a("f09f"),b=a("a370"),C=a("9c40"),m=a("ddd8"),w=a("eb85"),v=a("4e73"),y=a("52ee"),D=a("0d59"),x=a("8572"),k=a("eebe"),P=a.n(k),q=Object(h["a"])(p,o,s,!1,null,null,null);e["default"]=q.exports;P()(q,"components",{QPage:g["a"],QCard:f["a"],QCardSection:b["a"],QBtn:C["a"],QSelect:m["a"],QSeparator:w["a"],QMenu:v["a"],QDate:y["a"],QSpinner:D["a"],QField:x["a"]})}}]);