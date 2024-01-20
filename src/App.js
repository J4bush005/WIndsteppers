import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home Content/home"
import History from "./components/pages/History Content/History"
import Portal from './components/pages/Portal Content/portal';
import Store from './components/pages/Store Content/Store';
import ProductPage from './components/pages/Store Content/ProductPage';
import Form from './components/pages/Home Content/Form'
import Coaches from './components/pages/Coaches Content/coaches';
import Events from './components/pages/Events Content/Events';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/History' element={<History/>}/>
      <Route path = '/Portal' element={<Portal/>}/>
      <Route path = '/Coaches' element={<Coaches/>}/>
      <Route path = '/Membership' element={<Form/>}/>
      <Route path = '/Events' element={<Events/>}/>
    </Routes>
    </>
  );
}

export default App;
