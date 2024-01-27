
import {createRouter,createWebHistory,RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Done_Tasks from '../views/Done_Tasks.vue'; // Update the path based on your project structure

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/Done_Tasks',
    name: 'Done_Tasks',
    component: Done_Tasks, // Update the component name as needed
  }
  // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;