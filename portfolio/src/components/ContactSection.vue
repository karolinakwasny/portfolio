<template>
  <section id="contact" class="py-12 md:py-20">
    <div class="max-w-4xl mx-auto px-4 md:px-6 text-center mb-8 md:mb-12">
      <h2 class="text-2xl md:text-3xl font-bold mb-3 md:mb-4 font-mono text-text">Get In Touch</h2>
      <p class="text-text text-base md:text-lg">Let's connect and discuss opportunities</p>
    </div>

    <div class="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 md:gap-8 px-4 md:px-6">
      <ContactButton v-for="contact in contacts" :key="contact.label" v-bind="contact" />
    </div>
  </section>
</template>

<script setup>
import { Mail, Github, Linkedin } from "lucide-vue-next";
import ContactButton from "./ContactButton.vue";

const contacts = [
  {
    label: "Email",
    icon: Mail,
    href: "mailto:kwasnykarolina98@gmail.com",
    copyable: true,
    copyText: "kwasnykarolina98@gmail.com",
  },
  {
    label: "GitHub",
    icon: Github,
    href: "https://github.com/karolinakwasny",
    copyable: true,
    copyText: "https://github.com/karolinakwasny",
  },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/kwasnykarolina",
    copyable: true,
    copyText: "https://linkedin.com/in/kwasnykarolina",
  },
];
</script>
