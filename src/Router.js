import { createRouter, createWebHistory } from 'vue-router';

import HomeComponent from './components/HomeComponent.vue';
import SeriesGet from './components/SeriesGet.vue';
import PersonajesView from './components/PersonajesView.vue';
import PersonajesPost from './components/PersonajesPost.vue';
import PersonajesUpdate from './components/PersonajesUpdate.vue';

const routes = [
    {path: '/', component: HomeComponent},
    {path: '/personajespost', component: PersonajesPost},
    {path: '/seriesget/:id', component: SeriesGet},
    {path: '/personajesserie/:id', component: PersonajesView},
    {path: '/personajesupdate', component: PersonajesUpdate},
]

const router = createRouter({history: createWebHistory(), routes})

export default router;