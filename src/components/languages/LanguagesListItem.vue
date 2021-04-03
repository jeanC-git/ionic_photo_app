<template>
  <ion-item
    :router-link="`/list/${language.id}`"
  >
    <ion-thumbnail start>
      <ion-img :src="language.image" :alt="language.title"> </ion-img>
    </ion-thumbnail>
    <ion-label>
      {{ language.title }}
    </ion-label>
  </ion-item>
</template>

<script>
  import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";
  export default {
    props: ["language"],
    components: { IonItem, IonThumbnail, IonImg, IonLabel },
  };
</script>