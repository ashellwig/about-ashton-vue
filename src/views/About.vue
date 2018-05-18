<template>
  <div class="about">
    <v-layout column align-center justify-space-around>
      <v-card>
        <v-card-title>
          <div>
            <h1 class="primary-title">About This Site</h1>
          </div>
        </v-card-title>
        <v-card-text>
          <p>
            This site was written in Vue.js CLI 3.0. It can be viewed on
            <strong>Github</strong> by clicking the &quot;Source&quot; button below.
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn color="cyan" :target="_blank" @click="github.com/ashellwig/about-ashton-vue.git">Source</v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
  </div>
</template>
