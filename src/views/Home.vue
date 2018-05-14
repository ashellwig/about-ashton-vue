<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <v-card primary-title>
          <v-card-title>
            <div class="intro-card">
              <h1>About Ashton Hellwig</h1>
            </div>
          </v-card-title>
          <v-card-text>
            <p>Welcome to my personal website, simply detailing my experience. This version is written in Vue, with the source availble in on the
              <router-link to="/about">about</router-link> page.
            </p>
          </v-card-text>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .intro-card {
  color: blue;
} */
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
