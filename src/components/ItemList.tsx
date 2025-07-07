import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, type StoreType } from '../store';
import { Typography } from '@mui/material';

const ItemList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: StoreType) => state.items.items);
  const handleDeleteItem = (id: string | undefined) => {
    if (id) {
      dispatch(removeItem(id));
    }
  };
  return (
    <List>
      {items.length > 0 ? (
        items.map((el, index) => (
          <ListItem
            key={index}
            sx={{ p: 0 }}
            secondaryAction={
              <IconButton>
                <DeleteIcon
                  onClick={() => {
                    handleDeleteItem(el.id);
                  }}
                  color="error"
                />
              </IconButton>
            }
          >
            <Paper sx={{ mb: 1, px: 2, py: 1, width: '100%' }} elevation={6}>
              <ListItemText
                primary={el.name}
                secondary={`Amount:${el.amount}| Price:$${el.price.toFixed(2)}`}
              ></ListItemText>
            </Paper>
          </ListItem>
        ))
      ) : (
        <Typography sx={{ mt: 2 }}>Please add item</Typography>
      )}
    </List>
  );
};

export default ItemList;
