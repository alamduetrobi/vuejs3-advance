<template>
  <!-- <div>
   
    //Glogval Component
    <contact-details
      username="robi"
      website="http//:google.com"
      address="Dhaka"
    ></contact-details>
    <contact-details
      username="alam"
      website="http//:google.com"
      address="Dhaka"
    ></contact-details>
    <contact-details
      username="Humayra"
      website="http//:google.com"
      address="Dhaka"
    ></contact-details>
    <contact-details
      username="Redwan"
      website="http//:google.com"
      address="Dhaka"
    ></contact-details>

    //Local Component
    <ContactDetails></ContactDetails>
  </div>

  <the-card cardtitle="test the attribute">
    <p>This is the slot content</p>
  </the-card>
  <the-card cardtitle="test the attribute 2">
    <img
      src="https://scontent.fcgp17-1.fna.fbcdn.net/v/t45.1600-4/250577748_6273299228895_1251377384485472853_n.jpg?stp=c0.110.285.285a_dst-jpg_p285x285&_nc_cat=111&ccb=1-5&_nc_sid=eaa83b&_nc_eui2=AeGaur1Yolc-oMoOvhLmLaTy-W6MJOKiB3D5bowk4qIHcMyiZ-Vi_zurq-ejH6DqhL2i5lfUkqj3K7AueG1r7kJj&_nc_ohc=kPrcvg6d9lkAX_C_EQ4&tn=zViLvsrtbBmT8ALa&_nc_ht=scontent.fcgp17-1.fna&oh=00_AT_C_d4zP52pobXMI_2SAhBb8hNpGj9-rujv_vFiE4T36g&oe=623EF68C"
    />
    <p>This paraa with image</p>
    <p>This paraa with image</p>
    <p>This paraa with image</p>
    <p>This paraa with image</p>
  </the-card>
  <the-card cardtitle="test the attribute 3"></the-card>
  <the-card cardtitle="test the attribute 4 "></the-card> -->
  <!-- <the-card cardtitle="test the attribute 3"></the-card> -->
  <!-- <the-card cardtitle="test the attribute 4"></the-card> -->
  <h1>{{ msg }}</h1>

  <div class="container">
    <the-comment
      v-model="myComment"
      buttonText="Continue"
      foo="bar"
      class="shadowed"
      placeholder="Enter your Comment ...."
      @click="handleClick"
      @continueClick="handleContinueClick"
    ></the-comment>

    <the-dialog heading="Are you sure" v-if="showDialog">
      <p>are you really want to comment</p>
      <br />
      <br />

      <button>yes</button>
      <button>No</button>
    </the-dialog>

    <p>{{ myComment }}</p>

    <p>My Rating: {{ myRating }}</p>
    <the-rating v-model="myRating"></the-rating>

    <h3>Credit Card Input</h3>

    <credit-card
      v-model:nameOnCard="nameOnCard"
      v-model:cardNumber="cardNumber"
      v-model:expiry="expiry"
      v-model:cvv="cvv"
    >
    </credit-card>

    <br />
    <br />
    <br />
    <hr />
    <br />
    <br />
    <p>name:{{ nameOnCard }}</p>
    <p>cardNumber:{{ cardNumber }}</p>
    <p>expiry:{{ expiry }}</p>
    <!-- <p>name:{{ nameOnCard }}</p> -->
    <p>cvv:{{ cvv }}</p>
  </div>

  <!-- ===Procut Card Start Here =============== -->
  <product-card
    v-for="product in products"
    :key="product.name"
    :product="product"
    @buy-now-click="buyNow"
    @add-now-click="addtocard"
    @toggle-favourite="handleToggle"
  >
    <!-- <div class="product-card">
      <div class="product-card_title"></div>
      <div class="product-card_body"></div>
      <div class="product-card_footer"></div>
    </div> -->
  </product-card>

  <!-- ===Procut Card Start Here =============== -->
</template>

<script>
// import ContactDetails from "./ContactDetails.vue";
// import TheCard from './TheCard.vue';
// import TheCard from "./TheCard.vue";
import ProductCard from "./ProductCard.vue";
import TheRating from "./TheRating.vue";
import CreditCard from "./CreditCard.vue";
import TheComment from "./TheComment.vue";
import TheDialog from "./TheDialog.vue";
export default {
  data() {
    return {
      myComment: "This is test Comment",
      msg: "Welcome to the tuttorials",
      nameOnCard: " mr tes",
      cardNumber: "",
      expiry: "",
      cvv: "",
      products: [
        {
          name: "Apple iphone 12 pro",
          thumbnail: "https://vitejs.dev/logo.svg",
          price: "250taka",
          addedToFavourite: true,
        },
        {
          name: "Walton pro iphone 12 pro",
          thumbnail: "https://vitejs.dev/logo.svg",
          price: "150taka",
          addedToFavourite: false,
        },
        {
          name: "Desco pro iphone 12 pro",
          thumbnail: "https://vitejs.dev/logo.svg",
          price: "1050taka",
          addedToFavourite: true,
        },
      ],
      myRating: 4,
      shoDialog: false,
    };
  },

  methods: {
    handleContinueClick() {
      this.shoDialog = true;
    },

    handleClick() {
      // console.log("clicked");
    },

    buyNow(pdc) {
      console.log(pdc);
      // console.log("Buy now working");
    },

    addtocard() {
      // console.log("add to now working");
    },

    handleToggle(product) {
      product.addedToFavourite = !product.addedToFavourite;
    },

    // beforeCreate() {
    //   console.log(beforeCreate);
    //   console.log(this.msg);
    // },
    // created() {
    //   console.log(created);
    //   console.log(this.msg);
    // },
    // beforeMount() {
    //   console.log(beforeMount);
    //   console.log(this.msg);
    // },
    // mounted() {
    //   console.log(beforeMount);
    //   console.log(this.msg);
    // },
  },

  components: {
    // ContactDetails,
    // TheCard,
    ProductCard,
    TheRating,
    CreditCard,
    TheComment,
    TheDialog,
  },
};
</script>

<style scoped>
.container {
  padding: 22px;
  color: red;
  font-size: 33px;
  border: 3px solid green;
}
.shadowed {
  box-shadow: 0 0 3px 2px #111;
}
</style>
