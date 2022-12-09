<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: var(--c-light-gray-bg);
  position: relative;
}

.round-large {
  border-radius: var(--round-large);
}
.round-regular {
  border-radius: var(--round-regular);
}
.round-small {
  border-radius: var(--round-small);
}
.round-extra-small {
  border-radius: var(--round-extra-smal);
}
</style>
