// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
//import moment from "moment";
import VueRouter from "vue-router";

import PostList from "./components/PostList";
import PageList from "./components/PageList";

Vue.component("post-list", PostList);
Vue.component("page-list", PageList);

Vue.use(VueRouter);

const routes = [
  { path: "/posts", component: PostList },
  { path: "/pages", component: PageList }
];

const router = new VueRouter({
  routes // short for `routes: routes`
});

Vue.config.productionTip = false;

// make axios work
Vue.prototype.$http = axios;
// this.$http.get

/* eslint-disable no-new */
/*new Vue({
  el: "#app",
  render: (h) => h(App)
});*/


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
