import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios

// Vue.prototype.$axios = axios.create({
//     baseURL: 'https://appediatra.aplicacionesweb.dev/backend/',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//     }
//   })