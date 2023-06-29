import axios from 'axios';
import appConfig from '../Utils/AppConfig';
import { PhotoAction, PhotoActionType, photoStore } from '../Redux/PhotoState';

class PhotoService {

  public async getPhotosByCategory(type:string, page:number): Promise<any> {
    if (!type || typeof page !== 'number') {
      throw new Error('Invalid arguments');
    }

    const body ={
      "category": type,
      "page" : page
    }
    const response = await axios.post<any[]>(appConfig.PhotoByCategoryUrl , body);
      // Send photo into redux global state (which will call the reducer):
      const action: PhotoAction = { type: PhotoActionType.FetchPhotosByCategory, payload: body };
      photoStore.dispatch(action);
  
      return response.data;
    }

    public async getCategories(): Promise<any> {

      const response = await axios.get<any[]>(appConfig.catByIdUrl);
      console.log(response);
      return response.data;

    }
  }
const photosService = new PhotoService();

export default photosService;