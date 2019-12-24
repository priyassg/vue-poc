import Vue from 'vue';
import App from './App.vue';
import { createRouter } from './router/index';
import store from './store/index';

Vue.config.productionTip = false;

// eslint-disable-next-line import/prefer-default-export
export function createApp() {
  const router = createRouter();
  const app = new Vue({
    render: h => h(App),
    store,
    router,
  });

  return { app, router };
}
