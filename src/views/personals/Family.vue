<template>
  <div class="family">
    <v-container fixed>
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h1>My Family</h1>
              </div>
            </v-card-title>
          </v-card>
          <br>
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
        src: '/family/creek.png'
      }]
    }
  }
}
</script>
