<template>
  <div>
    <!-- Concorrencia Modal -->
    <!-- <div>
      <v-dialog v-model="ps" width="800">
        <v-card>
          <v-card-title class="pt-0 pb-0">
            <v-divider class="primary" />
            <img
              src="../assets/brasao_pmf_colorido_vertical.svg"
              width="110px"
              height="110px"
            />
            <v-divider class="primary" />
          </v-card-title>
          <v-card-text class="text-center">
            <v-row>
              <v-col cols="12">
                <h3 class="text-center primary--text">
                  CONCURSO DE QUADRILHAS
                </h3>
              </v-col>
              <v-col cols="12">
                <p class="text-center primary--text">
                  A PREFEITURA MUNICIPAL DE FLORÂNIA, REALIZARÁ NOS DIAS 26 E 27
                  DE JUNHO DE 2022, O
                  <span class="font-weight-bold">
                    I FESTIVAL DE QUADRILHAS JUNINAS MATUTAS E ESTILIZADAS DE
                    FLORÂNIA
                  </span>
                  , COMO PARTE DA PROGRAMAÇÃO ALUSIVA AOS FESTEJOS JUNINOS.
                </p>
                <p class="text-center primary--text font-weight-medium">
                  SÃO PEDRO DA GENTE ALEGRIA QUE NÃO TEM FIM!
                </p>
              </v-col>
              <Card
                key="matuta"
                title="CONCURSO TRADICIONAL"
                icon="file-document-multiple"
                link="https://drive.google.com/file/d/14jpJpdrLWVqVIMFmbAZlWB1FXyhE7ZIn/view?usp=sharing"
                :lg="6"
                :md="6"
                :sm="6"
              />
              <Card
                key="estilizada"
                title="CONCURSO ESTILIZADA"
                icon="file-document-multiple"
                link="https://drive.google.com/file/d/1EZeGmpavu4pvOPGkLaNgfSpXWCzNMOnY/view?usp=sharing"
                :lg="6"
                :md="6"
                :sm="6"
              />
            </v-row>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="ps = false"> FECHAR </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div> -->
    <!-- Fim Concorrencia Modal -->
    <v-card tile elevation="0">
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="8" md="8" sm="12">
            <v-carousel
              cycle
              :show-arrows="false"
              hide-delimiters
              height="auto"
              width="700"
            >
              <v-carousel-item eager>
                <div class="d-flex justify-center container-slide">
                  <img class="img-slide" src="../assets/slide00.jpg" />
                </div>
              </v-carousel-item>
              <v-carousel-item eager>
                <div class="d-flex justify-center container-slide">
                  <img class="img-slide" src="../assets/slide01.jpg" />
                </div>
              </v-carousel-item>
              <v-carousel-item eager>
                <div class="d-flex justify-center container-slide">
                  <img class="img-slide" src="../assets/slide02.jpg" />
                </div>
              </v-carousel-item>
              <v-carousel-item eager>
                <div class="d-flex justify-center container-slide">
                  <img class="img-slide" src="../assets/slide03.jpg" />
                </div>
              </v-carousel-item>
              <v-carousel-item eager>
                <div class="d-flex justify-center container-slide">
                  <img class="img-slide" src="../assets/slide04.jpg" />
                </div>
              </v-carousel-item>
            </v-carousel>
          </v-col>
          <v-col cols="12" md="3" sm="12">
            <v-row justify="space-between" align-content="space-between">
              <v-col cols="12">
                <a href="https://forms.gle/kE6GPMYh7LvH7NcCA">
                  <v-card color="#009faf" class="ma-1">
                    <v-card-text class="text-center">
                      <v-row>
                        <v-col cols="12">
                          <v-card
                            elevation="0"
                            class="acesso-rapido"
                            rounded="xl"
                            color="#009faf"
                          >
                            <v-card-text class="text-center">
                              <v-icon class="ma-2 accent--text" x-large
                                >mdi-human-dolly
                              </v-icon>
                              <v-spacer></v-spacer>
                              <h3 class="ma-0 accent--text">
                                CADASTRO DE FORNECEDORES
                              </h3>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </a>
              </v-col>
              <v-col cols="12">
                <a
                  href="https://drive.google.com/file/d/1VdH6-LXmL08vg8fB5pLw_NRjgylidpd_/view?usp=sharing"
                >
                  <v-card color="error" class="ma-1">
                    <v-card-text class="text-center">
                      <v-row>
                        <v-col cols="12">
                          <v-card
                            elevation="0"
                            class="error acesso-rapido"
                            rounded="xl"
                          >
                            <v-card-text class="text-center">
                              <v-icon class="ma-2 accent--text" x-large
                                >mdi-book-open-variant
                              </v-icon>
                              <v-spacer></v-spacer>
                              <h3 class="ma-0 accent--text">
                                ESTATUTO DOS SERVIDORES
                              </h3>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </a>
              </v-col>
              <v-col cols="12">
                <a
                  href="https://drive.google.com/drive/folders/1enS2mvi2Zr3ohPRHno8cIili5_feiM0K?usp=sharing"
                >
                  <v-card color="warning" class="ma-1">
                    <v-card-text class="text-center">
                      <v-row>
                        <v-col cols="12">
                          <v-card elevation="0" class="warning acesso-rapido">
                            <v-card-text class="text-center">
                              <v-icon class="ma-2 white--text" x-large
                                >mdi-scale-balance
                              </v-icon>
                              <v-spacer></v-spacer>
                              <h3 class="ma-0 white--text">LEIS MUNICIPAIS</h3>
                            </v-card-text>
                          </v-card>
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </a>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- <v-card tile elevation="0" class="mt-15">
      <v-card-text class="text-center titulo">
        <h1 class="pb-3">Editais</h1>
      </v-card-text>
      <v-card-text>
        <v-row class="px-10">
          <Card
            key="aux-transporte"
            title="AUXÍLIO TRANSPORTE"
            icon="file-document-outline"
            link="https://drive.google.com/file/d/12is7fvbTWHJlqYoQ0imMES-Vk0zQb3Hw/view?usp=sharing"
            :lg="3"
            :md="3"
            :sm="6"
          />
        </v-row>
      </v-card-text>
    </v-card> -->
    <v-card tile elevation="0" class="mt-15">
      <v-card-text class="text-center titulo">
        <h1 class="pb-3">Acesso Rápido</h1>
      </v-card-text>
      <v-card-text>
        <v-row class="px-10">
          <Card
            v-for="item in acesso_rapido"
            :key="item.name"
            :title="item.name"
            :icon="item.icon"
            :link="item.link"
            :lg="3"
            :md="3"
            :sm="6"
          />
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      ps: false,
      acesso_rapido: [
        {
          name: "CONTRACHEQUE",
          icon: "card-account-details-outline",
          link: "http://transparencia.florania.rn.gov.br:81/Usuario/Login.aspx",
        },
        {
          name: "E-SUS",
          icon: "hospital-box-outline",
          link: "http://esus.florania.rn.gov.br:8080/",
        },
        {
          name: "EDUCÁGIL",
          icon: "school-outline",
          link: "http://201.73.145.55:8065/login.aspx?page=/",
        },
        {
          name: "CERTIDÃO NEGATIVA",
          icon: "certificate-outline",
          link: "http://agilicloud.agilirn.com.br/portal/prefflorania-rn/#/certidao",
        },
        {
          name: "ALVARÁ",
          icon: "file-check",
          link: "http://agilicloud.agilirn.com.br/portal/prefflorania-rn/#/alvara",
        },
        {
          name: "PROCESSOS",
          icon: "file-document-edit-outline",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultaProcesso.aspx",
        },
        {
          name: "EDITAIS",
          icon: "file-document-multiple",
          link: "https://drive.google.com/drive/folders/1NTztiEsK6DiHjUHAsU8Zf6yePn5dB0sv?usp=sharing",
        },
        {
          name: "ATAS DE REGISTRO DE PREÇO",
          icon: "book-open-outline",
          link: "https://drive.google.com/drive/folders/1NVQ0Uyxtzrr1qnYZdHrgqfTjjaZ9YKgE?usp=sharing",
        },
        {
          name: "FUNDOS MUNICIPAIS",
          icon: "piggy-bank-outline",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/FundosMunicipais.aspx",
        },
        {
          name: "RECEITAS",
          icon: "cash-plus",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultasReceitas.aspx",
        },
        {
          name: "DESPESAS",
          icon: "cash-minus",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultaDiarioDespesas.aspx",
        },
        {
          name: "COVID-19",
          icon: "virus",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultasCovid.aspx",
        },

        {
          name: "EMPENHOS",
          icon: "file-alert-outline",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultaEmpenhos.aspx",
        },

        {
          name: "SERVIDORES",
          icon: "account",
          link: "http://transparencia.florania.rn.gov.br:81/Cidadao/ConsultaServidores.aspx",
        },

        {
          name: "CONTRATOS",
          icon: "file-document-edit",
          link: "http://contratos.florania.rn.gov.br:8120/Cidadao/ConsultaContratos.aspx",
        },
        {
          name: "LICITAÇÕES",
          icon: "gavel",
          link: "http://licitacao.florania.rn.gov.br:8120/Cidadao/ConsultaLicitacoes.aspx",
        },
        {
          name: "LICITAÇÃO TRANSPARENTE",
          icon: "motion-play",
          link: "https://www.youtube.com/channel/UCB4om-kFRgWFkeiuYg-trAg/videos",
        },
        {
          name: "REGIME JURÍDICO",
          icon: "notebook",
          link: "https://drive.google.com/file/d/1Y0hxnFn1BvKPbn_ocTO1q-_aG-HG9fXD/view",
        },
        {
          name: "LEI ORGÂNICA MUNICIPAL",
          icon: "bank",
          link: "https://drive.google.com/drive/folders/1_FNzPJiGJwYI3hxIQ7WZAy0xeEz2tvLz?usp=sharing",
        },
        {
          name: "RELATÓRIOS DE GESTÃO",
          icon: "currency-usd",
          link: "https://drive.google.com/drive/folders/1N9qmSLSAqUefn4z0OaDRAwuRS2USvtGo?usp=sharing",
        },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.title-btn-slide {
  font-size: 1.5rem;
  text-transform: capitalize;
}
.icon-btn-slide {
  position: relative;
  float: right;
}
.titulo::after {
  width: 40%;
  height: 1px;
  background-color: #2c4c91;
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
h1 {
  text-transform: uppercase;
  font-size: 2rem;
  color: #2c4c91;
}
.img-slide {
  height: auto;
  width: 100%;
  max-width: 510px;
  object-fit: cover;
}
.container-slide {
  background: rgb(255, 255, 255);
}
</style>
