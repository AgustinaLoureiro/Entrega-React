import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import Home from './components/Secciones/Home/Home';
import Tapices from './components/Secciones/Tapices/Tapices';
import Hamacas from './components/Secciones/Hamacas/Hamacas';
import Repisas from './components/Secciones/Repisas/Repisas';
import Portamacetas from './components/Secciones/Portamacetas/Portamacetas';
import Llaveros from './components/Secciones/Llaveros/Llaveros';
import Decoracion from './components/Secciones/Decoracion/Decoracion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import JsonPlaceHolder from './components/JsonPlaceHolder/JsonPlaceHolder';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';


//<JsonPlaceHolder/>
//<ItemDetailContainer/>
//<ItemListContainer/>
//<Route path='/tapices/:id' element={ <Tapices/> }/>
//<Route path='/hamacas' element={ <Hamacas/> }/>
//<Route path='/repisas' element={ <Repisas/> }/>
//<Route path='/portamacetas' element={ <Portamacetas/> }/>
//<Route path='/llaveros' element={ <Llaveros/> }/>
//<Route path='/decoracion' element={ <Decoracion/> }/>

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/seccion/:idSeccion' element={<ItemListContainer/>} />
        <Route path='/item/:iditem' element={<ItemDetailContainer/>} />      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
