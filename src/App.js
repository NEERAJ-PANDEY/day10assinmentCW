import './App.css';
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom';
import Resturant from './pages/Restaurant';

import Navbar from './components/navbar/Navbar';

function App() {
  return (
   <>
     <Navbar />
     <Routes >
      
     
      <Route path='/' element={<Resturant />} />
      <Route path='/food' element />
      
     </Routes>
   </>
  );
}

export default App;
