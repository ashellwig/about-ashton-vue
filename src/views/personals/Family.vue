<template>
  <div class="family">
    <v-carousel>
      <v-carousel-item v-for="(photo, i) in photos" :src="photo.src" :key="i"></v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      photos: [{
        src: '/family/creek.png'
      }]
    }
  }
}
</script>
