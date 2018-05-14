<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <!-- Intro/Title -->
        <v-card>
          <v-card-title primary-title>
            <div>
              <div class="headline">My Work Experience</div>
              <div class="grey--text">Categorized -- Not Chronological</div>
            </div>
          </v-card-title>
        </v-card>
        <br>
        <!-- Dog Experience -->
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Experience with Dogs and Animal Care</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="green" @click.native="showWag = !showWag">Wag! Walking</v-btn>
            <v-btn color="red" @click.native="showCamp = !showCamp">Camp Bow Wow</v-btn>
            <v-btn color="blue" @click.native="showSdr = !showSdr">Atlanta Small Dog Rescue</v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="showWag">
              Details about Wag
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showCamp">
              Details for Camp Bow Wow
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showSdr">
              Details for Small Dog Rescue
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
        <br>
        <!-- IT Experience -->
        <v-card>
          <v-card-title>
            <div>
              <div class="headline">Experience in IT and Development</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="blue" @click.native="showIbm = !showIbm">IBM</v-btn>
            <v-btn color="green" @click.native="showMgr = !showMgr">Mrs. Green's Remedies</v-btn>
            <v-btn color="blue" @click.native="showTrim = !showTrim">Trimble Geospatial</v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="showIbm">
              Details about IBM
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showMgr">
              Details for MGR
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showTrim">
              Details for Trimble
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showWag: false,
    showCamp: false,
    showIbm: false,
    showTrim: false,
    showMgr: false
  })
}
</script>

<style lang="less" scoped>
.headline {
  text-align: center;
}
.grey--text {
  text-align: center;
}
</style>
