<template>
  <nav-bar />
  <router-view/>
  <footer-bar />
</template>

<script>
import NavBar from '@/views/shared/components/NavBar.vue'
import FooterBar from '@/views/shared/components/FooterBar.vue'
export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
