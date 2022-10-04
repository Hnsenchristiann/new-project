<template>
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
</template>

<script>
import SearchBar from '@/views/shared/components/SearchBar.vue'
import NavBar from '@/views/shared/components/NavBar.vue'
export default {
    name: 'DetailNavbar',
    components: {
        SearchBar,
        NavBar
    }
}
</script>