<script>
import TheHeader from "./components/layout/TheHeader.vue";
import SectionBalance from "./components/layout/SectionBalance.vue";
import SectionSummary from "./components/layout/SectionSummary.vue";
import SectionTabs from "./components/layout/SectionTabs.vue";

export default {
  components: {
    "the-header": TheHeader,
    "section-balance": SectionBalance,
    "section-summary": SectionSummary,
    "section-tabs": SectionTabs,
  },
};
</script>

<template>
  <div class="dashboard">
    <!-- sitebar -->
    <div class="dashboard__wrapper">
      <the-header></the-header>
      <div class="dashboard__sections">
        <base-card class="grid--1 round-regular">
          <section-balance></section-balance>
        </base-card>
        <base-card class="grid--2 round-regular">
          <section-summary></section-summary>
        </base-card>
        <base-card class="grid--3 round-regular">
          <section-tabs></section-tabs>
        </base-card>
      </div>
    </div>
    <div class="dashboard__blur-box"></div>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "SF Pro Display Light";
  src: url("./SFProDisplay-Light.ttf") format("truetype");
}
@font-face {
  font-family: "SF Pro Display Regular";
  src: url("./SFProDisplay-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "SF Pro Display Medium";
  src: url("./SFProDisplay-Medium.ttf") format("truetype");
}
@font-face {
  font-family: "SF Pro Display SemiBold";
  src: url("./SFProDisplay-Semibold.ttf") format("truetype");
}

:root {
  /* color */
  --c-light: #ffffff;
  --c-light-dot: #fafafa;
  --c-light-gray-bg: #f7f7f9;
  --c-light-gray-border: #ebebf3;
  --c-light-gray-border2: #eeeeee;
  --c-light-gray: #d5d5d6;
  --c-gray: #9896a1;
  --c-dark-gray: #858585;
  --c-dark-gray-bg: #1e1e1e;
  --c-dark: #0a041c;
  --c-primary: #7445fb;
  --c-secondary: #2dc78f;
  --c-tertiary: #ea4d4d;

  --c-opacity: rgba(0, 0, 0, 0.48);
  --gradient: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #f7f7f9 100%);

  /* border-radious */
  --round-large: 24px;
  --round-regular: 16px;
  --round-small: 8px;
  --round-extra-small: 4px;

  /* font */
  --f-light: "SF Pro Display Light";
  --f-regular: "SF Pro Display Regular";
  --f-medium: "SF Pro Display Medium";
  --f-semibold: "SF Pro Display SemiBold";
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
  @media screen and (max-width: 500px) {
    font-size: 60.5%;
  }
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
}

body {
  box-sizing: border-box;
  font-size: 1.6rem;
  background-color: var(--c-dark-gray-bg);
  color: var(--c-dark);
  font-family: var(--f-regular);
  position: relative;
  padding: 2rem;
  @media screen and (max-width: 1220px) {
    padding: 1rem;
  }
  @media screen and (max-width: 500px) {
    padding: 0.2rem;
  }
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  background-color: var(--c-primary);
}
::-webkit-scrollbar-thumb {
  background-color: var(--c-secondary);
}

.dashboard {
  background-color: var(--c-light);
  max-width: 144rem;
  height: 90rem;
  border-radius: var(--round-large);
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 1220px) {
    height: 100%;
    max-width: 50rem;
  }
  &__wrapper {
    max-width: 117.6rem;
    height: 100%;
    background-color: var(--c-light);
    margin: 0 0 0 auto;
    padding: 4.9rem 6.8rem 0;
    @media screen and (max-width: 1220px) {
      padding: 3.2rem 1rem;
    }
    @media screen and (max-width: 500px) {
      padding: 2.2rem 1rem;
    }
  }
  &__sections {
    display: grid;
    grid-gap: 3.2rem;
    grid-template-columns: 50.9rem 49.9rem;
    @media screen and (max-width: 1220px) {
      grid-template-columns: 100%;
    }
    @media screen and (max-width: 500px) {
      grid-gap: 2.2rem;
    }
  }
  &__blur-box {
    position: absolute;
    width: 100%;
    max-width: 104rem;
    height: 13.6rem;
    background: var(--gradient);
    bottom: 0;
    // right: 8.8rem; //figma mistake?
    right: 6.8rem; //better
    z-index: 99;
    @media screen and (max-width: 1220px) {
      display: none;
    }
  }
}

.grid {
  &--1 {
    @media screen and (max-width: 1220px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }
  &--2 {
    @media screen and (max-width: 1220px) {
      grid-row: 3 / 4;
      grid-column: 1 / 2;
    }
  }
  &--3 {
    @media screen and (max-width: 1220px) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    grid-row: 2 / 3;
    grid-column: 1 / 3;
  }
}

// global
button {
  cursor: pointer;
  transition: all 0.2s linear;
}

h1 {
  font-family: var(--f-medium);
  font-size: 5.6rem;
  line-height: 5.6rem;
  font-weight: 500;
  padding: 4rem 0 1.6rem;
  span {
    color: var(--c-gray);
    font-family: var(--f-light);
    font-weight: 300;
  }
}

h2 {
  font-family: var(--f-medium);
  font-size: 2rem;
  line-height: 2.4rem;
  font-weight: 500;
}

.base-wrapper {
  display: flex;
  align-items: center;
}

.btn-dots {
  margin: 0 0 0 auto;
  border: none;
  background-color: transparent;
  display: flex;
}

.btn {
  font-family: var(--f-semibold);
  border-radius: var(--round-extra-small);
  padding: 0.8rem 1.6rem;
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 2.4rem;
  @media screen and (max-width: 1220px) {
    width: 100%;
  }
  &--primary {
    border: 1px solid var(--c-primary);
    background-color: var(--c-primary);
    color: var(--c-light);
  }
  &--secondary {
    border: 1px solid var(--c-light-gray-border);
    background-color: var(--c-light);
    color: var(--c-primary);
  }
}

.buttons {
  display: flex;
  gap: 0.8rem;
}
</style>
