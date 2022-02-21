import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// VUE-BOOTSTRAP
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import '@assets/sass/theme.scss';
import '@assets/sass/global_styles.scss';
import '@assets/sass/utils/scrollbars.scss';
// GLOBAL MIXINS
import { globalMixins } from '@mixins/globalMixins';

Vue.config.productionTip = false;

// VUE-BOOTSTRAP
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.mixin(globalMixins);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
