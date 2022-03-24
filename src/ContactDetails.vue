<template>
  <div class="contactdetails">
    <h1>Contact Details</h1>
    <p>
      <stron>Name:</stron> <strong>{{ name }}</strong>
    </p>
    <p>
      <stron>Website:</stron> <strong>{{ website }}</strong>
    </p>
    <p>
      <stron>Address:</stron>
      <strong>{{ address }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  inject: ["name", "website", "address"],
  // props: ["username", "website", "address"],
  props: {},

  data() {
    return {};
  },
};
</script>

<style scoped>
.contactdetails {
  border: 1px solid red;
  margin: 12px 22px;
  padding: 22xp;
}
</style>
