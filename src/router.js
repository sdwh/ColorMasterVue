import { createRouter, createWebHistory } from 'vue-router'
import Home from './Views/Home.vue'
import Glossary from './Views/Glossary.vue'

export const router = createRouter(
{
    history: createWebHistory(),
    routes: 
    [
        { path: '/', component: Home },
        { path: '/Glossary', component: Glossary },
    ],
});