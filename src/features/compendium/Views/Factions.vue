<template>
  <v-container fluid px-5>
    <h1 class="heading">FACTIONS</h1>
    <v-tabs
      v-model="tabModel"
      :vertical="$vuetify.breakpoint.lgAndUp"
      background-color="primary"
      :slider-size="12"
      slider-color="active"
      icons-and-text
      show-arrows
    >
      <v-tab v-for="(f, i) in factions" :key="f.ID" ripple>
        <cc-logo size="large" :source="f" :color="tabModel == i ? 'white' : 'black'" />
        {{ f.ID }}
      </v-tab>
      <v-tab-item v-for="f in factions" :key="f.ID + 'desc'">
        <v-card flat class="px-3 py-3 panel clipped-x-large">
          <v-card-title
            :class="`heading ${$vuetify.breakpoint.lgAndUp ? 'mech pb-3' : 'h2'}`"
            :style="`color: ${f.Color}; word-break: break-word!important`"
          >
            <span style="overflow-wrap: normal!important;">
              {{ f.Name }}
            </span>
          </v-card-title>
          <v-card-text class="mt-1 pr-4 pt-0">
            <cc-logo-splash
              v-if="$vuetify.breakpoint.lgAndUp"
              :source="f"
              style="float: right; margin-left: 20px; margin-right: 50px; min-height: 22vw"
            />
            <v-divider class="ma-2" style="width: 800px" />
            <p
              v-html-safe="f.Description"
              class="body-text stark-text--text mb-2"
              style="min-height: 400px;"
            />
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getModule } from 'vuex-module-decorators'
import { CompendiumStore } from '@/store'
import { Faction } from '@/classes/Faction'

@Component
export default class Factions extends Vue {
  public tabModel = 0

  private compendiumStore = getModule(CompendiumStore, this.$store)
  get factions(): Faction[] {
    return this.compendiumStore.Factions
  }
}
</script>

<style scoped>
.quote-block {
  border-left: 8px solid var(--v-panel-darken1);
  padding-left: 6px;
}
</style>
