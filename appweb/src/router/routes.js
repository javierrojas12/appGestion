
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
/*    
      { path: '', component: () => import('pages/Login.vue') },
      { path: '/Politica-de-privacidad', component: () => import('src/pages/Politica-de-privacidad.vue') },
      { path: '/Test', component: () => import('src/pages/test.vue') },
      { path: '/Registrarse', component: () => import('pages/Registrarse.vue') },
      { path: '/RecuperarClave', component: () => import('src/pages/FormCambiarClave.vue') },
      { path: '/NuevaClave', component: () => import('src/pages/NuevaClave.vue') },
      { path: '/Inicio', component: () => import('src/pages/Inicio.vue') },
      { path: '/Configuraciones', component: () => import('src/pages/Configuraciones.vue') },
      { path: '/Seguimiento-medico', component: () => import('src/pages/SeguimientoMedico.vue') },
      { path: '/Agregar-hijo', component: () => import('src/pages/AgregarHijo.vue') },
      { path: '/Menu-hijos/:id?',name:'mis-hijos', component: () => import('src/pages/InicioHijos.vue') },
      { path: '/Dientes/:id?', name:'dientes', component: () => import('src/pages/MenuDientes/Dientes.vue') },
      { path: '/Crecimiento/:id?', name:'crecimiento', component: () => import('src/pages/MenuCrecimiento/Crecimiento.vue') },
      { path: '/Crecimiento-agregar', component: () => import('src/pages/MenuCrecimiento/NuevoHito.vue') },
      { path: '/Momentos/:id?', name:'momentos', component: () => import('src/pages/MenuMomentos/Momentos.vue') },
      { path: '/Galeria/:id?', name:'galeria', component: () => import('src/pages/MenuGaleria/Galeria.vue') },
      { path: '/Vacunas/:id?', name:'vacunas', component: () => import('src/pages/MenuVacunas/Vacunas.vue') },
      { path: '/Vacunas-agregar', component: () => import('src/pages/MenuVacunas/NuevaVacuna.vue') },
      { path: '/Momento-agregar', component: () => import('src/pages/MenuMomentos/NuevoMomento.vue') },
      { path: '/Momento-agregar-imagen', component: () => import('src/pages/MenuMomentos/NuevaFotoRecuerdo.vue') },
      { path: '/Cambiar-foto', component: () => import('pages/cambiarfoto.vue') },
      { path: '/Cargando', component: () => import('pages/loading-logo.vue') },
*/      
      { path: '/dashboard', component: () => import('pages/Dashboard.vue')
      },
      { path: '/detail', component: () => import('src/pages/Detail.vue')
      },
      { path: '/login', component: () => import('src/pages/login.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
