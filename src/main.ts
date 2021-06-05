import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { ElButton, ElTable } from "element-plus";
import "element-plus/packages/theme-chalk/src/base.scss";

console.log(process.env.NODE_ENV);

const app = createApp(App);
app.component(ElButton.name, ElButton);
app.component(ElTable.name, ElTable);
app.use(store).use(router).mount("#app");
