import {createRouter, createWebHashHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import comics from "@/pages/comics.vue";


const routes = [
    {path: '/', name: Home, component: Home},
    {path: '/comics', name: comics, component: comics},
]


const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
export default router;


