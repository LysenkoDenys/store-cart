import { createSlice, nanoid } from '@reduxjs/toolkit';
import type { Items } from '../../types';

const itemsSlice = createSlice({
  name: 'items',
  initialState: {
    searchString: '',
    items: [] as Items,
  },
  reducers: {
    setSearchString: (state, action) => {
      state.searchString = action.payload;
    },
    addItem: (state, action) => {
      state.items.push({
        name: action.payload.name,
        amount: action.payload.amount,
        price: action.payload.price,
        id: nanoid(),
      });
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { setSearchString, addItem, removeItem } = itemsSlice.actions;
export default itemsSlice.reducer;
