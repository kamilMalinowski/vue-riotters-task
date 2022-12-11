<template>
  <!-- bitcoin -->
  <div class="el">
    <div class="el__icon-wrapper">
      <bitcoin-icon></bitcoin-icon>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">BTC</h4>
      <p class="el__text"><b>Bitcoin</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Price</h4>
      <p class="el__text"><b>$29,982.96</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Change</h4>
      <p class="el__text el__text--increase">
        <b>+ 2.15%</b>
        <arrow-small class="increase"></arrow-small>
      </p>
    </div>
    <line-small class=""></line-small>
    <div class="el__buttons">
      <button class="btn btn--secondary">Sell</button>
      <button class="btn btn--primary">Buy</button>
    </div>
  </div>

  <!-- Ethereum -->
  <div class="el">
    <div class="el__icon-wrapper">
      <ethereum-icon></ethereum-icon>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">ETH</h4>
      <p class="el__text"><b>Ethereum</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Price</h4>
      <p class="el__text"><b>1,816.61</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Change</h4>
      <p class="el__text el__text--decrease">
        <b>- 2.11</b>
        <arrow-small class="decrease mirror3"></arrow-small>
      </p>
    </div>
    <line-small-decrease class=""></line-small-decrease>
    <div class="el__buttons">
      <button class="btn btn--secondary">Sell</button>
      <button class="btn btn--primary">Buy</button>
    </div>
  </div>

  <!-- Cardano -->
  <div class="el">
    <div class="el__icon-wrapper">
      <cardano-icon></cardano-icon>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">ADA</h4>
      <p class="el__text"><b>Cardano</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Price</h4>
      <p class="el__text"><b>$0.5748</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Change</h4>
      <p class="el__text el__text--increase">
        <b>+ 1.34%</b>
        <arrow-small></arrow-small>
      </p>
    </div>
    <line-small class="mirror2"></line-small>
    <div class="el__buttons">
      <button class="btn btn--secondary">Sell</button>
      <button class="btn btn--primary">Buy</button>
    </div>
  </div>

  <!-- Avalanche -->
  <div class="el">
    <div class="el__icon-wrapper">
      <avalanche-icon></avalanche-icon>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">AVAX</h4>
      <p class="el__text"><b>Avalanche</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Price</h4>
      <p class="el__text"><b>$24.68</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Change</h4>
      <p class="el__text el__text--increase">
        <b>+ 0.48%</b>
        <arrow-small></arrow-small>
      </p>
    </div>
    <line-small class="mirror"></line-small>
    <div class="el__buttons">
      <button class="btn btn--secondary">Sell</button>
      <button class="btn btn--primary">Buy</button>
    </div>
  </div>

  <!-- Ripple -->
  <div class="el">
    <div class="el__icon-wrapper">
      <ripple-icon></ripple-icon>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">XRP</h4>
      <p class="el__text"><b>Ripple</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Price</h4>
      <p class="el__text"><b>$30,384.90</b></p>
    </div>
    <div class="el__info-box">
      <h4 class="el__title">Change</h4>
      <p class="el__text el__text--increase">
        <b>+ 0.48%</b>
        <arrow-small></arrow-small>
      </p>
    </div>
    <line-small class="mirror"></line-small>
    <div class="el__buttons">
      <button class="btn btn--secondary">Sell</button>
      <button class="btn btn--primary">Buy</button>
    </div>
  </div>
</template>

<script>
import ArrowSmall from "../icons/ArrowSmall.vue";
import Bitcoin from "../icons/Bitcoin.vue";
import Ethereum from "../icons/Ethereum.vue";
import Cardano from "../icons/Cardano.vue";
import Avalanche from "../icons/Avalanche.vue";
import Ripple from "../icons/Ripple.vue";
import LineSmall from "../icons/LineSmall.vue";
import LineSmallDecrease from "../icons/LineSmallDecrease.vue";
export default {
  components: {
    "arrow-small": ArrowSmall,
    "bitcoin-icon": Bitcoin,
    "ethereum-icon": Ethereum,
    "cardano-icon": Cardano,
    "avalanche-icon": Avalanche,
    "ripple-icon": Ripple,
    "line-small": LineSmall,
    "line-small-decrease": LineSmallDecrease,
  },
};
</script>

<style lang="scss" scoped>
.el {
  display: grid;
  grid-template-columns: 4.8rem 13rem 16.7rem 17.4rem 1fr 12.2rem;
  grid-gap: 1.6rem;
  align-items: center;
  background-color: var(--c-light);
  border-radius: var(--round-small);
  border: 1px solid var(--c-light-gray-border);
  padding: 1.6rem 2rem;
  &__icon-wrapper {
    padding: 0.8rem;
    border: 1px solid var(--c-light-gray-border);
    border-radius: 100%;
    display: grid;
    place-content: center;
  }
  &__title {
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.4rem;
    padding-bottom: 0.6rem;
    color: var(--c-gray);
  }
  &__text {
    display: flex;
    gap: 0.6rem;
    font-size: 1.4rem;
    line-height: 1.4rem;
    b{
      font-weight: 600;
    }
    &--increase {
      color: var(--c-secondary);
    }
    &--decrease {
      color: var(--c-tertiary);
    }
  }
  &__icon {
    width: 1.4rem;
    display: grid;
    place-content: center;
    height: 1.4rem;
    border-radius: 100%;
    &--increase {
      border: 1.5px solid var(--c-secondary);
      background-color: rgba(45, 199, 142, 0.2);
    }
    &--decrease {
      border: 1.5px solid var(--c-tertiary);
      background-color: rgba(234, 77, 77, 0.2);
    }
  }
  &__buttons {
    display: flex;
  }
}

.mirror {
  transform: scaleX(-100%);
}

.mirror2 {
  transform: rotate(-180deg);
}

.mirror3 {
  transform: rotate(90deg);
}
</style>
