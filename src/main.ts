import "./style.css";
import { createApp } from "vue";
import App from "./App.vue";
import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', () => { return {} })

createApp(App).mount("#app");
