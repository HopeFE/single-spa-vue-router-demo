import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import router from './router'
import store from './store'

function domElementGetter() {
  return document.getElementById('app2')
}
const vueLifecycles = singleSpaVue({
  Vue,
  domElementGetter,
  appOptions: {
    el: '#app2',
    router,
    store,
    render: r => r(App)
  }
})
export const bootstrap = [vueLifecycles.bootstrap]
export const mount = [vueLifecycles.mount]
export const unmount = [vueLifecycles.unmount]
