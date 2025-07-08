import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import {
  setItemPrice,
  setItemAmount,
  setItemName,
  addItem,
} from '../store/index.ts';
import type { StoreType } from '../store/index.ts';
const ItemForm = () => {
  const dispatch = useDispatch();
  const itemForm = useSelector((state: StoreType) => state.itemForm);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setItemName(e.target.value));
  };
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.length > 0 ? Number(e.target.value) : undefined;
    dispatch(setItemPrice(value));
  };
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value =
      e.target.value.length > 0 ? Number(e.target.value) : undefined;
    dispatch(setItemAmount(value));
  };
  const handleAddItem = () => {
    if (
      itemForm.price &&
      itemForm.amount &&
      itemForm.price > 0 &&
      itemForm.amount > 0 &&
      itemForm.name.length > 0
    ) {
      console.log('Dispatching addItem', itemForm);
      dispatch(
        addItem({
          name: itemForm.name,
          price: itemForm.price,
          amount: itemForm.amount,
        })
      );
      // Clear the form after adding the item
      dispatch(setItemName(''));
      dispatch(setItemAmount(0));
      dispatch(setItemPrice(0));
    }
  };

  return (
    <>
      <TextField
        label="Name"
        fullWidth
        margin="dense"
        value={itemForm.name}
        onChange={handleNameChange}
      />
      <TextField
        label="Price"
        fullWidth
        type="number"
        margin="dense"
        value={itemForm.price}
        onChange={handlePriceChange}
      />
      <TextField
        label="Amount"
        fullWidth
        type="number"
        margin="dense"
        value={itemForm.amount}
        onChange={handleAmountChange}
      />

      <Box sx={{ textAlign: 'right', mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => {
            console.log('Button clicked');
            handleAddItem();
          }}
        >
          Add item
        </Button>
      </Box>
    </>
  );
};

export default ItemForm;
