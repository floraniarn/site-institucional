<template>
  <v-card dark color="primary" flat tile elevation="6">
    <!-- telas md+  -->
    <v-card-text class="pl-10 d-none d-md-inline-block">
      <v-row>
        <v-col cols="12" lg="4" md="4">
          <v-img
            eager
            alt="Brasão de Florânia"
            class="shrink"
            src="@/assets/brasao_pmf_branco.svg"
            transition="scale-transition"
            :contain="true"
            max-width="300"
            height="auto"
          />
        </v-col>
        <v-col cols="12" lg="8" md="8">
          <v-container class="d-flex justify-end">
            <nav id="menu">
              <ul>
                <li><router-link :to="'/'">Início</router-link></li>
                <li>
                  <router-link :to="'/prefeitura'">A Prefeitura</router-link>
                </li>
                <li>
                  <router-link :to="'/municipio'">O Município</router-link>
                </li>
                <li>
                  <router-link :to="'/contatos'">Contatos</router-link>
                </li>
                <li>
                  <a href="http://transparencia.florania.rn.gov.br:81/"
                    >Transparência</a
                  >
                </li>
              </ul>
            </nav>
          </v-container>
        </v-col>
      </v-row>
    </v-card-text>
    <!-- telas sm-  -->
    <v-card-text class="pa-0 d-inline-block d-md-none text-center">
      <v-container class="mb-0 mt-0 d-flex justify-center">
        <v-img
          eager
          alt="Brasão de Florânia"
          class="shrink"
          src="@/assets/logo.png"
          transition="scale-transition"
          width="120"
        />
      </v-container>
      <v-card color="red" tile elevation="1">
        <v-card-text class="pa-1">
          <v-btn icon @click.stop="menu = !menu">
            <v-icon>mdi-dots-horizontal-circle</v-icon>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-card-text>
    <v-dialog
      v-model="menu"
      fullscreen
      hide-overlay
      transition="dialog-top-transition"
    >
      <v-card color="accent">
        <v-card-title class="pt-0 pb-0">
          <v-divider class="primary" />
          <v-img
            eager
            alt="Brasão de Florânia"
            class="shrink mt-3"
            src="@/assets/brasao_pmf_colorido_vertical.svg"
            transition="scale-transition"
            :contain="true"
            max-width="160"
            height="auto"
          />
          <v-divider class="primary" />
        </v-card-title>
        <v-card-text class="text-center mt-8">
          <v-row>
            <v-col cols="12">
              <v-btn
                :to="'/'"
                @click.stop="menu = !menu"
                color="primary"
                outlined
                block
                >INICIO</v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-btn
                :to="'/prefeitura'"
                @click.stop="menu = !menu"
                color="primary"
                outlined
                block
                >A PREFEITURA</v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-btn
                :to="'/municipio'"
                @click.stop="menu = !menu"
                color="primary"
                outlined
                block
                >O MUNICÍPIO</v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-btn
                :to="'/contatos'"
                @click.stop="menu = !menu"
                color="primary"
                outlined
                block
                >CONTATOS</v-btn
              >
            </v-col>
            <v-col cols="12">
              <v-btn
                color="primary"
                link
                href="http://transparencia.florania.rn.gov.br:81/"
                @click.stop="menu = !menu"
                outlined
                block
                >TRANSPARÊNCIA</v-btn
              >
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn icon @click.stop="menu = !menu">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      menu: false,
      links: [
        {
          titulo: "INÍCIO",
          rota: "/",
          showDesktop: true,
        },
        {
          titulo: "A PREFEITURA",
          rota: "prefeitura",
          showDesktop: true,
        },
        {
          titulo: "O MUNICÍPIO",
          rota: "municipio",
          showDesktop: true,
        },
        {
          titulo: "TRANSPARÊNCIA",
          rota: "http://transparencia.florania.rn.gov.br:81/",
          showDesktop: true,
        },
        {
          titulo: "CONTRIBUINTE",
          rota: "http://agilicloud.agilirn.com.br/portal/prefflorania-rn#/",
          showDesktop: true,
        },
        {
          titulo: "EDUCÁGIL",
          rota: "http://201.73.145.55:8065/login.aspx?page=/",
          showDesktop: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
#menu ul li {
  display: inline;
}
#menu ul li a {
  font-size: 0.9rem;
  text-transform: uppercase;
  padding: 1rem 1rem;
  display: inline-block;
  color: white;
  text-decoration: none;
  border-bottom: 2px solid #ededed;
}
#menu ul li a:hover {
  text-shadow: 0 0 5px red;
  border-bottom: 2px solid red;
}
</style>
