<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <Intro />
  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'

export default {
  metaInfo: {
    title: 'Luke Fryer - Front End Developer'
  },
  components: { Intro }
}
</script>

