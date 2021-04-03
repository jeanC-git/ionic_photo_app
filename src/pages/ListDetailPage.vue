<template>
  <base-layout
    :page-title="loadedLanguage ? loadedLanguage.title : 'Cargando..'"
    page-default-back-link="/list"
  >
    <h2 v-if="!loadedLanguage">No se pudo encontrar data de lenguaje</h2>
    <language-overview :language="loadedLanguage"></language-overview>
  </base-layout>
</template>

<script>
  import LanguageOverview from "./../components/languages/LanguageOverview";
  export default {
    components: { LanguageOverview },
    data() {
      return {
        memoryId: this.$route.params.id,
      };
    },
    computed: {
      loadedLanguage() {
        return this.$store.getters.language(this.memoryId);
      },
    },
  };
</script>