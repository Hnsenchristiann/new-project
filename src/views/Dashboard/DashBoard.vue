<template>
  <div>
    <div class="d-flex justify-content-center align-items-center bg-image" style="background-image: url('https://picsum.photos/200/300'); background-size: cover; height: 100vh; background-repeat: no-repeat;">
      <div>
        <div style="font-size: 250%;"  id="dash-title" class="text-white text-center">lorem ipsum</div>
        <search-bar />
      </div>
    </div>

    <div class="h-auto bg-black text-white">
      <div id="title-section1" class="text-center" style="font-weight: bold; font-size: 250%; padding-top: 50px;">Browse Top Product Types</div>
      <div style="padding-top: 50px;" class="d-flex justify-content-center container">
        <div style="font-size: 150%;">
          <div class="row row-cols-3 row-cols-sm-5 pb-3 text-center">
            <div id="section1-item1" class="col">
              Item 1
            </div>
            <div id="section1-item2" class="col">
              Item 2
            </div>
            <div id="section1-item3" class="col">
              Item 3
            </div>
            <div id="section1-item4" class="col">
              Item 4
            </div>
            <div id="section1-item5" class="col">
              Item 5
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div class="h-auto bg-danger text-white">
      <div id="title-section2" class="text-center" style="font-weight: bold; font-size: 200%; padding-top: 50px;">Explore Popular Product Categories</div>
      <div class="d-flex justify-content-center mt-1">
        <div style="font-size: 150%;" class="w-100">
          <div style="clear:both;" class="g-0 row row-cols-4 px-3 w-100 row-cols-sm-6 text-center">
            <div class="col">
              Item 1
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 1
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 1
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 1
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 1
            </div>
            <div class="col">
              Item 2
            </div>
            <div class="col">
              Item 2
            </div>
          </div>
        </div>
      </div>
      
      <hr class="mx-3"/>

      <div class="h-auto d-flex justify-content-center overflow-auto">
        <div>
          <dashboard-card class="dash-card" cardbackground="bg-warning rounded p-2" title="Best Price" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est Curabitur placerat ac nibh at ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor mollis massa"/>
        </div>
      </div>
    </div>

    <div class="h-auto bg-info text-white">
      <div id="title-section3" class="text-center" style="font-weight: bold; font-size: 200%; padding-top: 50px;">Product Benefit</div>
      <div>
        <div class="d-flex justify-content-center">
          <div class="pt-3">
            <div class="w-100 row row-cols-1 row-cols-sm-1 row-cols-md-2 text-center px-3">
              <div class="text-center py-3">
                <img class="rounded-circle" alt="Empty" src="https://picsum.photos/100/100" />
                <div id="section3-content-title" style="font-weight: bold; font-size: 20px;">Best Price</div>
                <div id="section3-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est</div>
              </div>
            </div>
          </div>
        </div>

        <div class="d-flex justify-content-center py-3">
          <button type="button" class="btn section3-btn btn-outline-secondary">Learn More</button>
        </div>
      </div>
    </div>

    <div class="h-auto bg-white text-black">
      <div id="title-section4" class="text-center" style="font-weight: bold; font-size: 200%; padding-top: 50px;">Discover More Products and Services</div>
      <div class="d-flex justify-content-center"> 
        <div class="w-100 g-0 row row-cols-1 row-cols-sm-1 row-cols-md-2 text-center px-3">
          <dashboard-card cardbackground="bg-warning rounded p-2" title="Best Price" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est Curabitur placerat ac nibh at ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor mollis massa"/>
          <dashboard-card cardbackground="bg-danger rounded p-2" title="Best Price" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est Curabitur placerat ac nibh at ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor mollis massa"/>
          <dashboard-card cardbackground="bg-info rounded p-2" title="Best Price" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non mattis est Curabitur placerat ac nibh at ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam tempor mollis massa"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DashboardCard from '@/views/Dashboard/components/DashboardCard.vue'
import SearchBar from '@/views/shared/components/SearchBar.vue'

export default {
  name: 'DashBoard',
  components: {
    DashboardCard,
    SearchBar
  }
}
</script>
