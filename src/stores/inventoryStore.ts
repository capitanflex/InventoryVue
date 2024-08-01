import { defineStore } from 'pinia'
import { ref } from 'vue'
import type ICell from '@/interfaces/ICell.ts'

export const useInventoryStore = defineStore('inventory', () => {
    const cells = ref<ICell[]>([
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

    const updateCell = (oldCellId : Number, newCell : ICell) => {

        const oldCell = cells.value.find(c => c.id === oldCellId);
        if (oldCell) {
            const temp = [newCell.item, newCell.count];
            newCell.item = oldCell.item;
            newCell.count = oldCell.count;
            oldCell.item = temp[0];
            oldCell.count = temp[1];
        }
    }

    const updateCellCount = (cellInfo: ICell, countToDelete: number) => {
        const cell = cells.value.find(c => c.id === cellInfo.id);
        if (!cell) return;
        if (cell.count - countToDelete == 0) {
            cell.count = 0;
            cell.item = null;
        }
        else {
            cell.count -= countToDelete;
        }
    }

    return { cells, updateCellCount, updateCell }
})