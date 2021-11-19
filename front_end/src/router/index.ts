import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../components/Home.vue";
import Cadastro from "../components/Cadastro.vue"
import Vendas from "../components/vendas.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/cadastro:id",
    name: "Cadastro",
    component: Cadastro,
    props: { editing : false },
    alias: '/cadastro'
  },
  {
    path: "/vendas",
    name: "Vendas",
    component: Vendas 
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
