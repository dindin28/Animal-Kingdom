import { createApp } from 'vue'
import App from "./App.vue";
import routes from "./routes.js";
import "./assets/bootstrap.sass";

createApp(App).use(routes).mount('#app')
