import { createRouter, createWebHistory } from 'vue-router'
import Todos from '@/components/Todos';
import Home from '@/components/Home';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/todos',
        component: Todos,
        meta: {
            requiresAuth: true
        }
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

// router.beforeEach(navigationGuard)

export default router