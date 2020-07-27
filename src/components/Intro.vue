<template>
  <section class="intro">
    <h1 class="intro__heading heading">
      A meticulous web developer with 9+ years of industry experience and a passion for:
      <br />
      <span class="intro__passions" ref="passions">Responsive Web Design</span>
    </h1>

    <div class="intro__copy">
      <p>Using the appropiate tools and processes he has created highly performt and visually pleasing websites for clients such as - Walmart, Asda, 188Bet, Coral, Co-op, and Jet2.</p>
      <p>
        Most recently he's been building web applications using his framework of choice
        <a
          target="vuejs"
          rel="noreferrer noopener"
          href="https://vuejs.org/"
        >Vue.JS</a> - one of which was nominated for
        <a
          target="siteoftheyear"
          rel="noreferrer noopener"
          href="https://annual.awwwards.com/categories/mobile-site-of-the-year/british-sign-language-quiz"
        >Mobile site of the year</a> on
        <a
          target="awwwards"
          rel="noreferrer noopener"
          href="https://annual.awwwards.com/"
        >Awwwards.</a>
      </p>
    </div>
    <ul class="intro__passions-list" ref="passionsList">
      <li>Reusable Code</li>
      <li>Automation</li>
      <li>Problem solving</li>
      <li>Accessibility</li>
      <li>Web Standards</li>
      <li>Semantics</li>
      <li>Responsive Web Design</li>
    </ul>
  </section>
</template>

<script>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export default {
  name: 'Intro',
  mounted () {
    // Create timeline
    const tlSwitch = gsap.timeline({
      onComplete: function () {
        this.restart()
      }
    })

    this.$refs.passionsList.childNodes.forEach((el) => {
      // Get inner text length and divide by 10 to use as tween duration
      let text = el.innerHTML
      let textLength = parseInt(text.trim().length)
      let duration = textLength / 10

      // Set Minmum duration of 1
      if (duration < 1) {
        let duration = 1
      }

      // Set-up tweens
      tlSwitch.to(this.$refs.passions, duration, {
        text: text,
        delay: 1.5,
        ease: 'none'
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.intro {
  @include full-flex;
  @include container;
  margin-bottom: 4rem;

}

.intro__heading {
  @include font-size(22px);
  max-width: 22rem;
}

.intro__passions {
  color: $c-primary;
}

.intro__passions-list {
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
}
</style>
