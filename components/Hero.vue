<template>
  <section
    id="home"
    ref="section"
    class="flex-auto w-full min-w-0 text-white lg:static hero-height lg:overflow-visible bg-primary font-primary"
  >
    <div
      class="relative pt-12 overflow-hidden dark:bg-sky-black dark:text-white lg:h-screen"
    >
      <div
        class="flex flex-wrap justify-center py-0 section d-container-content"
      >
        <div
          class="z-20 flex flex-col justify-start w-full px-4 pb-24 text-center"
        >
          <div class="text-left hero-text">
            <h1 class="slide-in-first">
              The Hybrid Betting <br />
              Platform
            </h1>
            <p class="text-2xl font-light leading-tight slide-in-first">
              Turn your ideas into profits! Start a new business or expand an
              existing one – SBTCapital is your assured partner on the road to
              achieving your goals.
            </p>
            <div class="mt-8 btnAnimation">
              <nuxt-link
                to="/#contact"
                class="font-medium text-gray-700 bg-secondary btn medium"
                >Get started
              </nuxt-link>
            </div>
          </div>
        </div>

        <div class="backdrop">
          <div class="right-side">
            <img
              src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643197622/Betawave_io/hero-shape_pd1exl.png"
            />
          </div>
          <div class="left-side">
            <img
              src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643197622/Betawave_io/circle_yellow_fowiov.svg"
              style="transform: translate(0px, 0px)"
              class="circle"
            />
          </div>
        </div>
      </div>
    </div>

    <img
      src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643203622/Betawave_io/white-smicircle_rcgnkn.svg"
      alt=""
      class="s-edge edge-b2b-bottom"
    />
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
.btn {
  border-color: none;
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1rem;
  line-height: 1rem;
  border-radius: 6px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
}

.left-side {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 120px;
  height: 100%;
}

.right-side {
  position: absolute;
  display: block;
  top: 10px;
  right: -40px;
  width: 336px;
}

.circle {
  position: relative;
  top: 12%;
  left: -35px;
}

.hero-height {
  height: 100%;
}

.s-edge.edge-b2b-bottom {
  // display: block;
  height: 55px;
  margin-bottom: -2px;
}

.s-edge {
  position: relative;
  z-index: 100;
  width: 100%;
}

.hero-text {
  font-family: "lato", sans-serif;
  margin-top: 100px;
  margin-bottom: 30px;
}

.hero-text h1 {
  font-size: 38px;
  font-weight: 800;
  line-height: 135%;
  letter-spacing: -0.5px;
}

.hero-text h3 {
  margin-top: 24px;
  font-size: 16px;
  line-height: 170%;
}

@media only screen and (min-width: 768px) {
  .hero-text {
    max-width: 60vw;
    text-align: left;
    margin-bottom: 50px;
  }
  .hero-text h1 {
    font-size: 58px;
    font-weight: 800;
    line-height: 135%;
    letter-spacing: -0.5px;
  }

  .hero-text h3 {
    margin-top: 24px;
    font-size: 22px;
    line-height: 170%;
  }

  .right-side {
    position: absolute;
    top: 30px;
    display: block;
    z-index: 100px;
    right: -67px;
    width: 70vw;
  }

  .s-edge.edge-b2b-bottom {
    height: 80px;
    margin-top: -36px;
    margin-bottom: -2px;
  }
}

@media only screen and (min-width: 1024px) {
  .hero-height {
    height: calc(100vh + 43px);
    font-family: Arial, Helvetica, sans-serif;
  }

  .hero-text {
    width: 714px;
    text-align: left;
  }
  .hero-text h1 {
    font-size: 58px;
    font-weight: 800;
    line-height: 135%;
    letter-spacing: -0.5px;
  }

  .hero-text h3 {
    margin-top: 24px;
    font-size: 22px;
    line-height: 170%;
  }

  .right-side {
    position: absolute;
    top: -10px;
    right: -90px;
    width: 714px;
    display: block;
    z-index: 100px;
  }

  .s-edge.edge-b2b-bottom {
    display: block;
    height: 100px;
    margin-top: -60px;
    margin-bottom: 0px;
  }

  .s-edge.edge-b2b-bottom {
    display: block;
    height: 104px;
    margin-bottom: -104px;
  }
}

img {
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
}

.slide-in-first {
  animation: slide-in-first 1s forwards 0s ease;
}

.btnAnimation {
  animation: btnAnimation 1.2s forwards 0s ease;
}
</style>
