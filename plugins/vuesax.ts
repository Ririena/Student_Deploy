import 'vuesax-alpha/theme-chalk/index.css'
// dark mode
import 'vuesax-alpha/theme-chalk/dark/css-vars.css'
import Vuesax from 'vuesax-alpha'
import 'boxicons/css/boxicons.min.css'

export default defineNuxtPlugin((app) => {
  app.vueApp.use(Vuesax)
})