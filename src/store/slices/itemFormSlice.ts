import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const itemFormSlice = createSlice({
  name: 'itemForm',
  initialState: {
    id: '',
    name: '',
    price: undefined as number | undefined,
    amount: undefined as number | undefined,
  },
  reducers: {
    setItemName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setItemPrice: (state, action: PayloadAction<number | undefined>) => {
      state.price = action.payload;
    },
    setItemAmount: (state, action: PayloadAction<number | undefined>) => {
      state.amount = action.payload;
    },
  },
});

export const { setItemName, setItemPrice, setItemAmount } =
  itemFormSlice.actions;
export default itemFormSlice.reducer;
