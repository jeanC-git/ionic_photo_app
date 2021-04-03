<template>
  <base-layout page-title="Crear un lenguaje" page-default-back-link="/list">
    <create-form @save-language="saveLanguage"></create-form>
  </base-layout>
</template>
<script>
  import CreateForm from "../components/languages/LanguageCreateForm";
  export default {
    components: { CreateForm },
    data() {
      return {};
    },

    methods: {
      saveLanguage(languageData) {
        this.$store.dispatch("addLanguage", languageData);
      },
    },
  };
</script>