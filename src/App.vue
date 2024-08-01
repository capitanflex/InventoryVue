<script setup lang="ts">
import LeftBlock from "./components/left-block/left-block.vue";
import Inventory from "./components/inventory/inventory.vue";
import BottomBlock from "@/components/bottom-block.vue";

</script>

<template>
    <div class="main">
        <div class="main__inventory-container">
            <left-block/>
            <inventory/>
        </div>
        <bottom-block/>
    </div>

</template>

<style lang="scss" scoped>
    .main {
        background: rgba(29, 29, 29, 1);
        padding: 32px;
        border-radius: 20px;
        &__inventory-container {


            display: flex;
            gap: 32px;
        }
    }
</style>
