<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher app>
      <v-list>
        <v-list-tile value="true" v-for="(item, i) in items" :to="item.path" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-bind:to="item.path" v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-group prepend-icon="account_circle" value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title>Personal Life</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="(personal, i) in personals" :to="peronal.path" :key="i">
            <v-list-tile-title v-text="personal.name"></v-list-tile-title>
            <v-list-tile-action></v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; Ashton S. Hellwig 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      personals: [{
        name: 'Family',
        path: '/family',
        icon: 'account_circle'
      }, {
        name: 'Pets',
        path: '/pets',
        icon: 'account_circle'
      }
      ],
      items: [{
        icon: 'home',
        title: 'Home',
        path: '/'
      }, {
        icon: ' fa-question-circle-o',
        title: 'About',
        path: '/about'
      }, {
        icon: 'bubble_chart',
        title: 'Experience',
        'path': '/experience'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Ashton Hellwig'
    }
  }
}
</script>
