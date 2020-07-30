<template>
  <Layout>
    <section>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <div class="rich-text">
        <h1 class="heading heading--large">Personal Projects</h1>
      </div>
      <Projects :projectData="personalProjects" :logosData="logos" />
    </section>
  </Layout>
</template>

<script>
import Projects from '~/components/Projects.vue'
import personalProjects from '~/data/personal-projects.json'
import logos from '~/data/logos.json'

export default {
  metaInfo: {
    title: 'Personal Projects | Luke Fryer - Front End Developer',
  },
  data: () => ({
    personalProjects: personalProjects,
    logos: logos,
  }),
  components: { Projects },
}
</script>
