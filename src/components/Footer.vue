<template>
  <v-footer padless>
    <v-card dark width="100%" color="primary" class="text-center" flat tile>
      <!-- Tela sm+ -->
      <v-container class="mb-0 my-0 d-none d-sm-inline-block">
        <v-card-title>
          <h1>
            <v-icon>mdi-map-marker</v-icon> Endereço: Rua Teonia Amaral 290 -
            Centro - Florânia/RN
          </h1>
          <v-spacer />
          <h1>Telefone: (84) 3435-2552</h1>
        </v-card-title>
        <v-card-subtitle class="d-flex justify-end">
          <ul>
            <li>
              <a href="https://www.facebook.com/prefeitura.florania"
                ><v-icon size="35">mdi-facebook</v-icon></a
              >
            </li>
            <li>
              <a href="https://www.instagram.com/prefeituradeflorania/"
                ><v-icon size="35">mdi-instagram</v-icon></a
              >
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/PrefeituraMunicipaldeFlor%C3%A2nia"
                ><v-icon size="35">mdi-youtube</v-icon></a
              >
            </li>
          </ul>
        </v-card-subtitle>
      </v-container>
      <!-- Tela xs -->
      <v-container class="mb-0 my-0 d-inline-block d-sm-none">
        <v-card-text>
          <h1>
            <v-icon>mdi-map-marker</v-icon> Endereço: Rua Teonia Amaral 290 -
            Centro - Florânia/RN
          </h1>
          <v-spacer />
          <h1>Telefone: (84) 3435-2552</h1>
          <v-card-subtitle>
            <ul>
              <li>
                <a href="https://www.facebook.com/prefeitura.florania"
                  ><v-icon size="35">mdi-facebook</v-icon></a
                >
              </li>
              <li>
                <a href="https://www.instagram.com/prefeituradeflorania/"
                  ><v-icon size="35">mdi-instagram</v-icon></a
                >
              </li>
              <li>
                <a
                  href="https://www.youtube.com/c/PrefeituraMunicipaldeFlor%C3%A2nia"
                  ><v-icon size="35">mdi-youtube</v-icon></a
                >
              </li>
            </ul>
          </v-card-subtitle>
        </v-card-text>
      </v-container>
      <v-divider class="accent" />
      <v-card-text class="primary white--text">
        <span
          >{{ new Date().getFullYear() }} —
          <strong>Prefeitura Municipal de Florânia</strong>
        </span>
        <h5 class="mb-0">Desenvolvido por Eduardo Medeiros</h5>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
ul li {
  display: inline;
}
ul li a {
  font-size: 2rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  display: inline-block;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #ededed;
}
h1 {
  font-size: 0.8rem;
}
.v-card__title {
  word-break: normal !important;
}
</style>
