import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home"
import About from "./components/pages/about"

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
      <Route path='/About' element={<About/>}/>
    </Routes>
    </>
  );
}

export default App;
