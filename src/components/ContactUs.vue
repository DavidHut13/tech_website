<template>
  <section id="contact">
    <v-form ref="form" v-model="form" class="pa-3 pt-4">
      <v-text-field
        v-model="name"
        box
        color="deep-purple"
        label="Name"
        style="min-heigh: 96px"
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
      <v-textarea v-model="message" box auto-grow color="deep-purple" label="Message" rows="5"></v-textarea>
    </v-form>
    <v-divider></v-divider>

    <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
    <v-spacer></v-spacer>
    <v-btn
      :disabled="!form"
      :loading="isLoading"
      class="white--text"
      color="deep-purple accent-4"
      depressed
    >Submit</v-btn>
  </section>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "ContactForm",
  data() {
    return {
      rules: {
        email: v => (v || "").match(/@/) || "Please enter a valid email"
      },
      form: false,
      isLoading: false,
      email: undefined,
      message: undefined,
      name: undefined
    };
  },
  methods: {
    clearForm() {
      for (let field in this.contact) {
        this.contact[field] = "";
      }
    }
  },
  onSubmit(evt) {
    console.log("submitted");
  }
};
</script>

<style lang="scss" scoped>
</style>


