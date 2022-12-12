<template>
  <ul class="base-wrapper list">
    <li>
      <button class="list__btn list__btn--active">Summary</button>
    </li>
    <li>
      <button class="list__btn">Table</button>
    </li>
    <li>
      <button class="list__btn">Charts</button>
    </li>
    <li>
      <button class="list__btn">Reporting</button>
    </li>
    <li>
      <button class="list__btn">Analysis</button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.list {
  flex-wrap: wrap;
  gap: 2.4rem;
  padding-bottom: 1.6rem;
  border-bottom: 1px solid var(--c-light-gray-border);
  &__btn {
    font-family: inherit;
    background-color: transparent;
    border: none;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--c-gray);
    position: relative;
    &--active {
      font-family: var(--f-semibold);
      font-weight: 500;
      color: var(--c-dark);
      &::after {
        position: absolute;
        content: "";
        top: 3.55rem;
        display: block;
        background-color: var(--c-primary);
        width: 100%;
        height: 4px;
      }
    }
  }
}
</style>
