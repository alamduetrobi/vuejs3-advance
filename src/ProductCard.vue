<template>
  <div class="product-card">
    <div class="the-product_title">
      <!-- {{ product.name }} -->
      <div>
        {{ product.name }}
      </div>
      <img
        src="../public/img/star.jpg"
        alt="test"
        v-if="product.addedToFavourite"
        @click="toggleFavourite"
      />
      <img src="" alt="untest" v-else @click="toggleFavourite" />
    </div>
    <div class="the-product_body">
      <img :src="product.thumbnail" alt="" />
      <p>{{ product.price }}</p>
    </div>
    <div class="the-product_footer">
      <!-- <slot name="footer"> </slot> -->
      <button @click="handleBuyNowClick">Buy Now</button>
      <button @click="handleAddToClick">Add to Card</button>
    </div>
  </div>
</template>

<script>
export default {
  monted() {
    console.log(this.$slots.footer);
  },

  emits: {
    "buy-now-click": function (data) {
      if (!data) {
        console.log("data missing for by now click");
        return false;
      }
      return true;
    },
  },
  props: { product: { type: Object, default: () => ({}) } },
  methods: {
    handleBuyNowClick() {
      this.$emit("buy-now-click", this.product);
    },
    handleAddToClick() {
      this.$emit("add-now-click", this.product);
    },
    toggleFavourite() {
      this.$emit("toggle-favourite", this.product);
      //   this.product.addedToFavourite = !this.addedToFavourite;
    },
  },
};
</script>

<style>
.product-card {
  width: 300px;
  border: 1px solid #ede;
  min-height: 100px;
  margin: 22px auto;
}
.the-product_title {
  background: blude;
  padding: 5px 11px;
  background-color: blue;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.the-product_title img {
  width: 20px;
  height: 20px;
}

.the-product_body {
  padding: 11px;
  text-align: center;
}

.the-product_body img {
  height: 111px;
}

.the-product_footer {
  background: #e3e3e3;
  padding: 5px 11px;
  text-align: center;
}
button {
  padding: 5px;
}
</style>
