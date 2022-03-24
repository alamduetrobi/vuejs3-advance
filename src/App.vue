<template>
  <header>
    <h2>{{ msg }}</h2>
  </header>
  <div class="container">
    <h1>New user Registration</h1>

    <label for="">Full Name</label> <br />
    <input
      type="text"
      name=""
      id=""
      placeholder="Enter your Full Name"
      v-model="formData.fullName"
    />
    <br />
    <label for="">About You</label> <br />
    <textarea v-model="formData.aboutYou"></textarea>

    <br />
    <br />
    <br />
    <br />
    <label for="">Gender</label>
    <br />
    <label for="">
      <input
        type="radio"
        name="gender"
        id=""
        value="M"
        v-model="formData.gender"
      />Male
    </label>
    <label for="">
      <input
        type="radio"
        name="gender"
        id=""
        class="ml-2"
        checked="checked"
        value="F"
        v-model="formData.gender"
      />Female
    </label>
    <label for="">
      <input
        type="radio"
        name="gender"
        class="ml-2"
        id=""
        value="Other"
        v-model="formData.gender"
      />Other
    </label>
    <hr />

    <label for="">Language</label>

    <br />
    <br />
    <br />

    <select name="" id="" v-model="formData.language">
      <option value="">-- Select One --</option>
      <option value="B">Bangla</option>
      <option value="E">English</option>
    </select>

    <br />
    <br />

    <label for="">Skills</label>

    <br />
    <br />
    <br />

    <select multiple name="" id="" v-model="formData.skills">
      <option value="B">Bangla</option>
      <option value="thml">HTML</option>
      <option value="css">CSS</option>
      <option value="java">JAVA</option>
      <option value="fdasf">Javascript</option>
      <option value="E">English</option>
    </select>
    <br />
    <br />
    <br />
    <br />
    <br />

    <label for="">Social Account</label>
    <label for="">
      <input
        v-model="formData.socialsaccount"
        type="checkbox"
        value="fb"
      />Facebook
    </label>
    <label for="">
      <input
        v-model="formData.socialsaccount"
        type="checkbox"
        value="tw"
      />Twitter
    </label>
    <label for="">
      <input
        v-model="formData.socialsaccount"
        type="checkbox"
        value="ln"
      />Linkdin
    </label>
    <label for="">
      <input
        v-model="formData.socialsaccount"
        type="checkbox"
        value="in"
      />Instragram
    </label>
    <!-- <label for=""> <input type="checkbox" />Facebook </label> -->

    <br />
    <br />
    <br />
    <br />

    <label for="">Agrement</label> <br />
    <label for="">
      <input type="checkbox" v-model="formData.agred" /> I aggress your terms
      and condition
    </label>

    <hr />

    <div v-for="(value, key) in formData" :key="key">
      <strong>{{ key }} : {{ value }}</strong>
    </div>

    <!-- <p>{{ formData }}</p> -->
    <!-- <p>{{ formData }}</p> -->
  </div>
</template>

<script>
// import Login from "./sections/Login.vue";
// import Register from "./sections/Register.vue";
// import ContactDetails from "./ContactDetails.vue";
export default {
  data() {
    return {
      msg: "Vue3",
      name: "",
      formData: {
        fullName: "Robi",
        aboutYou: "se",
        gender: "Other",
        language: "",
        skills: [],
        agred: "false",
        socialsaccount: [],
      },
      // myComment: "",
      // shoDialog: false,
      // notificaton: [],
      // tabs: ["Login", "Register", "ContactDetails"],
      // activeTab: "Login",
      // name: "alam",
      // website: "https://google.com",
      // address: "Dhaka",
    };
  },
  methods() {},
  mounted() {
    console.log(this.$refs.nameInput);
  },
  // provide: {},
  // provide() {
  //   return {
  //     name: this.name,
  //     website: this.website,
  //     address: this.address,
  //   };
  // },
  components: {
    // Login,
    // Register,
    // ContactDetails,
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
textarea {
  padding: 5px 11px;
  margin-bottom: 11px;
}

.ml-2 {
  margin-left: 11px;
}
</style>
