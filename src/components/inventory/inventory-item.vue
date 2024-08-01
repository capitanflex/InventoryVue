<template>
    <div class="cell__item item">
        <div class="item__img-container img-container">
            <img
                :src="getImgSrc(<string>cell.item)"
                :alt="<string>cell.item"
                :title="<string>cell.item"
                class="img-container__image"
                draggable="true"
                @dragstart="startDrag($event)"

            >
        </div>
        <p class="item__count">{{ cell.count }}</p>
    </div>
</template>

<script setup lang="ts">
import {defineProps, PropType} from 'vue'
import ICell from "@/interfaces/ICell.ts";
import {getImgSrc} from "@/scripts/helpers.ts";


const props = defineProps({
    cell: {
        type: Object as PropType<ICell>,
        required: true
    }
})



const startDrag = (event: DragEvent) => {
    if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move';
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('cellId', props.cell.id.toString());
    }
}
</script>

<style scoped lang="scss">
.item {
    max-height: 100%;
    padding: 23px 25px;
    position: relative;

    &__img-container {
        height: 55px;
        max-width: 100%;
    }

    &__count {
        color: #7d7d7d;
        margin: 0;
        font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
        padding: 1px 4px 1px 4px;
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 10px;
        font-weight: 500;
        border-top: 1px solid rgba(77, 77, 77, 1);
        border-left: 1px solid rgba(77, 77, 77, 1);
        border-radius: 6px 0 0 0;
    }
}

.img-container {
    &__img {
        height: auto;
        width: 100%;
    }
}
</style>