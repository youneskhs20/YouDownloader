import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/lara-light-blue/theme.css";
import "primeflex/primeflex.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./style.css"

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(PrimeVue);
app.mount("#app");
