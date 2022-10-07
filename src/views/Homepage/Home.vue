<template>
  <div>
    <homepage-navbar />

    <div class="bg-black">
      <div class="bg-secondary">
        <div id="title" style="font-weight: bold;" class="text-black px-3 py-3">Professional Airplane</div>
      </div>

      <div style="padding-left: 1%;" class="w-100 g-2 pt-2 row row-cols-1 row-cols-sm-2 row-cols-lg-3 text-center">
        <div class="col text-center">
          <image-box imageStyle="w-100" imageAlt="Empty" imageRoute="/detail" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col text-center">
          <image-box imageStyle="w-100" imageAlt="Empty" imageRoute="/detail" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col text-center">
          <image-box imageStyle="w-100" imageAlt="Empty" imageRoute="/detail" imageSrc="https://picsum.photos/400/200"/>
        </div>
      </div>

      <div class="d-flex justify-content-center py-3 px-3">
        <button style="width: 100%; font-size: 100%;" type="button" class="py-3 homepage-btn btn btn-outline-info">Next Page</button>
      </div>

      <div class="d-flex text-white justify-content-center pb-3 ">
        <div class="text-center">
          <div id="page-num">Page 1 of 456</div>
          <div id="total-item">45539 products</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImageBox from '@/views/shared/components/ImageBox.vue'
export default {
  name: 'HomePage',
  components: {
    ImageBox
  }
}
</script>

