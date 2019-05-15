<template>
  <v-card class="mx-auto" style="max-width: 500px;">
    <v-toolbar color="deep-purple accent-4" cards dark flat>
      <v-card-title class="title font-weight-regular">Contact Us</v-card-title>
    </v-toolbar>
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
      >
        <v-textarea v-model="message" auto-grow box color="deep-purple" label="Message" rows="1"></v-textarea>
      </v-text-field>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
      <v-btn flat @click="$refs.form.reset()">Clear</v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="!form"
        :loading="isLoading"
        class="white--text"
        color="deep-purple accent-4"
        depressed
      >Submit</v-btn>
    </v-card-actions>
  </v-card>
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


