<template>
  <section :id="tagId" ref="section">
    <div class="py-20 text-lg">
      <div class="relative w-full text-justify d-container-content">
        <div class="mb-8 text">
          <h1
            class="my-4 font-semibold text-center text-display-5 xs:text-display-4 md:text-display-3 2xl:text-display-2"
          >
            {{ title }}
          </h1>
          <div class="mx-auto my-container">
            <slot name="paragraph"></slot>
          </div>
        </div>

        <div class="mx-auto slider-container">
          <slot name="slider"> </slot>
        </div>
      </div>
    </div>
    <div class="relative z-10 section-divider">
      <slot name="image"></slot>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title",
    },
    tagId: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
p {
  line-height: 1.625em;
  margin: 1rem 0;
}

.edge-stdbill-bottom {
  margin-bottom: -57px;
  transform: rotateX(180deg) rotateY(0deg) rotateZ(0deg);
}

.slider-container {
  width: 100%;
}

@media only screen and (min-width: 768px) {
  .slider-container {
    width: 500px;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 375px) {
  .edge-stdbill-bottom {
    margin-bottom: -64px;
  }
}
@media only screen and (min-width: 425px) {
  .edge-stdbill-bottom {
    margin-bottom: -70px;
  }
}
@media only screen and (min-width: 768px) {
  .edge-stdbill-bottom {
    margin-bottom: -112px;
  }
}

@media only screen and (min-width: 1024px) {
  .edge-stdbill-bottom {
    margin-bottom: -142px;
  }
}
@media only screen and (min-width: 1280px) {
  .edge-stdbill-bottom {
    margin-bottom: -192px;
  }
}

.my-container {
  width: 100%;
}

@media (min-width: 640px) {
  .my-container {
    width: 640px;
  }
}

@media (min-width: 768px) {
  .my-container {
    width: 600px;
  }
}

@media (min-width: 1024px) {
  .my-container {
    width: 768px;
  }
}

@media (min-width: 1280px) {
  .my-container {
    width: 1024px;
  }
}

@media (min-width: 1536px) {
  .my-container {
    width: 1280px;
  }
}
</style>
