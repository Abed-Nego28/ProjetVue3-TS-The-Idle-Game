import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import InventoryView from "@/views/InventoryView.vue";
import ShopView from "@/views/ShopView.vue";
import ChallengesView from "@/views/ChallengesView.vue";
import HistoryView from "@/views/HistoryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /*{
      path: '/',
      name: 'home',
      component: HomeView
    },*/
    {
      path: '/inventory',
      name: 'inventory',
      component: InventoryView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/challenges',
      name: 'challenges',
      component: ChallengesView
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView
    }
  ]
})

export default router
