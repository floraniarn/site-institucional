<template>
  <div>
    <v-card elevation="0" tile>
      <v-card-title>
        <v-divider class="primary" />
        <h2 class="primary--text mx-5">A PREFEITURA</h2>
        <v-divider class="primary" />
      </v-card-title>
      <v-card-text>
        <v-card elevation="0" tile>
          <v-card-text class="text-center primary--text">
            <v-row>
              <v-col cols="12" md="6">
                <v-avatar size="200">
                  <img src="@/assets/profile_galo_c.jpg" alt="Prefeito Galo" />
                </v-avatar>
                <h3 class="pt-3">
                  Saint Clay Alcântara Silva de Medeiros (Galo de Florânia)
                </h3>
                <h5 class="mb-3">Prefeito (PSDB)</h5>
                <p class="text-justify pt-5 pr-5 pl-5">
                  Saint Clay Alcântara Silva de Medeiros (Galo de Florânia),
                  natural de Currais Novos, filho de José Laurentino de Medeiros
                  e Maria Ione de Medeiros, é graduado em pedagogia pela
                  Universidade do Vale do Acaraú (UVA).
                </p>
                <p class="text-justify pr-5 pl-5">
                  Iniciou sua carreira política em 2008 disputando uma cadeira
                  na Câmara Municipal de Florânia, sendo eleito nesse mandato e
                  posteriormente nos mandatos de 2013-2016 e 2017-2020. Nesse
                  último, foi presidente da câmara por dois biênios.
                </p>
                <p class="text-justify pr-5 pl-5">
                  Como vereador, fundamentou seus mandatos em duas marcas:
                  Participação popular e inclusão social. Alterou de forma
                  radical a relação câmara/comunidade, democratizando as
                  decisões.
                </p>
              </v-col>
              <v-col cols="12" md="6">
                <v-avatar size="200">
                  <img
                    src="@/assets/profile_loba_c.jpg"
                    alt="Vice-prefeita Loba"
                  />
                </v-avatar>
                <h3 class="pt-3">Joelzia Texeira de Medeiros (Loba)</h3>
                <h5 class="mb-3">Vice-Prefeita (PSDB)</h5>
                <p class="text-justify pt-5 pr-5 pl-5">
                  Joelzia Texeira de Medeiros (Loba), natural de Florânia, filha
                  de Manoel Amaral de Medeiros e Maria dapaz Ferreira de Souza
                  Medeiros, graduada em pedagogia pela Universidade do Vale do
                  Acaraú (UVA), foi conselheira tutelar por dois mandatos (8
                  anos).
                </p>
                <p class="text-justify pr-5 pl-5">
                  Joelzia disputou as eleições em 2016, sendo eleita vereadora
                  do município com 374 votos.
                </p>
                <p class="text-justify pr-5 pl-5">
                  Como vereadora, Joelzia atuou firmemente para tornar realidade
                  o programa de governo do poder executivo municipal da cidade
                  de Florânia.
                </p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Prefeitura",
};
</script>
<style scoped>
p {
    font-size: 1.2rem;
}
</style>
