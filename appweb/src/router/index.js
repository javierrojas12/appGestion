import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default function (/* { store, ssrContext } */) {
  const Router = new VueRouter({
    scrollBehavior: () => ({ x: 0, y: 0 }),
    routes,
    mode: process.env.VUE_ROUTER_MODE || 'history',
    base: process.env.VUE_ROUTER_BASE || '/'
  })

  // Aquí es donde aplicas el guard antes de cada ruta
  Router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('authToken') // Verifica si hay un token de autenticación
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!isAuthenticated) {
        next('/login') // Si no está autenticado, redirige a login
      } else {
        next() // Si está autenticado, permite la navegación
        
      }
    } else {
      next() // Permite la navegación si no se requiere autenticación
    }
  })

  return Router
}

