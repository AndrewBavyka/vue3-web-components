import "./style.css";
import { defineCustomElement } from "vue";

// Импорт компонентов
import InputComponent from "./components/Input.ce.vue";
import TabGroupComponent from "./components/tabs/TabGroup.ce.vue";
import TabComponent from "./components/tabs/Tab.ce.vue";

// Определение пользовательских элементов
const InputCustomElement = defineCustomElement(InputComponent);
const TabGroupCustomElement = defineCustomElement(TabGroupComponent);
const TabCustomElement = defineCustomElement(TabComponent);

// Регистрация пользовательских элементов в браузере
customElements.define("awc-input", InputCustomElement);
customElements.define("awc-tab-group", TabGroupCustomElement);
customElements.define("awc-tab", TabCustomElement);
