<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a id="title" class="navbar-brand" href="/">NavBar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div class="d-lg-flex pt-1">
                <div id="item1">
                  <a href="/" class="text-white px-2 py-1">Dashboard</a>
                </div>
                <div id="item2">
                  <a href="/homepage" class="text-white px-2 py-1">Homepage</a>
                </div>
                <div id="item3">
                  <a href="/login" class="text-white px-2 py-1">Login</a>
                </div>
                <div id="item4">
                  <a href="/register" class="text-white px-2 py-1">Register</a>
                </div>
              </div>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>
// import SearchBar from '@/components/SearchBar.vue'
export default {
  name: 'NavBar',
  components: {
    // SearchBar
  },
  props: {
    title: String,
  }
}
</script>