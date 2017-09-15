/** NPM PACKAGES **/
import Vue from 'vue'
import App from './App'
{{#vuematerial}}
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
{{/vuematerial}}

/** APP PACKAGES **/
import App    from './App'
{{#router}}
import router from './views'
{{/router}}
{{#plingtoken}}
import boot   from './utils/api/boot'
{{/plingtoken}}
{{#vuematerial}}
import themes from './utils/literals/themes'
import('./assets/css/fonts.css')
{{/vuematerial}}

{{#vuematerial}}
/** MATERIAL DESIGN **/
Vue.use(VueMaterial)
Vue.material.registerTheme('default', themes.default)
{{/vuematerial}}

/** BOOT **/
Vue.config.productionTip = false
{{#plingtoken}}
if (!localStorage['PLING-TOKEN'])
  boot.redirectToLogin()
else
/* eslint-disable no-new */
  new Vue({
    el: '#app',
    {{#router}}
    router,
    {{/router}}
    render: h => h(App)
  })
{{else}}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  render: h => h(App)
})
{{/plingtoken}}
