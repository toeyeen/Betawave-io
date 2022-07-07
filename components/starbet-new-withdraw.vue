<!-- <template>
  <main>
    <lazy-bet-user-header title="Withdraw " icon="menu" />

    <div class="withdraw-wrapper">
      <div class="px-2 md:text-base">
        <div class="flex justify-between mt-4 mb-2">
          <p>Total balance</p>
          <p class="font-bold">912,345</p>
        </div>
        <div class="flex justify-between mb-2">
          <p>Withdrawable balance</p>
          <p class="font-bold">912,345</p>
        </div>
        <div class="flex justify-between mb-2">
          <p>Minimum withdrawal</p>
          <p class="font-bold">912,345</p>
        </div>
        <div class="flex justify-between mb-2">
          <div class="flex items-center">Withdrawal profile</div>
          <div>
            <div v-if="check" class="flex items-center gap-2">
              <a-select default-value="1" class="w-full bank-select">
                <a-select-option value="1">Guranty Trust Bank - XXXXXX1234</a-select-option>
              </a-select>

              <button class="add-btn" @click="checkShow = true">
                <svg-icon name="cross" class="w-3 h-3 text-white fill-current svg"></svg-icon>
              </button>
            </div>

            <button v-else class="flex items-center p-2 rounded-md small-btn" @click="checkShow = true">
              <a href="#" class="add-btn-small">
                <svg-icon name="cross" class="w-3 h-3 text-white fill-current abs-center"></svg-icon>
              </a>

              Add Bank Account
            </button>
          </div>
        </div>

        <div class="px-3 py-2 withdraw-border" v-if="checkShow">
          <div class="close-container">
            <button class="close-btn" @click="checkShow = false">
              <svg-icon name="close" class="w-3 h-3 text-white fill-current"></svg-icon>
            </button>
          </div>

          <div>
            <div id="bankName" class="mb-6">
              <label for="bankName">Select your bank name:</label>
              <a-select class="w-full">
                <a-select-option value="0"> Gtbank </a-select-option>
                <a-select-option value="1"> Access Bnk </a-select-option>
                <a-select-option value="2"> First bank </a-select-option>
              </a-select>
            </div>

            <div id="accountNumber">
              <label for="accountNumber">Enter Bank Account Number:</label>
              <a-input placeholder="e.g 1234567890"> </a-input>
            </div>

            <a-button class="w-full mt-6 mb-2 font-bold text-white bg-primary-m-warning" size="large"> Add Bank </a-button>
          </div>
        </div>
      </div>

      <div class="grid gap-2 px-2 py-3 amount-grid" :class="gridNumber">
        <div v-for="amount in amounts">
          <div
            class="flex items-center justify-around h-10 text-sm font-bold text-center text-white rounded cursor-pointer bg-primary-m-warning"
            :class="amount.color"
            @click="fillAmount(amount.value)"
          >
            {{ amount.text }}
          </div>
        </div>
      </div>

      <div class="px-2 mt-4">
        <label for="amount">Amount*</label>
        <a-input size="large" type="number" v-model="wRequest.amount" class="w-full text-center"> </a-input>
        <a-button size="large" class="w-full mt-6 mb-2 font-bold text-center text-white bg-primary-m-warning"
          >Withdraw NGN {{ wRequest.amount }}</a-button
        >
      </div>
    </div>
  </main>
</template>
<script>
import Vue from 'vue';
import { mapGetters, mapActions } from 'vuex';
import { notify } from '~/utils/utils';
import { minValue, required, helpers } from 'vuelidate/lib/validators';

const wRequest = {
  amount: '0',
  reason: 'Withdrawal ',
  gateway: 'PAYSTACK',
};

const profileData = {
  bankDetails: {
    personal: [
      {
        accountName: '',
        accountNumber: '',
        bankName: '',
        bankCode: '',
        isDefault: true,
      },
    ],
  },
};

// const exactly = (params) =>
//   helpers.withParams(
//     {
//       type: 'exact',
//       value: params,
//     },

//     (value) => console.log(value),

