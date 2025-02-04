import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/prefeitura",
    name: "Prefeitura",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "prefeitura" */ "../views/Prefeitura.vue"),
  },
  {
    path: "/municipio",
    name: "Município",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "municipio" */ "../views/Municipio.vue"),
  },
  {
    path: "/contatos",
    name: "Contatos",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "contatos" */ "../views/Contatos.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
