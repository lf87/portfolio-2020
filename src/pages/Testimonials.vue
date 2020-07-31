<template>
  <Layout>
    <section class="testimonials">
      <h1 class="heading heading--large">Testimonials</h1>
      <blockquote class="testimonials__testimonial">
        <svg
          class="testimonials__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 298.67 213.33"
        >
          <defs />
          <path
            d="M298.67 0h-128v128l42.66 85.33h64L234.67 128h64zM0 0v128l42.67 85.33h64L64 128h64V0z"
          />
        </svg>
        <div class="rich-text">
          <p>
            Most of my time working as a developer at Home, I was sat next to
            Luke, meaning I not only got to know him as a person, but got to see
            first hand how skilled he is as a front end developer.
          </p>

          <p>
            Initially hired to enter content into WordPress, Drupal and Ektron
            systems, once we found out that he was a self taught developer, we
            gave him a chance to do some email and landing page development.
          </p>

          <p>
            From there, he often took the lead on WordPress builds, and was at
            the forefront of projects such as ADSA Extra Special, Jet2.com
            Eggstream Heatwave, amongst many other big projects, working on
            HTML, CSS and JavaScript.
          </p>

          <p>
            Always looking to make us more efficient, Luke produced multiple
            task runners to make the development of websites and emails quicker
            and easier using the likes of Gulp, Webpack, Sass, and other tools
            to improve everything he possibly could. When we told him that it
            would be cool if this sort of thing could be used for developing
            WordPress themes, he took it upon himself to rewrite what he had
            done to make it work and the team used it constantly over the next
            few years because of how easy Luke had made it.
          </p>

          <p>
            Having seen some of the work Luke has gone on to work on over the
            years since leaving Home, he has only improved his knowledge even
            further, and it's great to see him always looking to make things
            easier, and he continues to help me when I need someone to bounce an
            idea off.
          </p>
        </div>
        <footer class="testimonials__footer">
          <cite>Sam Kirkbride,</cite>
          <cite>Technology Director at Third Foundation</cite>
        </footer>
      </blockquote>
      <blockquote class="testimonials__testimonial">
        <svg
          class="testimonials__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 298.67 213.33"
        >
          <defs />
          <path
            d="M298.67 0h-128v128l42.66 85.33h64L234.67 128h64zM0 0v128l42.67 85.33h64L64 128h64V0z"
          />
        </svg>
        <div class="rich-text">
          <p>
            Unassuming, Luke's a solid, dependable front-end developer, who will
            take whatever he is given and turn it around. He's already keen and
            proactively looks at educating himself and alternative solutions.
            Luke will progress with more challenges and the space to think
            through and solve those problems.
          </p>
          <p>Funny chap as well - great dry sense of humour.</p>
        </div>
        <footer class="testimonials__footer">
          <cite>Simon Wilson,</cite>
          <cite>Service, interaction and UX designer</cite>
        </footer>
      </blockquote>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Testimonials | Luke Fryer - Front End Developer',
  },
}
</script>

<style lang="scss" scoped>
.testimonials {
  @include full-flex;

  .rich-text {
    padding-bottom: 2rem;
  }
}

.testimonials__testimonial {
  @include full-flex;
  margin-bottom: 4rem;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.testimonials__icon {
  width: 3rem;
  fill: $c-primary;
  margin-bottom: 1rem;
}

.testimonials__footer {
  @include full-flex;
  padding-top: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 2px;
    background-color: $c-primary;
    width: 8rem;
  }

  cite {
    font-style: normal;
    width: 100%;
  }
}

.testimonial__author {
  @include full-flex;
}

.testimonial__author-details {
  @include full-flex;
}
</style>
