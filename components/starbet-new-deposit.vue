<!-- <template>
  <div>
    <lazy-bet-user-header title="Deposit" icon="menu" />
    <div class="deposit">
      <p class="mb-2 text-center">Account Number</p>

      <p class="mb-4">
        Choose an option to deposit money into your starbet account
      </p>

      <div
        class="deposit-card__item"
        v-for="gateway in paymentGateways"
        :key="gateway.id"
      >
        <div
          class="deposit-card__item-header"
          :class="gateway.name.toLowerCase()"
        >
          <img
            class="deposit-card__item-header__image"
            :src="gateway.imageSrc"
            alt=""
          />
        </div>
        <div class="deposit-card__item-body">
          <div class="deposit-card__item-body__left">
            <p>{{ gateway.name }}</p>
            <small class="deposit-card__item-body__left-minMax"
              >Min: NGN {{ gateway.min }} | Max: NGN {{ gateway.max }}</small
            >
            <small class="deposit-card__item-body__left-type"
              >Cards | Online Bank Transfer | USSD</small
            >
          </div>

          <div class="deposit-card__item-body__right">
            <nuxt-link to="/user/payments/deposit-new/paystack">
              <a-button class="text-white border-none bg-primary-m-warning"
                >Deposit</a-button
              >
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapGetters } from "vuex";
import { notify, copyToClipboard } from "~/utils/utils";
import moment from "moment";

export default Vue.extend({
  // // layout: 'user',
  middleware: "auth",
  computed: {
    ...mapGetters({ loggedInUser: "loggedInUser" }),
  },
  data() {
    return {
      paymentGateways: [
        {
          id: 1,
          name: "Paystack",
          brandColor: "#00c3f7",
          min: "100.00",
          max: "10,000,000.00",
          types: "Card, Online Bank Transfer, USSD",
          imageSrc:
            "https://res.cloudinary.com/dvuogdjyq/image/upload/v1656338858/Logos/paystack-logo_zitw4z.svg",
        },
        {
          id: 2,
          name: "Flutterwave",
          brandColor: "#fc9029",
          min: "100.00",
          max: "10,000,000.00",
          types: "Card, Online Bank Transfer, USSD",
          imageSrc:
            "https://res.cloudinary.com/dvuogdjyq/image/upload/v1656346467/Logos/flutterwave-logo_ijuxc9.svg",
        },
        {
          id: 3,
          name: "Monnify",
          brandColor: "#057078",
          min: "100.00",
          max: "10,000,000.00",
          types: "Card,Online Bank Transfer,USSD,Bank Account",
          imageSrc:
            "https://res.cloudinary.com/dvuogdjyq/image/upload/v1656338786/Logos/monnify_ofbjas.svg",
        },
      ],

      paymentMethods: [
        {
          id: 1,
          user: "monify-bank",
          name: "Deposit with Instant Bank Transfer",
          image: "assets/images/payment/monnify.ebe901e2(1).svg",
          firstPara: `Fund your Starbet account by doing a Bank Transfer to your unique bank account details and your account will be topped up instantly. See your unique bank account number displayed below`,
          // firstPara: this.$t('user.transaction.transferPara'),
        },
        {
          id: 2,
          user: "bank",
          name: "Deposit with PayDirect",
          image: "assets/images/payment/monnify.ebe901e2(1).svg",
          firstPara: `Fund your Starbet account by visiting a Bank and making a deposit into the company's`,
        },
        {
          id: 3,
          user: "paystack",
          name: "Deposit with Paystack",
          image: "assets/images/payment/paystack.862976bf.svg",
          firstPara: `Fund your Starbet account with your ATM card using paystack payment gateway and your account will be topped up instantly.`,
        },
        {
          id: 4,
          user: "flutterwave",
          name: "Deposit with Flutterwave",
          image: "assets/images/payment/flutterwave.862976bf.svg",
          firstPara: `Fund your Starbet account with your ATM card using flutterwave payment gateway and your account will be topped up instantly.`,
        },
        {
          id: 5,
          user: "monnify",
          name: "Deposit with Monnify",
          image: "assets/images/payment/monnify.862976bf.svg",
          firstPara: `Fund your Starbet account with your ATM card using monnify payment gateway and your account will be topped up instantly.`,
        },
        {
          id: 6,
          user: "Voucher",
          name: `Deposit with Starbet voucher`,
          image: "assets/images/payment/monnify.ebe901e2(1).svg",
          firstPara: `Fund your account with your Starbet voucher code and your account will be topped up instantly.`,
        },
      ],
      tabStyle:
        "width: 100%;border-bottom-width:1px;border-color: #989898;button, input, optgroup, select, textarea,  padding: 0;line-height: inherit; cursor: pointer; font-size: 700",
    };
  },
  computed: {
    ...mapGetters({ loggedInUser: "loggedInUser" }),
    disable() {
      switch (this.loggedInUser.role) {
        case "agent":
          return false;
        case "online-customer":
          return false;
        default:
          return true;
      }
    },
    fullName() {
      return `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`;
    },
    brandName() {
      return `${this.loggedInUser.genealogy.tenant}`;
    },
  },

  methods: {
    copyToClipboard,
    async handleDeposit(e) {
      e.preventDefault();
      let url;
      let amount;
      let email;

      if (e.target.elements.paystack) {
        // Validation
        if (
          e.target.elements.paystack.value === "" ||
          typeof e.target.elements.paystack.value === "undefined"
        ) {
          return notify({
            type: "error",
            message: "Error! Please enter amount",
          });
        }
        url = `/api/v1/finances/wallet/deposit-with-paystack`;
        amount = Number(e.target.elements.paystack.value);
      } else if (e.target.elements.flutterwave) {
        // Validation
        if (
          e.target.elements.flutterwave.value === "" ||
          typeof e.target.elements.flutterwave.value === "undefined"
        ) {
          return notify({
            type: "error",
            message: "Error! Please enter amount",
          });
        }
        url = `/api/v1/finances/wallet/deposit-with-flutterwave`;
        amount = Number(e.target.elements.flutterwave.value);
      } else {
        // Validation
        if (
          e.target.elements.monnify.value === "" ||
          typeof e.target.elements.monnify.value === "undefined"
        ) {
          return notify({
            type: "error",
            message: "Error! Please enter amount",
          });
        }
        url = `/api/v1/finances/wallet/deposit-with-monnify`;
        amount = Number(e.target.elements.monnify.value);
      }

      /**
       * making sure user has email
       */
      if (this.loggedInUser.role === "agent") {
        // Agent
        email = this.loggedInUser.email;
      } else if (this.loggedInUser.role === "online-customer") {
        // Online user
        if (this.loggedInUser.firstName && this.loggedInUser.lastName) {
          // Online user with social login and email as their username
          email = this.loggedInUser.username;
        } else {
          // Online user with phone number logins
          email = this.loggedInUser.userId + "@Starbet.com";
        }
      } else {
        notify({
          type: "error",
          message: "Error! You are not allowed to make this request",
        });
      }
      const body = {
        email: email,
        username: this.loggedInUser.username,
        amount: amount,
        currency: "NGN",
        callbackUrl: `${this.$config.websiteUrl}/user/callback`,
      };

      try {
        const res = await this.$axios.$post(url, body);
        if (res.status) {
          if (e.target.elements.paystack) {
            window.location = res.data.authorization_url;
          } else if (e.target.elements.monnify) {
            window.location = res.data.checkoutUrl;
          } else {
            window.location = res.data.link;
          }
        }
      } catch (error) {
        notify({
          type: "error",
          message: "Error! Internal server error",
        });
      }
    },
  },
});
</script>

