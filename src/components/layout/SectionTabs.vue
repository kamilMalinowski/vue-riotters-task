<template>
  <div class="tabs">
    <tabs-list></tabs-list>
    <div class="tabs__elements">
      <tabs-element></tabs-element>
    </div>
  </div>
</template>

<script>
import TabsList from "../ui/TabsList.vue";
import TabsElement from "../ui/TabsElement.vue";
export default {
  components: {
    "tabs-list": TabsList,
    "tabs-element": TabsElement,
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  padding: 3.2rem 0 0 3.2rem;
  width: 100%;
  height: 50.4rem;
  position: relative;
  &__elements {
    display: grid;
    grid-gap: 0.8rem;
    padding: 3.2rem 3.2rem 0 0;
  }
}
</style>
