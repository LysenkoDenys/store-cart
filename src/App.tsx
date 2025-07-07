import './App.css';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ItemForm from './components/ItemForm';
import ItemSearch from './components/ItemSearch';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <h1>Redux Toolkit</h1>
      <Container
        maxWidth="md"
        sx={{
          height: '100vh',
          marginTop: '48px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Online Shop Admin
        </Typography>
        <ItemForm />
        <Typography variant="h5" sx={{ mt: 4 }}>
          My items
        </Typography>
        <ItemSearch />
        <ItemList />
      </Container>
    </>
  );
}

export default App;
