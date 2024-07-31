<script setup lang="ts">
import LeftBlock from "./components/left-block/left-block.vue";
import Inventory from "./components/inventory/inventory.vue";

</script>

<template>
    <div class="main">
        <left-block/>
        <inventory/>
    </div>

</template>

<style lang="scss" scoped>
    .main {
        background: rgba(29, 29, 29, 1);
        padding: 32px;
        display: flex;
        gap: 32px;
    }
</style>
