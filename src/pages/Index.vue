<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <!-- <g-image alt="Example image" src="~/favicon.png" width="135" /> -->

    <!-- make this a component and move styles -->
    <section class="intro">
      <h1 class="heading intro__heading">
        A meticulous web developer from Leeds, with a passion for:
        <br />
        <span class="intro__passions" id="skill-switch">Automation</span>
      </h1>

      <div class="intro__copy">
        <p>Luke is a UK based web developer with 9+ years of industry experience.</p>
        <p>Using the appropiate tools and processes he has created highly performt and visually pleasing websites for clients such as - Walmart, Asda, 188Bet, Coral, Co-op, and Jet2.</p>
        <p>
          Most recently Luke has been creating mobile first and modular front end code for the Umbraco CMS, and also web apps using Vue.JS - one of which was nominated for
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
      <ul id="skill-switch-list">
        <li>Responsive Web Design</li>
        <li>Web Standards</li>
        <li>Accessibility</li>
        <li>Reusable Code</li>
        <li>Leila</li>
        <li>Wanking</li>
        <li>Automation</li>
      </ul>
    </section>
  </Layout>
</template>

<script>
import { gsap } from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'

gsap.registerPlugin(TextPlugin)

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  mounted () {

    // Variables
    const elSkillSwitch = document.getElementById('skill-switch');
    let elSkillSwitchListLi = document.querySelectorAll('#skill-switch-list li');
    let switchDelay = 1.5;
    let switchArray = [];
    let text;
    let textLength;
    let duration;

    // Create timeline
    const tlSwitch = gsap.timeline({
      onComplete: function () {
        this.restart();
      }
    });

    // Loop through skill switch list and push each iteration to array
    Array.prototype.forEach.call(elSkillSwitchListLi, function (el) {
      switchArray.push(el.innerHTML);

      // Get inner text length and divide by 10 to use as tween duration
      text = el.innerText;
      textLength = parseInt(text.trim().length);
      duration = textLength / 10;

      // Set Minmum duration of 1
      if (duration < 1) {
        duration = 1;
      }

      // Set-up tweens
      tlSwitch.to(elSkillSwitch, duration, {
        text: text,
        delay: switchDelay,
        ease: 'none'
      });
    });
  }
}
</script>

<style lang="scss" scoped>
.intro {
  @include full-flex;
}

.intro__heading {
  @include font-size(22px);
}

.intro__passions {
  color: $c-primary;
}
</style>
