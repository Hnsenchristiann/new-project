<template>
  <div>
    <nav-bar title="Navbar">
      <search-bar />
      <div class="px-3 text-white">
        <div style="padding-top: 30px;" class="d-flex justify-content-between">
          <div>3D MODELS</div>
          <div>next btn</div>
        </div>
        <hr class="pb-2" />

        <div style="height: 20vh;" class="d-flex justify-content-center overflow-auto container">
          <div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
            <div>Lorem ipsum</div>
          </div>
        </div>
      </div>

      <div class="px-3 text-white">
        <div style="padding-top: 30px;" class="d-flex justify-content-between">
          <div>3D MODELS</div>
          <div>next btn</div>
        </div>
        <hr class="pb-2" />

        <div class="d-flex justify-content-center">
          <div>
            <div class="d-flex justify-content-center">
              <img class="rounded-circle" src="https://picsum.photos/50/50" />
            </div>
            <div class="py-3">
              <button type="button" class="mx-2 rounded-pill btn btn-outline-danger">GO TO XR STUDIO</button>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center">
          <div>
            <div class="text-center px-3">
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
            </div>
            <div class="d-flex justify-content-center py-3">
              <button type="button" class="mx-2 rounded-pill text-white btn btn-danger btn-outline-danger">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: 150px;">
        <hr class="px-3 text-white" />
        <div class="d-flex justify-content-center">
          <button type="button" class="mx-2 rounded-pill btn btn-outline-light">LOG IN</button>
        </div>
          <div class="text-center text-white py-3">CREATE ACCOUNT</div>
      </div>
    </nav-bar>

    <div class="bg-black">
      <div class="bg-secondary">
        <div style="font-weight: bold;" class="text-black px-3 py-3">Professional Airplane</div>
      </div>

      <div class="row row-cols-1 row-cols-sm-3 text-center">
        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>

        <div class="text-center py-1">
          <img src="https://picsum.photos/200/200" />
        </div>
      </div>

      <div class="d-flex justify-content-center py-3 px-3">
        <button style="width: 100%; font-size: 100%;" type="button" class="py-3 btn btn-outline-info">Next Page</button>
      </div>

      <div class="d-flex text-white justify-content-center pb-3">
        <div class="text-center">
          <div>Page 1 of 456</div>
          <div>45539 products</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
import NavBar from '@/components/NavBar.vue'
export default {
  name: 'HomePage',
  components: {
    SearchBar,
    NavBar
  }
}
</script>

