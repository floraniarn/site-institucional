import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import pt from "vuetify/es5/locale/pt";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#2c4c91",
        secondary: "#ff0021",
        accent: "#f0f0f0",
        error: "#FF5252",
        info: "#546E7A",
        success: "#4CAF50",
        warning: "#FFC107",
      },
      dark: {
        primary: "#2c4c91",
        secondary: "#ff0021",
        accent: "#f0f0f0",
        error: "#FF5252",
        info: "#546E7A",
        success: "#4CAF50",
        warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { pt },
    current: "pt",
  },
});
