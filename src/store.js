
import { legacy_createStore as createStore } from 'redux';
import { rootReducer } from './__reducer/reducer';



//Lets create storeGlobalObject
//let initialValue = { value: 99};

export const storeObject = createStore(rootReducer,{ value: 99})