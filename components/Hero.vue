<template>
  <div
    class="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible"
  >
    <div
      class="relative pt-12 overflow-hidden dark:bg-sky-black dark:text-white"
    >
      <div
        class="flex flex-wrap justify-center py-0 section d-container-content"
      >
        <section
          class="z-20 flex flex-col justify-start w-full px-4 pb-24 text-center sm:pt-12 sm:pb-36 lg:pt-24 lg:pb-50"
        >
          <div>
            <p>Hello from betawave developer</p>
          </div>
          <canvas
            class="block mx-auto webgl"
            data-engine="three.js r136"
            width="400"
            height="400"
            style="opacity: 1; touch-action: none; width: 200px; height: 200px"
          ></canvas>
          <h1
            class="pt-2 mb-6 font-serif font-normal text-display-5 md:text-display-3 2xl:text-display-2 md:text-2xl"
          >
            The Hybrrid Betting platform
          </h1>
          <h2
            class="px-8 mb-8 font-normal text-body-base xs:text-body-lg md:text-body-xl 2xl:text-body-2xl sm:px-0 dark:text-cloud-lighter text-cloud-darker"
          >
            Turn your ideas into profits! Start a new business or expand an
            existing one – Betawave is your assured partner on the road to
            achieving your goals.
          </h2>

          <div
            class="flex flex-col flex-wrap items-center justify-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-3 xl:space-x-4"
          >
            <p>Our platform</p>
            <nuxt-link
              to="http://google.com"
              class="font-medium text-white bg-red-500 btn medium"
              >Get started
            </nuxt-link>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.btn {
  border-color: none;
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1rem;
  line-height: 1rem;
  border-radius: 6px;
}
</style>
