<template>
  <div>
    <v-card elevation="0" tile>
      <v-card-title>
        <v-divider class="primary" />
        <h2 class="primary--text mx-10">CONTATOS</h2>
        <v-divider class="primary" />
      </v-card-title>
      <v-card-text>
        <v-expansion-panels>
          <v-expansion-panel v-for="item in contatos" :key="item.titulo">
            <v-expansion-panel-header>
              <h3 class="primary--text">{{ item.titulo }}</h3>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card tile elevation="0">
                <v-card-text class="text-justify pa-0">
                  <v-row>
                    <v-col cols="12">
                      <h4 class="primary--text">
                        {{ item.endereco }} <br />
                        Atendimento das 7h às 13h
                        <br />
                        Responsável: {{ item.responsavel }}
                      </h4>
                    </v-col>
                    <v-col cols="12" class="pa-0" v-if="item.whatsapp">
                      <a
                        :href="item.linkWhats"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <v-btn
                          v-if="item.isWhatsapp"
                          text
                          color="primary"
                          class="my-3 mx-3"
                        >
                          <v-icon class="mx-1">mdi-whatsapp</v-icon>
                          <h5>{{ item.whatsapp }}</h5>
                        </v-btn>
                        <v-btn v-else text color="primary" class="my-3 mx-3">
                          <v-icon class="mx-1">mdi-phone</v-icon>
                          <h5>{{ item.whatsapp }}</h5>
                        </v-btn>
                      </a>
                    </v-col>
                    <v-col cols="12" v-if="item.extra">
                      <v-btn text color="primary">
                        <v-icon class="mx-1">mdi-phone</v-icon>
                        <h5>{{ item.extra }}</h5>
                      </v-btn>
                    </v-col>
                    <v-col cols="12" v-if="item.email">
                      <a
                        :href="item.linkEmail"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <v-btn text color="primary">
                          <v-icon class="mx-1">mdi-at</v-icon>
                          <h5>{{ item.email }}</h5>
                        </v-btn>
                      </a>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Contatos",
  data() {
    return {
      contatos: [
        {
          titulo: "Gabinete",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999250525",
          whatsapp: "(84) 9 9925-0525",
          isWhatsapp: true,
          email: "florania.pmf@gmail.com",
          linkEmail: "mailto:florania.pmf@gmail.com",
          endereco: "Rua Teonia Amaral 290 - Centro",
          horario: "",
          responsavel: "José da Silva Júnior",
        },
        {
          titulo: "Sec. de Administração",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999877027",
          whatsapp: "(84) 9 9987-7027",
          isWhatsapp: true,
          email: "semaplan@florania.rn.gov.br",
          linkEmail: "mailto:semaplan@florania.rn.gov.br",
          endereco: "Rua Teonia Amaral 290 - Centro (Sede da Prefeitura)",
          horario: "",
          responsavel: "Laedson Medeiros",
        },
        {
          titulo: "Setor Juridico",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584997062774",
          whatsapp: "(84) 9 9706-2774",
          isWhatsapp: true,
          email: "florania.pmf@gmail.com",
          linkEmail: "mailto:florania.pmf@gmail.com",
          endereco: "Rua Teonia Amaral 290 - Centro (Sede da Prefeitura)",
          horario: "",
          responsavel: "Fábia Delgado",
        },
        {
          titulo: "Setor Tributação",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584996000078",
          whatsapp: "(84) 9 9600-0078",
          isWhatsapp: true,
          email: "tributacaoflorania@gmail.com",
          linkEmail: "mailto:tributacaoflorania@gmail.com",
          endereco: "Rua Teonia Amaral 290 - Centro (Sede da Prefeitura)",
          horario: "",
          responsavel:
            "Pedro Henrique Paulino Pereira Cruz (Setor Econômico) e Maria Lúcia de Oliveira (Setor Imobiliário)",
        },
        {
          titulo: "Setor Licitação",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999912212",
          whatsapp: "(84) 9 9991-2212",
          isWhatsapp: true,
          email: "licitacao@florania.rn.gov.br ",
          linkEmail: "mailto:licitacao@florania.rn.gov.br",
          endereco: "Rua Teonia Amaral 290 - Centro (Sede da Prefeitura)",
          horario: "",
          responsavel: "Alex Silva de Azevedo",
        },
        {
          titulo: "Sec. de Saúde",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999818521",
          whatsapp: "(84) 9 9981-8521",
          isWhatsapp: true,
          email: "sms@florania.rn.gov.br",
          linkEmail: "mailto:sms@florania.rn.gov.br",
          endereco: "Rua Barão do Rio Branco 28 - Centro (Feira Coberta)",
          horario: "",
          responsavel: "Sâmara Asley de Medeiros Laurentino",
        },
        {
          titulo: "Sec. de Finanças",
          linkWhats: "tel:+5584999912462",
          whatsapp: "(84) 9 9991-2462",
          isWhatsapp: false,
          linkEmail: "mailto:financas@florania.rn.gov.br",
          email: "financas@florania.rn.gov.br",
          endereco: "Rua Teonia Amaral 290 - Centro (Sede da Prefeitura)",
          horario: "",
          responsavel: "Miqueias de Araújo Souza",
        },
        {
          titulo: "Sec. de Assistência Social",
          linkWhats: "tel:+558434352708",
          whatsapp: "(84) 3435-2708",
          isWhatsapp: false,
          email: "semas@florania.rn.gov.br",
          linkEmail: "mailto:semas@florania.rn.gov.br",
          endereco: "Rua Porfessor Edil Medeiros 5 - Flores",
          horario: "",
          responsavel: "Tásia Assunção",
        },
        {
          titulo: "Sec. de Educação, Cultura e Desporto",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999862094",
          whatsapp: "(84) 9 9986-2094",
          isWhatsapp: false,
          email: "semecd@florania.rn.gov.br",
          linkEmail: "mailto:semecd@florania.rn.gov.br ",
          endereco: "Rua Barão do Rio Branco 28 - Centro (Feira Coberta)",
          horario: "",
          responsavel: "Suely Cardoso",
        },
        {
          titulo: "Sec. de Obras",
          linkWhats: "tel:+5584996099167",
          whatsapp: "(84) 9 9609-9167",
          isWhatsapp: false,
          email: "semob.florania@gmail.com",
          linkEmail: "mailto:semob.florania@gmail.com",
          endereco: "Rua Tereza Adelaide S/N",
          horario: "",
          responsavel: "Roberto Gouveia",
        },
        {
          titulo: "Cad. Único",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584996127368",
          whatsapp: "(84) 9 9612-7368",
          isWhatsapp: true,
          email: "smas@florania.rn.gov.br",
          linkEmail: "mailto:smas@florania.rn.gov.br",
          endereco: "Rua Porfessor Edil Medeiros S/N - Flores",
          horario: "",
          responsavel: "Damião Silva Souza",
        },
        {
          titulo: "Sec. de Agricultura",
          linkWhats: "https://api.whatsapp.com/send?phone=+5584999292270",
          whatsapp: "(84) 9 9929-2270",
          extra: "(84) 9 9903-0150",
          isWhatsapp: true,
          email: "agriculturaflorania@yahoo.com.br",
          linkEmail: "mailto:agriculturaflorania@yahoo.com.br",
          endereco: "Rua Francisco Cícero 8 - Centro",
          horario: "",
          responsavel: "Carlos de Medeiros Costa",
        },
        // {
        //   titulo: "Sec. de Transporte",
        //   linkWhats: "https://api.whatsapp.com/send?phone=+5584999292270",
        //   whatsapp: "(84) 9 9929-2270",
        //   extra: "(84) 9 9903-0150",
        //   isWhatsapp: true,
        //   email: "agriculturaflorania@yahoo.com.br",
        //   linkEmail: "mailto:agriculturaflorania@yahoo.com.br",
        //   endereco: "Rua Francisco Cícero 8 - Centro",
        //   horario: "",
        //   responsavel: "Manoel Pinto Neto",
        // },
      ],
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
