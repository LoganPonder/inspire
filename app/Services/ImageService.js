import { ProxyState } from "../AppState.js";
import Image from "../Models/Image.js";
import { imageApi } from '../Services/AxiosService.js'

class ImageService {
  async getImage() {
        let res = await imageApi.get();
        ProxyState.image = new Image(res.data)
  }
}

export const imageService = new ImageService();
