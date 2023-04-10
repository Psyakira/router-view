import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage.vue";
import MyContact from "@/components/MyContact.vue";
import AboutMe from "@/components/AboutMe.vue";

const routes = [
    {
        path: "/",
        name: "HomePage",
        component: HomePage,
    },
    {
        path: "/MyContact",
        name: "MyContact",
        component: MyContact,
    },
    {
        path: "/AboutMe",
        name: "AboutMe",
        component: AboutMe,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;