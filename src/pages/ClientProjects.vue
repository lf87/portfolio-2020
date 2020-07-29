<template>
  <Layout>
    <section>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <div class="rich-text">
        <h1 class="heading heading--large">Client projects</h1>
      </div>
      <Projects :projectData="clientProjects" :logosData="logos" />
    </section>
  </Layout>
</template>

<script>
import Projects from '~/components/Projects.vue'
import clientProjects from '~/data/client-projects.json'
import logos from '~/data/logos.json'

export default {
  metaInfo: {
    title: 'Client Projects | Luke Fryer - Front End Developer',
  },
  data: () => ({
    clientProjects: clientProjects,
    logos: logos,
  }),
  components: { Projects },
}
</script>
