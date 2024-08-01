<template>
    <div class="modal" :class="{'hide': !isModalOpen}">
        <div class="modal__close close" @click="closeModal">
            <div class="close__img-container img-container">

            </div>
            <img class="img-container__img" src="@/assets/vector.svg" alt="close" title="close">
        </div>
        <div class="modal__item-img item-img">
            <img v-if="cell" :src="getImgSrc(<string>cell.item)" alt="" class="item-img__img">
        </div>
        <skeleton/>
        <div v-if="!delIsOpen" class="modal__delete-item delete-item">
            <button  class="delete-item__btn" @click="delIsOpen=true">Удалить предмет</button>
        </div>
        <div v-if="delIsOpen" class="modal__how-much how-much">
            <input
                class="how-much__input"
                placeholder="Введите количество"
                v-model="countToDelete"
                @input="filterInput"
                :class="{ highlight: isHighlighted }"
            >
            <div class="how-much__btns btns">
                <button class="btns__cancel" @click="delIsOpen = false">Отмена</button>
                <button class="btns__submit" @click="deleteItems()">Подтвердить</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import {watch, ref} from "vue";
import {getImgSrc} from "@/scripts/helpers.ts";
import Skeleton from "@/components/skeleton.vue";
import {useItemStore} from "@/stores/itemStore.ts";
import {useInventoryStore} from "@/stores/inventoryStore.ts";
import ICell from "@/interfaces/ICell.ts";


const itemStore = useItemStore()
const inventoryStore = useInventoryStore();
const cell = ref(itemStore.selectedCell);

const isModalOpen = ref(itemStore.isModalOpen)
const delIsOpen = ref(false);
const countToDelete = ref('');
const isHighlighted = ref(false);


const closeModal = () => {
    itemStore.closeModal()
}

const deleteItems = () => {
    const count = parseInt(countToDelete.value);
    if (!cell.value) {
        highlightInput()
        return
    }
    if (count <= cell.value.count && count !== 0) {
        inventoryStore.updateCellCount(<ICell>cell.value, count);
    }
    else highlightInput();

}

const highlightInput = () => {
    isHighlighted.value = true
    setTimeout(() => {
        isHighlighted.value = false
    }, 2000)
}

const filterInput = (event: Event) => {
    const target = event.target as HTMLInputElement | null;
    if (!target) return;
    const value = target.value;
    countToDelete.value = value.replace(/\D/g, '');
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
    (state) => {
        isModalOpen.value = state
    }
)
</script>

<style scoped lang="scss">
.modal {
    position: absolute;
    right: 0;
    height: 100%;
    min-width: 250px;
    background: rgba(38, 38, 38, 0.5);
    backdrop-filter: blur(10px);
    border-left: 1px solid rgba(77, 77, 77, 1);
    transition: all 300ms linear;

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
        position: relative;
        border-top: 1px solid rgba(77, 77, 77, 1);
        padding-top: 18px;
        margin: 24px 15px;
    }

    & .skeleton {
        margin: 0 20px;
    }

    &__how-much {
        font-size: 14px;
        width: 100%;
        position: absolute;
        bottom: 0;
        border-top: 1px solid rgba(77, 77, 77, 1);
        background: rgba(38, 38, 38, 0.9);
        backdrop-filter: blur(10px);
    }
}

.item-img {
    &__img {
        height: auto;
        width: 130px;
    }
}

.close {
    &__img-container {

    }
}

.img-container {
    &__img {
        margin: 7px 7px;
        padding: 7px 7px;
        width: 12px;
        border-radius: 50%;

        &:hover {
            background: rgba(60, 60, 60, 0.86);
            cursor: pointer;
            box-shadow: 0 0 10px 5px rgba(60, 60, 60, 0.86);
        }
    }
}

.delete-item {
    &__btn {
        background: rgba(255, 136, 136, 1);
        border-radius: 8px;
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

.how-much {
    &__input {
        max-width: 180px;
        width: 100%;
        margin: 20px 0 10px 0;
        padding: 12px;
        border: 1px solid rgba(77, 77, 77, 1);
        border-radius: 4px;

    }
    &__btns {
        margin: 10px 21px 20px 21px;
        display: flex;
        gap: 10px;
    }
}

.btns {
    &__cancel {
        background: rgba(255, 255, 255, 1);
        padding: 8px 19px;
        color: black;
        box-shadow: 0 0 15px rgba(250, 114, 114, 1);
        border: unset;
        transition: all 200ms linear;
        border-radius: 8px;

        &:hover {
            box-shadow: 0 0 20px rgba(250, 114, 114, 1);
            cursor: pointer;
        }
    }

    &__submit {
        background: rgba(250, 114, 114, 1);
        padding: 8px 15px;
        color: white;
        box-shadow: 0 0 15px rgba(250, 114, 114, 0.87);
        border: unset;
        transition: all 200ms linear;
        border-radius: 8px;

        &:hover {
            box-shadow: 0 0 20px rgba(250, 114, 114, 0.87);
            cursor: pointer;
        }
    }
}

.highlight {
    border: 1px solid rgba(250, 114, 114, 1);
}

</style>