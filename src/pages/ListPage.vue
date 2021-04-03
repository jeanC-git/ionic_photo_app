<template>
  <base-layout page-title="Listado de Productos">
    <template v-slot:actions-end>
      <ion-button color="light" router-link="/test/add">
        <ion-icon icon-only :icon="add"></ion-icon>
      </ion-button>
    </template>
    <language-list :languages="languages"></language-list>
  </base-layout>
</template>


<script>
  import { IonButton, IonIcon } from "@ionic/vue";
  import { add } from "ionicons/icons";
  import LanguageList from "../components/languages/LanguageList";
  export default {
    components: {
      LanguageList,
      IonButton,
      IonIcon,
    },
    data() {
      return {
        add,
      };
    },
    computed: {
      languages() {
        return this.$store.getters.languages;
      },
    },
  };
</script>