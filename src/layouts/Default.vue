<template>
  <div class="layout">
    <SiteHeader />
    <main class="main">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue'
import SiteFooter from '~/components/SiteFooter.vue'

export default {
  components: { SiteHeader, SiteFooter },
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

html {
  @include font-size(17px);
  height: 100%;
}

body {
  background-color: $c-mine-shaft;
  background-image: url('../assets/img/bg.png');
  background-repeat: repeat;
  color: $c-white-text;
  font-family: $f-rubik-regular;
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  min-width: 320px;

  &::before {
    content: '';
    height: $page-top-bar-height;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: $c-primary;
  }
}

.heading {
  font-family: $f-rubik-bold;
  margin-bottom: 1em;
  letter-spacing: 0.25px;

  a {
    color: $c-white-text;
    color: $c-primary;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-decoration-color: $c-primary;

    &:hover {
      color: $c-primary;
    }
  }
}

.heading--large {
  @include font-size(28px);
}

.heading--medium {
  @include font-size(24px);
  margin-top: 1em;
}

.heading--small {
  @include font-size(18px);
  margin-top: 1em;
}

.layout {
  @include full-flex;
  min-height: 100vh;
  overflow: hidden;
}

.main {
  @include container;
  margin-bottom: 4rem;
  background-color: $c-mine-shaft;
  background-image: url('../assets/img/bg.png');
  background-repeat: repeat;
}

.rich-text {
  @include full-flex;
  margin-bottom: 2rem;

  &:last-of-type {
    margin-bottom: 0;
  }

  p {
    @include font-size(16px);
    margin-bottom: 1em;
  }

  a {
    color: $c-primary;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-thickness: auto;
    text-decoration-color: $c-primary;

    &:hover {
      color: $c-primary;
    }
  }

  ul {
    margin-top: 0;
    margin-bottom: 0;
  }

  h3 {
    &:first-of-type {
      margin-top: 0;
    }
  }

  > *:last-child {
    margin-bottom: 0;
  }
}

.lists {
  @include full-flex(row);
  display: grid;
  gap: $gutter;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    width: 100%;
  }

  ul {
    // flex: 1;
  }
}
</style>
