<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->
    <Intro />
    <div class="rich-text">
      <p>
        Using the appropriate tools and processes Luke has created highly
        performant and visually pleasing websites for clients such as - Walmart,
        Asda, 188Bet, Coral, Co-op, and Jet2.
      </p>
      <p>
        Most recently he's been building web applications using his framework of
        choice
        <a target="vuejs" href="https://vuejs.org/">Vue.JS</a> - one of which
        was nominated for
        <a
          target="siteoftheyear"
          href="https://annual.awwwards.com/categories/mobile-site-of-the-year/british-sign-language-quiz"
          >Mobile site of the year</a
        >
        on
        <a target="awwwards" href="https://annual.awwwards.com/">Awwwards.</a>
      </p>
    </div>
  </Layout>
</template>

<script>
import Intro from '~/components/Intro.vue'

export default {
  metaInfo: {
    title: 'Luke Fryer - Front End Developer',
  },
  components: { Intro },
}
</script>
