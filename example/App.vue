<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Welcome to VueVoca</h1>
    <h2>{{ helloWorld() }}</h2>
  </div>
</template>

<script>
import VueVoca from "@/vue-voca";

export default {
  name: "app",
  methods: {
    helloWorld() {
      return this.$voca.swapCase("HelloWorld!");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
