<template>
  <div>
    <h2>Learn Meteor!</h2>
    <ul>
      <li>
        <form class="info-link-add">
          <input type="text" v-model="title" name="title" placeholder="Title" required>
          <input type="url" v-model="url" name="url" placeholder="Url" required>
          <input type="submit" name="submit" @click="submit($event)" value="Add new link">
        </form>
      </li>
      <li v-for="link in links"><a :href="link.url" target="_blank">{{link.title}}</a></li>
    </ul>
    <q-select
      filled
      v-model="select"
      :options="[{ label: 'Option1', value: 1 }]"
      label="Select it!"
      hint="Disable"
      style="width: 250px"
    />
  </div>
</template>

<script>
import {
  QSelect,
} from 'quasar'

import Links from '../../api/collections/Links'

export default {
  components: {
    QSelect
  },

  data() {
    return {
      select: null,
      title: "",
      url: "",
    }
  },
  meteor: {
    $subscribe: {
      'links': [],
    },
    links () {
      return Links.find({})
    },
  },
  methods: {
    submit(event) {
      event.preventDefault()
      Meteor.call('createLink', this.title, this.url, (error) => {
        if (error) {
          alert(error.error)
        } else {
          this.title = ''
          this.url = ''
        }
      })
    }
  },
}
</script>

<style scoped>
  ul {
    font-family: monospace;
  }
</style>
