<template lang="html">
  <section class="bkg-color--lighter-grey">
    <div class="content-container content-container--small text-center" >
      <h2 class="text-color--bright-purple text--bold">What People are Saying</h2>

      <carousel id="quote-carousel" indicators :interval="3000">

      <slide>
        <span style="font-size: 100px; line-height: .9em; opacity: 0.2; float: left; padding-left: 8px;">❝</span> 
        <p class="quote-text text-color--purple">
        Matryx gives the internet back to scientists.
        </p>
        <h3 class="quote-author text-color--purple">
          <span class="quote-author__name">Blockchain Enthusiast</span>
          <span class="quote-author__company">From Switzerland</span>
        </h3>
      </slide>
      
      <slide >
        <p class="quote-text text-color--purple">
          Proident aliqua exercitation incididunt nostrud irure eiusmod nulla aute pariatur.
        </p>
        <h3 class="quote-author text-color--purple">
          <span class="quote-author__name">John Smith</span>
          <span class="quote-author__company">company name</span>
        </h3>
      </slide>

    </carousel>

    </div>
  </section>
</template>

<script>
export default {
  name: 'Quotes',
  components: {
    Caraousel,
    Slide
  }
  // methods: {
  //   onSlide (slide) {
  //     this.sliding = true
  //   },
  //   onSlid (slide) {
  //     this.sliding = false
  //   }
  // }
}
</script>

<style lang="scss">
.carousel-indicators {
  position:relative;

  li{
    height: 10px;
    width: 10px;
    border: none;
    border-radius: 50px;
    max-width: 10px;
  }
}

.carousel-item {
  position: relative;
  display: table-caption;
  -ms-flex-align: center;
      align-items: center;
  width: 100%;
  transition: -webkit-transform 0.6s ease;
  transition: transform 0.6s ease;
  transition: transform 0.6s ease, -webkit-transform 0.6s ease;
  /*! -webkit-backface-visibility: hidden; */
          /*! backface-visibility: hidden; */
  -webkit-perspective: 1000px;
          perspective: 1000px;
}

.quote-text {
  opacity: 0.7;
  font-style: italic;
  font-size: 20px;
  line-height: 35px;
}
.quote-author {
  float: right;
  padding-bottom: 20px;

  &__name {
    font-weight: bold;
    display:block;
    text-align:right;
  }
  &__company {
    display:block;
    text-align:right;
  }
}
</style>
