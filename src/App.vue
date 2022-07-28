<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <VLibras />
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
import { VLibras } from "@vue-a11y/vlibras";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
    VLibras,
  },
};
</script>
<style scoped></style>
