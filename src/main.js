import Vue from 'vue';
import { createRenderer } from 'vue-server-renderer';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

const renderer = createRenderer();

Vue.config.productionTip = false;

const app = new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app');

// renderer.renderToString(app, (err, html) => {
//   if (err) throw err;
//   console.log(html);
// });

renderer.renderToString(app)
  .then(html => console.log(html))
  .catch((err) => {
    console.log(err);
  });
