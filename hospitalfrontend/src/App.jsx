import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './depatments/admin/Home';
import Darshbord from './depatments/labaratory/Darshbord';
import Opd from './depatments/opd/Opd';
import Pharmacy from './depatments/pharmacy/Pharmacy';
import Payment from './depatments/finance/payment';
import Doctor from './depatments/doctor/doctor';
import Header from './components/Header';



export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path='/' element={< Home/>} />
    <Route path='/labaratory' element={<Darshbord/>} />
    <Route path='/opd' element={< Opd />} />
    <Route path='/pharmacy' element={< Pharmacy/>} />
    <Route path='/finance' element={< Payment />} />
    <Route path='/doctor' element={ <Doctor/>} />
    
    </Routes>
  </BrowserRouter> 
}
