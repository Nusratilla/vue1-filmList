import { createApp } from "vue";
import App from "./components/app/App.vue";
import UIComponents from "./UI-components";
import "./app.css";

const app = createApp(App);
UIComponents.map((component) => app.component(component.name, component));
app.mount("#app");
