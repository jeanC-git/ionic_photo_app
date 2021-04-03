<template>
    <ion-img :src="language.image" :alt="language.title"></ion-img>
    <h2 class="ion-text-center">{{language.title}}</h2>
    <p class="ion-text-center">{{language.description}}</p>
</template>

<script>

import {IonImg}  from '@ionic/vue'
export default {
    props : ['language'],
    components: {
        IonImg
    }
}
</script>