<style lang="scss">
p {
  margin: 0;
}
.btn {
  height: 32px;
  padding: 0 15px;
  line-height: 1.499;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgb(0 0 0 / 2%);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 0 15px;
  font-size: 14px;
  border-radius: 4px;

  &-success {
    @apply bg-primary-m-success text-white;
  }
}

.ant-collapse {
  border: none;
}

.ant-collapse > .ant-collapse-item {
  @apply bg-primary-bg-ter text-white;
}

.ant-collapse > .ant-collapse-item > .ant-collapse-header {
  transition: all 0.3s;
  height: 45px !important;
  display: flex;
  align-items: center;
  @apply text-white;
}

.ant-collapse-content {
  @apply bg-primary-event text-primary-default-main;
}

.deposit {
  max-width: 500px;
  margin: 0 auto;
  padding: 1rem;
  &-card__item {
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 0.75rem;
    &-header {
      display: flex;
      justify-content: center;
      // background: yellow;
      padding: 0.5rem 1rem;
      &__image {
        height: 44px;
      }

      &.paystack {
        background: #00c3f7;
      }
      &.flutterwave {
        background: #fc9029;
      }
      &.monnify {
        background: #057078;
      }
    }
    &-body {
      display: flex;
      align-items: center;
      justify-content: space-between;
      @apply bg-primary-event text-primary-default-main;
      padding: 1rem;

      &__left {
        &-type {
          display: block;
        }
        & > p {
          font-size: 20px;
          @apply text-primary-default-main font-bold;
        }
      }
    }
  }
}
</style> -->
