<template>
  <div id="app">
    <JsonData></JsonData>
  </div>
</template>

<script>

import JsonData from '@/components/JsonData';

export default {
  name: 'App',
  components: {
    JsonData
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
