<template>
  <button
    :class="[colorVariants, btnClass, loaderClass]"
    :display="display"
    :size="size"
    :disable="disabledButton"
    v-on="$listeners"
  >
    <slot></slot>
    <div></div>
    <!-- <slot name="title"> </slot> -->
    <!-- <slot name="loader" :class="[loading ? loaderClass : null]"> </slot> -->
  </button>
</template>

<script>
export default {
  name: "ButtonBlock",
  props: {
    tag: {
      type: String,
      default: "button",
    },
    // color: {
    //   default: 'yellow',
    // },
    disable: {
      type: Boolean,
      default: false,
    },
    rounded: {
      type: String,
      default: "small",
    },
    display: {
      type: String,
      default: "block",
    },
    size: {
      type: String,
      default: "small",
    },
    variant: {
      type: String,
      default: "primary",
    },
    variantType: {
      type: String,
      default: "normal",
    },
  },
  data() {
    return {
      loading: false,
      disabledButton: this.disable,
    };
  },
  methods: {
    startLoading() {
      this.loading = true;
      this.disabledButton = true;
    },
    stopLoading() {
      this.loading = false;
      this.disabledButton = false;
    },
  },
  computed: {
    // colorBg() {
    //   return `bg-${this.color}-600`;
    // },
    btnClass() {
      return {
        "cursor-not-allowed opacity-50": this.disable == true,
        "text-sm": true,
        "rounded-lg": this.rounded === "medium",
        rounded: this.rounded === "small",
        "rounded-full": this.rounded === "large",
        "px-6 py-3": this.size == "normal",
        "px-4 py-2": this.size == "small",
        "block w-full": this.display == "block",
        "inline-block": this.display == "in-block",
        inline: this.display == "in",
      };
    },

    loaderClass() {
      return {
        "base-spinner": this.loading == true,
      };
    },
    colorVariants() {
      switch (this.variant) {
        case "primary":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-blue-600 opacity-25 disabled";
                  break;
                default:
                  break;
              }
              return `text-white bg-blue-600 `;
              break;
            case "outline":
              return `border border-blue-600 text-blue-600 bg-transparent   outline`;
              break;
            default:
              break;
          }
          break;
        case "danger":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-red-600 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-red-600 ";
              break;
            case "outline":
              return "border border-red-600 text-red-600 bg-transparent  ";
              break;
            default:
              break;
          }
          break;
        case "warning":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-yellow-600 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-yellow-600 ";
              break;
            case "outline":
              return "border border-yellow-600 text-primary-warning bg-transparent  ";
              break;
            default:
              break;
          }
          break;

        case "info":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-yellow-300 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-yellow-300 hover:bg-yellow-200";
              break;
            case "outline":
              return "border border-yellow-300 text-yellow-300 bg-transparent  hover:text-white hover:bg-yellow-300";
              break;
            default:
              break;
          }
          break;

        case "success":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-green-600 opacity-25 disabled";
                  break;
                default:
                  break;
              }
              return "text-white bg-green-600 hover:bg-green-500 normal";
              break;
            case "outline":
              return "border border-green-600 text-green-600 bg-transparent  hover:text-white hover:bg-green-600 outline";
              break;
            default:
              break;
          }
          break;

        case "tertiary":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-purple-500 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-purple-500 hover:bg-primary-h-tertiary";
              break;
            case "outline":
              return "border border-purple-500 text-purple-500 bg-transparent  hover:text-white hover:bg-purple-500";
              break;
            default:
              break;
          }
          break;

        case "secondary":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-gray-600 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-gray-600 hover:bg-gray-500";
              break;
            case "outline":
              return "border border-gray-600 text-white bg-transparent  hover:text-white hover:bg-gray-600";
              break;
            default:
              break;
          }
          break;

        case "light":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-gray-300 opacity-25";
                  break;
                default:
                  break;
              }
              return "text-gray bg-gray-300 hover:bg-gray-200";
              break;
            case "outline":
              return "border border-gray-300 text-gray-300 bg-transparent  hover:text-gray hover:bg-gray-300";
              break;
            default:
              break;
          }
          break;
        case "dark":
          switch (this.variantType) {
            case "normal":
              switch (this.disableButton) {
                case true:
                  return "text-white bg-black opacity-25";
                  break;
                default:
                  break;
              }
              return "text-white bg-black hover:bg-gray-700";
              break;
            case "outline":
              return "border border-black text-gray bg-transparent  hover:text-white hover:bg-black";
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style scoped>
@keyframes spinner {
  to {
    transform: rotate(360deg);
  }
}

.base-spinner {
  position: relative;
  overflow: hidden;
}

.base-spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
}

.base-spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.45);
  border-top-color: inherit;
  animation: spinner 0.6s linear infinite;
  z-index: 2;
}
</style>
