<template>
  <section class="relative mt-20" id="services" ref="section">
    <img
      src="https://res.cloudinary.com/dvuogdjyq/image/upload/v1643202809/Betawave_io/section-semicirlce_j3mfty.svg"
      class="s-edge edge-b2b-bottom"
    />
    <div class="py-16 text-gray md:py-20 bg-tertiary">
      <div
        class="relative flex flex-col items-center w-full d-container-content"
      >
        <div class="flex flex-col items-center w-full col-span-12">
          <div class="mb-2">
            <span class="text-lg font-bold capitalize">
              Business Done Right
            </span>
          </div>
          <h1
            class="mb-2 font-semibold text-center text-display-6 md:text-display-5 2xl:text-display-4"
          >
            Why Betawave
          </h1>
          <p
            class="mb-12 font-normal text-center md:text-body-lg 2xl:text-body-xl"
          ></p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="item in items"
              :key="item.id"
              class="flex flex-col items-center p-6 transition duration-200 rounded-md"
            >
              <div class="icon-bg">
                <img
                  :src="item.svg"
                  :alt="item.id"
                  class="flex items-center justify-center"
                />
              </div>

              <h3
                class="relative inline-flex items-center font-bold text-center text-body-lg lg:text-body-xl"
              >
                {{ item.title }}
              </h3>
              <span class="mb-4 text-sm text-center lg:text-base">
                {{ item.description }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          icon: "sun",
          title: "Be the sportsbook boss",
          description:
            "Attract players from all around the world, have the most sports, events, and unique bet kinds. Let them bet on almost anything.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/win-svg_ze46gf.svg",
        },
        {
          id: 2,
          icon: "sun",
          title: "Give your players the MAX",
          description:
            "Offer an enormous assortment, with access to the most diverse selection of casino and slot games, as well as our incredible Ugames.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/disk-svg_kjqgid.svg",
        },
        {
          id: 3,
          icon: "sun",
          title: "Forget the hassle",
          description:
            "Create a stronger betting business with quality, hassle-free solutions and everything your business needs to prosper.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/smile_hpbt8x.svg",
        },
        {
          id: 4,
          icon: "sun",
          title: "Localize Efficiently",
          description:
            "Expand your business with our multi-lingual and multi-currency platform solution, and localized content for every region.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/thumbs-up_m5iumh.svg",
        },
        {
          id: 5,
          icon: "sun",
          title: "Get more then just a platform",
          description:
            "We’re interested in your success, therefore our industry-experienced team is ready to ensure your goals are achieved.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/notification_rscw2l.svg",
        },
        {
          id: 6,
          icon: "sun",
          title: "Grow faster",
          description:
            "Achieve over 35% conversion. Benefit from our exceptional additional services and versatility to show even better results.",
          svg: "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643404092/Betawave_io/growth_sahceg.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.s-edge.edge-b2b-bottom {
  display: block;
  height: 40px;
  margin-top: -150px;
  margin-bottom: -1px;
}

@media only screen and (min-width: 768) {
  .s-edge.edge-b2b-bottom {
    height: 60px;
  }
}

@media only screen and (min-width: 1024px) {
  .s-edge.edge-b2b-bottom {
    height: 70px;
  }
}

.icon-bg {
  width: 60px;
  height: 60px;
  background: #889cca;
  display: flex;
  justify-content: center;
  border-radius: 6px;
}
</style>
