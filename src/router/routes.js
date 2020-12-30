
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout'),
    children: [
      { path: '', component: () => import('pages/PageHome') },
      { path: '/camera', component: () => import('pages/PageCamera') }
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
