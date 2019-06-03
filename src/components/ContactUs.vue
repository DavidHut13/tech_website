<template>
  <section data-aos="fade-up" id="contact">
    <h2>CONTACT US</h2>
    <p>Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
    <v-form @submit.prevent="handleSubmit" ref="form" v-model="form" class="pa-3 pt-4">
      <v-text-field
        v-model="name"
        box
        color="deep-purple"
        label="Name"
        style="min-heigh: 96px"
        :rules="[rules.required]"
        type="text"
      ></v-text-field>
      <v-text-field
        v-model="email"
        box
        color="deep-purple"
        label="Email address"
        :rules="[rules.email]"
        type="email"
      ></v-text-field>
      <v-textarea
        v-model="message"
        :rules="[rules.required]"
        box
        auto-grow
        color="deep-purple"
        label="Message"
        rows="5"
      ></v-textarea>
      <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
        type="submit"
      >Submit</v-btn>
    </v-form>
    <v-divider></v-divider>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "ContactForm",
  data() {
    return {
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email",
        required: value => !!value || "Required."
      },
      form: false,
      isLoading: false,
      email: "",
      message: "",
      name: "",
      sent: false
    };
  },
  methods: {
    handleSubmit() {
      let data = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      axios
        .post("http://localhost:4444/api/v1", data)
        .then(() => {
          this.sent = true;
          this.name = "";
          this.email = "";
          this.message = "";
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style lang="scss" scoped>
section {
  background: #fd8a66;
  padding-top: 3rem;
  margin-top: 4rem;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
    color: white;
    font-size: 2rem;
    font-weight: 400;
  }
  h2:after {
    content: "";
    display: block;
    margin: 0 auto;
    width: 7%;
    padding-top: 10px;
    border-bottom: 7px dotted #110672;
  }

  p {
    text-align: center;
    margin-bottom: 2rem;
    color: white;
    font-size: 1.7rem;
    font-weight: 300;
  }

  form {
    max-width: 53rem;
    margin: 0 auto;
    background: whitesmoke;
    margin-bottom: 3rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    @media only screen and (max-width: 768px) {
      //for mobile phones
      border-radius: 0%;
    }
  }
}
</style>


