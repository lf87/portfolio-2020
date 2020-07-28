<template>
  <div class="layout">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: { SiteHeader, SiteFooter }
}
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

ul[class],
ol[class] {
  padding: 0;
}

body,
h1,
h2,
h3,
h4,
p,
ul[class],
ol[class],
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

ul[class],
ol[class] {
  list-style: none;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}

@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

html {
  @include font-size(17px);
  height: 100%;
}

body {
  background-color: $c-mine-shaft;
  background-image: url("../assets/img/bg.png");
  background-repeat: repeat;
  color: $c-white-text;
  font-family: $f-rubik-regular;

  &::before {
    content: "";
    height: $page-top-bar-height;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: $c-primary;
  }
}

.heading {
  color: $c-white;
  font-family: $f-rubik-bold;
  margin-bottom: 1em;
  letter-spacing: 0.25px;
}

p {
  @include font-size(16px);
  margin-bottom: 1em;

  &:last-of-type {
    margin-bottom: 0;
  }

  a {
    color: $c-white-text;

    &:hover {
      color: $c-white;
    }
  }
}

.layout {
  @include full-flex;
  min-height: 100vh;
  overflow: hidden;
}
</style>
