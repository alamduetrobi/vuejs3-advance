<template>
  <teleport to="body">
    <div class="the-dialog">
      <div class="the-dialog_container">
        <div class="the-dialog_header">
          {{ heding }}
        </div>
        <div class="the-dialog_body">
          <slot></slot>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["heading"],
};
</script>

<style scoped>
.the-dialog {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
}

.the-dialog_container {
  margin: auto;
  width: 333px;
  min-height: 222px;
  background-color: #fff;
  border-radius: 10px;
}
.the-dialog_header {
  border-radius: 10px 10px 0 0;
  background-color: rgb(233, 233, 233);
  font-weight: bold;
  padding: 9px 18px;
}
.the-dialog_body {
  padding: 9px 18px;
}
</style>
