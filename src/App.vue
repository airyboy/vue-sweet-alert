<template>
  <div id="app">
    <pre>Modal = {{ showModal }}</pre>
    <button @click="showSimple">Simple</button>
    <button @click="showSuccess">Success</button>
    <button @click="showError">Error</button>
    <button @click="showWarning">Warning</button>
    <button @click="showQuestion">Question</button>
    <sweet-alert :show="showModal" title="Awesome title" @modalClosed="showModal = false" :icon="iconType">
      <div>some content here</div>
      <!-- <iframe width="640" height="480" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allowfullscreen></iframe> -->
    </sweet-alert>

  </div>
</template>

<script>
import SweetAlert from './SweetAlert.vue'

export default {
  name: 'app',
  components: { SweetAlert },
  data () {
    return {
      showModal: false,
      email: "my@email.com",
      iconType: "none"
    }
  },
  methods: {
    showSimple() {
      this.iconType = "none";
      this.showModal = true;
    },
    showWarning() {
      this.iconType = "warning";
      this.showModal = true;
    },
    showError() {
      this.iconType = "error";
      this.showModal = true;
    },
    showSuccess() {
      this.iconType = "success";
      this.showModal = true;
    },
    showQuestion() {
      this.iconType = "question";
      this.showModal = true;
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
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
