import Vue from 'vue';
import Vuex from 'vuex';
import RobotStore from './modules/robot';
import UserStore from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    robots: RobotStore,
    user: UserStore,
  },
});

export default store;
