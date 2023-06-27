import { createRouter, createWebHistory } from 'vue-router';
import App from '@/App.vue';
import UserMessages from "@/components/UserMessages";
import ContactList from "@/components/ContactList.vue";


const routes = [
    { path: '/', component: App },
    { path: '/contacts', component: ContactList },
    { path: '/messages/:id', component: UserMessages },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
