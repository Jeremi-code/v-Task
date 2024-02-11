
import {createRouter,createWebHistory,RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Done_Tasks from '../views/Done_Tasks.vue'; 
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Done_Tasks',
    name: 'Done_Tasks',
    component: Done_Tasks, 
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;