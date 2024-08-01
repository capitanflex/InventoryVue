<script setup lang="ts">



import Skeleton from "@/components/skeleton.vue";
</script>

<template>
    <div class="card">
        <div class="card__image">
            <img src="../../assets/Img.png" alt="">
        </div>
        <skeleton/>
    </div>
</template>

<style lang="scss" scoped>
    .card {
        background: rgba(38, 38, 38, 1);
        border: 1px solid rgba(77, 77, 77, 1);
        border-radius: 12px;
        padding: 18px 14px 24px 14px;

        &__image{
            max-height: 240px;
        }
    }
</style>
