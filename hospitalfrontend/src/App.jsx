import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './depatments/admin/Home';

import Header from './components/Header';
import About from './pages/About';
import Create from './pages/Create';
import Signin from './pages/Signin';
import Doc from './pages/Doc';



export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={< Home/>} />
    <Route path='/About' element={< About/>} />
    <Route path='/Create' element={< Create/>} />  
    <Route path='/Signin'  element={< Signin />} />
    <Route path='/doc'  element={< Doc />} />
    </Routes>
  </BrowserRouter> 
}