//     // value.toString().length == params,
//   );

export default {
  middleware: 'auth',

  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },

  computed: {
    ...mapGetters({ loggedInUser: 'loggedInUser', getBanks: 'user/getBanks', personalBanks: 'getPersonalBanks' }),
    usersRole() {
      if (this.loggedInUser.role == 'cashier' || this.loggedInUser.role == 'tenant') {
        return true;
      }
    },
    gridNumber() {
      return `grid-cols-${this.amounts.length}`;
    },
    getPersonalBanks() {
      return this.loggedInUser.bankDetails.personal;
    },
  },

  data() {
    return {
      check: false,
      checkShow: true,
      profileData,
      bankCode: undefined,
      bankName: undefined,
      accountNumber: undefined,
      typeOfAction: 'ADD-BANK',
      banks: [],
      showBank: false,
      wRequest,
      tabStyle:
        'width: 100%;border-bottom-width:1px;border-color: transparent ;button, input, optgroup, select, textarea,  padding: 0;line-height: inherit;cursor: pointer;',
      amounts: [
        {
          id: 1,
          value: 'clear',
          text: 'Clear',
          color: 'text-primary-yellow',
        },
        {
          id: 2,
          value: '1000',
          text: '1000',
        },
        {
          id: 3,
          value: '5000',
          text: '5000',
        },
        {
          id: 4,
          value: '10000',
          text: '10000',
        },
        {
          id: 5,
          value: 'double',
          text: 'X2',
        },
      ],
      paymentMethods: [
        {
          id: 1,
          user: 'monify-bank',
          name: 'Instant Bank Transfer',
          image: 'assets/images/payment/monnify.ebe901e2(1).svg',
          firstPara: ``,
        },
      ],
      gateway: [
        {
          name: 'Paystack',
          slug: 'PAYSTACK',
        },
        {
          name: 'Flutterwave',
          slug: 'FLUTTERWAVE',
        },
        {
          name: 'Monnify',
          slug: 'MONNIFY',
        },
      ],
      showAddButton: false,
      selectedBank: null,
    };
  },
  validations: {
    wRequest: {
      amount: {
        required,
        minValue: minValue(1000),
      },
    },
    accountNumber: { required },
    // FIXME: exactly Logic is breaking the file
    // accountNumber: { required, mustBe: exactly(10) },
    bankName: { required },
  },

  methods: {
    ...mapActions({
      fetchBanks: 'user/fetchBanks',
      updateProfileApi: 'user/updateProfileApi',
      addPersonalBankApi: 'user/addPersonalBankApi',
      makeWithdrawalRequestApi: 'user/makeWithdrawalRequestApi',
      getLoggingUser: 'getLoggingUser',
    }),

    async submitBank() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const payload = {
          username: this.loggedInUser.username,
          action: this.typeOfAction,
          bankDetails: {
            bankCode: this.bankCode,
            bankName: this.bankName,
            accountNumber: this.accountNumber,
            accountName: `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`,
          },
        };
        const res = await this.handleAddBankAccount(payload);
        this.showAddButton = false;

        if (res.status) {
          this.$store.dispatch('getLoggingUser');
        }
      }
    },

    async addBank() {
      if (this.banks.length < 3) this.showBank = true;
    },
    async handleWithdraw() {
      this.$v.$touch();
      // FIXME: Come back and implement the make default bank login on click of the withdrawal button, i.e when the client clicks on the Withdraw button we check if the account added is default,  if he wants it to be default we run the function to make it default before hitting the withdraw end point. if not, We just go ahead and make the the withdrawal. Ensure you fix it befoee tomorrow 05/31/2022
      if (!this.$v.$invalid) {
        try {
          if (!this.accountNumber) {
            const payload = {
              username: this.loggedInUser.username,
              action: this.typeOfAction,
              bankDetails: {
                bankCode: this.bankCode,
                bankName: this.bankName,
                accountNumber: this.accountNumber,
                accountName: `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}`,
              },
            };
            this.handleAddBankAccount(payload);
            console.log('inside');
          }

          console.log('main function');
          console.log(wRequest);
        } catch (error) {}
      }
    },

    fillAmount(amount) {
      // Adding + in front of a string of number is type casting it to a Number, it is equivalent to doing Number(string)
      if (amount !== 'clear' && amount !== 'double') this.wRequest.amount = +this.wRequest.amount + +amount;

      if (amount === 'double') this.wRequest.amount *= 2;
      if (amount === 'clear') this.wRequest.amount = 0;
    },

    filterOption(input, option) {
      return option.componentOptions.children[1].text.toLowerCase().indexOf(input.toLowerCase()) >= 0;
    },

    async handleAddBankAccount(data) {
      try {
        const res = await this.addPersonalBankApi(data);
        if (res.status) {
          notify({
            type: 'success',
            message: res.message,
          });

          this.profileData = {
            bankDetails: {
              personal: [
                {
                  accountName: '',
                  accountNumber: '',
                  bankName: '',
                  bankCode: '',
                },
              ],
            },
          };

          this.bankCode = '';

          return res;
        }
      } catch (error) {
        console.log(error);
      }
    },

    handleBankCode(value) {
      const selectedBank = this.getBanks.filter((bank) => bank.code === value);
      this.bankCode = value;
      this.bankName = selectedBank[0].name;
    },
    onChange(value) {
      this.selectedBank = this.banks[value];
    },

    async makeAsDefault(e) {
      if (e.target.checked) {
        if (this.selectedBank) {
          const { _id, isDefault, ...rest } = this.selectedBank;
          const payload = {
            username: this.loggedInUser.username,
            action: 'DEFAULT-BANK',
            bankDetails: {
              ...rest,
            },
          };

          const res = await this.handleAddBankAccount(payload);

          if (res.status) {
            this.$store.dispatch('getLoggingUser');
            this.banks = this.getPersonalBanks;
          }
        }
      }
    },
  },

  created() {
    this.fetchBanks();
    // TODO: Also add the image of the banks to the payload
    this.banks = this.getPersonalBanks;
    if (this.banks.length < 3) this.showBank = true;
  },
};
</script>
<style lang="scss" scoped>
p {
  margin: 0;
}
.ant-tabs-nav .ant-tabs-tab {
  @apply text-primary-default-main;
}

