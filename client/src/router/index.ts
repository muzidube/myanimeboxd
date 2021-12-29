import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/anime/:id/:title',
    name: 'Anime',
    component: () => import('../views/AnimePage.vue')
  },
  {
    path: '/search/:searchQuery',
    name: 'Search Results',
    component: () => import('../views/SearchResults.vue')
  },
  {
    path: '/user/loggedIn',
    name: 'Connecting to My Anime List',
    component: () => import('../views/LoginSplash.vue')
  },
  {
    path: '/profile/:userId:/:username',
    name: 'Profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/list/:userId/:username/:type',
    name: 'List',

    component: () => import('../views/List.vue')
  },
  {
    path: '/list/:type',
    name: 'Standard List',
    props: true,
    component: () => import('../views/StandardList.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
