<template>
  <div class="lg">
    <div class="lg__line-box">
      <p class="lg__text">30k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">25k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">20k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">15k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">10k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">5k</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-box">
      <p class="lg__text">0</p>
      <line-icon></line-icon>
    </div>
    <div class="lg__line-graph">
      <div class="point">
        <p class="point__text">$7,5k</p>
        <div class="point__dot"></div>
        <div class="point__line"></div>
        <p class="point__date">17 May</p>
      </div>
      <dashboard-lines></dashboard-lines>
    </div>
  </div>
</template>

<script>
import DashboardLines from "../icons/DashboardLines.vue";
import LineIcon from "../icons/LineIcon.vue";
export default {
  components: {
    "dashboard-lines": DashboardLines,
    "line-icon": LineIcon,
  },
};
</script>

<style lang="scss" scoped>
.lg {
  width: 100%;
  margin: 2.4rem 0;
  display: grid;
  grid-gap: 1.983rem;
  position: relative;
  &__line-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__text {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1rem;
    color: var(--c-opacity);
  }
  &__line-graph {
    position: absolute;
    bottom: 0;
    right: 1px;
  }
}

.point {
  position: absolute;
  top: -2rem;
  right: 18rem;
  display: grid;
  justify-content: center;
  align-items: center;
  &__text {
    background-color: var(--c-dark);
    padding: 1rem 1.2rem;
    border-radius: var(--round-extra-small);
    color: var(--c-light-dot);
    width: max-content;
    position: relative;
    margin-bottom: 0.9rem;
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.2rem;
    &::before {
      content: "";
      position: absolute;
      width: 1rem;
      height: 1rem;
      display: block;
      bottom: -2px;
      left: 50%;
      background-color: var(--c-dark);
      transform: translateX(-50%) rotate(-45deg);
    }
  }
  &__dot {
    margin: 0 auto;
    width: 1.1rem;
    height: 1.1rem;
    border-radius: 100%;
    background-color: var(--c-light-dot);
    border: 2px solid var(--c-primary);
    z-index: 9;
  }
  &__line {
    margin: -4px auto 0;
    width: 1px;
    height: 15.7rem;
    background-color: var(--c-dark);
    opacity: 0.2;
  }
  &__date {
    color: var(--c-dark);
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.0rem;
    bottom: 1rem;
    position: absolute;
    right: -2rem;
  }
}
</style>
