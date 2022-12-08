<script setup></script>

<template>
  <div class="dashboard"></div>
</template>

<style>
@font-face {
  font-family: "SF Pro Display Regular";
  src: url("./SFPRODISPLAYREGULAR.OTF") format("opentype");
}
@font-face {
  font-family: "SF Pro Display Medium";
  src: url("./SFPRODISPLAYMEDIUM.OTF") format("opentype");
}
@font-face {
  font-family: "SF Pro Display SemiBold";
  src: url("./SFPRODISPLAYBOLD.OTF") format("opentype");
}

:root{
  /* color */
  --c-light: #FFFFFF;
  --c-light-gray-bg:#F7F7F9;
  --c-light-gray-border:#EBEBF3;
  --c-light-gray:#D5D5D6;
  --c-gray:#9896A1;
  --c-dark-gray: #858585;
  --c-dark-gray-bg: #1E1E1E;
  --c-dark: #0A041C;
  --c-primary: #7445FB;
  --c-secondary: #2DC78F;
  --c-tertiary: #EA4D4D;

  --c-opacity: rgba(0, 0, 0, 0.48);
  --gradient: background: linear-gradient(180deg, rgba(247, 247, 249, 0) 0%, #F7F7F9 100%);

  /* border-radious */
  --round-large: 24px;
  --round-regular: 16px;
  --round-small: 8px;
  --round-extra-small: 4px;

  /* font */
  --f-regular: "SF Pro Display Regular";
  --f-medium: "SF Pro Display Medium";
  --f-semibold: "SF Pro Display SemiBold";
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
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
  font-family: "SF Pro Display Regular";
  position: relative;
  padding: 2rem;
}

.dashboard {
  background-color: var(--c-light);
  max-width: 144rem;
  width: 100%;
  height: 90rem;
  border-radius: var(--round-large);
  margin: 0 auto;
}
</style>
