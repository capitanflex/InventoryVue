<template>
    <div class="inventory">
        <div class="inventory__cell cell"
             v-for="cell in cells"
             :key="cell.id"
             @drop="onDrop($event, cell)"
             @dragenter.prevent
             @dragover.prevent
        >

            <inventory-cell :cell="cell"/>
        </div>
        <item-modal :cell="itemStore.selectedCell"/>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InventoryCell from "@/components/inventory/inventory-item.vue";
import ItemModal from "@/components/item-modal.vue";
import {useItemStore} from "@/stores/itemStore.ts";

const cells = ref([
    { id: 1, item: 'green', count: 3 },
    { id: 2, item: 'yellow', count: 1 },
    { id: 3, item: 'purple', count: 2 },
    { id: 4, item: null, count: 0 },
    { id: 5, item: null, count: 0 },
    { id: 6, item: null, count: 0 },
    { id: 7, item: null, count: 0 },
    { id: 8, item: null, count: 0 },
    { id: 9, item: null, count: 0 },
    { id: 10, item: null, count: 0 },
    { id: 11, item: null, count: 0 },
    { id: 12, item: null, count: 0 },
    { id: 13, item: null, count: 0 },
    { id: 14, item: null, count: 0 },
    { id: 15, item: null, count: 0 },
    { id: 16, item: null, count: 0 },
    { id: 17, item: null, count: 0 },
    { id: 18, item: null, count: 0 },
    { id: 19, item: null, count: 0 },
    { id: 20, item: null, count: 0 },
    { id: 21, item: null, count: 0 },
    { id: 22, item: null, count: 0 },
    { id: 23, item: null, count: 0 },
    { id: 24, item: null, count: 0 },
    { id: 25, item: null, count: 0 }
])

const itemStore = useItemStore()
const startDrag = (event: DragEvent, cell) => {
    console.log(cell);
    event.dataTransfer.dropEffect = 'move';
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('cellId', cell.id.toString());
}

const onDrop = (event: DragEvent, cell) => {
    const oldCellId = event.dataTransfer.getData('cellId');
    const oldCell = cells.value.find(c => c.id === parseInt(oldCellId));

    if (oldCell && oldCell !== cell) {
        const temp = [cell.item, cell.count];
        cell.item = oldCell.item;
        cell.count = oldCell.count;
        oldCell.item = temp[0];
        oldCell.count = temp[1];
    }
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