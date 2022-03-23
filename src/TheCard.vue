<template>
  <div class="the-card">
    <div class="the-card_title">{{ cardtitle }}</div>
    <div class="the-card_body"><slot>This is default test</slot></div>
    <div class="the-card_footer">
      <!-- <slot name="footer"> @copy; 2022 </slot> -->
      <slot name="footer"> </slot>
    </div>
  </div>
</template>

<script>
export default {
  monted() {
    console.log(this.$slots.footer);
  },
  props: ["cardtitle"],
};
</script>

<style>
.the-card {
  width: 300px;
  border: 1px solid red;
  min-height: 100px;
  margin: 22px auto;
}
.the-card_title {
  background: blude;
  padding: 5px 11px;
  background-color: blue;
}

.the-card_body {
  padding: 11px;
}

.the-card_body img {
  height: 111px;
}

.the-card_footer {
  background: #e3e3e3;
  padding: 5px 11px;
  text-align: center;
}
</style>
