import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemCount from './components/ItemCount/ItemCount';
import JsonPlaceHolder from './components/JsonPlaceHolder/JsonPlaceHolder';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
      <ItemCount/>
      <JsonPlaceHolder/>
    </>
  );
}

export default App;
