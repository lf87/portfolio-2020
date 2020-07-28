<template>
  <div class="projects">
    <div class="projects__logos" :key="logo[index]" v-for="(logo, index) in logosData">{{logo}}</div>
    <SvgSymbols />
  </div>
</template>

<script>
import SvgSymbols from '~/symbols/SvgSymbols'

export default {
  name: 'Projects',
  props: {
    projectData: Object,
    logosData: Object,
  },
  components: {
    SvgSymbols
  }
}
</script>

<style lang="scss" scoped>
.projects {
  @include full-flex;
}
</style>
