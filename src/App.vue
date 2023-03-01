<template>
  <div class="container mx-auto">
    <nav-bar></nav-bar>
    <main-part></main-part>
    <news-list></news-list>
  </div>
  
</template>
<script>
import NavBar from './components/NavBar.vue';
import MainPart from './components/MainPart.vue';
import NewsList from './components/NewsList.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    MainPart,
    NewsList
  }
}
</script>

<style>
/* @font-face {
  font-family: "Inter-Regular";
  src: url("@/assets/fonts/static/Inter-Regular.ttf");
} */
</style>
