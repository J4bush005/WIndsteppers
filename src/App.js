import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home"
import History from "./components/pages/History"
import Portal from './components/pages/portal';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/History' element={<History/>}/>
      <Route path = '/Portal' element={<Portal/>}/>
    </Routes>
    </>
  );
}

export default App;
