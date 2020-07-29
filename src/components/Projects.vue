<template>
  <div class="projects">
    <div
      class="projects__project"
      :key="item[index]"
      v-for="(item, index) in projectData"
    >
      <h2 class="heading heading--medium">{{ item.name }}</h2>
      <div class="rich-text">
        <p>{{ item.copy }}</p>
        <a :target="`project${index}`" :href="item.url">Website</a>
      </div>
      <div class="projects__logos">
        <div
          class="projects__logo"
          :key="tech[index]"
          v-for="(tech, index) in item.techStack"
        >
          <svg
            :aria-label="logosData[tech].text"
            :viewBox="logosData[tech].viewbox"
            class="projects__logo"
          >
            <use :xlink:href="`#symbol-${logosData[tech].id}`" />
          </svg>
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
  @include full-flex;

  h2 {
    margin-top: 0;
  }
}

.projects__project {
  @include full-flex;
  background: rgba($c-black, 0.1);
  padding-top: 1rem;
  padding-right: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  border-radius: 10px;
  margin-bottom: 2rem;
}

.projects__logos {
  @include full-flex(row);
  align-items: center;
}

.projects__logo {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 3rem;
  margin-right: 2rem;
}
</style>
