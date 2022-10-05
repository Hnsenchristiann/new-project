<template>
  <div>
    <homepage-navbar />

    <div class="bg-black">
      <div class="bg-secondary">
        <div id="title" style="font-weight: bold;" class="text-black px-3 py-3">Professional Airplane</div>
      </div>

      <div class="w-100 row row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center">
        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>

        <div class="col text-center">
          <a href="/detail"><img class="w-100 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" /></a>
        </div>
      </div>

      <div class="d-flex justify-content-center py-3 px-3">
        <button style="width: 100%; font-size: 100%;" type="button" class="py-3 homepage-btn btn btn-outline-info">Next Page</button>
      </div>

      <div class="d-flex text-white justify-content-center pb-3">
        <div class="text-center">
          <div id="page-num">Page 1 of 456</div>
          <div id="total-item">45539 products</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  components: {
  }
}
</script>

