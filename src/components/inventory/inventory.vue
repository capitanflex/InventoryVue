<template>
    <div class="inventory">
        <div class="inventory__cell cell"
             v-for="cell in inventoryStore.cells"
             :key="cell.id"
             @drop="onDrop($event, cell)"
             @dragenter.prevent
             @dragover.prevent
             @click="useModal(cell)"
        >

            <inventory-cell :cell="cell"/>
        </div>
        <item-modal :cell="itemStore.selectedCell"/>
    </div>
</template>

<script setup lang="ts">
import InventoryCell from "@/components/inventory/inventory-item.vue";
import ItemModal from "@/components/item-modal.vue";
import {useItemStore} from "@/stores/itemStore.ts";
import ICell from "@/interfaces/ICell.ts";
import {useInventoryStore} from "@/stores/inventoryStore.ts";

const inventoryStore = useInventoryStore()

const itemStore = useItemStore()

const onDrop = (event: DragEvent, cell: ICell) => {
    if (!event.dataTransfer) return;
    const oldCellId = event.dataTransfer.getData('cellId');

    inventoryStore.updateCell(Number(oldCellId), cell);
}

const useModal = (cell: ICell) => {
    if (cell.item !== null){
        itemStore.openModal(cell)
    }
    else itemStore.closeModal();

}
</script>

<style scoped lang="scss">
.inventory {
    display: grid;
    grid-template-columns: repeat(5, 107px);
    grid-auto-rows: 100px;
    position: relative;
    overflow: hidden;

    &__cell{
        height: 100px;
        width: 105px;
        border: 1px solid rgba(77, 77, 77, 1);
        background: #262626;
        overflow: hidden;

        &:hover {
            background: #2f2f2f;
            cursor: pointer;
        }
    }
}

</style>