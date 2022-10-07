<template>
    <div>
        <div style="font-size: 75%;" class="py-1">Image Title</div>
        <a :href=imageRoute><img :alt=imageAlt :class=imageStyle :src=imageSrc /></a>
        <div style="font-size: 85%;" class="py-2">Image Description</div>
    </div>
</template>

<script>
export default {
    name: 'ImageBox',
    props: {
        imageStyle: String,
        imageSrc: String,
        imageRoute: String,
        imageAlt: String
    }
}
</script>