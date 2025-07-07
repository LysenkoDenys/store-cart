import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchString, type StoreType } from '../store/index.ts';

const ItemSearch = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(
    (state: StoreType) => state.items.searchString
  );

  const handlerSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchString(event?.target.value));
  };

  return (
    <TextField
      label="Search"
      fullWidth
      margin="dense"
      value={searchString}
      onChange={handlerSearchChange}
    ></TextField>
  );
};

export default ItemSearch;
