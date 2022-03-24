<template>
  <header>
    <h2>{{ msg }}</h2>
  </header>
  <div class="container">
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter Your name"
      v-model="name"
      ref="nameInput"
    />
    <div class="tab">
      <div class="tab_menu">
        <div
          v-for="tab in tabs"
          :key="tab"
          :class="{ 'tab_menu-item - - active': activeTab === tab }"
          @click="activeTab = tab"
        >
          {{ tab }}
        </div>
      </div>
      <div class="tab_content">
        <br />
        <!-- <Login v-if="activeTab === 'Login'" />
        <Register v-if="activeTab === 'Register'" /> -->

        <keep-alive>
          <component :is="activeTab" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "./sections/Login.vue";
import Register from "./sections/Register.vue";
import ContactDetails from "./ContactDetails.vue";
export default {
  data() {
    return {
      msg: "Vue3",
      myComment: "",
      shoDialog: false,
      notificaton: [],
      tabs: ["Login", "Register", "ContactDetails"],
      activeTab: "Login",
      name: "alam",
      website: "https://google.com",
      address: "Dhaka",
    };
  },
  methods() {},
  mounted() {
    console.log(this.$refs.nameInput);
  },
  // provide: {},
  provide() {
    return {
      name: this.name,
      website: this.website,
      address: this.address,
    };
  },
  components: {
    Login,
    Register,
    ContactDetails,
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  margin-left: 22px;
}
body {
  font-family: sans-serif;
  line-height: 1.8;
}
header {
  background-color: #1f2c46;
  color: #41b883;
  font-size: 22px;
  padding: 22px;
}
header h2 {
  text-align: center;
}
.container {
  padding: 22px;
  /* color: red;
  font-size: 33px;
  border: 3px solid green; */
}

button {
  margin: 5px;
  padding: 5px 11px;
  cursor: pointer;
}
.shadowed {
  box-shadow: 0 0 3px 2px #111;
}

.tab {
}

.tab_menu {
  display: flex;
}
.tab_menu-item {
  padding: 6px 15px;
  background-color: rgb(0, 104, 192);
  cursor: pointer;
}
input {
  padding: 5px 11px;
  margin-bottom: 11px;
}
</style>
