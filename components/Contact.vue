<template>
  <div
    class="relative w-full py-16 my-10 text-justify md:flex d-container-content"
  >
    <div class="flex-1 contact">
      <h2 class="my-4 text-3xl font-semibold">Get in Touch</h2>
      <p>
        Learn more about how our omnichannel sports betting solutions help you
        engage customers, boost efficiency and drive revenue growth.
      </p>
      <div class="mt-8 form">
        <form>
          <BaseInput label="Name" class="mb-4" />
          <BaseInput label="Email" class="mb-4" />
          <BaseInput label="Subject" class="mb-4" />
          <BaseInput label="Message" class="mb-4" />
          <base-button class="mt-8"> Submit</base-button>
        </form>
      </div>
    </div>
    <div class="flex-1 address md:ml-8">
      <h1 class="my-4 text-3xl font-semibold">Address</h1>

      <p>
        Our head office and dev team are situated in Lagos, Nigeria - the Tech
        hub of Africa and one of the new innovators in leading iGaming sector.
      </p>

      <div class="flex items-center justify-between mt-8">
        <div class="flex items-center justify-between flex-1 phone">
          <div
            class="relative w-10 h-10 mr-4 border border-gray-700 rounded-full circle"
          >
            <svg-icon
              name="sun"
              class="absolute w-4 h-4 fill-current top-1/2 center-items t left-1/2"
            ></svg-icon>
          </div>
          <div class="flex-1">
            <p class="text-xs md:text-lg">+27 (91) 11563424</p>
          </div>
        </div>
        <div class="flex items-center justify-between flex-1 email">
          <div
            class="relative w-10 h-10 mr-4 border border-gray-700 rounded-full circle"
          >
            <svg-icon
              name="moon"
              class="absolute w-4 h-4 fill-current top-1/2 left-1/2 center-items"
            ></svg-icon>
          </div>
          <div class="flex-1">
            <p class="text-xs md:text-lg">hello@betawave.io</p>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between my-8">
        <div
          class="relative w-10 h-10 mr-4 border border-gray-700 rounded-full circle"
        >
          <svg-icon
            name="sun"
            class="absolute w-4 h-4 fill-current top-1/2 left-1/2 center-items"
          ></svg-icon>
        </div>
        <div class="flex-1 md:text-lg">
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.center-items {
  transform: translate(-50%, -50%);
}
</style>
