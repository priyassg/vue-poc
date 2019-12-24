import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import RobotBuilder from '../build/RobotBuilder.vue';
import PartsInfo from '../parts/PartsInfo.vue';
import BrowseParts from '../browse/BrowseParts.vue';
import BrowseHeads from '../browse/RobotHeads.vue';
import BrowseArms from '../browse/RobotArms.vue';
import BrowseTorsos from '../browse/RobotTorsos.vue';
import BrowseBases from '../browse/RobotBases.vue';
import HomeSideBar from '../sidebars/HomeSideBar.vue';
import BuildSideBar from '../sidebars/BuildSideBar.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

// eslint-disable-next-line import/prefer-default-export
export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [{
      path: '/',
      name: 'Home',
      components: {
        default: HomePage,
        sidebar: HomeSideBar,
      },
    }, {
      path: '/build',
      name: 'Build',
      components: {
        default: RobotBuilder,
        sidebar: BuildSideBar,
      },
    }, {
      path: '/parts/browse',
      name: 'BrowseParts',
      component: BrowseParts,
      children: [{
        path: 'heads',
        name: 'BrowseHeads',
        component: BrowseHeads,
      }, {
        path: 'arms',
        name: 'BrowseArms',
        component: BrowseArms,
      }, {
        path: 'torsos',
        name: 'BrowseTorsos',
        component: BrowseTorsos,
      }, {
        path: 'bases',
        name: 'BrowseBases',
        component: BrowseBases,
      }],
    }, {
      path: '/parts/:partType/:id',
      name: 'Parts',
      component: PartsInfo,
      props: true,
      beforeEnter(to, from, next) {
        const isValid = Number.isInteger(Number(to.params.id));
        next(isValid);
      },
    }, {
      name: 'Cart',
      path: '/cart',
      component: ShoppingCart,
    }],
  });
}
