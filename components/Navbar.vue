<template>
  <div class="navbar">
    <div
      class="flex items-center h-full px-1 mx-auto max-w-7xl sm:px-3 lg:px-6"
    >
      <button
        class="flex items-center justify-center w-12 h-12 text-gray-300 transition-colors duration-200 lg:hidden d-icon hover:text-cloud-lighter"
      >
        <svg-icon name="hamburger" class="w-8 h-8 text-gray-500 fill-current">
        </svg-icon>
      </button>
      <div
        class="flex items-center justify-center flex-1 text-2xl text-gray-700 logo lg:justify-start"
      >
        Betawave.io
      </div>
      <nav class="flex items-center justify-end gap-1 lg:flex-1">
        <button class="p-3 d-icon lg:block">
          <svg-icon
            name="search"
            class="w-6 h-6 text-gray-500 fill-current text-bold"
          ></svg-icon>
        </button>
        <button class="p-3 d-icon lg:block" @click="darkMode = !darkMode">
          <svg-icon
            :name="darkMode ? 'sun' : 'moon'"
            class="w-6 h-6 text-gray-500 fill-current text-bold"
          ></svg-icon>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>

<style lang="scss">
.navbar {
  height: 3.5rem;
  z-index: 50;
  position: sticky;

  @apply w-full;
}
</style>
