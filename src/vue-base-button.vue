<template>
  <div>
    <button
      v-on="$listeners"
      v-bind="$attrs"
      class="button"
      :class="buttonClass"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
export default {
  name: "VueBaseButton",
  inheritAttrs: false,
  props: {
    buttonClass: {
      type: String
    }
  }
};
</script>
