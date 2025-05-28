<script setup>
  import Header from './components/header/Header.vue';
  import HomePage from './components/home/HomePage.vue';
</script>
<style lang="css">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 1px solid red;
  }
</style>
<template>
  <div id="app">
    <Header/>
    <HomePage/>
  </div>
</template>