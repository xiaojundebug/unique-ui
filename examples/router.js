import navConfig from './nav.config'
import DemoHome from './pages/demo-home'
import './utils/iframe-router'

const registerRoutes = isDemo => {
  const routes = []

  if (isDemo) {
    routes.push({
      path: '/',
      component: DemoHome,
      hideNavBar: true
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
