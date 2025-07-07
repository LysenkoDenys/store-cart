import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const ItemForm = () => {
  return (
    <>
      <TextField label="Name" fullWidth margin="dense" onChange={() => {}} />
      <TextField
        label="Price"
        fullWidth
        type="number"
        margin="dense"
        onChange={() => {}}
      />
      <TextField
        label="Amount"
        fullWidth
        type="number"
        margin="dense"
        onChange={() => {}}
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
