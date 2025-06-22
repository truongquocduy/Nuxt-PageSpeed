<script setup lang="ts">
useHead({
    link: [
        {
            rel: 'preload',
            as: 'image',
            href: 'https://image.mavangthangloi.com/_w300/storage/logos/mavangthangloi.png',
        },
    ],
})
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
