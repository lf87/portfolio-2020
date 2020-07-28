<template>
  <header class="site-header">
    <strong class="site-header__site-name">
      <!-- <g-link class="header__site-name" to="/">{{ $static.metadata.siteName }}</g-link> -->
      <g-link to="/">Luke Fryer - Web Developer</g-link>
    </strong>
    <button :class="['hamburger', { 'active': navActive }]" aria-label="Open menu" @click="nav">
      <div class="hamburger__lines">
        <div class="hamburger__line"></div>
      </div>
    </button>
    <div :class="['hamburger-circle', { 'active': navActive }]"></div>
    <nav :class="['site-header__nav', { 'active': navActive }]">
      <g-link class="site-header__nav-link" to="/">Home</g-link>
      <g-link class="site-header__nav-link" to="/about/">About</g-link>
      <g-link class="site-header__nav-link" to="/skills/">Skills</g-link>
      <!-- seperate sections for personal and client work -->
      <g-link class="site-header__nav-link" to="/work/">Client Projects</g-link>
      <g-link class="site-header__nav-link" to="/work/">Personal Projects</g-link>
      <g-link class="site-header__nav-link" to="/work/">Testimonials</g-link>
      <g-link class="site-header__nav-link" to="/work/">CV (PDF)</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data: () => ({
    navActive: false
  }),
  methods: {
    nav () {
      !this.navActive ? this.navActive = true : this.navActive = false
    }
  },
}
</script>

<style lang="scss" scoped>
.site-header {
  @include full-flex(row);
  @include container;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 1rem;
  margin-bottom: 1.25em;
  margin-top: $page-top-bar-height;
  align-items: center;
  z-index: $z-site-header;
}

.site-header__site-name {
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  flex-grow: 1;

  @include bp(xs) {
    margin-right: #{$gutter * 2};
  }

  a {
    font-size: 20px;
    line-height: 1;
    font-family: $f-vt323;
    text-transform: uppercase;
    color: $c-primary;
    text-decoration: none;
  }
}

.site-header__nav {
  @include transition(opacity, 0.25s, $ease-in-out-cubic, 0s, true);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  pointer-events: none;

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  @include bp(sm) {
    margin-top: 0.5em;
    margin-bottom: 1rem;
    margin-left: -0.5rem;
    flex-basis: 0;
    position: absolute;
  }
}

.site-header__nav-link {
  @include font-size(24px);
  @include remove-highlight;
  font-family: $f-rubik-bold;
  color: $c-white;
  text-decoration: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-shadow: 1px 2px 3px rgba($c-black, 0.15);
  position: relative;

  @include bp(sm) {
    padding-top: 0.66em;
    padding-right: 0.5rem;
    padding-bottom: 0.66em;
    padding-left: 0.5rem;
    color: $c-white-text;
  }

  &:hover {
    color: rgba($c-mine-shaft, 0.85);

    @include bp(sm) {
      color: $c-white;
    }
  }

  &::before {
    content: "";
    display: none;
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0.5rem;
    width: calc(100% - 1rem);
  }

  &:hover {
    &::before {
      display: block;
      background-color: rgba($c-primary, 0.25);
    }
  }

  &.active--exact {
    color: $c-white;

    &::before {
      display: block;
      background-color: $c-primary;
    }
  }
}

.hamburger {
  @include remove-highlight;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 0;
  position: absolute;
  top: $gutter;
  right: $gutter;
  outline: none;
  transform-origin: 75% 25%;
  transform: scale3d(1, 1, 1);
  background-color: transparent;
  border: 2px $c-primary solid;
  z-index: $z-hamburger;
  cursor: pointer;
}

.hamburger-circle {
  @include transition(
    transform background-color,
    0.25s,
    $ease-in-out-cubic,
    0s,
    true
  );
  background-color: $c-secondary;
  border-radius: 50%;
  width: calc(50px - 4px);
  height: calc(50px - 4px);
  position: absolute;
  top: calc(#{$gutter} + 2px);
  right: calc(#{$gutter} + 2px);
  transform-origin: 75% 25%;
  transform: scale3d(1, 1, 1);
  // background-color: rgba($c-secondary, 0.1);
  background-color: $c-primary;
  pointer-events: none;

  &.active {
    transform: scale3d(40, 40, 40);
  }
}

.hamburger__lines,
.hamburger__line,
.hamburger__lines::before,
.hamburger__lines::after {
  @include transition(transform opacity, 0.25s, $ease-out-cubic, 0s, true);
  background-color: $c-white;
  height: 4px;
  position: absolute;
  top: calc(50% - 2px;);
  left: 10px;
  width: calc(100% - 20px);
  border-radius: 3px;
}

.hamburger__line {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.hamburger__lines::before,
.hamburger__lines::after {
  content: "";
  top: calc(50% - 2px - 8px);
  width: 100%;
  left: 0;
}

.hamburger__lines::after {
  top: calc(50% - 2px + 8px);
}

.hamburger.active .hamburger__lines {
  transform: rotate(45deg);
  &::before,
  &::after {
    top: calc(50% - 2px);
    opacity: 0;
  }

  &::before {
    transform: translateX(100%);

    opacity: 0;
  }
  &::after {
    transform: translateX(-100%);
  }
}

.hamburger.active .hamburger__line {
  transform: rotate(-90deg);
}
</style>
