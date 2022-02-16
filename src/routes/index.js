import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./RouteHome";
import About from "./RouteAbout";
import NotFound from "./NotFound";
// main.js 에서 router로 호출
export default createRouter({
  // Hash mode: https://google.com/#/search -> 새로고침 시 "특정 페이지 찾을 수 없음" 방지
  // History mode: 따로 서버에 세팅해야 함
  history: createWebHashHistory(),
  // 페이지 이동 시 스크롤 초기화
  scrollBehavior() {
    return { top: 0 };
  },
  // pages
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: About,
    },
    {
      path: "/:notFound(.*)",
      component: NotFound,
    },
  ],
});
