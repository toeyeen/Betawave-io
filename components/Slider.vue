<template>
  <div class="relative slider-conatiner">
    <div class="slider-wrapper slide" ref="slide">
      <vue-glide
        class="slider"
        ref="slider"
        v-model="currentIndex"
        type="carousel"
        :perView="perView"
        @glide:slide-click="test"
        @gilde:mount-after="testMount"
        :autoplay="autoplay"
        :breakpoints="breakpoints"
      >
        <vue-glide-slide
          class="w-full p-4 mx-auto bg-gray-100 slider drop-shadow-2xl rounded-xl md:px-4 lg:px-4 md:py-2 lg:py-2 slider-card md:w-4/6 lg:w-1/2"
          v-for="currentItem in items"
          :key="currentItem.id"
        >
          <p class="text-center">
            {{ currentItem.comment }}
          </p>
          <div
            class="flex flex-col items-center justify-center w-full mx-auto mt-4"
          >
            <img
              :src="currentItem.image"
              class="w-24 h-24 mx-auto rounded-full"
            />
            <small class="block">{{ currentItem.name }}</small>
            <small class="block font-semibold"> {{ currentItem.role }} </small>
          </div>
        </vue-glide-slide>

        <!-- <template slot="control" class="control">
          <button data-glide-dir="<" class="prev">prev</button>
          <button data-glide-dir=">" class="next">next</button>
        </template> -->
      </vue-glide>
    </div>
  </div>
</template>

<script>
import { Glide, GlideSlide } from "vue-glide-js";

export default {
  components: {
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide,
  },
  data() {
    return {
      currentIndex: 0,
      items: [
        {
          id: 1,
          image:
            "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643462955/Betawave_io/avatar_xrhrwn.svg",
          name: "Adeleke Sofola",
          role: "CEO - Shopaholic Pools",
          comment:
            "These company takes every peice of information and excute it to an overly satisfastory level, their attention to details and professionalism is impeccable. I will continue to work with them.",
        },
        {
          id: 2,
          image:
            "https://res.cloudinary.com/dvuogdjyq/image/upload/v1643462955/Betawave_io/avatar_xrhrwn.svg",
          name: "Imran Bukhari",
          role: "CEO - Truewave",
          comment:
            "I have worked with Betawave for many years on several projects. This team are attentive,professional, flexible and they always deliver",
        },
      ],
      perView: 1,
      autoplay: 6000,
      breakpoints: {
        800: {
          perView: 1,
        },
        480: {
          perView: 1,
        },
      },
    };
  },

  computed: {
    currentItem() {
      return this.items[Math.abs(this.currentIndex) % this.items.length];
    },
    calculate() {
      return Math.abs(this.currentIndex) % this.items.length;
    },
  },
  methods: {
    startSlider() {
      this.timer = setInterval(this.next, 4000);
    },
    test(index) {
      alert(`click ${index}`);
    },
    testMount() {
      alert("mounted");
      // this.$refs.slider.glide.disable();
    },
  },
  mounted() {
    this.startSlider();
  },
};
</script>

<style lang="scss" scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.slide-fade-enter {
  transform: translateX(100px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-leave-to {
  transform: translateX(-50px);
  opacity: 1;
}
// .fade-enter,
// .fade-leave-to {
//   visibility: hidden;
//   width: 100%;
//   opacity: 0;
// }

// .fade-enter-to {

// }

.control {
  display: flex;
}

.next {
  background: red;
}

.prev {
  background: yellow;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}

.slide {
  display: flex;
  overflow: hidden;
  align-items: flex-start;
}

.prev {
  display: inline-block;
  margin-right: 50px;
  cursor: pointer;
}

.next {
  display: inline-block;
  cursor: pointer;
}

.control {
  position: absolute;
  bottom: 25;
  right: 30px;
}

#slide > div {
  min-width: 250px;
  padding-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
