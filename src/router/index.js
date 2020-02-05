import Vue from 'vue';
import Router from 'vue-router';

import ItemList from '@/components/ItemList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/topstories/:page',
      name: 'page',
      component: ItemList,
      props: true,
    },
  ],
});
