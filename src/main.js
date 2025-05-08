import { createApp } from "vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import PrimeVue from "primevue/config";
import "primeflex/primeflex.css";
import Aura from "@primevue/themes/aura";
import App from "./App.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Button from "primevue/button";

import Dialog from "primevue/dialog";
const app = createApp(App);
app.component("DataTable", DataTable);
app.component("ColumnPrime", Column);
app.component("ButtonPrime", Button);
app.component("DialogPrime", Dialog);

app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue, { theme: { preset: Aura } });

app.mount("#app");
export { app };
