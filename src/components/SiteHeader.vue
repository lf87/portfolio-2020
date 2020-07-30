<template>
  <header class="site-header">
    <strong class="site-header__site-name">
      <!-- <g-link class="header__site-name" to="/">{{ $static.metadata.siteName }}</g-link> -->
      <g-link to="/">
        <span class="site-header__site-name-text">Luke Fryer - Web Dev</span>
        <span class="site-header__site-name-text--hide-xs">eloper</span>
      </g-link>
    </strong>
    <button :class="['hamburger', { active: navActive }]" aria-label="Open menu" @click="nav">
      <div class="hamburger__lines">
        <div class="hamburger__line"></div>
      </div>
    </button>
    <div :class="['hamburger-circle', { active: navActive }]"></div>
    <nav :class="['site-header__nav', { active: navActive }]">
      <g-link class="site-header__nav-link" to="/">Home</g-link>
      <g-link class="site-header__nav-link" to="/skills/">Skills</g-link>
      <g-link class="site-header__nav-link" to="/client-projects/">Client Projects</g-link>
      <g-link class="site-header__nav-link" to="/personal-projects/">Personal Projects</g-link>
      <g-link class="site-header__nav-link" to="/testimonials/">Testimonials</g-link>
      <g-link class="site-header__nav-link" to="/cv/">CV</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader',
  data: () => ({
    navActive: false,
  }),
  methods: {
    nav () {
      !this.navActive ? (this.navActive = true) : (this.navActive = false)
    },
  },
}
</script>

<style lang="scss" scoped>
.site-header {
  @include full-flex(row);
  @include container;
  flex-wrap: wrap;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin-bottom: 1.25em;
  margin-top: $page-top-bar-height;
  align-items: center;
  z-index: $z-site-header;
}

.site-header__site-name {
  letter-spacing: 0.5px;

  @include bp(xs) {
    margin-right: #{$gutter * 2};
    flex-grow: 1;
  }

  @include bp(md) {
    margin-bottom: 0.5rem;
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

.site-header__site-name-text {
  display: inline;
}

.site-header__site-name-text--hide-xs {
  display: none;

  @include bp(xxs) {
    display: inline;
  }
}

.site-header__nav {
  @include transition(opacity, 0.25s, $ease-in-out-cubic, 0s, true);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  opacity: 0;
  pointer-events: none;

  @include bp(md) {
    transition: none;
    text-align: left;
    top: initial;
    left: initial;
    width: auto;
    height: auto;
    margin-top: 0.5em;
    margin-bottom: 1rem;
    margin-left: -0.5rem;
    position: relative;
    opacity: 1;
    pointer-events: all;
    flex-direction: row;
    will-change: initial;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
}

.site-header__nav-link {
  @include font-size(24px);
  font-family: $f-rubik-bold;
  color: $c-white;
  text-decoration: none;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  text-shadow: 1px 2px 3px rgba($c-black, 0.15);
  position: relative;

  @include bp(md) {
    @include font-size(14px);
    font-family: $f-rubik-medium;
    padding-top: 0.66em;
    padding-right: 1rem;
    padding-bottom: 0.66em;
    padding-left: 1rem;
    color: $c-white-text;
  }

  @include bp-horizontal-xs {
    @include font-size(20px);
  }

  @include bp-horizontal-xxs {
    @include font-size(17px);
  }

  &:focus,
  &:active,
  &:hover {
    @include bp(md) {
      color: $c-white;
    }
  }

  &::before {
    content: '';
    display: none;
    position: absolute;
    bottom: 0;
    height: 2px;
    left: 0.5rem;
    width: calc(100% - 1rem);
  }

  &:hover {
    color: $c-mine-shaft;

    @include bp(md) {
      color: $c-white-text;
    }

    &::before {
      @include bp(md) {
        display: block;
        background-color: rgba($c-white, 0.5);
      }
    }
  }

  &.active--exact {
    color: $c-white;
    cursor: default;

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
  position: fixed;
  top: calc(2rem - 12px + #{$page-top-bar-height});
  right: $gutter;
  outline: none;
  background-color: transparent;
  z-index: $z-hamburger;
  cursor: pointer;

  @include bp(md) {
    display: none;
  }
}

.hamburger-circle {
  @include transition(transform, 0.25s, $ease-in-out-cubic, 0s, true);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  position: fixed;
  top: calc(2rem - 12px + #{$page-top-bar-height});
  right: $gutter;
  transform-origin: 75% 25%;
  // background-color: rgba($c-secondary, 0.1);
  background-color: $c-primary;
  pointer-events: none;

  @include bp(md) {
    display: none;
  }

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
  top: calc(50% - 2px);
  left: 10px;
  width: calc(100% - 20px);
  border-radius: 3px;

  @include bp(md) {
    display: none;
  }
}

.hamburger__line {
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  @include bp(md) {
    display: none;
  }
}

.hamburger__lines::before,
.hamburger__lines::after {
  content: '';
  top: calc(50% - 2px - 8px);
  width: 100%;
  left: 0;

  @include bp(md) {
    display: none;
  }
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
    transform: translateX(50%);

    opacity: 0;
  }
  &::after {
    transform: translateX(-50%);
  }
}

.hamburger.active .hamburger__line {
  transform: rotate(-90deg);
}
</style>
