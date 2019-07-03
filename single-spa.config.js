import * as spa from 'single-spa'

spa.registerApplication(
  'app1',
  () => import('./src/app1/vueapp.app.js'),
  pathPrefix('/app1')
)

spa.registerApplication(
  'app2',
  () => import('./src/app2/vueapp.app.js'),
  pathPrefix('/app2')
)

spa.registerApplication(
  'app',
  () => import('./src/frame/vueapp.app.js'),
  () => true
)

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(prefix)
  }
}

spa.start()
