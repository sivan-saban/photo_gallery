import { createStore } from "redux";

// 1. App State - application level state:
export class PhotoState {
   
    public image=  {"category": "","page" : 1}
}

// 2. Action Type - list of actions needed on the data:
export enum PhotoActionType {
    FetchPhotosByCategory = "FetchPhotosByCategory"
}

// 3. Action - a single object describing single operation on the data:
export interface PhotoAction {
    type: PhotoActionType; // What we need to do?
    payload: any; // What is the data needed?
}

// 4. Reducer - function performing the needed actions (the action object is the one sent via dispatch function):
export function photosReducer(currentState = new PhotoState(), action: PhotoAction): PhotoState {

    const newState: PhotoState = { ...currentState };

    switch (action.type) {

        case PhotoActionType.FetchPhotosByCategory: // Here the payload is the id photos
            newState.image.page=action.payload.page;
            newState.image.category=action.payload.category;   
        break;



    }

    return newState;

}


// 5. Store - Redux manager:
export const photoStore = createStore(photosReducer);
