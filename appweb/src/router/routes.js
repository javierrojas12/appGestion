const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      {
        path: '/dashboard',
        meta: { requiresAuth: true }, 
        component: () => import('pages/Dashboard.vue')
      },
      {
        path: '/detail',
        component: () => import('pages/Detail.vue')
      },
      {
        path: '/login',
        meta: { requiresAuth: false }, 
        component: () => import('pages/login.vue')
      },
      {
        path: '/logout',
        meta: { requiresAuth: false }, 
        component: () => import('pages/logout.vue')
      }
    ]
  },
  {
    path: '*',
    component: () => import('pages/login.vue')
  }
]

export default routes
