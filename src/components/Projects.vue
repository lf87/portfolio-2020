<template>
  <div class="projects">
    <div class="projects__project" :key="item[index]" v-for="(item, index) in projectData">
      <h2 class="heading heading--medium">
        <a :target="`project${index}`" :href="item.url">{{ item.name }}</a>
      </h2>
      <div class="rich-text">
        <p>{{ item.copy }}</p>
        <a v-if="item.repoUrl" :target="`repo${index}`" :href="item.repoUrl">Repository</a>
      </div>
      <div class="projects__logos">
        <div class="projects__logo" :key="tech[index]" v-for="(tech, index) in item.techStack">
          <svg
            :aria-label="logosData[tech].text"
            :viewBox="logosData[tech].viewbox"
            class="projects__logo"
          >
            <use :xlink:href="`#symbol-${logosData[tech].id}`" />
          </svg>
          <span class="projects__tooltip">{{logosData[tech].text}}</span>
        </div>
      </div>
    </div>
    <SvgSymbols />
  </div>
</template>

<script>
import SvgSymbols from '~/symbols/SvgSymbols'

export default {
  name: 'Projects',
  props: {
    projectData: Array,
    logosData: Array,
  },
  components: {
    SvgSymbols,
  },
}
</script>

<style lang="scss" scoped>
.projects {
  // @include full-flex;
  position: relative;
  width: 100%;
  display: grid;
  gap: $gutter;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));

  h2 {
    margin-top: 0;
  }
}

.projects__project {
  @include full-flex;
  background: rgba($c-black, 0.1);
  padding-top: $gutter;
  padding-right: $gutter;
  padding-bottom: $gutter;
  padding-left: $gutter;
  border-radius: 10px;
}

.projects__logos {
  align-items: center;
  display: grid;
  gap: $gutter;
  grid-template-columns: repeat(auto-fit, 2rem);
  margin-top: auto;
}

.projects__logo {
  display: block;
  position: relative;

  &:hover {
    .projects__tooltip {
      opacity: 1;
    }
  }
}

.projects__tooltip {
  @include transition(opacity, 0.1s, ease);
  font-size: 13px;
  background-color: $c-mine-shaft;
  border: 1px $c-white solid;
  border-radius: 3px;
  border-bottom-left-radius: none;
  bottom: calc(100% + 9px);
  opacity: 0;
  padding-bottom: 0.25em;
  padding-left: 0.5em;
  padding-right: 0.5em;
  padding-top: 0.25em;
  pointer-events: none;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  z-index: $z-projects__tooltip;

  &::after,
  &::before {
    border-style: solid;
    content: '';
    display: block;
    height: 0;
    left: calc(50% - 4px);

    position: absolute;
    width: 0;
  }

  &::before {
    border-color: $c-white transparent transparent transparent;
    border-width: 4px;
    top: calc(100% + 1px);
  }

  &::after {
    border-width: 3px;
    display: none;
    left: calc(0.3rem + 1px);
    top: 100%;
  }
}
</style>
