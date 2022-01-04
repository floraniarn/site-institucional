<template>
  <v-col cols="12" :lg="lg || 12" :md="md || 12" :sm="sm || 12">
    <a :href="link">
      <v-card id="card" min-height="150" max-height="150" elevation="0">
        <v-card-text class="text-center">
          <v-icon size="60">mdi-{{ icon }} </v-icon>
          <v-spacer></v-spacer>
          <h1>{{ title }}</h1>
        </v-card-text>
      </v-card>
    </a>
  </v-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    lg: Number,
    md: Number,
    sm: Number,
    title: String,
    icon: String,
    link: String,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
h1 {
  font-size: 1.12rem;
  margin-top: 1.25rem;
  margin-bottom: 0.625rem;
  color: #2c4c91;
}
i.v-icon.v-icon {
  text-shadow: 0 0 2px #2c4c91;
}
#card:hover {
  background-color: #2c4c91;
  transition: all 0.44s ease-in-out;
}
@keyframes border_anim {
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
}
#card:hover:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  border-bottom: solid 5px red;
  animation: border_anim 0.3s linear forwards;
}
#card:hover h1 {
  color: white;
}
#card:hover i.v-icon.v-icon {
  color: white;
  text-shadow: 0 0 3px white;
}
</style>
