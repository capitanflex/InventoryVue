import { defineStore } from 'pinia'
import type ICell from '@/interfaces/ICell.ts'

export const useItemStore = defineStore('item', {
    state: () => ({
        isModalOpen: false,
        selectedCell: null as ICell | null
    }),
    actions: {
        openModal(cell: ICell) {
            this.selectedCell = cell
            this.isModalOpen = true
        },
        closeModal() {
            this.isModalOpen = false
            this.selectedCell = null
        }
    }
})
