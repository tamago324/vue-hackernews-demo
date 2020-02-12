import Vue from 'vue';
import Router from 'vue-router';

import ItemList from '@/components/ItemList.vue';
import CommentList from '@/components/CommentList.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/topstories/:page',
      name: 'page',
      component: ItemList,
      props: true,
    }, {
      path: '/story/:storyid/comments',
      name: 'commentList',
      component: CommentList,
      props: true,
    },
  ],
});
