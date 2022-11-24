<template>
  <div id="app">
    <the-board />
  </div>
</template>

<script>

import TheBoard from './components/TheBoard.vue'

export default {
  name: 'App',
  components: {
    TheBoard
  }
}
</script>

<style scoped>
body {
    background: linear-gradient(45deg, rgba(117, 120, 218, 1), rgb(255, 83, 152));
    font-family: 'Segoe UI', Helvetica, Arial, 'system-ui', sans-serif;
    color: #2c3e50;
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    white-space:nowrap;
}
</style>


