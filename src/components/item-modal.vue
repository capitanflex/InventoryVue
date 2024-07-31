<template>
    <div class="modal" :class="{'hide': !isModalOpen}">
        <div class="modal__close close" @click="closeModal">
            <img class="close__img" src="@/assets/vector.svg" alt="close" title="close">
        </div>
        <div class="modal__item-img item-img">
            <img v-if="cell" :src="getImgSrc(cell.item)" alt="" class="item-img__img">
        </div>
        <skeleton/>
        <div class="modal__delete-item delete-item">
            <button class="delete-item__btn">Удалить предмет</button> //переделать предметы на стор
        </div>
    </div>
</template>

<script setup lang="ts">
import {watch , ref} from "vue";
 import {getImgSrc} from "@/scripts/helpers.ts";
 import Skeleton from "@/components/skeleton.vue";
 import {useItemStore} from "@/stores/itemStore.ts";


 const itemStore = useItemStore()
 const cell = ref(itemStore.selectedCell)
 const isModalOpen = ref(itemStore.isModalOpen)
 const closeModal = () => {
     itemStore.closeModal()
 }

watch(
    () => itemStore.selectedCell,
    (newCell) => {
        if (newCell) {
            cell.value = newCell;
        }
    }
)
watch(
    () => itemStore.isModalOpen,
    (newIsModalOpen) => {
        isModalOpen.value = newIsModalOpen
    }
)
</script>

<style scoped lang="scss">
    .modal{
        position: absolute;
        right: 0;
        height: 100%;
        min-width: 250px;
        background: rgba(38, 38, 38, 0.5);
        backdrop-filter: blur(10px);
        border-left: 1px solid rgba(77, 77, 77, 1);
        transition: all 1s linear;

        &.hide {
            right: -300px;
        }

        &__close {
            text-align: right;

        }

        &__item-img {
            border-bottom: 1px solid rgba(77, 77, 77, 1);
            padding-bottom: 30px;
            margin: 0 15px;
        }

        &__delete-item {
            border-top: 1px solid rgba(77, 77, 77, 1);
            padding-top: 18px;
            margin: 24px 15px;
        }

        & .skeleton{
            margin: 0 20px;
        }
    }
    .item-img {
        &__img{
            height: auto;
            width: 130px;
        }
    }

    .close {
        &__img {
            margin: 14px 14px 0 0;
            width: 12px;
        }
    }

    .delete-item {
        &__btn {
            background: rgba(250, 114, 114, 1);
            font-size: 14px;
            height: 39px;
            font-weight: 400;
            padding: 11px 0;
            text-align: center;
            width: 100%;
            transition: unset;
            border: unset;

        }
    }

</style>