<template>
  <div class="summary">
    <div class="summary__wrapper">
      <section class="base-wrapper">
        <h2>Summary</h2>
        <button class="btn-dots">
          <dots-icon></dots-icon>
        </button>
      </section>
      <div class="base-wrapper">
        <line-graph></line-graph>
      </div>
    </div>
    <div class="base-wrapper summary__text-box">
      <p class="summary__text">
        <span class="summary__dot summary__dot--special"></span>
        This month
      </p>
      <p class="summary__text">
        <span class="summary__dot"></span>
        Last month
      </p>
    </div>
  </div>
</template>

<script>
import LineGraph from "../ui/LineGraph.vue";
export default {
  components: {
    "line-graph": LineGraph,
  },
};
</script>

<style lang="scss" scoped>
.summary {
  overflow: hidden;
  &__wrapper {
    padding: 3.2rem 3.2rem 0;
    @media screen and (max-width: 1220px) {
      padding: 2.2rem 2.2rem 0;
    }
    @media screen and (max-width: 500px) {
      padding: 1.2rem 1.2rem 0;
    }
  }
  &__text-box {
    padding: 1.5rem 2.4rem 1.7rem;
    border-top: 1px solid var(--c-light-gray-border2);
  }
  &__text {
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1rem;
    color: var(--c-gray);
    margin-right: 1.2rem;
    display: flex;
    gap: 0.8rem;
  }
  &__dot {
    display: block;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    background-color: var(--c-light-gray);
    &--special {
      background-color: var(--c-primary);
    }
  }
}
</style>
