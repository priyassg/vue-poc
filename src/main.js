import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

function createApp() {
  const app = new Vue({
    render: h => h(App),
    store,
    router,
  });

  return app;
}

// const app = new Vue({
//   render: h => h(App),
//   store,
//   router,
// }).$mount('#app');

export default { createApp };
