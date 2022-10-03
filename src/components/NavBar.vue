<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="">{{title}}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
              <slot></slot>
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