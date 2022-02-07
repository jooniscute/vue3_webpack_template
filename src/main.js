import { createApp } from "vue";
import App from "./App";
import router from "./routes/index.js";

// use(): plugin 연결
createApp(App).use(router).mount("#app");
