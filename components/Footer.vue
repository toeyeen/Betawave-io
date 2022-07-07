<template>
  <div id="footer">
    <footer
      class="text-center border-t bg-cloud-surface dark:bg-sky-black dark:border-t-sky-darkest"
    >
      <div
        class="p-4 mx-auto d-container sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-3 md:order-2">
          <a
            href="https://twitter.com/SBTCapital.ng"
            target="_blank"
            rel="noopener"
            class="footer-link"
            ><span class="sr-only">Twitter</span>
            <!-- <svg-icon class="w-6 h-6 fill-current" name="twitter"></svg-icon> -->
            <fa :icon="['fab', 'twitter']" class="w-6 h-6 fill-current" />
          </a>
          <a
            href="https://github.com/sbtcapital/website"
            target="_blank"
            rel="noopener"
            class="footer-link"
            ><span class="sr-only">GitHub</span>
            <!-- <svg-icon class="w-6 h-6 fill-current" name="github"></svg-icon> -->
            <fa :icon="['fab', 'github']" class="w-6 h-6 fill-current" />
          </a>
        </div>
        <div class="mt-3 md:mt-0 md:order-1">
          <p class="text-base text-center">
            © {{ currentYear }} SBTCapital Ltd.
            <span class="ml-2"> All rights reserved. </span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    currentYear() {
      let today = new Date();
      return today.getFullYear();
    },
  },
};
</script>

<style lang="scss" scoped></style>
