export default class ImageManager {
    loadImage = url => {
        const image = new Image();
        image.src = url;

        return image;
    };
}