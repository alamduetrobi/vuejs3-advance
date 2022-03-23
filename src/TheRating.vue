<template>
  <div class="rating">
    <div
      class="rating-star"
      v-for="index in 5"
      :key="index"
      @click="handleClick(index)"
    >
      <img src="../public/img/star.jpg" alt="" v-if="index <= modelValue" />
      <img src="../public/img/unrating.png" alt="" v-if="index > modelValue" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: Number,
      default: 0,
    },
  },
  emits: ["update:modelValue"],

  methods: {
    handleClick(index) {
      this.$emit("update:modelValue", index);
    },
  },
};
</script>

<style scoped>
.rating {
  width: 200px;
  display: flex;
  align-items: center;
}
.rating-star {
  cursor: pointer;
  margin: 2px;
}

.rating-star img {
  width: 20px;
}
.rating-star img:hover {
  transform: scale(1.1);
}
.container {
  padding: 22px;
}
</style>
