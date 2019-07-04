import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

function domElementGetter() {
  return document.getElementById('app')
}

const vueLifecycles = singleSpaVue({
  Vue,
  domElementGetter,
  appOptions: {
    el: '#app',
    store,
    render: r => r(App)
  }
})

export const bootstrap = [
  vueLifecycles.bootstrap
]

export const mount = [
  vueLifecycles.mount
]

export const unmount = [
  vueLifecycles.unmount
]
