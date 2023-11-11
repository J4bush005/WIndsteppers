import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/Home Content/home"
import History from "./components/pages/History Content/History"
import Portal from './components/pages/Portal Content/portal';
import Store from './components/pages/Store Content/Store';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/History' element={<History/>}/>
      <Route path = '/Portal' element={<Portal/>}/>
      <Route path = '/Store' element={<Store/>}/>
    </Routes>
    </>
  );
}

export default App;
