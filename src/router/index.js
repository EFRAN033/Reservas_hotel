// router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Importaciones de componentes
import MainPage from '../views/MainPage.vue';
import BlogSection from '../views/BlogSection.vue';
import CaseStudySection from '../views/CaseStudySection.vue';
import ClientsSection from '../views/ClientsSection.vue';
import CtaSection from '../views/CtaSection.vue';
import DesignSection from '../views/DesignSection.vue';
import FeaturesSection from '../views/FeaturesSection.vue';
import Footer from '../views/Footer.vue';
import Header from '../views/Header.vue';
import HeroSection from '../views/HeroSection.vue';
import PricingSection from '../views/PricingSection.vue';
import StatsSection from '../views/StatsSection.vue';
import TestimonialSection from '../views/TestimonialSection.vue';
import Afileados from '../views/Afiliados.vue';
import chatbot from '../views/chatbot.vue';

// Definición de rutas
const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
    children: [
      { path: '', component: HeroSection },
      { path: '', component: FeaturesSection },
      { path: '', component: BlogSection },
      { path: '', component: CaseStudySection },
      { path: '', component: DesignSection },
      { path: '', component: PricingSection },
      { path: '', component: StatsSection },
      { path: '', component: TestimonialSection },
      { path: '', component: CtaSection },
      { path: '', component: ClientsSection },
      { path: '', component: Footer },
      { path: '', component: chatbot }
    ]
  },
  {
    path: '/afiliados',
    name: 'Afileados',
    component: Afileados
  }
];

// Creación del router
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export default router;