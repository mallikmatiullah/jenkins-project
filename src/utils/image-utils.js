function getSellImagesUrl(id, name) {
    return new URL(`../assets/salepropertyimages/${id}/${name}`, import.meta.url).href;
}
export { getSellImagesUrl };


// function getSellImagesUrlId(id, image) {
//     return new URL(image, import.meta.url)
//         .href;
// }
function getSellImagesUrlId(id, image) {
    return new URL(`../assets/salepropertyimages/${id}/${image}`, import.meta.url).href;
}
export { getSellImagesUrlId };


function getRentImagesUrlId(id, image) {
    return new URL(`../assets/rentpropertyimages/${id}/${image}`, import.meta.url).href;
}
export { getRentImagesUrlId };



function getRentImagesUrl(id, name) {
    return new URL(`../assets/rentpropertyimages/${id}/${name}`, import.meta.url).href;
}
export { getRentImagesUrl };