import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import UserMessages from "@/components/UserMessages";

const routes = [
    { path: '/', component: App },
    { path: '/messages/:id', component: UserMessages },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
