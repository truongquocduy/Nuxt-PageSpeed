<script setup lang="ts">
if (import.meta.client) {
    const preload = document.createElement('link')
    preload.rel = 'preload'
    preload.as = 'image'
    preload.href = 'https://image.mavangthangloi.com/_w300/storage/logos/mavangthangloi.png'
    document.head.appendChild(preload)
}
</script>

<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>
