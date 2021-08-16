let routes = [
  {
    path: "/search",
    name: "search",
    component: () => import("../views/Search.vue")
  }
];

if (CONFIG.allowExternalAccess) {
  routes.push({
    path: "/external/(.*)",
    name: "browseExternal",
    component: () => import("../views/Browse.vue"),
    props: route => {
      return {
        path: `/external/${route.params.pathMatch}`
      };
    }
  });
}

if (!CONFIG.catalogUrl) {
  routes.push({
    path: "/",
    name: "select",
    component: () => import("../views/SelectDataSource.vue")
  });
}

routes.push({
  path: "/(.*)",
  name: "browse",
  component: () => import("../views/Browse.vue"),
  props: route => {
    return {
      path: route.params.pathMatch
    };
  }
});

export default routes;