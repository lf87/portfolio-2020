<template>
  <div class="intro">
    <h1 class="intro__heading heading">
      <span class="intro__heading-text">A meticulous web developer with 9+ years of industry experience and a passion for: </span>
      <br />
      <span class="intro__heading-text intro__heading-text--passions" ref="passions">Responsive Web Design</span>
    </h1>
    <ul class="intro__passions-list" ref="passionsList">
      <li>Reusable Code</li>
      <li>Automation</li>
      <li>Vanilla Javascript</li>
      <li>Accessibility</li>
      <li>Web Standards</li>
      <li>Semantics</li>
      <li>Problem solving</li>
      <li>Responsive Web Design</li>
    </ul>
  </div>
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
}

.intro__heading {
  @include font-size(23px);
  margin-bottom: 2em;
  max-width: 40rem;
}

.intro__heading-text {
  display: inline;
}

.intro__heading-text--passions {
  display: inline;
  color: $c-primary;
}

.intro__passions-list {
  visibility: hidden;
  opacity: 0;
  height: 0;
  overflow: hidden;
}
</style>
