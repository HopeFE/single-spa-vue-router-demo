import Vue from 'vue'
import singleSpaVue from 'single-spa-vue'
import App from './src/App.vue'
import router from './src/router'
import store from './src/store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

function domElementGetter() {
  return document.getElementById('app2')
}

Vue.use(Element)

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
