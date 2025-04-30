
import lightGallery from "lightgallery/lightgallery.min";

export function initGallery(){
  const galleryContainer = document.getElementById("gallery-container");
  const customButtons = ``;
  galleryContainer.addEventListener("lgInit", (event) => {
    const pluginInstance = event.detail.instance;
  });
  lightGallery(galleryContainer, {
    selector: '.gallery-item',
    speed: 500,
    controls: false,
    height: '100%',
  });
}
