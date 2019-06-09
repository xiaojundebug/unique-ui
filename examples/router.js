import navConfig from './nav.config'
import './utils/iframe-router'

const registerRoutes = isDemo => {
  const routes = []

  if (isDemo) {
    routes.push({
      path: '/',
      component: () => import('./pages/demo-home'),
      meta: { hideNavBar: true }
    })
  } else {
    routes.push({
      path: '/',
      component: () => import('../README')
    })
  }

  navConfig.forEach(group => {
    group.list.forEach(nav => {
      routes.push({
        name: nav.name,
        path: nav.routePath,
        component: isDemo ? nav.demo : nav.doc,
        meta: { hideNavBar: nav.hideNavBar }
      })
    })
  })

  return routes
}

export default registerRoutes
