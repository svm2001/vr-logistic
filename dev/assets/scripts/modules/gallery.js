
import lightGallery from "lightgallery/lightgallery.min";
import lgZoom from "lightgallery/plugins/zoom/lg-zoom.min";

export function initGallery(){
  const galleryContainer = document.getElementById("gallery-container");
  const customButtons = `<button type="button" id="lg-toolbar-prev" aria-label="Previous slide" class="lg-toolbar-prev lg-icon">  </button><button type="button" id="lg-toolbar-next" aria-label="Next slide" class="lg-toolbar-next lg-icon">  </button>`;
  galleryContainer.addEventListener("lgInit", (event) => {
    const pluginInstance = event.detail.instance;

    const toolbar = pluginInstance.outer.find(".lg-toolbar");
    toolbar.prepend(customButtons);
    document.getElementById("lg-toolbar-prev").addEventListener("click", () => {
      pluginInstance.goToPrevSlide();
    });
    document.getElementById("lg-toolbar-next").addEventListener("click", () => {
      pluginInstance.goToNextSlide();
    });
  });

  lightGallery(galleryContainer, {
    selector: '.gallery-item',
    speed: 500,
    controls: false,
    plugins: [lgZoom]
  });
  
}
