import VueBaseButton from "./vue-base-button.vue";
export default VueBaseButton;
if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("VueBaseButton", VueBaseButton);
}
