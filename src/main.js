import Vue from "vue";
import App from "./App";
import AnimateWhenVisible from "./components/AnimateWhenVisible";

import addPolyfills from "./polyfills";
import "./directives/validity";
import "./styles/app.scss";

import {
  MdCard,
  MdButton,
  MdRipple,
  MdTooltip
} from "vue-material/dist/components";

Vue.use(MdCard);
Vue.use(MdButton);
Vue.use(MdRipple);
Vue.use(MdTooltip);
Vue.component("AnimateWhenVisible", AnimateWhenVisible);
Vue.config.productionTip = false;

addPolyfills().then(() => {
  new Vue({
    el: "#app",
    render: h => h(App)
  });
});
