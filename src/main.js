import { createApp } from "vue";
import App from "./App.vue";

import BaseCard from "./components/ui/BaseCard.vue";
import Dots from "./components/icons/Dots.vue";
import Arrow from "./components/icons/Arrow.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component("dots-icon", Dots);
app.component("arrow-icon", Arrow);

app.mount("#app");
