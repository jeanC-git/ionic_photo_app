<template>
  <ion-list>
    <language-list-item
      v-for="language in languages"
      :key="language.id"
      :language="language"
    ></language-list-item>
  </ion-list>
</template>

<script>
  import { IonList } from "@ionic/vue";
  import LanguageListItem from "./LanguagesListItem";
  export default {
    props: ["languages"],
    components: { IonList, LanguageListItem },
  };
</script>