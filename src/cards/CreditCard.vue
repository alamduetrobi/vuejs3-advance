<template>
  <div class="credit-card">
    <label> Name on Card </label>
    <input
      type="text"
      :value="nameOnCard"
      @input="handleInput('update:nameOnCard', $event)"
    />
    <br />

    <label> Card Number </label>
    <input
      type="text"
      :value="cardNumber"
      @input="handleInput('update:cardNumber', $event)"
    />
    <br />

    <label> Card Expire </label>
    <input
      type="text"
      :value="expiry"
      @input="handleInput('update:expiry', $event)"
    />
    <br />
    <label> CVV </label>
    <input
      type="text"
      :value="cvv"
      @input="handleInput('update:cvv', $event)"
    />
    <br />
  </div>
</template>

<script>
export default {
  props: {
    nameOnCard: {
      type: String,
      default: "",
    },
    cardNumber: {
      type: String,
      default: "",
    },
    expiry: {
      type: String,
      default: "",
    },
    cvv: {
      type: String,
      default: "",
    },
  },
  methods: {
    handleInput(eventName, e) {
      this.$emit(eventName, e.target.value);
    },

    // cardNumber(e) {
    //   this.$emit("update:cardNumber", e.target.value);
    // },
  },
};
</script>

<style scoped>
.credit-card {
  width: 288px;
  border: 1px solid gray;
  padding: 22px;
  border-radius: 5px;
  background-color: rgb(255, 254, 247);
  color: rgb(82, 82, 82);
  min-height: 111px;
}

input {
  padding: 7px 9px;
  margin-bottom: 11px;
  border-radius: 3px;
  width: 100%;
  border: 1px solid gray;
}
.row {
  display: flex;
  padding: 0 2px;
}
</style>
