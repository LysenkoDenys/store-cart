import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';

const ItemList = () => {
  const itemDummyData = [
    {
      name: 'item1',
      amount: 2,
      price: 3.5,
    },
    {
      name: 'item2',
      amount: 2,
      price: 3.5,
    },
    {
      name: 'item3',
      amount: 6,
      price: 3,
    },
  ];
  return (
    <List>
      {itemDummyData.map((el, index) => (
        <ListItem
          key={index}
          sx={{ p: 0 }}
          secondaryAction={
            <IconButton>
              <DeleteIcon onClick={() => {}} color="error" />
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
      ))}
    </List>
  );
};

export default ItemList;
