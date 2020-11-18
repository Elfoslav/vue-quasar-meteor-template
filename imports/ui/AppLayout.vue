<template name="appLayout">
  <q-layout ref="layout" view="LHr lpR lFr">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn
          flat round dense
          @click="showLeft = !showLeft"
          icon="menu"
        />

        <q-toolbar-title>
          Chat app
        </q-toolbar-title>

        <q-btn
          flat round dense
          @click="showRight = !showRight"
          icon="menu"
        />
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" icon="save" to="/" replace label="Home" />
        <q-route-tab slot="title" icon="help" to="/info" replace label="Info" />
      </q-tabs>
    </q-header>

    <q-drawer side="left" v-model="showLeft">
      <q-list no-border link inset-separator>
        <q-item-label header>Essential Links</q-item-label>
        <q-item clickable to="/">
          <q-item-section avatar>
            <q-icon color="primary" name="save" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>
        <q-separator spaced inset="item" />
        <q-item clickable to="/info">
          <q-item-section avatar>
            <q-icon color="primary" name="help" />
          </q-item-section>
          <q-item-section>Info</q-item-section>
        </q-item>
        <q-separator spaced inset="item" />
      </q-list>
    </q-drawer>

    <q-drawer side="right" v-model="showRight">
      <span>Right Drawer</span>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>
          <span>Footer is here</span>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>

</template>

<script>
// To make the material-icons appear, we also have to add links in the /public folder
// to the web-font folder with the .css and .woff files
// in node_modules/@quasar/extras/material-icons.
// Docs: https://material.io/resources/icons/?style=baseline
// I find that this import for the material-icons needs to come after all the other quasar imports
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/dist/quasar.min.css";
export default {
  data: function () {
    return {
      showLeft: false,
      showRight: false
    }
  },
}
</script>
