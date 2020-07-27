<template>
  <header class="site-header">
    <strong class="site-header__site-name">
      <!-- <g-link class="header__site-name" to="/">{{ $static.metadata.siteName }}</g-link> -->
      <g-link to="/">Luke Fryer - Web Developer</g-link>
    </strong>
    <nav class="site-header__nav">
      <g-link class="site-header__nav-link" to="/">Home</g-link>
      <g-link class="site-header__nav-link" to="/about/">About</g-link>
      <g-link class="site-header__nav-link" to="/skills/">Skills</g-link>
      <!-- seperate sections for personal and client work -->
      <g-link class="site-header__nav-link" to="/work/">Work</g-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
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
}

.site-header__site-name {
  margin-bottom: 0.5rem;
  letter-spacing: 0.5px;
  flex-grow: 1;
  margin-right: #{$gutter * 2};

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
  margin-top: 0.5em;
  margin-bottom: 1rem;
  display: flex;
  position: relative;
  margin-left: -0.5rem;
  flex-basis: 0;
}

.site-header__nav-link {
  color: $c-white-text;
  text-decoration: none;
  // text-transform: uppercase;
  padding-top: 0.66em;
  padding-right: 0.5rem;
  padding-bottom: 0.66em;
  padding-left: 0.5rem;
  position: relative;

  &:hover {
    color: $c-white;
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
    &::before {
      display: block;
      background-color: $c-primary;
    }
  }
}
</style>