.ant-tabs-nav .ant-tabs-tab-active {
  color: #69428e;
}

.ant-select-selection,
.ant-btn {
  border: none;
  border-top-width: none;
}

.submitPlace {
  background: #1a2633;
}

.no-results-container .no-results-header {
  background: #eeb941;
  color: #000;
  padding: 5px 10px;
  border-bottom: 1px solid #f4f4f4;
  font-size: 12px;
}
.no-results-container .no-results-body {
  background: #1a2633;
  color: #fff;
  padding: 14px 10px;
  font-size: 12px;
}

.info-notification {
  color: #8a6d3b;
  background: #fcf8e3;
}

.withdraw {
  &-wrapper {
    @media only screen and (min-width: 1024px) {
      max-width: 500px;
      margin: 0 auto;
    }

    & * .ant-input,
    .ant-select-selection {
      border: none;
    }
  }

  &-border {
    border: 1px solid #3f2755;
  }
}

.close {
  &-container {
    display: flex;
    justify-content: flex-end;
  }

  &-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 24px;
    height: 24px;
    border-radius: 999px;
    @apply bg-primary-m-warning text-white;
  }
}

.add-btn {
  border-radius: 999px;
  // margin-left: 1rem;
  background: rgb(62, 39, 85);
  // background: #a69fac;
  width: 32px;
  height: 32px;
  border: none;
  position: relative;
  display: inline-block;

  &-small {
    margin-right: 14px;
    height: 20px;
    width: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #3e2755;
    border-radius: 999px;
  }

  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.bank-select {
  max-width: 190px;

  @media only screen and (min-width: 450px) {
    max-width: 255px;
  }
  @media only screen and (min-width: 768) {
    max-width: 280px;
  }
}

.small-btn {
  border: 1px solid #3f2755;
}
</style> -->
