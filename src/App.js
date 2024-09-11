import logo from './logo.svg';
import './App.css';
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import PrimeiroComponente from './components/PrimeiroComponente';
import SegundoComponente from './components/SegundoComponente';
import TerceiroComponente from './components/TerceiroComponente';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
      <Routes>
        <Route path='/' element={<PrimeiroComponente />} />
        <Route path='/segundo' element={<SegundoComponente />} />
        <Route path='/terceiro' element={<TerceiroComponente />} />
      </Routes>
    </>
  );
}

export default App;
