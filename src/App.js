import logo from './logo.svg';
import Header from './components/header' 
import { Route, Routes } from 'react-router-dom';
import Home from "./components/pages/home"

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
