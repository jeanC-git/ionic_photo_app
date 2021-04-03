<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Título</ion-label>
        <ion-input type="text" required v-model="title"></ion-input>
      </ion-item>
      <ion-item>
        <!-- <ion-label position="floating">Imagen</ion-label>
        <ion-input type="url" required v-model="imageUrl"></ion-input> -->

        <ion-thumbnail start>
          <ion-img :src="previewImageUrl"></ion-img>
        </ion-thumbnail>
        <ion-button type="button" fill="clear" @click="takePhoto">
          <ion-icon slot="start" :icon="camera"></ion-icon>
          Tomar foto
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Descripción</ion-label>
        <ion-textarea rows="5" required v-model="description"></ion-textarea>
      </ion-item>
      <ion-button type="submit" expand="block " fill="outline"
        >Guardar</ion-button
      >
    </ion-list>
  </form>
</template>
<script>
  import {
    IonList,
    IonTextarea,
    IonLabel,
    IonInput,
    IonItem,
    IonButton,
    IonThumbnail,
    IonIcon,
  } from "@ionic/vue";
  import { camera } from "ionicons/icons";
  import { Plugins, CameraResultType, CameraSource } from '@capacitor/core'
  const { Camera } = Plugins
  export default {
    emits: ["save-language"],
    components: {
      IonList,
      IonTextarea,
      IonLabel,
      IonInput,
      IonItem,
      IonButton,
      IonThumbnail,
      IonIcon,
    },
    data() {
      return {
        title: "",
        description: "",
        imageUrl: "",
        previewImageUrl : null,
        camera,
      };
    },
    methods: {
      async takePhoto(){
        const photo = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source : CameraSource.Camera,
          quality: 60
        });
        this.previewImageUrl = photo.webPath;
      },
      submitForm() {
        const languageData = {
          title: this.title,
          description: this.description,
          imageUrl: this.previewImageUrl,
        };
        this.$emit("save-language", languageData);
        this.$router.replace("/list");
      },
    },
  };
</script>