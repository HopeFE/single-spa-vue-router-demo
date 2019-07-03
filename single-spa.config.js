import { registerApplication, start } from 'single-spa'

registerApplication(
  'app1',
  () => import('./src/app1/vueapp.app.js'),
  pathPrefix('/app1')
)

registerApplication(
  'app2',
  () => import('./src/app2/vueapp.app.js'),
  pathPrefix('/app2')
)

registerApplication(
  'app',
  () => import('./src/frame/vueapp.app.js'),
  () => true
)

function pathPrefix(prefix) {
  return function (location) {
    return location.pathname.startsWith(prefix)
  }
}

start()
