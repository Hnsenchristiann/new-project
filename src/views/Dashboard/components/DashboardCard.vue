<template>
    <div class="py-2 px-3">
        <div :class=cardbackground>
        <div class="card-body">
            <div class="text-center">
            <img class="rounded-circle" src="https://picsum.photos/100/100" />
            <div class="py-3" style="font-weight: bold; font-size: 20px;">{{title}}</div>
            <div>
                {{content}}
            </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DashboardCard',
    props: {
        title: String,
        content: String,
        cardbackground: String
    }
}
</script>