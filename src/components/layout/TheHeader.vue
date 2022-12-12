<template>
  <header class="header">
    <base-card class="round-small">
      <input
        class="header__search-input"
        type="search"
        id="site-search"
        name="site-search"
        placeholder="Search"
      />
      <search-icon class="header__search-icon"></search-icon>
    </base-card>
    <span class="no-mobile"></span>
    <base-card class="round-small">
      <button class="header__btn">
        <span class="header__info-dot"></span>
        <bell-icon class="header__bell-icon"></bell-icon>
      </button>
    </base-card>
    <base-card class="round-small">
      <button class="header__btn">
        <hamburger-icon class="header__hamburger-icon"></hamburger-icon>
      </button>
    </base-card>
  </header>
</template>

<script>
import Search from "../icons/Search.vue";
import Bell from "../icons/Bell.vue";
import Hamburger from "../icons/Hamburger.vue";
export default {
  components: {
    "search-icon": Search,
    "bell-icon": Bell,
    "hamburger-icon": Hamburger,
  },
};
</script>

<style lang="scss">
@mixin buttonsSize {
  width: 100%;
  height: 4.8rem;
  background-color: transparent;
  border: none;
}

.header {
  display: grid;
  grid-template-columns: 23.2rem 1fr 4.8rem 4.8rem;
  grid-gap: 1.6rem;
  margin-bottom: 3.2rem;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 4.8rem 4.8rem;
    margin-bottom: 2.2rem;
  }
  &__search-input {
    @include buttonsSize;
    border-radius: var(--round-small);
    padding: 1.2rem 0 1.2rem 4.2rem;
    font-family: inherit;
    font-size: 1.4rem;
    line-height: 2.4rem;
    color: var(--c-gray);
    &::placeholder {
      color: var(--c-gray);
    }
    &:focus {
      outline-color: var(--c-light-gray-border);
    }
  }
  &__search-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    width: 1.3rem;
    height: 1.4rem;
  }
  &__btn {
    @include buttonsSize;
    position: relative;
    display: grid;
    place-content: center;
  }
  &__info-dot {
    top: -1px;
    display: block;
    right: -2px;
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border: 2px solid var(--c-light);
    border-radius: var(--round-large);
    background-color: var(--c-tertiary);
  }
  &__bell-icon {
    width: 2rem;
    height: 2rem;
  }
  &__hamburger-icon {
    width: 1.4rem;
    height: 1.4rem;
  }
}
.no-mobile {
  @media screen and (max-width: 500px) {
    display: none;
  }
}
</style>
