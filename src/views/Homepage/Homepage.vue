<template>
  <div>
    <homepage-navbar />

    <div class="bg-black">
      <div class="bg-secondary">
        <div style="font-weight: bold;" class="title text-black px-3 py-3">Professional Airplane</div>
      </div>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 text-center">
        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>

        <div class="col text-center">
          <img class="w-100 h-75 pt-2 px-2" alt="Empty" src="https://picsum.photos/400/200" />
        </div>
      </div>

      <div class="d-flex justify-content-center py-3 px-3">
        <button style="width: 100%; font-size: 100%;" type="button" class="py-3 homepage-btn btn btn-outline-info">Next Page</button>
      </div>

      <div class="d-flex text-white justify-content-center pb-3">
        <div class="text-center">
          <div class="page-num">Page 1 of 456</div>
          <div class="total-item">45539 products</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HomepageNavbar from '@/views/Homepage/components/HomepageNavbar.vue'
export default {
  name: 'HomePage',
  components: {
    HomepageNavbar
  }
}
</script>

