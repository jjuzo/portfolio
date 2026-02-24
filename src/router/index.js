import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue';
import WorkView from '../views/Work.vue';
import AboutView from '../views/About.vue';
import ContactView from '../views/Contact.vue';
import LadymView from '../views/Ladym.vue';
import CaliaView from '../views/Calia.vue';
import SharpView from '../views/Sharp.vue';
import Viewmore from '../views/Viewmore.vue';
import BelizeView from '../views/belize.vue';
import SohoView from '@/views/Soho.vue';
import UKGView from '@/views/UKG.vue';



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

    {
      path: '/viewmore',
      name: 'viewmore',
      component: Viewmore
    },

    {
      path: '/belize',
      name: 'belize',
      component: BelizeView
    },

   
 {
      path: '/soho',
      name: 'soho',
      component: SohoView
    },

    {
      path: '/ukg',
      name: 'ukg',
      component: UKGView
    },

  ],
  scrollBehavior(to, from, savedPosition) {
    // List of routes where you want to always scroll to the top
    const scrollToTopRoutes = ["ladym", "calia", "sharp" ,"belize"]; // Use route names
    // Alternative: use paths like ["/home", "/about", "/projects"]
  
    if (scrollToTopRoutes.includes(to.name)) {
      return { top: 0, left: 0, behavior: "smooth" };
    }
  
    // Default behavior (use saved position when available)
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, left: 0 };
    }
  }
});

export default router;
