<script setup lang="ts">

</script>

<template>
    <div class="skeleton">
        <div class="skeleton__title"></div>
        <div class="skeleton__item"
            v-for="n in 5" :key="n"
            :class="`child-${n}`"
        ></div>
        <div class="skeleton__bottom"></div>
    </div>
</template>

<style scoped lang="scss">
.skeleton {
    display: flex;
    flex-direction: column;
    gap: 14px;

    &__title{
        background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
        margin: 20px 0 4px 0;
        height: 20px;
        border-radius: 4px;
        animation: pulse 1.5s infinite;
    }

    &__item {
        background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);

        height: 10px;
        border-radius: 8px;
        animation: pulse 1.5s infinite;
        &.child-1{
            margin: 0 18px;
        }
        &.child-3{
            margin: 0 10px;
        }
        &.child-4{
            margin: 0 20px;
        }
        &.child-5{
            margin: 0 30px;
        }
    }

    &__bottom{
        background: linear-gradient(90deg, #3C3C3C 0%, #444444 51.04%, #333333 100%);
        margin: 8px 55px 0 55px;
        height: 10px;
        border-radius: 4px;
        animation: pulse 1.5s infinite;
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