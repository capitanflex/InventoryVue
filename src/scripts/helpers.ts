export const getImgSrc = (source: string) => {
    if (source) {
        return '/src/assets/items/item-' + source + '.png';
    }
    return '';
}