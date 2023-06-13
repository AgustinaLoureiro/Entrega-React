import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import Categorias from './components/Categorias/Categorias';

function App() {
  return (
    <>
      <NavBar/>
      <Categorias/>
      <ItemListContainer greeting="Aca va un titulo"/>
      <ItemCount/>
    </>
  );
}

export default App;
