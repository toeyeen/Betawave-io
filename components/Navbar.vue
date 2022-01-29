<template>
  <div class="navbar bg-primary">
    <div
      class="flex items-center h-full px-1 py-3 mx-auto max-w-7xl sm:px-3 lg:px-6"
    >
      <button
        class="flex items-center justify-center w-12 h-12 text-gray-300 transition-colors duration-200 lg:hidden d-icon hover:text-cloud-lighter"
      >
        <fa icon="bars" class="w-8 h-8 text-white fill-current fa-2x" />
      </button>
      <div
        class="flex items-center justify-center flex-1 text-2xl text-white logo lg:justify-start"
      >
        Betawave.io
      </div>

      <nav
        class="items-center hidden h-full gap-4 cursor-pointer lg:flex"
        v-for="link in links"
      >
        <a :href="link.target" class="px-2 py-1 font-medium">
          {{ link.name }}
        </a>
      </nav>

      <nav class="flex items-center justify-end gap-1 lg:flex-1">
        <button class="p-3 d-icon lg:block">
          <fa
            icon="search"
            class="w-6 h-6 text-white fill-current fa-2x text-bold"
          />
        </button>
        <button class="p-3 d-icon lg:block" @click="darkMode = !darkMode">
          <fa
            :icon="darkMode ? 'sun' : 'moon'"
            class="w-6 h-6 text-white fill-current fa-2x text-bold"
          />
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
      links: [
        {
          id: 1,
          name: "Intro",
          target: "#intro",
        },
        {
          id: 2,
          name: "Our Services",
          target: "#services",
        },
        {
          id: 3,
          name: "The Team",
          target: "#team",
        },
        {
          id: 4,
          name: "Who are we",
          target: "#whoweare",
        },
        {
          id: 5,
          name: "Contact",
          target: "#conatct",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar {
  min-height: 3.5rem;
  z-index: 50;
  border-style: none;
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  @apply text-white;
}
</style>
