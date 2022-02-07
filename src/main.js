import { createApp } from "vue";
import App from "./App";
import router from "./routes"; // 폴더 안 index.js 자동으로 찾음
import store from "./store";

// use(): plugin 연결
createApp(App).use(router).use(store).mount("#app");
