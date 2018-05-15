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
              <div class="headline">Dogs &amp; Animal Care</div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="green" @click.native="showWag = !showWag">
              <v-icon left>fa-paw</v-icon>Wag! Walking
            </v-btn>
            <v-btn color="red" @click.native="showCamp = !showCamp">
              <v-icon left>fa-bed</v-icon>Camp Bow Wow
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="showWag">
              <h2>Dog Walker and Pet Sitter</h2>
              <strong>Dates</strong>: Mar 2018 &mdash; Present
              <p>Contract dog walker for Wag! Walking service. Also included pet sitting and boarding at set rates.</p>
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showCamp">
              <h2>Dog Handler / Camp Counselor</h2>
              <strong>Dates</strong>: Apr 2018 &mdash; Present
              <p>Care for boarding dogs and dogs for daycare, including all aspects associated with pet sitting and boarding.</p>
              <h3>Certifications</h3>
              <p>Pet CPR and First Aid (Expires Apr. 2020)</p>
              <p>Nail Trimming (No expiration)</p>
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
            <v-btn color="blue" @click.native="showIbm = !showIbm">
              <v-icon left>fa-server</v-icon>IBM
            </v-btn>
            <v-btn color="green" @click.native="showMgr = !showMgr">
              <v-icon left>fa-database</v-icon>Mrs. Green&apos;s Remedies
            </v-btn>
            <v-btn color="blue" @click.native="showTrim = !showTrim">
              <v-icon left>fa-map</v-icon>Trimble Geospatial
            </v-btn>
          </v-card-actions>
          <v-slide-y-transition>
            <v-card-text v-show="showIbm">
              <h2>Global Technology Services: Solutions, Del &amp; Transf.</h2>
              <strong>Dates</strong>: July 2017 &mdash; Jan 2018
              <p>Temporary technical support contractor, graded at level IV.</p>
              <h3>State Street Investment Bank</h3>
              <p>Level 1.5 CTS Agent, administrator rights to remote into State Street virtual desktops and physical machines after initial troubleshooting as failed on other teams. Mainly services the U.S. and India.</p>
              <h3>Anthem Healthcare</h3>
              <p>Receive incoming calls from employees for issues ranging from mapping of drives to password resets.</p>
              <h3>Detailed Achievements</h3>
              <p>
                <strong>Master the Mainframe</strong>: Part 2 Competitor
              </p>
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showMgr">
              <h2>Fullstack Web Engineer and DBA</h2>
              <strong>Dates</strong>: Nov 2017 &mdash; Present
              <p>Responsible for backend/database management and administration as well as the construction and deployment of all web-presence.</p>
              <h3>Links</h3>
            </v-card-text>
          </v-slide-y-transition>
          <v-slide-y-transition>
            <v-card-text v-show="showTrim">
              <h2>Temporary Manufacturing Test Technition</h2>
              <strong>Dates</strong>: May 2017 &mdash; July 2017
              <p>Use proprietary python robot framework software to test electrical Internet of Things (IOT) units, clean and label units after refurbishment, transport units to designated area for shipment as well as other projects as assigned.</p>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>

import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  data: () => ({
    showWag: false,
    showCamp: false,
    showSdr: false,
    showIbm: false,
    showTrim: false,
    showMgr: false
  }),
  components: FontAwesomeIcon
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
