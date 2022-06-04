<template>
  <div class="navbar bg-primary" :class="scrolled ? 'shadow-md' : ''">
    <div
      class="flex items-center h-full px-1 py-4 mx-auto max-w-7xl sm:px-3 lg:px-6"
    >
      <button
        @click="menuDropdownIsOpen = !menuDropdownIsOpen"
        class="flex items-center justify-center w-12 h-12 text-gray-300 transition-colors duration-200 lg:hidden d-icon hover:text-cloud-lighter"
        v-click-outside="closeDropDownMenu"
      >
        <fa icon="bars" class="w-8 h-8 text-white fill-current fa-2x" />
      </button>
      <div
        class="flex items-center justify-center flex-1 text-xl font-bold text-white logo lg:justify-start"
      >
        <nuxt-link to="/#home" class="tracking-widest uppercase">
          Betawave.io
        </nuxt-link>
      </div>

      <nav
        class="items-center hidden h-full gap-4 cursor-pointer lg:flex"
        v-for="link in links"
      >
        <nuxt-link
          class="px-2 py-1 text-lg font-medium tracking-wide"
          :class="current == link.target ? 'active' : ''"
          :to="{ path: '/', hash: `${link.target}` }"
          ref="anchor"
        >
          {{ link.name }}
        </nuxt-link>
      </nav>
    </div>
    <div v-if="menuDropdownIsOpen" class="absolute w-full lg:hidden">
      <div class="px-8 text-black bg-white shadow-md nav-collapse collapsing">
        <div v-for="link in links" class="py-2">
          <nuxt-link
            class="p-3 font-semibold"
            :to="{ path: '/', hash: `${link.target}` }"
            ref="anchor2"
            @click.native="menuDropdownIsOpen = false"
          >
            {{ link.name }}
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from "../directives/click-outside";
export default {
  directives: {
    clickOutside,
  },
  data() {
    return {
      darkMode: false,
      scrolled: false,
      current: "#home",
      links: [
        {
          id: 1,
          name: "Home",
          target: "#home",
        },
        {
          id: 6,
          name: "About Us",
          target: "#aboutus",
        },
        {
          id: 4,
          name: "Who are we",
          target: "#whoweare",
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
          id: 5,
          name: "Contact",
          target: "#contact",
        },
      ],
      menuDropdownIsOpen: false,
    };
  },

  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 200;
    },

    removeHash() {
      this.$router.push(this.$route.path.split("#"));
    },

    addAciveLink() {
      const anchorLinks = this.$refs.anchor;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          this.current = `#${section.getAttribute("id")}`;
        }
      });

      anchorLinks.forEach((link) => {
        if (link.$el.classList.contains(this.current)) {
          link.$el.classList.add("active");
        } else {
          link.$el.classList.remove("active");
        }
      });
    },

    newActiveLink() {
      const anchorLinks = this.$refs.anchor;
      // const anchorLinks2 = this.$refs.anchor2;

      const sections = document.querySelectorAll("section");

      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      anchorLinks.forEach((link) => link.$el.classList.remove("active"));
      anchorLinks[index].$el.classList.add("active");

      // anchorLinks2.forEach((link) => link.$el.classList.remove("active"));
      // anchorLinks2[index].$el.classList.add("active");
    },
    closeDropDownMenu() {
      this.menuDropdownIsOpen = false;
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
    // window.addEventListener("scroll", this.addAciveLink);
    window.addEventListener("scroll", this.newActiveLink);
    this.removeHash();
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
    // window.removeEventListener("scroll", this.addAciveLink);
    window.removeEventListener("scroll", this.newActiveLink);
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

.active {
  @apply text-secondary;
}

.slide-in-from-y {
  // transform: translateY(-100px);
  transition: slidenow 2s ease-in;
}

@keyframes slidenow {
  0% {
    transform: translateY(-20px);
    opacity: 0.1;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
