import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import WorkView from '../views/Work.vue';
import AboutView from '../views/About.vue';
import ContactView from '../views/Contact.vue';
import LadymView from '../views/Ladym.vue';
import CaliaView from '../views/Calia.vue';
import SharpView from '../views/Sharp.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/work',
      name: 'work',
      component: WorkView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactView
    },
    {
      path: '/ladym',
      name: 'ladym',
      component: LadymView
    },
    {
      path: '/calia',
      name: 'calia',
      component: CaliaView
    },
    {
      path: '/sharp',
      name: 'sharp',
      component: SharpView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      // Reset scroll position to the top left corner after a delay of 500 milliseconds (adjust the delay as needed)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ top: 0, left: 0 , behavior: 'smooth'});
        }, 200); // 500 milliseconds delay
      });
    }
  },
});

export default router;
