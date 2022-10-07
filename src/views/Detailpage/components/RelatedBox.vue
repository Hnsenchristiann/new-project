<template>
    <div class="related-products">RELATED PRODUCTS</div>
    <div style="clear:both; padding-left: 1%;" class="g-2 row row-cols-1 w-100 row-cols-sm-4 row-cols-lg-6 text-center">
        <div class="col">
            <image-box imageAlt="related-products1" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col">
            <image-box imageAlt="related-products2" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col">
            <image-box imageAlt="related-products3" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col">
            <image-box imageAlt="related-products4" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col">
            <image-box imageAlt="related-products5" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
        <div class="col">
            <image-box imageAlt="related-products6" imageStyle="w-100 h-100" imageSrc="https://picsum.photos/400/200"/>
        </div>
    </div>
</template>

<script>
import ImageBox from '@/views/shared/components/ImageBox.vue'
export default {
    name: 'RelatedBox',
    components: {
        ImageBox
    }
}
</script>