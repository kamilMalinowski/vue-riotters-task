<template>
  <section class="balance">
    <section class="base-wrapper">
      <h2>Current Balance</h2>
      <button class="btn-dots">
        <dots-icon></dots-icon>
      </button>
    </section>
    <h1><span>$</span>21 432.23</h1>
    <div class="base-wrapper balance__text-box">
      <div class="balance__arrow-wrapper">
        <arrow-icon></arrow-icon>
      </div>
      <p class="balance__text">12% vs last month</p>
    </div>
    <div class="base-wrapper">
      <button class="btn btn--primary">Quick Invest</button>
      <button class="btn btn--secondary">Show Report</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.balance {
  padding: 3.2rem;
  &__text-box {
    padding-bottom: 7.2rem;
  }
  &__arrow-wrapper {
    width: 1.8rem;
    background-color: var(--c-secondary);
    height: 1.8rem;
    border-radius: 100%;
    display: grid;
    place-content: center;
  }
  &__text {
    font-family: var(--f-medium);
    color: var(--c-secondary);
    font-size: 1.8rem;
    padding-left: 0.831rem;
  }
}
</style>
