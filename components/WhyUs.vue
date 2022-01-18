<template>
  <div class="relative dark:bg-secondary-darkest bg-gray-50">
    <section
      class="py-24 text-black dark:text-white md:py-40 light:text-secondary-black"
    >
      <div
        class="relative flex flex-col items-center w-full d-container-content"
      >
        <div class="flex flex-col items-center w-full col-span-12">
          <div class="mb-2">
            <span
              class="text-lg font-bold capitalize text-cloud-dark dark:text-cloud-light"
            >
              Business Done Right
            </span>
          </div>
          <h1
            class="mb-2 font-serif font-normal text-center text-display-6 md:text-display-5 2xl:text-display-4"
          >
            Why Betawave
          </h1>
          <p
            class="mb-12 font-normal text-center text-body-base md:text-body-lg 2xl:text-body-xl"
          ></p>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div
              v-for="item in items"
              :key="item.id"
              class="flex flex-col items-center p-6 transition duration-200 rounded-md"
            >
              <svg-icon
                :name="item.icon"
                class="w-10 h-10 mb-4 transition duration-200 iconify iconify--entypo text-primary group-hover:text-primary-400"
              ></svg-icon>

              <h3
                class="relative inline-flex items-center mb-1 font-bold text-center text-body-lg lg:text-body-xl"
              >
                {{ item.title }}
              </h3>
              <p class="mb-4 text-sm text-center lg:text-base">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
        {
          id: 2,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
        {
          id: 3,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
        {
          id: 4,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
        {
          id: 5,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
        {
          id: 6,
          icon: "sun",
          title: "Ulrrimate Sportbook",
          description:
            "Attract all playing preferences with the most extensive coverage of sports, events , and markets. Let them bet on almost anything.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
