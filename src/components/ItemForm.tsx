import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector, useSelector } from 'react-redux';
import { setItemPrice, setItemAmount, setItemName } from '../store/index.ts';

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
        {' '}
        <Button variant="contained" onClick={() => {}}>
          Add item
        </Button>
      </Box>
    </>
  );
};

export default ItemForm;
