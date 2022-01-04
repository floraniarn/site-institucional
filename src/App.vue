<template>
  <v-app>
    <Nav />
    <v-main>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "App",
  components: {
    Footer,
    Nav,
  },
};
</script>
<style scoped>
</style>