<template>
  <section ref="section" class="relative text-white bg-primary" id="whoweare">
    <div class="relative w-full pt-16 pb-32 text-justify d-container-content">
      <div
        class="flex flex-col-reverse mt-16 md:mt-24 md:mb-32 xl:mt-40 lg:mt-32 md:flex-row"
      >
        <div class="z-10 hidden pb-8 md:block md:w-2/5 product-image">
          <img
            v-infocus="'showElement'"
            class="my-hidden hidden-left md:-mt-6 xl:-mt-14"
            src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643408122/Betawave_io/Screen_Shot_2022-01-28_at_11.11.46_PM_imac2015retina_front_jzxcof.png"
          />
        </div>
        <div
          v-infocus="'showElement'"
          class="flex-1 pb-4 md:pl-8 product-interaction my-hidden hidden-right"
        >
          <h2 class="mb-12 text-3xl md:text-5xl">
            Betting and Casino <br />
            products
          </h2>
          <h3>
            Connect to an array of casino and sports betting products to deliver
            more value to your business today. We have everything you need to
            take your business to new heights, from our trusted Sportsbook and a
            massive range of slots to Live Casino games, Bingo, and Esports.
            It’s all here.
          </h3>

          <h3 class="my-4">
            We design, code, develop, produce and deploy our suite of software
            that allows clients keep abreast of their online business. Whether
            it’s online or land-based retail shops, our integrated platform
            delivers, allowing operators to focus on the running and expansion
            of their business.
          </h3>
        </div>
      </div>
    </div>

    <div class="w-full decor-left">
      <img
        src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205714/Betawave_io/decor-concentrated-circles_oatiqz.svg"
        class="spiral"
      />
      <img
        src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205714/Betawave_io/decor-circle-yellow-outline_idx3xz.svg"
        class="yellow-circle"
      />
    </div>

    <div class="decor-right">
      <img
        src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205714/Betawave_io/decor-concentrated-circles_oatiqz.svg"
        class="spiral"
      />
      <img
        src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205714/Betawave_io/decor-circle-yellow-outline_idx3xz.svg"
        class="yellow-circle"
      />
    </div>

    <div class="wave">
      <div class="wave-svg"></div>
    </div>
  </section>
</template>

<script>
// import handleEnter from "../directives/handle-enter";
export default {
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding) => {
        let f = () => {
          let rect = el.getBoundingClientRect();
          let inView =
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight);
          if (inView) {
            el.classList.add(binding.value);
            window.removeEventListener("scroll", f);
          }
        };
        window.addEventListener("scroll", f);
        f();
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.spiral {
  position: absolute;
  top: -7%;
  opacity: 0.6;
  left: -160px;
  width: 300px;
}

.yellow-circle {
  position: absolute;
  left: 120px;
  top: 40px;
  width: 50px;
}

.wave {
  position: absolute;
  bottom: 0px;
  z-index: 200;
  overflow: hidden;
  width: 100%;
  height: 150px;
}

.wave-svg {
  position: absolute;
  animation: wave 5s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  width: 300vw;
  height: 70px;
  background-image: url("https://res.cloudinary.com/dvuogdjyq/image/upload/v1643205792/Betawave_io/wave-2-outlines_xqwilj.svg");
  background-position: 0% 100%;
  background-size: 150vw 100%;
  background-repeat: repeat-x;
}

@media only screen and (min-width: 768px) {
  .wave-svg {
    height: 140px;
  }
}

@keyframes wave {
  0% {
    transform: translate3d(0, 0, 0);
  }

  100% {
    transform: translate3d(-150vw, 0, 0);
  }
}

// .decor-right {
//   position: absolute;
//   top: 0;
//   right: 0;
// }

@media only screen and (min-width: 768px) {
  .spiral {
    top: -14%;
    left: -180px;
    width: 530px;
  }

  .yellow-circle {
    position: absolute;
    left: 300px;
    top: 50px;
    width: 100px;
  }
}

.imgSlide {
  animation: imgSlide 2s forwards 0s ease-in;
}

.my-hidden {
  opacity: 0;
}

.hidden-right {
  transform: translate(50px, 0);
}

.hidden-left {
  transform: translate(-50px, 0);
}

.showElement {
  opacity: 1;
  transform: translate(0, 0);
  transition: all 0.5s ease-out;
}
</style>
