<template>
  <Layout>
    <section>
      <!-- Learn how to use images here: https://gridsome.org/docs/images -->
      <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
      <div class="rich-text">
        <p>Client projects</p>
      </div>
      <Projects :projectData="personalProjects" :logosData="logos" />
    </section>
  </Layout>
</template>

<script>
import Projects from '~/components/Projects.vue'
import personalProjects from '~/data/personal-projects.json'

export default {
  metaInfo: {
    title: 'Personal Projects | Luke Fryer - Front End Developer',
  },
  components: { Projects },
}
</script>
