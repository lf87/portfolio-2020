<template>
  <header class="site-footer">
    <nav class="site-footer__nav">
      <a target="github" rel="noreferrer noopener" href="https://github.com/lf87">Github</a>
      <a target="linkedin" rel="noreferrer noopener" href="https://www.linkedin.com/in/luke-fryer-85565a95/">LinkedIn</a>
      <a target="twitter" rel="noreferrer noopener" href="https://twitter.com/LukeFryer">Twitter</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss" scoped>
.site-footer {
  @include full-flex(row);
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
  margin-top: 0.75em;
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
