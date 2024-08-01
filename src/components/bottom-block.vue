<script setup lang="ts">

</script>

<template>
    <div class="skeleton-bottom">
        <div class="skeleton-bottom__main"></div>
        <div class="skeleton-bottom__close close">
            <img src="@/assets/vector.svg" alt="close" class="close__btn">
        </div>
    </div>
</template>

<style scoped lang="scss">
    .skeleton-bottom {
        display: flex;
        gap: 14px;
        margin-top: 24px;
        background: rgba(38, 38, 38, 1);
        border: 1px solid rgba(77, 77, 77, 1);

        border-radius: 12px;


        &__main {
            background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
            height: 36px;
            width: 100%;
            border-radius: 4px;
            animation: pulse 1.5s infinite;
            margin: 18px;
        }
        &__close {
            height: fit-content;
            width: 24px;
            margin: 8px 8px 0 14px;
        }
    }

    .close{
        &__img {
            height: auto;
        }
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    }
</style>