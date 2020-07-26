<template>
  <div class="layout">
    <header class="header">
      <strong class="header__site-name">
        <!-- <g-link class="header__site-name" to="/">{{ $static.metadata.siteName }}</g-link> -->
        <g-link to="/">Luke Fryer - Web Developer</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/skills/">Skills</g-link>
        <g-link class="nav__link" to="/work/">Work</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style lang="scss">
// Box sizing rules
*,
*::before,
*::after {
  box-sizing: border-box;
}

// Remove default padding
ul[class],
ol[class] {
  padding: 0;
}

// Remove default margin
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

// Set core body defaults
body {
  min-height: 100vh;
  scroll-behavior: smooth;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}

// Remove list styles on ul, ol elements with a class attribute
ul[class],
ol[class] {
  list-style: none;
}

// A elements that don't have a class get default styles
a:not([class]) {
  text-decoration-skip-ink: auto;
}

// Make images easier to work with
img {
  max-width: 100%;
  display: block;
}

// Inherit fonts for inputs and buttons
input,
button,
textarea,
select {
  font: inherit;
}

// Remove all animations and transitions for people that prefer not to see them
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
  // font-family: $f-fira-regular;

  a {
    color: $c-white-text;
  }
}

.layout {
  @include full-flex;
  max-width: 20rem#c1d5b4;
  margin-right: auto;
  margin-left: auto;
  padding-left: $gutter;
  padding-right: $gutter;
}

.header {
  @include full-flex;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 2em;
  margin-top: $page-top-bar-height;
}

.header__site-name {
  margin-bottom: 2em;
  letter-spacing: 0.5px;

  a {
    font-size: 20px;
    line-height: 1;
    font-family: $f-vt323;
    text-transform: uppercase;
    color: $c-primary;
    text-decoration: none;
  }
}

.nav {
  @include full-flex(row);
  margin-left: -0.5rem;
}

.nav__link {
  color: $c-white-text;
  text-decoration: none;
  // text-transform: uppercase;
  padding-top: 0.33em;
  padding-right: 0.5rem;
  padding-bottom: 0.66em;
  padding-left: 0.5rem;
  position: relative;

  &.active--exact {
    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      height: 2px;
      left: 0.5rem;
      width: calc(100% - 1rem);
      background-color: $c-primary;
    }
  }
}
</style>
