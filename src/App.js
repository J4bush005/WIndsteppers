import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home"
import About from "./components/pages/about"
import Portal from './components/pages/portal';

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/About' element={<About/>}/>
      <Route path = '/Portal' element={<Portal/>}/>
    </Routes>
    </>
  );
}

export default App;
