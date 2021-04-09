import { ProxyState } from "../AppState.js";
import { imageService } from "../Services/ImageService.js";

//Private
function _draw() {
  let image = ProxyState.image;
  document.body.style.backgroundImage = `url(${image.url})`;
}

//Public
export default class ImageController {
  constructor() {
    ProxyState.on("image", _draw);


    // _draw();
    this.addImage();
  }

  async addImage() {
      try {
        imageService.getImage();
      } catch(error) {
        console.error(error);
      }
  }
}
