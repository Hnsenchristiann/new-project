<template>
    <div>
        <detail-navbar />
        <div>
            <div>
                <img alt="Empty" class="w-100" src="https://picsum.photos/600/600" />

                <div class="text-white bg-info w-100">
                    <div id="item-title" style="font-weight: bold;" class="px-3 py-1">Lorem Ipsum V.1<small class="px-1">by</small><small style="text-decoration: none;" class="text-danger item-company">evermotion</small></div>
                    <div class="d-flex justify-content-between px-3 pb-2">
                        <div id="item-price" class="d-flex align-items-center">$144</div>
                        <div>
                            <button style="font-size: 10px;" type="button" class="btn btn-next btn-outline-danger">Next Page</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="content-box">
                <div class="order-2 box1">
                    <div class="p-2">
                        <license-box />
                    </div>

                    <div class="p-2">
                        <format-box />
                    </div>

                    <div class="p-2">
                        <preview-box />
                    </div>

                    <div class="p-2">
                        <specification-box />
                    </div>

                    <div class="p-2">
                        <product-box />
                    </div>

                    <div class="p-2">
                        <benefit-box />
                    </div>
                </div>

                <div class="order-1 box2">
                    <div class="p-2">
                        <breadcrumps-box />
                    </div>

                    <div class="p-2">
                        <description-box />
                    </div>

                    <div class="d-flex">
                        <div class="p-2">
                            <tags-box />
                        </div>

                        <div class="p-2">
                            <report-box />
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-2">
                <related-box />
            </div>
        </div>
    </div>
</template>

<script>
import LicenseBox from '@/views/Detailpage/components/LicenseBox.vue'
import FormatBox from '@/views/Detailpage/components/FormatBox.vue'
import PreviewBox from '@/views/Detailpage/components/PreviewBox.vue'
import SpecificationBox from '@/views/Detailpage/components/SpecificationBox.vue'
import ProductBox from '@/views/Detailpage/components/ProductBox.vue'
import BenefitBox from '@/views/Detailpage/components/BenefitBox.vue'
import BreadcrumpsBox from '@/views/Detailpage/components/BreadcrumpsBox.vue'
import DescriptionBox from '@/views/Detailpage/components/DescriptionBox.vue'
import TagsBox from '@/views/Detailpage/components/TagsBox.vue'
import ReportBox from '@/views/Detailpage/components/ReportBox.vue'
import RelatedBox from '@/views/Detailpage/components/RelatedBox.vue'
export default {
  name: 'DetailPage',
  components: {
    LicenseBox,
    FormatBox,
    PreviewBox,
    SpecificationBox,
    ProductBox,
    BenefitBox,
    BreadcrumpsBox,
    DescriptionBox,
    TagsBox,
    ReportBox,
    RelatedBox
  }
}
</script>

<style scoped>
    @media (min-width: 992px) { 
        .content-box {
            display: flex;
        }

        .box1 {
            width: 25%
        }

        .box2 {
            width: 100%;
        }
    }
</style>