import { configureStore } from '@reduxjs/toolkit';
import {
  setItemAmount,
  setItemName,
  setItemPrice,
} from './slices/itemFormSlice';

import { setSearchString, addItem, removeItem } from './slices/itemsSlice';

import itemFormReducer from './slices/itemFormSlice';
import itemsReducer from './slices/itemsSlice';

export type StoreType=ReturnType<typeof store.getState>

}

const store = configureStore({
  reducer: {
    items: itemsReducer,
    itemForm: itemFormReducer,
  },
});

export {
  store,
  setItemAmount,
  setItemName,
  setItemPrice,
  setSearchString,
  addItem,
  removeItem,
};
