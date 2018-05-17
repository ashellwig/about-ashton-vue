<template>
  <div class="pets">
    <v-container>
      <v-slide-y-transition mode="out-in">
        <v-layout>
          <v-carousel>
            <v-carousel-item v-for="(photo, i) in photos" :src="photo.src" :key="i"></v-carousel-item>
          </v-carousel>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      photos: [{
        src: '/pets/ijustjoined.png'
      }]
    }
  }
}
</script>
